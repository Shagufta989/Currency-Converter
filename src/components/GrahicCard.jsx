import React, { useState } from "react";
import UpdateRatesButton from "./UpdateRatesButton";
import ResultButton from "./ResultButton";
// import currencies, { secondCurrencies } from "./currencies.js";
import { default as c } from "./countries.js";
import images from "./imageLoader.js";

function GraphicCard() {
  const [result, setResult] = useState(0);
  const [userInput1, setUserInput1] = useState("");
  const [userInput2, setUserInput2] = useState("");
  const [progress, setProgress] = useState([50, 50]);
  const [lastInput, setLastInput] = useState([false, false]);
  const [todayRates, setTodayRates] = useState(null);
  const [yesterdayRates, setYesterdayRates] = useState(null);
  const [selectedCountry1, setSelectedCountry1] = useState("");
  const [selectedCountry2, setSelectedCountry2] = useState("");
  const [increaseOrDecreaseInCurrency, setincreaseOrDecreaseInCurrency] = useState("0.00%");
  const [changeInRateColor, setChangeInRateColor] = useState("64d964");

  function calculateRates(today, yesterday) {
    setTodayRates(today);
    setYesterdayRates(yesterday);
  };

  function calculateNormalizedPurchasingPower(exchangeRates, key, secondkey) {
    const totalInverseRate = Object.values(exchangeRates).reduce((total, rate) => total + (1 / Number(rate)), 0);
    const normalizedPercentages = {};
    normalizedPercentages[key] = (((1 / Number(exchangeRates[key])) / totalInverseRate) * 100).toFixed(2);
    normalizedPercentages[secondkey] = (((1 / Number(exchangeRates[secondkey])) / totalInverseRate) * 100).toFixed(2);
    console.warn("normalizedPercentages", normalizedPercentages);
    setProgress([Number(normalizedPercentages[selectedCountry2]), Number(normalizedPercentages[selectedCountry1])]);
    console.log("progress", progress);
  };

  function formatNumber(number) {
    var numberString = String(number);

    if (numberString.startsWith('0')) {
        let nonZeroCount = 0;
        let formattedNumber = '';
        let firstNonZeroIndex = -1;

        for (let i = 0; i < numberString.length; i++) {
            if (numberString[i] !== '0' && numberString[i] !== '.') {
                firstNonZeroIndex = i;
                break;
            };
        };

        if (firstNonZeroIndex === -1) {
            return 0;
        };

        for (let i = 0; i < numberString.length; i++) {
            if (i <= firstNonZeroIndex || numberString[i] !== '0' || numberString[i] === '.') {
                formattedNumber += numberString[i];
                if (numberString[i] !== '.' && numberString[i] !== '0') {
                    nonZeroCount++;
                };
                if (nonZeroCount === 2) {
                    break;
                };
            };
        };

        if (nonZeroCount === 0) {
            return 0;
        };

        return parseFloat(formattedNumber);
    } else {
        let integerPart = parseInt(numberString);
        if (integerPart >= 10) {
            return integerPart;
        } else {
            return parseFloat(number).toFixed(2);
        };
    };
};

  

  function getResult(result) {
    setResult(result);
  };

  function handleinput1(event) {
    var value = event.target.value.replace(/\D/g, '');
    setUserInput1(value);
    setUserInput2("");
    setLastInput([true, false]);
  };

  function handleinput2(event) {
    var value = event.target.value.replace(/\D/g, '');
    setUserInput2(value);
    setUserInput1("");
    setLastInput([false, true]);
  };

  function handleCountry1(event) {
    setSelectedCountry1(event.target.value);
    calculateIncrease(event.target.value, selectedCountry2);
  };

  function handleCountry2(event) {
    setSelectedCountry2(event.target.value);
    calculateIncrease(selectedCountry1, event.target.value);
  };

  function showPrice(country1, country2, caller) {
    if (caller === 1) {
      var symbol, firstCode, secondCode, value;
      if (country1 && country2) {
        symbol = c[country2].currency.symbol;
        firstCode = c[country2].currency.code;
        secondCode = c[country1].currency.code;
        value = formatNumber(todayRates[c[country1].currency.code][c[country2].currency.code]);
        if (symbol && !value) {
          return `${secondCode}`;
        } else if (value && !symbol) {
          return `${value}`;
        } else if (symbol && value) {
          return `${symbol} ${value}`;
        } else {
          return "No Rate";
        };
      }
      return "Rate";
    } else if (caller === 2) {
      if (country1 && country2) {
        symbol = c[country1].currency.symbol;
        firstCode = c[country2].currency.code;
        secondCode = c[country1].currency.code;
        value = formatNumber(todayRates[c[country2].currency.code][c[country1].currency.code]);
        if (symbol && !value) {
          return `${firstCode}`;
        } else if (value && !symbol) {
          return `${value}`;
        } else if (symbol && value) {
          return `${symbol} ${value}`;
        } else {
          return "No Rate";
        }
      }
      return "Rate";
    }
  };

  function flagCode(country) {
    if (country) {
      return `${c[country].flag}`;
    } else {
      return `ex1`;
    };
  };


  function calculateIncrease(firstCountry, secondCountry) {
    if (firstCountry && secondCountry) {
      var todayValue = Number(todayRates[c[secondCountry]["currency"]["code"]][c[firstCountry]["currency"]["code"]]);
      var yesterdayValue = Number(yesterdayRates[c[secondCountry]["currency"]["code"]][c[firstCountry]["currency"]["code"]]);
      if (todayValue > yesterdayValue) {
        var increaseInPercentage = parseFloat(((todayValue - yesterdayValue) / todayValue) * 100).toFixed(10);
        setincreaseOrDecreaseInCurrency(`-${increaseInPercentage}%`);
        setChangeInRateColor("e08383");
        console.log(todayValue, yesterdayValue, increaseInPercentage);
      } else {
        var decreaseInPercentage = parseFloat(((yesterdayValue - todayValue) / yesterdayValue) * 100).toFixed(10);
        setincreaseOrDecreaseInCurrency(`+${decreaseInPercentage}%`);
        setChangeInRateColor("64d964");
        console.log(todayValue, yesterdayValue, decreaseInPercentage);
      };
    };
  };
  return (
    <div id="main">
      <div className="col-lg-3 col-sm-6">
        <div className="card">
          <div className="card-header pb-0">
            <div className="d-flex justify-content-between flex-wrap gap-2">
              <p className="d-block mb-2 text-body">Result</p>
              <div className="d-flex text-success">
                <p className="me-1" style={{ color: `#${changeInRateColor}` }}>{increaseOrDecreaseInCurrency}</p>
                <i className="mdi mdi-chevron-up"></i>
              </div>
            </div>
            <h4 className="mb-1">{result}</h4>
          </div>
          <div className="card-body pt-0">
            <div className="row mt-3">
              <div className="col-4">
                <div className="d-flex gap-2 align-items-center mb-2">
                  <div className="avatar avatar-xs flex-shrink-0">
                    <div className="avatar-initial rounded bg-label-warning bg-white">
                      <img src={images[`flag-${flagCode(selectedCountry1)}-svgrepo-com.svg`]} alt="selected country flag" />
                    </div>
                  </div>
                  <p className="mb-0 ws-nowrap">
                    <select name="countries" id="countryName1" onChange={handleCountry1} value={selectedCountry1}>
                      <option className="option-edit" value="">Choose</option>
                      {Object.keys(c).sort().map((key, index) => (<option className="option-edit" value={key} key={index}>{key}</option>))}
                    </select>
                  </p>
                </div>
                <h4 className="mb-0 pt-1 text-nowrap">
                  <input type="text" value={userInput1} placeholder="0" onChange={handleinput1} />
                </h4>
                <small className="text-muted">
                  {showPrice(selectedCountry1, selectedCountry2, 1)}
                </small>
              </div>
              <div className="col-4">
                <div className="divider divider-vertical">
                  <div className="divider-text">
                    <span className="badge-divider-bg bg-label-secondary user-select-none">To</span>
                  </div>
                </div>
              </div>
              <div className="col-4 text-end pe-lg-0 pe-xl-2">
                <div className="d-flex gap-2 justify-content-end align-items-center mb-2">
                  <p className="mb-0 ws-nowrap">
                    <select name="countries" id="countryName2" value={selectedCountry2} onChange={handleCountry2}>
                      <option className="option-edit" value="Choose">Choose</option>
                      {Object.keys(c).sort().map((key, index) => (<option className="option-edit" value={key} key={index}>{key}</option>))}
                    </select>
                  </p>
                  <div className="avatar avatar-xs flex-shrink-0">
                    <div className="avatar-initial rounded bg-label-primary bg-white">
                      <img src={images[`flag-${flagCode(selectedCountry2)}-svgrepo-com.svg`]} alt="" />
                    </div>
                  </div>
                </div>
                <h4 className="mb-0 pt-1 text-nowrap"><input type="text" placeholder="0" value={userInput2} className="text-align-right" onChange={handleinput2} /></h4>
                <small className="text-muted">
                  {showPrice(selectedCountry1, selectedCountry2, 2)}
                </small>
              </div>
            </div>
            <div className="d-flex align-items-center mt-2 pt-1">
              <div className="progress w-100 rounded" style={{ height: 1 + "vh" }}>
                <div className="progress-bar bg-warning" style={{ width: progress[0] + "%" }} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar bg-primary" role="progressbar" style={{ width: progress[1] + "%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <UpdateRatesButton fetchRates={calculateRates} />
            <ResultButton sendResult={getResult} fCountry={selectedCountry1} sCountry={selectedCountry2} fInput={userInput1} sInput={userInput2} changeProgressBar={calculateNormalizedPurchasingPower} formatNumber={formatNumber} lastInputed={lastInput} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default GraphicCard;