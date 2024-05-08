import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
import axios from "axios";
import UpdateButton from "./UpdateButton.jsx";
import countryCurrencies from "./CountriesCurrencies.js";
import CountryForm from "./CountrySelectionForm.jsx";
import GraphicCard from "./GraphicCard.jsx";
import { hola } from "./GraphicCard.jsx";

function App() {
    var countryCode2, countryCode1, firstRate, secondRate
    const [rates, updateRates] = useState({});

        useEffect(() => {
            getRates();
        }, []);
    async function getUserSelections(country1, country2) {
        const firstCountry = country1;
        const secondCountry = country2;
        for (var key in countryCurrencies) {
            if (key == firstCountry) {
                countryCode1 = countryCurrencies[key]["code"]
            }
            if (key == secondCountry) {
                countryCode2 = countryCurrencies[key]["code"]
            }
        };
        console.log(`Name1 = ${firstCountry}, Name2 = ${secondCountry}, Codes = ${countryCode1}, ${countryCode2}`);
    }

    const getRates = async () => {
        try {
            const response = await axios.get(`https://v6.exchangerate-api.com/v6/72628c0963e04d59b20d3fde/latest/USD`);
            updateRates(response.data);
        } catch (error) {
            console.error('Error fetching exchange rates:', error);
        }
    };

    useEffect(() => {
        console.log("Updated rates:", rates);
    }, [rates]);
    return (
        <div>
            <Header />
            <GraphicCard></GraphicCard>
        </div>
    );
}

export default App;