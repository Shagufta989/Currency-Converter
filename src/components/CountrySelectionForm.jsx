import React, { useState } from "react";

function CountryForm({ countries, callBack }) {
    const countryNames = Object.keys(countries).sort();
    const [selectedCountry1, setSelectedCountry1] = useState("");
    const [selectedCountry2, setSelectedCountry2] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleCountry1(event) {
        setSelectedCountry1(event.target.value);
    }

    function handleCountry2(event) {
        setSelectedCountry2(event.target.value);
    }

    return (
        <div>
            <form className="countrySelection" onSubmit={handleSubmit}>
                <select name="countries" id="countryName1" onChange={handleCountry1} value={selectedCountry1}>
                    <option value="">Choose a country..</option>
                    {countryNames.map((key, index) => (<option value={key} key={index}>{key}</option>))}
                </select>

                <select name="countries" id="countryName2" value={selectedCountry2} onChange={handleCountry2}>
                    <option value="">Choose a country..</option>
                    {countryNames.map((key, index) => (<option value={key} key={index}>{key}</option>))}
                </select>
                <button type="submit" onClick={() => callBack(selectedCountry1, selectedCountry2)}>Go</button>
            </form>
        </div>
    );
}

export default CountryForm;
