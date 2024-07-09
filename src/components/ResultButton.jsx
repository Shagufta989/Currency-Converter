import React from "react";
import { default as c } from "./countries";
// import currencies from "./currencies";
import { todayRates } from "./UpdateRatesButton";

function ResultButton({ sendResult, fCountry, sCountry, fInput, sInput, changeProgressBar, formatNumber, lastInputed }) {

    function calculateResult(firstCountry, secondCountry, input) {
        if (firstCountry && secondCountry) {
            var exchangeRate = todayRates[c[firstCountry].currency.code][c[secondCountry].currency.code];
            var result = Number(input) * Number(exchangeRate)
            return result
        }
        return 0
    }

    return (
        <div>
            <button className="btn waves-effect waves-light result-button" onClick={() => {
                var symbol, result
                if (fCountry && sCountry){
                    symbol = c[sCountry]?.currency.symbol || "";
                    result = calculateResult(fCountry, sCountry, fInput)
                    if (lastInputed[1]){
                        symbol = c[fCountry]?.currency.symbol || "";
                        result = calculateResult(sCountry, fCountry, sInput)
                    }
                    sendResult(`${symbol} ${formatNumber(result)}`)

                    var percentRates = {
                        [fCountry]: todayRates[c[fCountry].currency.code]["GBP"],
                        [sCountry]: todayRates[c[sCountry].currency.code]["GBP"]
                    }
                    changeProgressBar(percentRates, fCountry, sCountry)
                } else {
                    alert("Please Choose Both Countries First.");
                };
            }}>Convert</button>
        </div>
    )
}

export default ResultButton;