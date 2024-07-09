import React, {useEffect} from "react";
import axios from "axios";
import countries from "./countries";

var todayRates, yesterdayRates
function UpdateRatesButton({ fetchRates }) {

    useEffect(() => {
        UpdateRates();
    }, []);

    useEffect(() => {
        setInterval(UpdateRates, 5184000);
    }, []);

    function UpdateRates() {
        const allCountriesTodayRates = {}
        const allCountriesYesterdayRates = {}
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
        const day = currentDate.getDate();
        const today = `${year}-${month}-${day.toString().padStart(2, "0")}`
        const yesterday = `${year}-${month}-${(day - 1).toString().padStart(2, "0")}`
        const dayBeforeYesterday = `${year}-${month}-${(day - 2).toString().padStart(2, "0")}`
        const API_KEY = `bUuRg1DWkb6ybq9ff2Yo6bAKYDjweSsj`

        try {
            Object.keys(countries).forEach(async (item) => {
                try {
                    const response = await axios.get(`https://api.currencybeacon.com/v1/timeseries?type=fiat&api_key=${API_KEY}&start_date=${dayBeforeYesterday}&end_date=${today}&base=${countries[item].currency.code}`);
                    const responseData = response.data
                        if (response.status >= 200 && response.status <= 300) {
                        if (responseData && Object.keys(responseData).length > 0) {
                            if (Object.hasOwn(responseData, today) && Object.hasOwn(responseData, yesterday)) {
                                if (responseData[today] && responseData[yesterday]) {
                                    allCountriesTodayRates[countries[item].currency.code] = responseData[today];
                                    allCountriesYesterdayRates[countries[item].currency.code] = responseData[yesterday];
                                } else {
                                    allCountriesTodayRates[countries[item].currency.code] = responseData[yesterday];
                                    allCountriesYesterdayRates[countries[item].currency.code] = responseData[dayBeforeYesterday];
                                };
                            } else if (Object.hasOwn(responseData, 'response')) {
                                if (responseData[today] && responseData[yesterday]) {
                                    allCountriesTodayRates[countries[item].currency.code] = responseData[today];
                                    allCountriesYesterdayRates[countries[item].currency.code] = responseData[yesterday];
                                } else {
                                    allCountriesTodayRates[countries[item].currency.code] = responseData[yesterday];
                                    allCountriesYesterdayRates[countries[item].currency.code] = responseData[dayBeforeYesterday];
                                };
                            } else {
                                console.log("No data found.")
                            };
                        } else {
                            console.log(`Sorry! service is unavailable right now. May be you should refresh and try again.`)
                        };
                    } else {
                        console.log(`Sorry ${item} is unavailable right now.`)
                    };
                } catch (error) {
                    console.error('Error fetching exchange rates:', error);
                }
            });
            fetchRates(allCountriesTodayRates, allCountriesYesterdayRates);
            todayRates = allCountriesTodayRates;
            yesterdayRates = allCountriesYesterdayRates;
            return [allCountriesTodayRates, allCountriesYesterdayRates];
        } catch (error) {
            console.error("Error fetching exchange rates:", error)
        };
    };
    return (<div>
        <button className="btn waves-effect waves-light update-button" onClick={UpdateRates}>Update</button>
    </div>)
}

export default UpdateRatesButton;
export {todayRates, yesterdayRates}