import React from "react";
import Header from "./Header.jsx";
import GraphicCard from "./GrahicCard.jsx";

function App() {

    // var countryCode2, countryCode1

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
            <GraphicCard />
        </div>
    );
}

export default App;