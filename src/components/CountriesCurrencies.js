import axios from "axios";

var countryCurrencies = {
    "Moldova": {
        "code": "MDL",
        "symbol": "L"
    },
    "United States": {
        "code": "USD",
        "symbol": "$"
    },
    "Mayotte": {
        "code": "EUR",
        "symbol": "€"
    },
    "Nauru": {
        "code": "AUD",
        "symbol": "$"
    },
    "Mozambique": {
        "code": "MZN",
        "symbol": "MT"
    },
    "Brazil": {
        "code": "BRL",
        "symbol": "R$"
    },
    "Cape Verde": {
        "code": "CVE",
        "symbol": "Esc"
    },
    "Equatorial Guinea": {
        "code": "XAF",
        "symbol": "Fr"
    },
    "Albania": {
        "code": "ALL",
        "symbol": "L"
    },
    "United States Virgin Islands": {
        "code": "USD",
        "symbol": "$"
    },
    "Niue": {
        "code": "NZD",
        "symbol": "$"
    },
    "Palau": {
        "code": "USD",
        "symbol": "$"
    },
    "Nigeria": {
        "code": "NGN",
        "symbol": "₦"
    },
    "British Virgin Islands": {
        "code": "USD",
        "symbol": "$"
    },
    "Gambia": {
        "code": "GMD",
        "symbol": "D"
    },
    "Somalia": {
        "code": "SOS",
        "symbol": "Sh"
    },
    "Yemen": {
        "code": "YER",
        "symbol": "﷼"
    },
    "Malaysia": {
        "code": "MYR",
        "symbol": "RM"
    },
    "Dominica": {
        "code": "XCD",
        "symbol": "$"
    },
    "United Kingdom": {
        "code": "GBP",
        "symbol": "£"
    },
    "Madagascar": {
        "code": "MGA",
        "symbol": "Ar"
    },
    "Western Sahara": {
        "code": "DZD",
        "symbol": "دج"
    },
    "Cyprus": {
        "code": "EUR",
        "symbol": "€"
    },
    "Antigua and Barbuda": {
        "code": "XCD",
        "symbol": "$"
    },
    "Ireland": {
        "code": "EUR",
        "symbol": "€"
    },
    "Paraguay": {
        "code": "PYG",
        "symbol": "₲"
    },
    "Sri Lanka": {
        "code": "LKR",
        "symbol": "Rs  රු"
    },
    "South Africa": {
        "code": "ZAR",
        "symbol": "R"
    },
    "Kuwait": {
        "code": "KWD",
        "symbol": "د.ك"
    },
    "Algeria": {
        "code": "DZD",
        "symbol": "د.ج"
    },
    "Croatia": {
        "code": "EUR",
        "symbol": "€"
    },
    "Martinique": {
        "code": "EUR",
        "symbol": "€"
    },
    "Sierra Leone": {
        "code": "SLL",
        "symbol": "Le"
    },
    "Northern Mariana Islands": {
        "code": "USD",
        "symbol": "$"
    },
    "Rwanda": {
        "code": "RWF",
        "symbol": "Fr"
    },
    "Syria": {
        "code": "SYP",
        "symbol": "£"
    },
    "Saint Vincent and the Grenadines": {
        "code": "XCD",
        "symbol": "$"
    },
    "Kosovo": {
        "code": "EUR",
        "symbol": "€"
    },
    "Saint Lucia": {
        "code": "XCD",
        "symbol": "$"
    },
    "Honduras": {
        "code": "HNL",
        "symbol": "L"
    },
    "Jordan": {
        "code": "JOD",
        "symbol": "د.ا"
    },
    "Tuvalu": {
        "code": "AUD",
        "symbol": "$"
    },
    "Nepal": {
        "code": "NPR",
        "symbol": "₨"
    },
    "Liberia": {
        "code": "LRD",
        "symbol": "$"
    },
    "Austria": {
        "code": "EUR",
        "symbol": "€"
    },
    "Guernsey": {
        "code": "GBP",
        "symbol": "£"
    },
    "Central African Republic": {
        "code": "XAF",
        "symbol": "Fr"
    },
    "Mauritania": {
        "code": "MRU",
        "symbol": "UM"
    },
    "Djibouti": {
        "code": "DJF",
        "symbol": "Fr"
    },
    "Fiji": {
        "code": "FJD",
        "symbol": "$"
    },
    "Norway": {
        "code": "NOK",
        "symbol": "kr"
    },
    "Latvia": {
        "code": "EUR",
        "symbol": "€"
    },
    "Falkland Islands": {
        "code": "FKP",
        "symbol": "£"
    },
    "Kazakhstan": {
        "code": "KZT",
        "symbol": "₸"
    },
    "Åland Islands": {
        "code": "EUR",
        "symbol": "€"
    },
    "Turkmenistan": {
        "code": "TMT",
        "symbol": "m"
    },
    "Cocos (Keeling) Islands": {
        "code": "AUD",
        "symbol": "$"
    },
    "Bulgaria": {
        "code": "BGN",
        "symbol": "лв"
    },
    "Tokelau": {
        "code": "NZD",
        "symbol": "$"
    },
    "New Caledonia": {
        "code": "XPF",
        "symbol": "₣"
    },
    "Barbados": {
        "code": "BBD",
        "symbol": "$"
    },
    "São Tomé and Príncipe": {
        "code": "STN",
        "symbol": "Db"
    },
    "Brunei": {
        "code": "BND",
        "symbol": "$"
    },
    "Bhutan": {
        "code": "BTN",
        "symbol": "Nu."
    },
    "Cameroon": {
        "code": "XAF",
        "symbol": "Fr"
    },
    "Argentina": {
        "code": "ARS",
        "symbol": "$"
    },
    "Azerbaijan": {
        "code": "AZN",
        "symbol": "₼"
    },
    "Mexico": {
        "code": "MXN",
        "symbol": "$"
    },
    "Morocco": {
        "code": "MAD",
        "symbol": "د.م."
    },
    "Guatemala": {
        "code": "GTQ",
        "symbol": "Q"
    },
    "Kenya": {
        "code": "KES",
        "symbol": "Sh"
    },
    "Malta": {
        "code": "EUR",
        "symbol": "€"
    },
    "Czechia": {
        "code": "CZK",
        "symbol": "Kč"
    },
    "Gibraltar": {
        "code": "GIP",
        "symbol": "£"
    },
    "Aruba": {
        "code": "AWG",
        "symbol": "ƒ"
    },
    "Saint Barthélemy": {
        "code": "EUR",
        "symbol": "€"
    },
    "Monaco": {
        "code": "EUR",
        "symbol": "€"
    },
    "United Arab Emirates": {
        "code": "AED",
        "symbol": "د.إ"
    },
    "South Sudan": {
        "code": "SSP",
        "symbol": "£"
    },
    "Puerto Rico": {
        "code": "USD",
        "symbol": "$"
    },
    "El Salvador": {
        "code": "USD",
        "symbol": "$"
    },
    "France": {
        "code": "EUR",
        "symbol": "€"
    },
    "Niger": {
        "code": "XOF",
        "symbol": "Fr"
    },
    "Ivory Coast": {
        "code": "XOF",
        "symbol": "Fr"
    },
    "South Georgia": {
        "code": "SHP",
        "symbol": "£"
    },
    "Botswana": {
        "code": "BWP",
        "symbol": "P"
    },
    "British Indian Ocean Territory": {
        "code": "USD",
        "symbol": "$"
    },
    "Uzbekistan": {
        "code": "UZS",
        "symbol": "so'm"
    },
    "Tunisia": {
        "code": "TND",
        "symbol": "د.ت"
    },
    "Hong Kong": {
        "code": "HKD",
        "symbol": "$"
    },
    "North Macedonia": {
        "code": "MKD",
        "symbol": "den"
    },
    "Suriname": {
        "code": "SRD",
        "symbol": "$"
    },
    "Belgium": {
        "code": "EUR",
        "symbol": "€"
    },
    "American Samoa": {
        "code": "USD",
        "symbol": "$"
    },
    "Solomon Islands": {
        "code": "SBD",
        "symbol": "$"
    },
    "Ukraine": {
        "code": "UAH",
        "symbol": "₴"
    },
    "Finland": {
        "code": "EUR",
        "symbol": "€"
    },
    "Burkina Faso": {
        "code": "XOF",
        "symbol": "Fr"
    },
    "Bosnia and Herzegovina": {
        "code": "BAM"
    },
    "Iran": {
        "code": "IRR",
        "symbol": "﷼"
    },
    "Cuba": {
        "code": "CUC",
        "symbol": "$"
    },
    "Eritrea": {
        "code": "ERN",
        "symbol": "Nfk"
    },
    "Slovakia": {
        "code": "EUR",
        "symbol": "€"
    },
    "Lithuania": {
        "code": "EUR",
        "symbol": "€"
    },
    "Saint Martin": {
        "code": "EUR",
        "symbol": "€"
    },
    "Pitcairn Islands": {
        "code": "NZD",
        "symbol": "$"
    },
    "Guinea-Bissau": {
        "code": "XOF",
        "symbol": "Fr"
    },
    "Montserrat": {
        "code": "XCD",
        "symbol": "$"
    },
    "Turkey": {
        "code": "TRY",
        "symbol": "₺"
    },
    "Philippines": {
        "code": "PHP",
        "symbol": "₱"
    },
    "Vanuatu": {
        "code": "VUV",
        "symbol": "Vt"
    },
    "Bolivia": {
        "code": "BOB",
        "symbol": "Bs."
    },
    "Saint Kitts and Nevis": {
        "code": "XCD",
        "symbol": "$"
    },
    "Romania": {
        "code": "RON",
        "symbol": "lei"
    },
    "Cambodia": {
        "code": "KHR",
        "symbol": "៛"
    },
    "Zimbabwe": {
        "code": "ZWL",
        "symbol": "$"
    },
    "Jersey": {
        "code": "GBP",
        "symbol": "£"
    },
    "Kyrgyzstan": {
        "code": "KGS",
        "symbol": "с"
    },
    "Caribbean Netherlands": {
        "code": "USD",
        "symbol": "$"
    },
    "Guyana": {
        "code": "GYD",
        "symbol": "$"
    },
    "United States Minor Outlying Islands": {
        "code": "USD",
        "symbol": "$"
    },
    "Armenia": {
        "code": "AMD",
        "symbol": "֏"
    },
    "Lebanon": {
        "code": "LBP",
        "symbol": "ل.ل"
    },
    "Montenegro": {
        "code": "EUR",
        "symbol": "€"
    },
    "Greenland": {
        "code": "DKK",
        "symbol": "kr."
    },
    "Papua New Guinea": {
        "code": "PGK",
        "symbol": "K"
    },
    "Zambia": {
        "code": "ZMW",
        "symbol": "ZK"
    },
    "Trinidad and Tobago": {
        "code": "TTD",
        "symbol": "$"
    },
    "French Southern and Antarctic Lands": {
        "code": "EUR",
        "symbol": "€"
    },
    "Peru": {
        "code": "PEN",
        "symbol": "S/ "
    },
    "Sweden": {
        "code": "SEK",
        "symbol": "kr"
    },
    "Sudan": {
        "code": "SDG"
    },
    "Saint Pierre and Miquelon": {
        "code": "EUR",
        "symbol": "€"
    },
    "Oman": {
        "code": "OMR",
        "symbol": "ر.ع."
    },
    "India": {
        "code": "INR",
        "symbol": "₹"
    },
    "Taiwan": {
        "code": "TWD",
        "symbol": "$"
    },
    "Mongolia": {
        "code": "MNT",
        "symbol": "₮"
    },
    "Senegal": {
        "code": "XOF",
        "symbol": "Fr"
    },
    "Tanzania": {
        "code": "TZS",
        "symbol": "Sh"
    },
    "Canada": {
        "code": "CAD",
        "symbol": "$"
    },
    "Costa Rica": {
        "code": "CRC",
        "symbol": "₡"
    },
    "China": {
        "code": "CNY",
        "symbol": "¥"
    },
    "Colombia": {
        "code": "COP",
        "symbol": "$"
    },
    "Myanmar": {
        "code": "MMK",
        "symbol": "Ks"
    },
    "Russia": {
        "code": "RUB",
        "symbol": "₽"
    },
    "North Korea": {
        "code": "KPW",
        "symbol": "₩"
    },
    "Cayman Islands": {
        "code": "KYD",
        "symbol": "$"
    },
    "Belarus": {
        "code": "BYN",
        "symbol": "Br"
    },
    "Portugal": {
        "code": "EUR",
        "symbol": "€"
    },
    "Eswatini": {
        "code": "SZL",
        "symbol": "L"
    },
    "Poland": {
        "code": "PLN",
        "symbol": "zł"
    },
    "Switzerland": {
        "code": "CHF",
        "symbol": "Fr."
    },
    "Republic of the Congo": {
        "code": "XAF",
        "symbol": "Fr"
    },
    "Venezuela": {
        "code": "VES",
        "symbol": "Bs.S."
    },
    "Panama": {
        "code": "PAB",
        "symbol": "B/."
    },
    "Netherlands": {
        "code": "EUR",
        "symbol": "€"
    },
    "Samoa": {
        "code": "WST",
        "symbol": "T"
    },
    "Denmark": {
        "code": "DKK",
        "symbol": "kr"
    },
    "Luxembourg": {
        "code": "EUR",
        "symbol": "€"
    },
    "Faroe Islands": {
        "code": "DKK",
        "symbol": "kr"
    },
    "Slovenia": {
        "code": "EUR",
        "symbol": "€"
    },
    "Togo": {
        "code": "XOF",
        "symbol": "Fr"
    },
    "Thailand": {
        "code": "THB",
        "symbol": "฿"
    },
    "Wallis and Futuna": {
        "code": "XPF",
        "symbol": "₣"
    },
    "Bahamas": {
        "code": "BSD",
        "symbol": "$"
    },
    "Tonga": {
        "code": "TOP",
        "symbol": "T$"
    },
    "Greece": {
        "code": "EUR",
        "symbol": "€"
    },
    "San Marino": {
        "code": "EUR",
        "symbol": "€"
    },
    "Réunion": {
        "code": "EUR",
        "symbol": "€"
    },
    "Vatican City": {
        "code": "EUR",
        "symbol": "€"
    },
    "Burundi": {
        "code": "BIF",
        "symbol": "Fr"
    },
    "Bahrain": {
        "code": "BHD",
        "symbol": ".د.ب"
    },
    "Marshall Islands": {
        "code": "USD",
        "symbol": "$"
    },
    "Turks and Caicos Islands": {
        "code": "USD",
        "symbol": "$"
    },
    "Isle of Man": {
        "code": "GBP",
        "symbol": "£"
    },
    "Haiti": {
        "code": "HTG",
        "symbol": "G"
    },
    "Afghanistan": {
        "code": "AFN",
        "symbol": "؋"
    },
    "Israel": {
        "code": "ILS",
        "symbol": "₪"
    },
    "Libya": {
        "code": "LYD",
        "symbol": "ل.د"
    },
    "Uruguay": {
        "code": "UYU",
        "symbol": "$"
    },
    "Norfolk Island": {
        "code": "AUD",
        "symbol": "$"
    },
    "Nicaragua": {
        "code": "NIO",
        "symbol": "C$"
    },
    "Cook Islands": {
        "code": "CKD",
        "symbol": "$"
    },
    "Laos": {
        "code": "LAK",
        "symbol": "₭"
    },
    "Christmas Island": {
        "code": "AUD",
        "symbol": "$"
    },
    "Saint Helena, Ascension and Tristan da Cunha": {
        "code": "GBP",
        "symbol": "£"
    },
    "Anguilla": {
        "code": "XCD",
        "symbol": "$"
    },
    "Micronesia": {
        "code": "USD",
        "symbol": "$"
    },
    "Germany": {
        "code": "EUR",
        "symbol": "€"
    },
    "Guam": {
        "code": "USD",
        "symbol": "$"
    },
    "Kiribati": {
        "code": "AUD",
        "symbol": "$"
    },
    "Sint Maarten": {
        "code": "ANG",
        "symbol": "ƒ"
    },
    "Spain": {
        "code": "EUR",
        "symbol": "€"
    },
    "Jamaica": {
        "code": "JMD",
        "symbol": "$"
    },
    "Palestine": {
        "code": "EGP",
        "symbol": "E£"
    },
    "French Guiana": {
        "code": "EUR",
        "symbol": "€"
    },
    "Andorra": {
        "code": "EUR",
        "symbol": "€"
    },
    "Chile": {
        "code": "CLP",
        "symbol": "$"
    },
    "Lesotho": {
        "code": "LSL",
        "symbol": "L"
    },
    "Australia": {
        "code": "AUD",
        "symbol": "$"
    },
    "Grenada": {
        "code": "XCD",
        "symbol": "$"
    },
    "Ghana": {
        "code": "GHS",
        "symbol": "₵"
    },
    "Seychelles": {
        "code": "SCR",
        "symbol": "₨"
    },
    "Angola": {
        "code": "AOA",
        "symbol": "Kz"
    },
    "Bermuda": {
        "code": "BMD",
        "symbol": "$"
    },
    "Pakistan": {
        "code": "PKR",
        "symbol": "₨"
    },
    "Mali": {
        "code": "XOF",
        "symbol": "Fr"
    },
    "Saudi Arabia": {
        "code": "SAR",
        "symbol": "ر.س"
    },
    "Curaçao": {
        "code": "ANG",
        "symbol": "ƒ"
    },
    "South Korea": {
        "code": "KRW",
        "symbol": "₩"
    },
    "Ethiopia": {
        "code": "ETB",
        "symbol": "Br"
    },
    "Guadeloupe": {
        "code": "EUR",
        "symbol": "€"
    },
    "Bangladesh": {
        "code": "BDT",
        "symbol": "৳"
    },
    "New Zealand": {
        "code": "NZD",
        "symbol": "$"
    },
    "Comoros": {
        "code": "KMF",
        "symbol": "Fr"
    },
    "Belize": {
        "code": "BZD",
        "symbol": "$"
    },
    "Uganda": {
        "code": "UGX",
        "symbol": "Sh"
    },
    "Singapore": {
        "code": "SGD",
        "symbol": "$"
    },
    "Liechtenstein": {
        "code": "CHF",
        "symbol": "Fr"
    },
    "Hungary": {
        "code": "HUF",
        "symbol": "Ft"
    },
    "Iceland": {
        "code": "ISK",
        "symbol": "kr"
    },
    "Tajikistan": {
        "code": "TJS",
        "symbol": "ЅМ"
    },
    "Namibia": {
        "code": "NAD",
        "symbol": "$"
    },
    "Timor-Leste": {
        "code": "USD",
        "symbol": "$"
    },
    "Egypt": {
        "code": "EGP",
        "symbol": "£"
    },
    "Serbia": {
        "code": "RSD",
        "symbol": "дин."
    },
    "Mauritius": {
        "code": "MUR",
        "symbol": "₨"
    },
    "Macau": {
        "code": "MOP",
        "symbol": "P"
    },
    "French Polynesia": {
        "code": "XPF",
        "symbol": "₣"
    },
    "Maldives": {
        "code": "MVR",
        "symbol": ".ރ"
    },
    "Indonesia": {
        "code": "IDR",
        "symbol": "Rp"
    },
    "DR Congo": {
        "code": "CDF",
        "symbol": "FC"
    },
    "Estonia": {
        "code": "EUR",
        "symbol": "€"
    },
    "Vietnam": {
        "code": "VND",
        "symbol": "₫"
    },
    "Italy": {
        "code": "EUR",
        "symbol": "€"
    },
    "Guinea": {
        "code": "GNF",
        "symbol": "Fr"
    },
    "Chad": {
        "code": "XAF",
        "symbol": "Fr"
    },
    "Ecuador": {
        "code": "USD",
        "symbol": "$"
    },
    "Georgia": {
        "code": "GEL",
        "symbol": "₾"
    },
    "Malawi": {
        "code": "MWK",
        "symbol": "MK"
    },
    "Iraq": {
        "code": "IQD",
        "symbol": "ع.د"
    },
    "Svalbard and Jan Mayen": {
        "code": "NOK",
        "symbol": "kr"
    },
    "Benin": {
        "code": "XOF",
        "symbol": "Fr"
    },
    "Japan": {
        "code": "JPY",
        "symbol": "¥"
    },
    "Dominican Republic": {
        "code": "DOP",
        "symbol": "$"
    },
    "Qatar": {
        "code": "QAR",
        "symbol": "ر.ق"
    },
    "Gabon": {
        "code": "XAF",
        "symbol": "Fr"
    }
}

async function fetchCountryCurrencies() {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countries = response.data;
        
        countryCurrencies = {};
        countries.forEach(country => {
            const name = country.name.common;
            const currencies = country.currencies;
            if (name && currencies) {
                const currencyCode = Object.keys(currencies)[0];
                const currencyInfo = currencies[currencyCode];
                const currencySymbol = currencyInfo.symbol;
                countryCurrencies[name] = { code: currencyCode, symbol: currencySymbol };
            }
        });
    } catch (error) {
        console.error('Error fetching country currencies:', error);
        return null;
    }
};

setTimeout(fetchCountryCurrencies, 6 * 30 * 24 * 60 * 60 * 1000); // 6 months in milliseconds

export default countryCurrencies;