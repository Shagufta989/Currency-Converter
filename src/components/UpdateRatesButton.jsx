import React from "react";
import countryCurrencies from "./CountriesCurrencies";
import axios from "axios";

function UpdateRatesButton({fetchRates}) {

    // useEffect(() => {
    //     UpdateRates();
    // }, []);

    function UpdateRates() {
        const allCountriesTodayRates = {}
        const allCountriesYesterdayRates = {}
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
        const day = currentDate.getDate();
        const today = `${year}-${month}-${day.toString().padStart(2, "0")}`
        const yesterday = `${year}-${month}-${(day - 1).toString().padStart(2, "0")}`
        const API_KEY = `NdJXI9obD56mg0Uh0BMQ9H0O2mW18wL9`

        try {
            Object.keys(countryCurrencies).forEach(async (item) => {
                try {
                    const response = await axios.get(`https://api.currencybeacon.com/v1/timeseries?type=fiat&api_key=${API_KEY}&start_date=${yesterday}&end_date=${today}&base=${countryCurrencies[item].code}`);
                    const responseData = response.data
                    if (response.status >= 200 && response.status <= 300) {
                        if (responseData && Object.keys(responseData).length > 0) {
                            if (Object.hasOwn(responseData, today) && Object.hasOwn(responseData, yesterday)) {
                                allCountriesTodayRates[countryCurrencies[item].code] = responseData[today];
                                allCountriesYesterdayRates[countryCurrencies[item].code] = responseData[yesterday];
                            } else if (Object.hasOwn(responseData, 'response')) {
                                allCountriesTodayRates[countryCurrencies[item].code] = responseData[response][today];
                                allCountriesYesterdayRates[countryCurrencies[item].code] = responseData[response][yesterday];
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
            // console.log("TODAY RATES! TODAY RATES! TODAY RATES!", allCountriesTodayRates);
            // console.log("YESTERDAY RATES! YESTERDAY RATES! YESTERDAY RATES!", allCountriesYesterdayRates);
            fetchRates(allCountriesTodayRates, allCountriesYesterdayRates)
            return [allCountriesTodayRates, allCountriesYesterdayRates]
        } catch (error) {
            console.error("Error fetching exchange rates:", error)
        };
    };
    return (<div>
        <button className="btn waves-effect waves-light update-button" onClick={UpdateRates}>Update</button>
    </div>)
}

export default UpdateRatesButton;