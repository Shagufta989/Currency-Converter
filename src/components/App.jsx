import React, { useState } from "react";
import Header from "./Header.jsx";
import GraphicCard from "./GraphicCard.jsx";
import UpdateRatesButton from "./UpdateRatesButton.jsx";

function App() {
    const [todayRate, setTodayRate] = useState(null)
    const [yesterdayRate, setYesterdayRate] = useState(null)
    // var countryCode2, countryCode1
    function calculateRates(today, yesterday){
        setTodayRate(today)
        setYesterdayRate(yesterday)
    }
    // async function getUserSelections(country1, country2) {
    //     const firstCountry = country1;
    //     const secondCountry = country2;
    //     for (var key in countryCurrencies) {
    //         if (key === firstCountry) {
    //             countryCode1 = countryCurrencies[key]["code"]
    //         }
    //         if (key === secondCountry) {
    //             countryCode2 = countryCurrencies[key]["code"]
    //         }
    //     };
    //     console.log(`Name1 = ${firstCountry}, Name2 = ${secondCountry}, Codes = ${countryCode1}, ${countryCode2}`);
    // }
    return (
        <div>
            <Header />
            <UpdateRatesButton fetchRates={calculateRates}/>
            <GraphicCard />
            <p>{todayRate}</p>
            <p>{yesterdayRate}</p>
        </div>
    );
}

export default App;