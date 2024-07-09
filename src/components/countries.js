import axios from "axios";

const countries = {
    "Afghanistan": {
        "tld": "af",
        "currency": {
            "name": "Afghan afghani",
            "code": "AFN",
            "symbol": "؋"
        },
        "capital": "Kabul",
        "area": 652230,
        "region": "Asia",
        "languages": [
            "Dari",
            "Pashto",
            "Turkmen"
        ],
        "flag": "af",
        "population": 2837743,
        "callingCode": "+93",
        "numericCode": "004"
    },
    "Sudan": {
        "tld": "sd",
        "currency": {
            "name": "Sudanese pound",
            "code": "SDG"
        },
        "capital": "Khartoum",
        "area": 1886068,
        "region": "Africa",
        "languages": [
            "Arabic",
            "English"
        ],
        "flag": "sd",
        "population": 43849269,
        "callingCode": "+249",
        "numericCode": "729"
    },
    "Burundi": {
        "tld": "bi",
        "currency": {
            "name": "Burundian franc",
            "code": "BIF",
            "symbol": "Fr"
        },
        "capital": "Gitega",
        "area": 27834,
        "region": "Africa",
        "languages": [
            "French",
            "Kirundi"
        ],
        "flag": "bi",
        "population": 11890781,
        "callingCode": "+257",
        "numericCode": "108"
    },
    "Mexico": {
        "tld": "mx",
        "currency": {
            "name": "Mexican peso",
            "code": "MXN",
            "symbol": "$"
        },
        "capital": "Mexico City",
        "area": 1964375,
        "region": "Americas",
        "languages": [
            "Spanish"
        ],
        "flag": "mx",
        "population": 128932753,
        "callingCode": "+52",
        "numericCode": "484"
    },
    "Cuba": {
        "tld": "cu",
        "currency": {
            "name": "Cuban convertible peso",
            "code": "CUC",
            "symbol": "$"
        },
        "capital": "Havana",
        "area": 109884,
        "region": "Americas",
        "languages": [
            "Spanish"
        ],
        "flag": "cu",
        "population": 11326616,
        "callingCode": "+53",
        "numericCode": "192"
    },
    "Serbia": {
        "tld": "rs",
        "currency": {
            "name": "Serbian dinar",
            "code": "RSD",
            "symbol": "дин."
        },
        "capital": "Belgrade",
        "area": 88361,
        "region": "Europe",
        "languages": [
            "Serbian"
        ],
        "flag": "rs",
        "population": 6908224,
        "callingCode": "+381",
        "numericCode": "688"
    },
    "Monaco": {
        "tld": "mc",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Monaco",
        "area": 2.02,
        "region": "Europe",
        "languages": [
            "French"
        ],
        "flag": "mc",
        "population": 39244,
        "callingCode": "+377",
        "numericCode": "492"
    },
    "Bhutan": {
        "tld": "bt",
        "currency": {
            "name": "Bhutanese ngultrum",
            "code": "BTN",
            "symbol": "Nu."
        },
        "capital": "Thimphu",
        "area": 38394,
        "region": "Asia",
        "languages": [
            "Dzongkha"
        ],
        "flag": "bt",
        "population": 771612,
        "callingCode": "+975",
        "numericCode": "064"
    },
    "Guyana": {
        "tld": "gy",
        "currency": {
            "name": "Guyanese dollar",
            "code": "GYD",
            "symbol": "$"
        },
        "capital": "Georgetown",
        "area": 214969,
        "region": "Americas",
        "languages": [
            "English"
        ],
        "flag": "gy",
        "population": 786559,
        "callingCode": "+592",
        "numericCode": "328"
    },
    "South Georgia": {
        "tld": "gs",
        "currency": {
            "name": "Saint Helena pound",
            "code": "SHP",
            "symbol": "£"
        },
        "capital": "King Edward Point",
        "area": 3903,
        "region": "Antarctic",
        "languages": [
            "English"
        ],
        "flag": "gs",
        "population": 30,
        "callingCode": "+500",
        "numericCode": "239"
    },
    "Bosnia and Herzegovina": {
        "tld": "ba",
        "currency": {
            "name": "Bosnia and Herzegovina convertible mark",
            "code": "BAM"
        },
        "capital": "Sarajevo",
        "area": 51209,
        "region": "Europe",
        "languages": [
            "Bosnian",
            "Croatian",
            "Serbian"
        ],
        "flag": "ba",
        "population": 3280815,
        "callingCode": "+387",
        "numericCode": "070"
    },
    "Brunei": {
        "tld": "bn",
        "currency": {
            "name": "Brunei dollar",
            "code": "BND",
            "symbol": "$"
        },
        "capital": "Bandar Seri Begawan",
        "area": 5765,
        "region": "Asia",
        "languages": [
            "Malay"
        ],
        "flag": "bn",
        "population": 437483,
        "callingCode": "+673",
        "numericCode": "096"
    },
    "Pakistan": {
        "tld": "pk",
        "currency": {
            "name": "Pakistani rupee",
            "code": "PKR",
            "symbol": "₨"
        },
        "capital": "Islamabad",
        "area": 881912,
        "region": "Asia",
        "languages": [
            "English",
            "Urdu"
        ],
        "flag": "pk",
        "population": 220892331,
        "callingCode": "+92",
        "numericCode": "586"
    },
    "Kenya": {
        "tld": "ke",
        "currency": {
            "name": "Kenyan shilling",
            "code": "KES",
            "symbol": "Sh"
        },
        "capital": "Nairobi",
        "area": 580367,
        "region": "Africa",
        "languages": [
            "English",
            "Swahili"
        ],
        "flag": "ke",
        "population": 53771300,
        "callingCode": "+254",
        "numericCode": "404"
    },
    "Puerto Rico": {
        "tld": "pr",
        "currency": {
            "name": "United States dollar",
            "code": "USD",
            "symbol": "$"
        },
        "capital": "San Juan",
        "area": 8870,
        "region": "Americas",
        "languages": [
            "English",
            "Spanish"
        ],
        "flag": "pr",
        "population": 3194034,
        "callingCode": "+1787",
        "numericCode": "630"
    },
    "Somalia": {
        "tld": "so",
        "currency": {
            "name": "Somali shilling",
            "code": "SOS",
            "symbol": "Sh"
        },
        "capital": "Mogadishu",
        "area": 637657,
        "region": "Africa",
        "languages": [
            "Arabic",
            "Somali"
        ],
        "flag": "so",
        "population": 15893219,
        "callingCode": "+252",
        "numericCode": "706"
    },
    "Svalbard and Jan Mayen": {
        "tld": "sj",
        "currency": {
            "name": "krone",
            "code": "NOK",
            "symbol": "kr"
        },
        "capital": "Longyearbyen",
        "area": -1,
        "region": "Europe",
        "languages": [
            "Norwegian"
        ],
        "flag": "sj",
        "population": 2562,
        "callingCode": "+4779",
        "numericCode": "744"
    },
    "Sierra Leone": {
        "tld": "sl",
        "currency": {
            "name": "Sierra Leonean leone",
            "code": "SLL",
            "symbol": "Le"
        },
        "capital": "Freetown",
        "area": 71740,
        "region": "Africa",
        "languages": [
            "English"
        ],
        "flag": "sl",
        "population": 7976985,
        "callingCode": "+232",
        "numericCode": "694"
    },
    "French Polynesia": {
        "tld": "pf",
        "currency": {
            "name": "CFP franc",
            "code": "XPF",
            "symbol": "₣"
        },
        "capital": "Papeetē",
        "area": 4167,
        "region": "Oceania",
        "languages": [
            "French"
        ],
        "flag": "pf",
        "population": 280904,
        "callingCode": "+689",
        "numericCode": "258"
    },
    "Azerbaijan": {
        "tld": "az",
        "currency": {
            "name": "Azerbaijani manat",
            "code": "AZN",
            "symbol": "₼"
        },
        "capital": "Baku",
        "area": 86600,
        "region": "Asia",
        "languages": [
            "Azerbaijani",
            "Russian"
        ],
        "flag": "az",
        "population": 10110116,
        "callingCode": "+994",
        "numericCode": "031"
    },
    "Cook Islands": {
        "tld": "ck",
        "currency": {
            "name": "Cook Islands dollar",
            "code": "CKD",
            "symbol": "$"
        },
        "capital": "Avarua",
        "area": 236,
        "region": "Oceania",
        "languages": [
            "English",
            "Cook Islands Māori"
        ],
        "flag": "ck",
        "population": 18100,
        "callingCode": "+682",
        "numericCode": "184"
    },
    "Peru": {
        "tld": "pe",
        "currency": {
            "name": "Peruvian sol",
            "code": "PEN",
            "symbol": "S/ "
        },
        "capital": "Lima",
        "area": 1285216,
        "region": "Americas",
        "languages": [
            "Aymara",
            "Quechua",
            "Spanish"
        ],
        "flag": "pe",
        "population": 32971846,
        "callingCode": "+51",
        "numericCode": "604"
    },
    "Bouvet Island": {
        "tld": "bv",
        "currency": {
            "name": "Norwegian krone",
            "code": "NOK",
            "symbol": "kr"
        },
        "capital": "N/A",
        "area": 49,
        "region": "Antarctic",
        "languages": [
            "Norwegian"
        ],
        "flag": "bv",
        "population": 0,
        "callingCode": "+47",
        "numericCode": "074"
    },
    "Northern Mariana Islands": {
        "tld": "mp",
        "currency": {
            "name": "United States dollar",
            "code": "USD",
            "symbol": "$"
        },
        "capital": "Saipan",
        "area": 464,
        "region": "Oceania",
        "languages": [
            "Carolinian",
            "Chamorro",
            "English"
        ],
        "flag": "mp",
        "population": 57557,
        "callingCode": "+1670",
        "numericCode": "580"
    },
    "Angola": {
        "tld": "ao",
        "currency": {
            "name": "Angolan kwanza",
            "code": "AOA",
            "symbol": "Kz"
        },
        "capital": "Luanda",
        "area": 1246700,
        "region": "Africa",
        "languages": [
            "Portuguese"
        ],
        "flag": "ao",
        "population": 32866268,
        "callingCode": "+244",
        "numericCode": "024"
    },
    "Republic of the Congo": {
        "tld": "cg",
        "currency": {
            "name": "Central African CFA franc",
            "code": "XAF",
            "symbol": "Fr"
        },
        "capital": "Brazzaville",
        "area": 342000,
        "region": "Africa",
        "languages": [
            "French",
            "Kikongo",
            "Lingala"
        ],
        "flag": "cg",
        "population": 89561404,
        "callingCode": "+242",
        "numericCode": "178"
    },
    "South Sudan": {
        "tld": "ss",
        "currency": {
            "name": "South Sudanese pound",
            "code": "SSP",
            "symbol": "£"
        },
        "capital": "Juba",
        "area": 619745,
        "region": "Africa",
        "languages": [
            "English"
        ],
        "flag": "ss",
        "population": 11193729,
        "callingCode": "+211",
        "numericCode": "728"
    },
    "Saint Martin": {
        "tld": "fr",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Marigot",
        "area": 53,
        "region": "Americas",
        "languages": [
            "French"
        ],
        "flag": "mf",
        "population": 38659,
        "callingCode": "+590",
        "numericCode": "663"
    },
    "Turkey": {
        "tld": "tr",
        "currency": {
            "name": "Turkish lira",
            "code": "TRY",
            "symbol": "₺"
        },
        "capital": "Ankara",
        "area": 783562,
        "region": "Asia",
        "languages": [
            "Turkish"
        ],
        "flag": "tr",
        "population": 84339067,
        "callingCode": "+90",
        "numericCode": "792"
    },
    "Anguilla": {
        "tld": "ai",
        "currency": {
            "name": "Eastern Caribbean dollar",
            "code": "XCD",
            "symbol": "$"
        },
        "capital": "The Valley",
        "area": 91,
        "region": "Americas",
        "languages": [
            "English"
        ],
        "flag": "ai",
        "population": 13452,
        "callingCode": "+1264",
        "numericCode": "660"
    },
    "Saint Kitts and Nevis": {
        "tld": "kn",
        "currency": {
            "name": "Eastern Caribbean dollar",
            "code": "XCD",
            "symbol": "$"
        },
        "capital": "Basseterre",
        "area": 261,
        "region": "Americas",
        "languages": [
            "English"
        ],
        "flag": "kn",
        "population": 53192,
        "callingCode": "+1869",
        "numericCode": "659"
    },
    "Aruba": {
        "tld": "aw",
        "currency": {
            "name": "Aruban florin",
            "code": "AWG",
            "symbol": "ƒ"
        },
        "capital": "Oranjestad",
        "area": 180,
        "region": "Americas",
        "languages": [
            "Dutch",
            "Papiamento"
        ],
        "flag": "aw",
        "population": 106766,
        "callingCode": "+297",
        "numericCode": "533"
    },
    "Turks and Caicos Islands": {
        "tld": "tc",
        "currency": {
            "name": "United States dollar",
            "code": "USD",
            "symbol": "$"
        },
        "capital": "Cockburn Town",
        "area": 948,
        "region": "Americas",
        "languages": [
            "English"
        ],
        "flag": "tc",
        "population": 38718,
        "callingCode": "+1649",
        "numericCode": "796"
    },
    "Taiwan": {
        "tld": "tw",
        "currency": {
            "name": "New Taiwan dollar",
            "code": "TWD",
            "symbol": "$"
        },
        "capital": "Taipei",
        "area": 36193,
        "region": "Asia",
        "languages": [
            "Chinese"
        ],
        "flag": "tw",
        "population": 23503349,
        "callingCode": "+886",
        "numericCode": "158"
    },
    "Sweden": {
        "tld": "se",
        "currency": {
            "name": "Swedish krona",
            "code": "SEK",
            "symbol": "kr"
        },
        "capital": "Stockholm",
        "area": 450295,
        "region": "Europe",
        "languages": [
            "Swedish"
        ],
        "flag": "se",
        "population": 10353442,
        "callingCode": "+46",
        "numericCode": "752"
    },
    "Liberia": {
        "tld": "lr",
        "currency": {
            "name": "Liberian dollar",
            "code": "LRD",
            "symbol": "$"
        },
        "capital": "Monrovia",
        "area": 111369,
        "region": "Africa",
        "languages": [
            "English"
        ],
        "flag": "lr",
        "population": 5057677,
        "callingCode": "+231",
        "numericCode": "430"
    },
    "Venezuela": {
        "tld": "ve",
        "currency": {
            "name": "Venezuelan bolívar soberano",
            "code": "VES",
            "symbol": "Bs.S."
        },
        "capital": "Caracas",
        "area": 916445,
        "region": "Americas",
        "languages": [
            "Spanish"
        ],
        "flag": "ve",
        "population": 28435943,
        "callingCode": "+58",
        "numericCode": "862"
    },
    "United States Virgin Islands": {
        "tld": "vi",
        "currency": {
            "name": "United States dollar",
            "code": "USD",
            "symbol": "$"
        },
        "capital": "Charlotte Amalie",
        "area": 347,
        "region": "Americas",
        "languages": [
            "English"
        ],
        "flag": "vi",
        "population": 106290,
        "callingCode": "+1340",
        "numericCode": "850"
    },
    "Bermuda": {
        "tld": "bm",
        "currency": {
            "name": "Bermudian dollar",
            "code": "BMD",
            "symbol": "$"
        },
        "capital": "Hamilton",
        "area": 54,
        "region": "Americas",
        "languages": [
            "English"
        ],
        "flag": "bm",
        "population": 63903,
        "callingCode": "+1441",
        "numericCode": "060"
    },
    "Albania": {
        "tld": "al",
        "currency": {
            "name": "Albanian lek",
            "code": "ALL",
            "symbol": "L"
        },
        "capital": "Tirana",
        "area": 28748,
        "region": "Europe",
        "languages": [
            "Albanian"
        ],
        "flag": "al",
        "population": 2837743,
        "callingCode": "+355",
        "numericCode": "008"
    },
    "Hong Kong": {
        "tld": "hk",
        "currency": {
            "name": "Hong Kong dollar",
            "code": "HKD",
            "symbol": "$"
        },
        "capital": "City of Victoria",
        "area": 1104,
        "region": "Asia",
        "languages": [
            "English",
            "Chinese"
        ],
        "flag": "hk",
        "population": 7500700,
        "callingCode": "+852",
        "numericCode": "344"
    },
    "Luxembourg": {
        "tld": "lu",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Luxembourg",
        "area": 2586,
        "region": "Europe",
        "languages": [
            "German",
            "French",
            "Luxembourgish"
        ],
        "flag": "lu",
        "population": 632275,
        "callingCode": "+352",
        "numericCode": "442"
    },
    "Eritrea": {
        "tld": "er",
        "currency": {
            "name": "Eritrean nakfa",
            "code": "ERN",
            "symbol": "Nfk"
        },
        "capital": "Asmara",
        "area": 117600,
        "region": "Africa",
        "languages": [
            "Arabic",
            "English",
            "Tigrinya"
        ],
        "flag": "er",
        "population": 5352000,
        "callingCode": "+291",
        "numericCode": "232"
    },
    "Colombia": {
        "tld": "co",
        "currency": {
            "name": "Colombian peso",
            "code": "COP",
            "symbol": "$"
        },
        "capital": "Bogotá",
        "area": 1141748,
        "region": "Americas",
        "languages": [
            "Spanish"
        ],
        "flag": "co",
        "population": 50882884,
        "callingCode": "+57",
        "numericCode": "170"
    },
    "Caribbean Netherlands": {
        "tld": "bq",
        "currency": {
            "name": "United States dollar",
            "code": "USD",
            "symbol": "$"
        },
        "capital": "Kralendijk",
        "area": 328,
        "region": "Americas",
        "languages": [
            "English",
            "Dutch",
            "Papiamento"
        ],
        "flag": "bq",
        "population": 25987,
        "callingCode": "+599",
        "numericCode": "535"
    },
    "Mongolia": {
        "tld": "mn",
        "currency": {
            "name": "Mongolian tögrög",
            "code": "MNT",
            "symbol": "₮"
        },
        "capital": "Ulan Bator",
        "area": 1564110,
        "region": "Asia",
        "languages": [
            "Mongolian"
        ],
        "flag": "mn",
        "population": 3278292,
        "callingCode": "+976",
        "numericCode": "496"
    },
    "Yemen": {
        "tld": "ye",
        "currency": {
            "name": "Yemeni rial",
            "code": "YER",
            "symbol": "﷼"
        },
        "capital": "Sana'a",
        "area": 527968,
        "region": "Asia",
        "languages": [
            "Arabic"
        ],
        "flag": "ye",
        "population": 29825968,
        "callingCode": "+967",
        "numericCode": "887"
    },
    "Lebanon": {
        "tld": "lb",
        "currency": {
            "name": "Lebanese pound",
            "code": "LBP",
            "symbol": "ل.ل"
        },
        "capital": "Beirut",
        "area": 10452,
        "region": "Asia",
        "languages": [
            "Arabic",
            "French"
        ],
        "flag": "lb",
        "population": 6825442,
        "callingCode": "+961",
        "numericCode": "422"
    },
    "Antigua and Barbuda": {
        "tld": "ag",
        "currency": {
            "name": "Eastern Caribbean dollar",
            "code": "XCD",
            "symbol": "$"
        },
        "capital": "Saint John's",
        "area": 442,
        "region": "Americas",
        "languages": [
            "English"
        ],
        "flag": "ag",
        "population": 97928,
        "callingCode": "+1268",
        "numericCode": "028"
    },
    "Vietnam": {
        "tld": "vn",
        "currency": {
            "name": "Vietnamese đồng",
            "code": "VND",
            "symbol": "₫"
        },
        "capital": "Hanoi",
        "area": 331212,
        "region": "Asia",
        "languages": [
            "Vietnamese"
        ],
        "flag": "vn",
        "population": 97338583,
        "callingCode": "+84",
        "numericCode": "704"
    },
    "Palau": {
        "tld": "pw",
        "currency": {
            "name": "United States dollar",
            "code": "USD",
            "symbol": "$"
        },
        "capital": "Ngerulmud",
        "area": 459,
        "region": "Oceania",
        "languages": [
            "English",
            "Palauan"
        ],
        "flag": "pw",
        "population": 18092,
        "callingCode": "+680",
        "numericCode": "585"
    },
    "Jersey": {
        "tld": "je",
        "currency": {
            "name": "British pound",
            "code": "GBP",
            "symbol": "£"
        },
        "capital": "Saint Helier",
        "area": 116,
        "region": "Europe",
        "languages": [
            "English",
            "French",
            "Jèrriais"
        ],
        "flag": "je",
        "population": 100800,
        "callingCode": "+44",
        "numericCode": "832"
    },
    "Trinidad and Tobago": {
        "tld": "tt",
        "currency": {
            "name": "Trinidad and Tobago dollar",
            "code": "TTD",
            "symbol": "$"
        },
        "capital": "Port of Spain",
        "area": 5130,
        "region": "Americas",
        "languages": [
            "English"
        ],
        "flag": "tt",
        "population": 1399491,
        "callingCode": "+1868",
        "numericCode": "780"
    },
    "Israel": {
        "tld": "il",
        "currency": {
            "name": "Israeli new shekel",
            "code": "ILS",
            "symbol": "₪"
        },
        "capital": "Jerusalem",
        "area": 20770,
        "region": "Asia",
        "languages": [
            "Arabic",
            "Hebrew"
        ],
        "flag": "il",
        "population": 9216900,
        "callingCode": "+972",
        "numericCode": "376"
    },
    "Bulgaria": {
        "tld": "bg",
        "currency": {
            "name": "Bulgarian lev",
            "code": "BGN",
            "symbol": "лв"
        },
        "capital": "Sofia",
        "area": 110879,
        "region": "Europe",
        "languages": [
            "Bulgarian"
        ],
        "flag": "bg",
        "population": 6927288,
        "callingCode": "+359",
        "numericCode": "100"
    },
    "Portugal": {
        "tld": "pt",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Lisbon",
        "area": 92090,
        "region": "Europe",
        "languages": [
            "Portuguese"
        ],
        "flag": "pt",
        "population": 10305564,
        "callingCode": "+351",
        "numericCode": "620"
    },
    "Gibraltar": {
        "tld": "gi",
        "currency": {
            "name": "Gibraltar pound",
            "code": "GIP",
            "symbol": "£"
        },
        "capital": "Gibraltar",
        "area": 6,
        "region": "Europe",
        "languages": [
            "English"
        ],
        "flag": "gi",
        "population": 33691,
        "callingCode": "+350",
        "numericCode": "292"
    },
    "San Marino": {
        "tld": "sm",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "City of San Marino",
        "area": 61,
        "region": "Europe",
        "languages": [
            "Italian"
        ],
        "flag": "sm",
        "population": 33938,
        "callingCode": "+378",
        "numericCode": "674"
    },
    "Singapore": {
        "tld": "sg",
        "currency": {
            "name": "Singapore dollar",
            "code": "SGD",
            "symbol": "$"
        },
        "capital": "Singapore",
        "area": 710,
        "region": "Asia",
        "languages": [
            "Chinese",
            "English",
            "Malay",
            "Tamil"
        ],
        "flag": "sg",
        "population": 5685807,
        "callingCode": "+65",
        "numericCode": "702"
    },
    "Sint Maarten": {
        "tld": "sx",
        "currency": {
            "name": "Netherlands Antillean guilder",
            "code": "ANG",
            "symbol": "ƒ"
        },
        "capital": "Philipsburg",
        "area": 34,
        "region": "Americas",
        "languages": [
            "English",
            "French",
            "Dutch"
        ],
        "flag": "sx",
        "population": 40812,
        "callingCode": "+1721",
        "numericCode": "534"
    },
    "Saudi Arabia": {
        "tld": "sa",
        "currency": {
            "name": "Saudi riyal",
            "code": "SAR",
            "symbol": "ر.س"
        },
        "capital": "Riyadh",
        "area": 2149690,
        "region": "Asia",
        "languages": [
            "Arabic"
        ],
        "flag": "sa",
        "population": 34813867,
        "callingCode": "+966",
        "numericCode": "682"
    },
    "Ghana": {
        "tld": "gh",
        "currency": {
            "name": "Ghanaian cedi",
            "code": "GHS",
            "symbol": "₵"
        },
        "capital": "Accra",
        "area": 238533,
        "region": "Africa",
        "languages": [
            "English"
        ],
        "flag": "gh",
        "population": 31072945,
        "callingCode": "+233",
        "numericCode": "288"
    },
    "Moldova": {
        "tld": "md",
        "currency": {
            "name": "Moldovan leu",
            "code": "MDL",
            "symbol": "L"
        },
        "capital": "Chișinău",
        "area": 33846,
        "region": "Europe",
        "languages": [
            "Moldavian"
        ],
        "flag": "md",
        "population": 2617820,
        "callingCode": "+373",
        "numericCode": "498"
    },
    "Chad": {
        "tld": "td",
        "currency": {
            "name": "Central African CFA franc",
            "code": "XAF",
            "symbol": "Fr"
        },
        "capital": "N'Djamena",
        "area": 1284000,
        "region": "Africa",
        "languages": [
            "Arabic",
            "French"
        ],
        "flag": "td",
        "population": 16425859,
        "callingCode": "+235",
        "numericCode": "148"
    },
    "Antarctica": {
        "tld": "aq",
        "currency": {
            "name": "Antarctic Dollar",
            "code": "AAD",
            "symbol": "$"
        },
        "capital": "N/A",
        "area": 14000000,
        "region": "Antarctic",
        "languages": [
            "N",
            "/",
            "A"
        ],
        "flag": "aq",
        "population": 1000,
        "callingCode": "N/A",
        "numericCode": "010"
    },
    "United Kingdom": {
        "tld": "uk",
        "currency": {
            "name": "British pound",
            "code": "GBP",
            "symbol": "£"
        },
        "capital": "London",
        "area": 242900,
        "region": "Europe",
        "languages": [
            "English"
        ],
        "flag": "gb",
        "population": 67215293,
        "callingCode": "+44",
        "numericCode": "826"
    },
    "Papua New Guinea": {
        "tld": "pg",
        "currency": {
            "name": "Papua New Guinean kina",
            "code": "PGK",
            "symbol": "K"
        },
        "capital": "Port Moresby",
        "area": 462840,
        "region": "Oceania",
        "languages": [
            "English",
            "Hiri Motu",
            "Tok Pisin"
        ],
        "flag": "pg",
        "population": 8947027,
        "callingCode": "+675",
        "numericCode": "598"
    },
    "French Southern and Antarctic Lands": {
        "tld": "tf",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Port-aux-Français",
        "area": 7747,
        "region": "Antarctic",
        "languages": [
            "French"
        ],
        "flag": "tf",
        "population": 400,
        "callingCode": "+262",
        "numericCode": "260"
    },
    "United States Minor Outlying Islands": {
        "tld": "us",
        "currency": {
            "name": "United States dollar",
            "code": "USD",
            "symbol": "$"
        },
        "capital": "N/A",
        "area": 34.2,
        "region": "Americas",
        "languages": [
            "English"
        ],
        "flag": "um",
        "population": 300,
        "callingCode": "+268",
        "numericCode": "581"
    },
    "Belize": {
        "tld": "bz",
        "currency": {
            "name": "Belize dollar",
            "code": "BZD",
            "symbol": "$"
        },
        "capital": "Belmopan",
        "area": 22966,
        "region": "Americas",
        "languages": [
            "Belizean Creole",
            "English",
            "Spanish"
        ],
        "flag": "bz",
        "population": 397621,
        "callingCode": "+501",
        "numericCode": "084"
    },
    "Comoros": {
        "tld": "km",
        "currency": {
            "name": "Comorian franc",
            "code": "KMF",
            "symbol": "Fr"
        },
        "capital": "Moroni",
        "area": 1862,
        "region": "Africa",
        "languages": [
            "Arabic",
            "French",
            "Comorian"
        ],
        "flag": "km",
        "population": 869595,
        "callingCode": "+269",
        "numericCode": "174"
    },
    "Burkina Faso": {
        "tld": "bf",
        "currency": {
            "name": "West African CFA franc",
            "code": "XOF",
            "symbol": "Fr"
        },
        "capital": "Ouagadougou",
        "area": 272967,
        "region": "Africa",
        "languages": [
            "French"
        ],
        "flag": "bf",
        "population": 20903278,
        "callingCode": "+226",
        "numericCode": "854"
    },
    "Faroe Islands": {
        "tld": "fo",
        "currency": {
            "name": "Danish krone",
            "code": "DKK",
            "symbol": "kr"
        },
        "capital": "Tórshavn",
        "area": 1393,
        "region": "Europe",
        "languages": [
            "Danish",
            "Faroese"
        ],
        "flag": "fo",
        "population": 48865,
        "callingCode": "+298",
        "numericCode": "234"
    },
    "Guinea": {
        "tld": "gn",
        "currency": {
            "name": "Guinean franc",
            "code": "GNF",
            "symbol": "Fr"
        },
        "capital": "Conakry",
        "area": 245857,
        "region": "Africa",
        "languages": [
            "French"
        ],
        "flag": "gn",
        "population": 13132792,
        "callingCode": "+224",
        "numericCode": "324"
    },
    "India": {
        "tld": "in",
        "currency": {
            "name": "Indian rupee",
            "code": "INR",
            "symbol": "₹"
        },
        "capital": "New Delhi",
        "area": 3287590,
        "region": "Asia",
        "languages": [
            "English",
            "Hindi",
            "Tamil"
        ],
        "flag": "in",
        "population": 1380004385,
        "callingCode": "+91",
        "numericCode": "356"
    },
    "Curaçao": {
        "tld": "cw",
        "currency": {
            "name": "Netherlands Antillean guilder",
            "code": "ANG",
            "symbol": "ƒ"
        },
        "capital": "Willemstad",
        "area": 444,
        "region": "Americas",
        "languages": [
            "English",
            "Dutch",
            "Papiamento"
        ],
        "flag": "cw",
        "population": 155014,
        "callingCode": "+599",
        "numericCode": "531"
    },
    "Togo": {
        "tld": "tg",
        "currency": {
            "name": "West African CFA franc",
            "code": "XOF",
            "symbol": "Fr"
        },
        "capital": "Lomé",
        "area": 56785,
        "region": "Africa",
        "languages": [
            "French"
        ],
        "flag": "tg",
        "population": 8278737,
        "callingCode": "+228",
        "numericCode": "768"
    },
    "Tunisia": {
        "tld": "tn",
        "currency": {
            "name": "Tunisian dinar",
            "code": "TND",
            "symbol": "د.ت"
        },
        "capital": "Tunis",
        "area": 163610,
        "region": "Africa",
        "languages": [
            "Arabic"
        ],
        "flag": "tn",
        "population": 11818618,
        "callingCode": "+216",
        "numericCode": "788"
    },
    "Saint Barthélemy": {
        "tld": "bl",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Gustavia",
        "area": 21,
        "region": "Americas",
        "languages": [
            "French"
        ],
        "flag": "bl",
        "population": 4255,
        "callingCode": "+590",
        "numericCode": "652"
    },
    "Indonesia": {
        "tld": "id",
        "currency": {
            "name": "Indonesian rupiah",
            "code": "IDR",
            "symbol": "Rp"
        },
        "capital": "Jakarta",
        "area": 1904569,
        "region": "Asia",
        "languages": [
            "Indonesian"
        ],
        "flag": "id",
        "population": 273523621,
        "callingCode": "+62",
        "numericCode": "360"
    },
    "Micronesia": {
        "tld": "fm",
        "currency": {
            "name": "United States dollar",
            "code": "USD",
            "symbol": "$"
        },
        "capital": "Palikir",
        "area": 702,
        "region": "Oceania",
        "languages": [
            "English"
        ],
        "flag": "fm",
        "population": 115021,
        "callingCode": "+691",
        "numericCode": "583"
    },
    "Austria": {
        "tld": "at",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Vienna",
        "area": 83871,
        "region": "Europe",
        "languages": [
            "Austro-Bavarian German"
        ],
        "flag": "at",
        "population": 8917205,
        "callingCode": "+43",
        "numericCode": "040"
    },
    "Tajikistan": {
        "tld": "tj",
        "currency": {
            "name": "Tajikistani somoni",
            "code": "TJS",
            "symbol": "ЅМ"
        },
        "capital": "Dushanbe",
        "area": 143100,
        "region": "Asia",
        "languages": [
            "Russian",
            "Tajik"
        ],
        "flag": "tj",
        "population": 9537642,
        "callingCode": "+992",
        "numericCode": "762"
    },
    "DR Congo": {
        "tld": "cd",
        "currency": {
            "name": "Congolese franc",
            "code": "CDF",
            "symbol": "FC"
        },
        "capital": "Kinshasa",
        "area": 2344858,
        "region": "Africa",
        "languages": [
            "French",
            "Kikongo",
            "Lingala",
            "Tshiluba",
            "Swahili"
        ],
        "flag": "cd",
        "population": 89561404,
        "callingCode": "+243",
        "numericCode": "180"
    },
    "Mayotte": {
        "tld": "yt",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Mamoudzou",
        "area": 374,
        "region": "Africa",
        "languages": [
            "French"
        ],
        "flag": "yt",
        "population": 226915,
        "callingCode": "+262",
        "numericCode": "175"
    },
    "Réunion": {
        "tld": "re",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Saint-Denis",
        "area": 2511,
        "region": "Africa",
        "languages": [
            "French"
        ],
        "flag": "re",
        "population": 840974,
        "callingCode": "+262",
        "numericCode": "638"
    },
    "Romania": {
        "tld": "ro",
        "currency": {
            "name": "Romanian leu",
            "code": "RON",
            "symbol": "lei"
        },
        "capital": "Bucharest",
        "area": 238391,
        "region": "Europe",
        "languages": [
            "Romanian"
        ],
        "flag": "ro",
        "population": 19286123,
        "callingCode": "+40",
        "numericCode": "642"
    },
    "Qatar": {
        "tld": "qa",
        "currency": {
            "name": "Qatari riyal",
            "code": "QAR",
            "symbol": "ر.ق"
        },
        "capital": "Doha",
        "area": 11586,
        "region": "Asia",
        "languages": [
            "Arabic"
        ],
        "flag": "qa",
        "population": 2881060,
        "callingCode": "+974",
        "numericCode": "634"
    },
    "Lithuania": {
        "tld": "lt",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Vilnius",
        "area": 65300,
        "region": "Europe",
        "languages": [
            "Lithuanian"
        ],
        "flag": "lt",
        "population": 2794700,
        "callingCode": "+370",
        "numericCode": "440"
    },
    "China": {
        "tld": "cn",
        "currency": {
            "name": "Chinese yuan",
            "code": "CNY",
            "symbol": "¥"
        },
        "capital": "Beijing",
        "area": 9706961,
        "region": "Asia",
        "languages": [
            "Chinese"
        ],
        "flag": "cn",
        "population": 1402112000,
        "callingCode": "+86",
        "numericCode": "156"
    },
    "New Zealand": {
        "tld": "nz",
        "currency": {
            "name": "New Zealand dollar",
            "code": "NZD",
            "symbol": "$"
        },
        "capital": "Wellington",
        "area": 270467,
        "region": "Oceania",
        "languages": [
            "English",
            "Māori",
            "New Zealand Sign Language"
        ],
        "flag": "nz",
        "population": 5084300,
        "callingCode": "+64",
        "numericCode": "554"
    },
    "Norfolk Island": {
        "tld": "nf",
        "currency": {
            "name": "Australian dollar",
            "code": "AUD",
            "symbol": "$"
        },
        "capital": "Kingston",
        "area": 36,
        "region": "Oceania",
        "languages": [
            "English",
            "Norfuk"
        ],
        "flag": "nf",
        "population": 2302,
        "callingCode": "+672",
        "numericCode": "574"
    },
    "Mauritania": {
        "tld": "mr",
        "currency": {
            "name": "Mauritanian ouguiya",
            "code": "MRU",
            "symbol": "UM"
        },
        "capital": "Nouakchott",
        "area": 1030700,
        "region": "Africa",
        "languages": [
            "Arabic"
        ],
        "flag": "mr",
        "population": 4649660,
        "callingCode": "+222",
        "numericCode": "478"
    },
    "Uzbekistan": {
        "tld": "uz",
        "currency": {
            "name": "Uzbekistani soʻm",
            "code": "UZS",
            "symbol": "so'm"
        },
        "capital": "Tashkent",
        "area": 447400,
        "region": "Asia",
        "languages": [
            "Russian",
            "Uzbek"
        ],
        "flag": "uz",
        "population": 34232050,
        "callingCode": "+998",
        "numericCode": "860"
    },
    "Finland": {
        "tld": "fi",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Helsinki",
        "area": 338424,
        "region": "Europe",
        "languages": [
            "Finnish",
            "Swedish"
        ],
        "flag": "fi",
        "population": 5530719,
        "callingCode": "+358",
        "numericCode": "246"
    },
    "Cameroon": {
        "tld": "cm",
        "currency": {
            "name": "Central African CFA franc",
            "code": "XAF",
            "symbol": "Fr"
        },
        "capital": "Yaoundé",
        "area": 475442,
        "region": "Africa",
        "languages": [
            "English",
            "French"
        ],
        "flag": "cm",
        "population": 26545864,
        "callingCode": "+237",
        "numericCode": "120"
    },
    "Heard Island and McDonald Islands": {
        "tld": "hm",
        "currency": {
            "name": "Australian dollar",
            "code": "AUD",
            "symbol": "$"
        },
        "capital": "N/A",
        "area": 412,
        "region": "Antarctic",
        "languages": [
            "English"
        ],
        "flag": "hm",
        "population": 0,
        "callingCode": "N/A",
        "numericCode": "334"
    },
    "Dominica": {
        "tld": "dm",
        "currency": {
            "name": "Eastern Caribbean dollar",
            "code": "XCD",
            "symbol": "$"
        },
        "capital": "Roseau",
        "area": 751,
        "region": "Americas",
        "languages": [
            "English"
        ],
        "flag": "dm",
        "population": 71991,
        "callingCode": "+1767",
        "numericCode": "212"
    },
    "Iceland": {
        "tld": "is",
        "currency": {
            "name": "Icelandic króna",
            "code": "ISK",
            "symbol": "kr"
        },
        "capital": "Reykjavik",
        "area": 103000,
        "region": "Europe",
        "languages": [
            "Icelandic"
        ],
        "flag": "is",
        "population": 366425,
        "callingCode": "+354",
        "numericCode": "352"
    },
    "Oman": {
        "tld": "om",
        "currency": {
            "name": "Omani rial",
            "code": "OMR",
            "symbol": "ر.ع."
        },
        "capital": "Muscat",
        "area": 309500,
        "region": "Asia",
        "languages": [
            "Arabic"
        ],
        "flag": "om",
        "population": 5106622,
        "callingCode": "+968",
        "numericCode": "512"
    },
    "North Macedonia": {
        "tld": "mk",
        "currency": {
            "name": "denar",
            "code": "MKD",
            "symbol": "den"
        },
        "capital": "Skopje",
        "area": 25713,
        "region": "Europe",
        "languages": [
            "Macedonian"
        ],
        "flag": "mk",
        "population": 2077132,
        "callingCode": "+389",
        "numericCode": "807"
    },
    "Liechtenstein": {
        "tld": "li",
        "currency": {
            "name": "Swiss franc",
            "code": "CHF",
            "symbol": "Fr"
        },
        "capital": "Vaduz",
        "area": 160,
        "region": "Europe",
        "languages": [
            "German"
        ],
        "flag": "li",
        "population": 38137,
        "callingCode": "+423",
        "numericCode": "438"
    },
    "Spain": {
        "tld": "es",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Madrid",
        "area": 505992,
        "region": "Europe",
        "languages": [
            "Spanish"
        ],
        "flag": "es",
        "population": 47351567,
        "callingCode": "+34",
        "numericCode": "724"
    },
    "Greece": {
        "tld": "gr",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Athens",
        "area": 131990,
        "region": "Europe",
        "languages": [
            "Greek"
        ],
        "flag": "gr",
        "population": 10715549,
        "callingCode": "+30",
        "numericCode": "300"
    },
    "Paraguay": {
        "tld": "py",
        "currency": {
            "name": "Paraguayan guaraní",
            "code": "PYG",
            "symbol": "₲"
        },
        "capital": "Asunción",
        "area": 406752,
        "region": "Americas",
        "languages": [
            "Guaraní",
            "Spanish"
        ],
        "flag": "py",
        "population": 7132530,
        "callingCode": "+595",
        "numericCode": "600"
    },
    "Bahrain": {
        "tld": "bh",
        "currency": {
            "name": "Bahraini dinar",
            "code": "BHD",
            "symbol": ".د.ب"
        },
        "capital": "Manama",
        "area": 765,
        "region": "Asia",
        "languages": [
            "Arabic"
        ],
        "flag": "bh",
        "population": 1701583,
        "callingCode": "+973",
        "numericCode": "048"
    },
    "Niue": {
        "tld": "nu",
        "currency": {
            "name": "New Zealand dollar",
            "code": "NZD",
            "symbol": "$"
        },
        "capital": "Alofi",
        "area": 260,
        "region": "Oceania",
        "languages": [
            "English",
            "Niuean"
        ],
        "flag": "nu",
        "population": 1470,
        "callingCode": "+683",
        "numericCode": "570"
    },
    "Senegal": {
        "tld": "sn",
        "currency": {
            "name": "West African CFA franc",
            "code": "XOF",
            "symbol": "Fr"
        },
        "capital": "Dakar",
        "area": 196722,
        "region": "Africa",
        "languages": [
            "French"
        ],
        "flag": "sn",
        "population": 16743930,
        "callingCode": "+221",
        "numericCode": "686"
    },
    "Montserrat": {
        "tld": "ms",
        "currency": {
            "name": "Eastern Caribbean dollar",
            "code": "XCD",
            "symbol": "$"
        },
        "capital": "Plymouth",
        "area": 102,
        "region": "Americas",
        "languages": [
            "English"
        ],
        "flag": "ms",
        "population": 4922,
        "callingCode": "+1664",
        "numericCode": "500"
    },
    "Latvia": {
        "tld": "lv",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Riga",
        "area": 64559,
        "region": "Europe",
        "languages": [
            "Latvian"
        ],
        "flag": "lv",
        "population": 1901548,
        "callingCode": "+371",
        "numericCode": "428"
    },
    "Tokelau": {
        "tld": "tk",
        "currency": {
            "name": "New Zealand dollar",
            "code": "NZD",
            "symbol": "$"
        },
        "capital": "Fakaofo",
        "area": 12,
        "region": "Oceania",
        "languages": [
            "English",
            "Samoan",
            "Tokelauan"
        ],
        "flag": "tk",
        "population": 1411,
        "callingCode": "+690",
        "numericCode": "772"
    },
    "Japan": {
        "tld": "jp",
        "currency": {
            "name": "Japanese yen",
            "code": "JPY",
            "symbol": "¥"
        },
        "capital": "Tokyo",
        "area": 377930,
        "region": "Asia",
        "languages": [
            "Japanese"
        ],
        "flag": "jp",
        "population": 125836021,
        "callingCode": "+81",
        "numericCode": "392"
    },
    "Central African Republic": {
        "tld": "cf",
        "currency": {
            "name": "Central African CFA franc",
            "code": "XAF",
            "symbol": "Fr"
        },
        "capital": "Bangui",
        "area": 622984,
        "region": "Africa",
        "languages": [
            "French",
            "Sango"
        ],
        "flag": "cf",
        "population": 4829764,
        "callingCode": "+236",
        "numericCode": "140"
    },
    "Gabon": {
        "tld": "ga",
        "currency": {
            "name": "Central African CFA franc",
            "code": "XAF",
            "symbol": "Fr"
        },
        "capital": "Libreville",
        "area": 267668,
        "region": "Africa",
        "languages": [
            "French"
        ],
        "flag": "ga",
        "population": 2225728,
        "callingCode": "+241",
        "numericCode": "266"
    },
    "Iraq": {
        "tld": "iq",
        "currency": {
            "name": "Iraqi dinar",
            "code": "IQD",
            "symbol": "ع.د"
        },
        "capital": "Baghdad",
        "area": 438317,
        "region": "Asia",
        "languages": [
            "Arabic",
            "Aramaic",
            "Sorani"
        ],
        "flag": "iq",
        "population": 40222503,
        "callingCode": "+964",
        "numericCode": "368"
    },
    "Isle of Man": {
        "tld": "im",
        "currency": {
            "name": "British pound",
            "code": "GBP",
            "symbol": "£"
        },
        "capital": "Douglas",
        "area": 572,
        "region": "Europe",
        "languages": [
            "English",
            "Manx"
        ],
        "flag": "im",
        "population": 85032,
        "callingCode": "+44",
        "numericCode": "833"
    },
    "Myanmar": {
        "tld": "mm",
        "currency": {
            "name": "Burmese kyat",
            "code": "MMK",
            "symbol": "Ks"
        },
        "capital": "Naypyidaw",
        "area": 676578,
        "region": "Asia",
        "languages": [
            "Burmese"
        ],
        "flag": "mm",
        "population": 54409794,
        "callingCode": "+95",
        "numericCode": "104"
    },
    "Montenegro": {
        "tld": "me",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Podgorica",
        "area": 13812,
        "region": "Europe",
        "languages": [
            "Montenegrin"
        ],
        "flag": "me",
        "population": 621718,
        "callingCode": "+382",
        "numericCode": "499"
    },
    "Nauru": {
        "tld": "nr",
        "currency": {
            "name": "Australian dollar",
            "code": "AUD",
            "symbol": "$"
        },
        "capital": "Yaren",
        "area": 21,
        "region": "Oceania",
        "languages": [
            "English",
            "Nauru"
        ],
        "flag": "nr",
        "population": 10834,
        "callingCode": "+674",
        "numericCode": "520"
    },
    "Vanuatu": {
        "tld": "vu",
        "currency": {
            "name": "Vanuatu vatu",
            "code": "VUV",
            "symbol": "Vt"
        },
        "capital": "Port Vila",
        "area": 12189,
        "region": "Oceania",
        "languages": [
            "Bislama",
            "English",
            "French"
        ],
        "flag": "vu",
        "population": 307150,
        "callingCode": "+678",
        "numericCode": "548"
    },
    "France": {
        "tld": "fr",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Paris",
        "area": 551695,
        "region": "Europe",
        "languages": [
            "French"
        ],
        "flag": "fr",
        "population": 67391582,
        "callingCode": "+33",
        "numericCode": "250"
    },
    "Zimbabwe": {
        "tld": "zw",
        "currency": {
            "name": "Zimbabwean dollar",
            "code": "ZWL",
            "symbol": "$"
        },
        "capital": "Harare",
        "area": 390757,
        "region": "Africa",
        "languages": [
            "Chibarwe",
            "English",
            "Kalanga",
            "Khoisan",
            "Ndau",
            "Northern Ndebele",
            "Chewa",
            "Shona",
            "Sotho",
            "Tonga",
            "Tswana",
            "Tsonga",
            "Venda",
            "Xhosa",
            "Zimbabwean Sign Language"
        ],
        "flag": "zw",
        "population": 14862927,
        "callingCode": "+263",
        "numericCode": "716"
    },
    "Philippines": {
        "tld": "ph",
        "currency": {
            "name": "Philippine peso",
            "code": "PHP",
            "symbol": "₱"
        },
        "capital": "Manila",
        "area": 342353,
        "region": "Asia",
        "languages": [
            "English",
            "Filipino"
        ],
        "flag": "ph",
        "population": 109581085,
        "callingCode": "+63",
        "numericCode": "608"
    },
    "Slovakia": {
        "tld": "sk",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Bratislava",
        "area": 49037,
        "region": "Europe",
        "languages": [
            "Slovak"
        ],
        "flag": "sk",
        "population": 5458827,
        "callingCode": "+421",
        "numericCode": "703"
    },
    "Australia": {
        "tld": "au",
        "currency": {
            "name": "Australian dollar",
            "code": "AUD",
            "symbol": "$"
        },
        "capital": "Canberra",
        "area": 7692024,
        "region": "Oceania",
        "languages": [
            "English"
        ],
        "flag": "au",
        "population": 25687041,
        "callingCode": "+61",
        "numericCode": "036"
    },
    "Ivory Coast": {
        "tld": "ci",
        "currency": {
            "name": "West African CFA franc",
            "code": "XOF",
            "symbol": "Fr"
        },
        "capital": "Yamoussoukro",
        "area": 322463,
        "region": "Africa",
        "languages": [
            "French"
        ],
        "flag": "ci",
        "population": 26378275,
        "callingCode": "+225",
        "numericCode": "384"
    },
    "British Indian Ocean Territory": {
        "tld": "io",
        "currency": {
            "name": "United States dollar",
            "code": "USD",
            "symbol": "$"
        },
        "capital": "Diego Garcia",
        "area": 60,
        "region": "Africa",
        "languages": [
            "English"
        ],
        "flag": "io",
        "population": 3000,
        "callingCode": "+246",
        "numericCode": "086"
    },
    "Eswatini": {
        "tld": "sz",
        "currency": {
            "name": "Swazi lilangeni",
            "code": "SZL",
            "symbol": "L"
        },
        "capital": "Mbabane",
        "area": 17364,
        "region": "Africa",
        "languages": [
            "English",
            "Swazi"
        ],
        "flag": "sz",
        "population": 1160164,
        "callingCode": "+268",
        "numericCode": "748"
    },
    "Rwanda": {
        "tld": "rw",
        "currency": {
            "name": "Rwandan franc",
            "code": "RWF",
            "symbol": "Fr"
        },
        "capital": "Kigali",
        "area": 26338,
        "region": "Africa",
        "languages": [
            "English",
            "French",
            "Kinyarwanda"
        ],
        "flag": "rw",
        "population": 12952209,
        "callingCode": "+250",
        "numericCode": "646"
    },
    "Benin": {
        "tld": "bj",
        "currency": {
            "name": "West African CFA franc",
            "code": "XOF",
            "symbol": "Fr"
        },
        "capital": "Porto-Novo",
        "area": 112622,
        "region": "Africa",
        "languages": [
            "French"
        ],
        "flag": "bj",
        "population": 12123198,
        "callingCode": "+229",
        "numericCode": "204"
    },
    "British Virgin Islands": {
        "tld": "vg",
        "currency": {
            "name": "United States dollar",
            "code": "USD",
            "symbol": "$"
        },
        "capital": "Road Town",
        "area": 151,
        "region": "Americas",
        "languages": [
            "English"
        ],
        "flag": "vg",
        "population": 30237,
        "callingCode": "+1284",
        "numericCode": "092"
    },
    "Uganda": {
        "tld": "ug",
        "currency": {
            "name": "Ugandan shilling",
            "code": "UGX",
            "symbol": "Sh"
        },
        "capital": "Kampala",
        "area": 241550,
        "region": "Africa",
        "languages": [
            "English",
            "Swahili"
        ],
        "flag": "ug",
        "population": 45741000,
        "callingCode": "+256",
        "numericCode": "800"
    },
    "Ireland": {
        "tld": "ie",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Dublin",
        "area": 70273,
        "region": "Europe",
        "languages": [
            "English",
            "Irish"
        ],
        "flag": "ie",
        "population": 4994724,
        "callingCode": "+353",
        "numericCode": "372"
    },
    "Iran": {
        "tld": "ir",
        "currency": {
            "name": "Iranian rial",
            "code": "IRR",
            "symbol": "﷼"
        },
        "capital": "Tehran",
        "area": 1648195,
        "region": "Asia",
        "languages": [
            "Persian (Farsi)"
        ],
        "flag": "ir",
        "population": 83992953,
        "callingCode": "+98",
        "numericCode": "364"
    },
    "Slovenia": {
        "tld": "si",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Ljubljana",
        "area": 20273,
        "region": "Europe",
        "languages": [
            "Slovene"
        ],
        "flag": "si",
        "population": 2100126,
        "callingCode": "+386",
        "numericCode": "705"
    },
    "Mali": {
        "tld": "ml",
        "currency": {
            "name": "West African CFA franc",
            "code": "XOF",
            "symbol": "Fr"
        },
        "capital": "Bamako",
        "area": 1240192,
        "region": "Africa",
        "languages": [
            "French"
        ],
        "flag": "ml",
        "population": 20250834,
        "callingCode": "+223",
        "numericCode": "466"
    },
    "Switzerland": {
        "tld": "ch",
        "currency": {
            "name": "Swiss franc",
            "code": "CHF",
            "symbol": "Fr."
        },
        "capital": "Bern",
        "area": 41284,
        "region": "Europe",
        "languages": [
            "French",
            "Swiss German",
            "Italian",
            "Romansh"
        ],
        "flag": "ch",
        "population": 17500657,
        "callingCode": "+41",
        "numericCode": "756"
    },
    "American Samoa": {
        "tld": "as",
        "currency": {
            "name": "United States dollar",
            "code": "USD",
            "symbol": "$"
        },
        "capital": "Pago Pago",
        "area": 199,
        "region": "Oceania",
        "languages": [
            "English",
            "Samoan"
        ],
        "flag": "as",
        "population": 55197,
        "callingCode": "+1684",
        "numericCode": "016"
    },
    "Uruguay": {
        "tld": "uy",
        "currency": {
            "name": "Uruguayan peso",
            "code": "UYU",
            "symbol": "$"
        },
        "capital": "Montevideo",
        "area": 181034,
        "region": "Americas",
        "languages": [
            "Spanish"
        ],
        "flag": "uy",
        "population": 3473727,
        "callingCode": "+598",
        "numericCode": "858"
    },
    "Guam": {
        "tld": "gu",
        "currency": {
            "name": "United States dollar",
            "code": "USD",
            "symbol": "$"
        },
        "capital": "Hagåtña",
        "area": 549,
        "region": "Oceania",
        "languages": [
            "Chamorro",
            "English",
            "Spanish"
        ],
        "flag": "gu",
        "population": 168783,
        "callingCode": "+1671",
        "numericCode": "316"
    },
    "Suriname": {
        "tld": "sr",
        "currency": {
            "name": "Surinamese dollar",
            "code": "SRD",
            "symbol": "$"
        },
        "capital": "Paramaribo",
        "area": 163820,
        "region": "Americas",
        "languages": [
            "Dutch"
        ],
        "flag": "sr",
        "population": 586634,
        "callingCode": "+597",
        "numericCode": "740"
    },
    "Ukraine": {
        "tld": "ua",
        "currency": {
            "name": "Ukrainian hryvnia",
            "code": "UAH",
            "symbol": "₴"
        },
        "capital": "Kyiv",
        "area": 603500,
        "region": "Europe",
        "languages": [
            "Ukrainian"
        ],
        "flag": "ua",
        "population": 44134693,
        "callingCode": "+380",
        "numericCode": "804"
    },
    "Czechia": {
        "tld": "cz",
        "currency": {
            "name": "Czech koruna",
            "code": "CZK",
            "symbol": "Kč"
        },
        "capital": "Prague",
        "area": 78865,
        "region": "Europe",
        "languages": [
            "Czech",
            "Slovak"
        ],
        "flag": "cz",
        "population": 10698896,
        "callingCode": "+420",
        "numericCode": "203"
    },
    "Honduras": {
        "tld": "hn",
        "currency": {
            "name": "Honduran lempira",
            "code": "HNL",
            "symbol": "L"
        },
        "capital": "Tegucigalpa",
        "area": 112492,
        "region": "Americas",
        "languages": [
            "Spanish"
        ],
        "flag": "hn",
        "population": 9904608,
        "callingCode": "+504",
        "numericCode": "340"
    },
    "Samoa": {
        "tld": "ws",
        "currency": {
            "name": "Samoan tālā",
            "code": "WST",
            "symbol": "T"
        },
        "capital": "Apia",
        "area": 2842,
        "region": "Oceania",
        "languages": [
            "English",
            "Samoan"
        ],
        "flag": "ws",
        "population": 198410,
        "callingCode": "+685",
        "numericCode": "882"
    },
    "Laos": {
        "tld": "la",
        "currency": {
            "name": "Lao kip",
            "code": "LAK",
            "symbol": "₭"
        },
        "capital": "Vientiane",
        "area": 236800,
        "region": "Asia",
        "languages": [
            "Lao"
        ],
        "flag": "la",
        "population": 7275556,
        "callingCode": "+856",
        "numericCode": "418"
    },
    "Cape Verde": {
        "tld": "cv",
        "currency": {
            "name": "Cape Verdean escudo",
            "code": "CVE",
            "symbol": "Esc"
        },
        "capital": "Praia",
        "area": 4033,
        "region": "Africa",
        "languages": [
            "Portuguese"
        ],
        "flag": "cv",
        "population": 555988,
        "callingCode": "+238",
        "numericCode": "132"
    },
    "Ethiopia": {
        "tld": "et",
        "currency": {
            "name": "Ethiopian birr",
            "code": "ETB",
            "symbol": "Br"
        },
        "capital": "Addis Ababa",
        "area": 1104300,
        "region": "Africa",
        "languages": [
            "Amharic"
        ],
        "flag": "et",
        "population": 114963583,
        "callingCode": "+251",
        "numericCode": "231"
    },
    "Bangladesh": {
        "tld": "bd",
        "currency": {
            "name": "Bangladeshi taka",
            "code": "BDT",
            "symbol": "৳"
        },
        "capital": "Dhaka",
        "area": 147570,
        "region": "Asia",
        "languages": [
            "Bengali"
        ],
        "flag": "bd",
        "population": 164689383,
        "callingCode": "+880",
        "numericCode": "050"
    },
    "Saint Helena, Ascension and Tristan da Cunha": {
        "tld": "sh",
        "currency": {
            "name": "Pound sterling",
            "code": "GBP",
            "symbol": "£"
        },
        "capital": "Jamestown",
        "area": 394,
        "region": "Africa",
        "languages": [
            "English"
        ],
        "flag": "sh",
        "population": 53192,
        "callingCode": "+290",
        "numericCode": "654"
    },
    "Belarus": {
        "tld": "by",
        "currency": {
            "name": "Belarusian ruble",
            "code": "BYN",
            "symbol": "Br"
        },
        "capital": "Minsk",
        "area": 207600,
        "region": "Europe",
        "languages": [
            "Belarusian",
            "Russian"
        ],
        "flag": "by",
        "population": 9398861,
        "callingCode": "+375",
        "numericCode": "112"
    },
    "Croatia": {
        "tld": "hr",
        "currency": {
            "name": "Croatian kuna",
            "code": "HRK",
            "symbol": "kn"
        },
        "capital": "Zagreb",
        "area": 56594,
        "region": "Europe",
        "languages": [
            "Croatian"
        ],
        "flag": "hr",
        "population": 4047200,
        "callingCode": "+385",
        "numericCode": "191"
    },
    "Kuwait": {
        "tld": "kw",
        "currency": {
            "name": "Kuwaiti dinar",
            "code": "KWD",
            "symbol": "د.ك"
        },
        "capital": "Kuwait City",
        "area": 17818,
        "region": "Asia",
        "languages": [
            "Arabic"
        ],
        "flag": "kw",
        "population": 4270563,
        "callingCode": "+965",
        "numericCode": "414"
    },
    "French Guiana": {
        "tld": "gf",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Cayenne",
        "area": 83534,
        "region": "Americas",
        "languages": [
            "French"
        ],
        "flag": "gf",
        "population": 254541,
        "callingCode": "+594",
        "numericCode": "254"
    },
    "Morocco": {
        "tld": "ma",
        "currency": {
            "name": "Moroccan dirham",
            "code": "MAD",
            "symbol": "د.م."
        },
        "capital": "Rabat",
        "area": 446550,
        "region": "Africa",
        "languages": [
            "Arabic",
            "Berber"
        ],
        "flag": "ma",
        "population": 36910558,
        "callingCode": "+212",
        "numericCode": "504"
    },
    "Russia": {
        "tld": "ru",
        "currency": {
            "name": "Russian ruble",
            "code": "RUB",
            "symbol": "₽"
        },
        "capital": "Moscow",
        "area": 17098242,
        "region": "Europe",
        "languages": [
            "Russian"
        ],
        "flag": "ru",
        "population": 144104080,
        "callingCode": "+73",
        "numericCode": "643"
    },
    "Estonia": {
        "tld": "ee",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Tallinn",
        "area": 45227,
        "region": "Europe",
        "languages": [
            "Estonian"
        ],
        "flag": "ee",
        "population": 1331057,
        "callingCode": "+372",
        "numericCode": "233"
    },
    "Sri Lanka": {
        "tld": "lk",
        "currency": {
            "name": "Sri Lankan rupee",
            "code": "LKR",
            "symbol": "Rs  රු"
        },
        "capital": "Sri Jayawardenepura Kotte",
        "area": 65610,
        "region": "Asia",
        "languages": [
            "Sinhala",
            "Tamil"
        ],
        "flag": "lk",
        "population": 21919000,
        "callingCode": "+94",
        "numericCode": "144"
    },
    "New Caledonia": {
        "tld": "nc",
        "currency": {
            "name": "CFP franc",
            "code": "XPF",
            "symbol": "₣"
        },
        "capital": "Nouméa",
        "area": 18575,
        "region": "Oceania",
        "languages": [
            "French"
        ],
        "flag": "nc",
        "population": 271960,
        "callingCode": "+687",
        "numericCode": "540"
    },
    "Poland": {
        "tld": "pl",
        "currency": {
            "name": "Polish złoty",
            "code": "PLN",
            "symbol": "zł"
        },
        "capital": "Warsaw",
        "area": 312679,
        "region": "Europe",
        "languages": [
            "Polish"
        ],
        "flag": "pl",
        "population": 37950802,
        "callingCode": "+48",
        "numericCode": "616"
    },
    "Madagascar": {
        "tld": "mg",
        "currency": {
            "name": "Malagasy ariary",
            "code": "MGA",
            "symbol": "Ar"
        },
        "capital": "Antananarivo",
        "area": 587041,
        "region": "Africa",
        "languages": [
            "French",
            "Malagasy"
        ],
        "flag": "mg",
        "population": 27691019,
        "callingCode": "+261",
        "numericCode": "450"
    },
    "Costa Rica": {
        "tld": "cr",
        "currency": {
            "name": "Costa Rican colón",
            "code": "CRC",
            "symbol": "₡"
        },
        "capital": "San José",
        "area": 51100,
        "region": "Americas",
        "languages": [
            "Spanish"
        ],
        "flag": "cr",
        "population": 5094114,
        "callingCode": "+506",
        "numericCode": "188"
    },
    "El Salvador": {
        "tld": "sv",
        "currency": {
            "name": "United States dollar",
            "code": "USD",
            "symbol": "$"
        },
        "capital": "San Salvador",
        "area": 21041,
        "region": "Americas",
        "languages": [
            "Spanish"
        ],
        "flag": "sv",
        "population": 6486201,
        "callingCode": "+503",
        "numericCode": "222"
    },
    "Macau": {
        "tld": "mo",
        "currency": {
            "name": "Macanese pataca",
            "code": "MOP",
            "symbol": "P"
        },
        "capital": "N/A",
        "area": 30,
        "region": "Asia",
        "languages": [
            "Portuguese",
            "Chinese"
        ],
        "flag": "mo",
        "population": 649342,
        "callingCode": "+853",
        "numericCode": "446"
    },
    "Andorra": {
        "tld": "ad",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Andorra la Vella",
        "area": 468,
        "region": "Europe",
        "languages": [
            "Catalan"
        ],
        "flag": "ad",
        "population": 77265,
        "callingCode": "+376",
        "numericCode": "020"
    },
    "Italy": {
        "tld": "it",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Rome",
        "area": 301336,
        "region": "Europe",
        "languages": [
            "Italian"
        ],
        "flag": "it",
        "population": 59554023,
        "callingCode": "+39",
        "numericCode": "380"
    },
    "Namibia": {
        "tld": "na",
        "currency": {
            "name": "Namibian dollar",
            "code": "NAD",
            "symbol": "$"
        },
        "capital": "Windhoek",
        "area": 825615,
        "region": "Africa",
        "languages": [
            "Afrikaans",
            "German",
            "English",
            "Herero",
            "Khoekhoe",
            "Kwangali",
            "Lozi",
            "Ndonga",
            "Tswana"
        ],
        "flag": "na",
        "population": 2540916,
        "callingCode": "+264",
        "numericCode": "516"
    },
    "Seychelles": {
        "tld": "sc",
        "currency": {
            "name": "Seychellois rupee",
            "code": "SCR",
            "symbol": "₨"
        },
        "capital": "Victoria",
        "area": 452,
        "region": "Africa",
        "languages": [
            "Seychellois Creole",
            "English",
            "French"
        ],
        "flag": "sc",
        "population": 98462,
        "callingCode": "+248",
        "numericCode": "690"
    },
    "Panama": {
        "tld": "pa",
        "currency": {
            "name": "Panamanian balboa",
            "code": "PAB",
            "symbol": "B/."
        },
        "capital": "Panama City",
        "area": 75417,
        "region": "Americas",
        "languages": [
            "Spanish"
        ],
        "flag": "pa",
        "population": 4314768,
        "callingCode": "+507",
        "numericCode": "591"
    },
    "Haiti": {
        "tld": "ht",
        "currency": {
            "name": "Haitian gourde",
            "code": "HTG",
            "symbol": "G"
        },
        "capital": "Port-au-Prince",
        "area": 27750,
        "region": "Americas",
        "languages": [
            "French",
            "Haitian Creole"
        ],
        "flag": "ht",
        "population": 11402533,
        "callingCode": "+509",
        "numericCode": "332"
    },
    "Argentina": {
        "tld": "ar",
        "currency": {
            "name": "Argentine peso",
            "code": "ARS",
            "symbol": "$"
        },
        "capital": "Buenos Aires",
        "area": 2780400,
        "region": "Americas",
        "languages": [
            "Guaraní",
            "Spanish"
        ],
        "flag": "ar",
        "population": 45376763,
        "callingCode": "+54",
        "numericCode": "032"
    },
    "Niger": {
        "tld": "ne",
        "currency": {
            "name": "West African CFA franc",
            "code": "XOF",
            "symbol": "Fr"
        },
        "capital": "Niamey",
        "area": 1267000,
        "region": "Africa",
        "languages": [
            "French"
        ],
        "flag": "ne",
        "population": 24206636,
        "callingCode": "+227",
        "numericCode": "562"
    },
    "Malawi": {
        "tld": "mw",
        "currency": {
            "name": "Malawian kwacha",
            "code": "MWK",
            "symbol": "MK"
        },
        "capital": "Lilongwe",
        "area": 118484,
        "region": "Africa",
        "languages": [
            "English",
            "Chewa"
        ],
        "flag": "mw",
        "population": 19129955,
        "callingCode": "+265",
        "numericCode": "454"
    },
    "Pitcairn Islands": {
        "tld": "pn",
        "currency": {
            "name": "New Zealand dollar",
            "code": "NZD",
            "symbol": "$"
        },
        "capital": "Adamstown",
        "area": 47,
        "region": "Oceania",
        "languages": [
            "English"
        ],
        "flag": "pn",
        "population": 56,
        "callingCode": "+64",
        "numericCode": "612"
    },
    "Germany": {
        "tld": "de",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Berlin",
        "area": 357114,
        "region": "Europe",
        "languages": [
            "German"
        ],
        "flag": "de",
        "population": 83240525,
        "callingCode": "+49",
        "numericCode": "276"
    },
    "Kiribati": {
        "tld": "ki",
        "currency": {
            "name": "Australian dollar",
            "code": "AUD",
            "symbol": "$"
        },
        "capital": "South Tarawa",
        "area": 811,
        "region": "Oceania",
        "languages": [
            "English",
            "Gilbertese"
        ],
        "flag": "ki",
        "population": 119446,
        "callingCode": "+686",
        "numericCode": "296"
    },
    "Syria": {
        "tld": "sy",
        "currency": {
            "name": "Syrian pound",
            "code": "SYP",
            "symbol": "£"
        },
        "capital": "Damascus",
        "area": 185180,
        "region": "Asia",
        "languages": [
            "Arabic"
        ],
        "flag": "sy",
        "population": 17500657,
        "callingCode": "+963",
        "numericCode": "760"
    },
    "Marshall Islands": {
        "tld": "mh",
        "currency": {
            "name": "United States dollar",
            "code": "USD",
            "symbol": "$"
        },
        "capital": "Majuro",
        "area": 181,
        "region": "Oceania",
        "languages": [
            "English",
            "Marshallese"
        ],
        "flag": "mh",
        "population": 59194,
        "callingCode": "+692",
        "numericCode": "584"
    },
    "Hungary": {
        "tld": "hu",
        "currency": {
            "name": "Hungarian forint",
            "code": "HUF",
            "symbol": "Ft"
        },
        "capital": "Budapest",
        "area": 93028,
        "region": "Europe",
        "languages": [
            "Hungarian"
        ],
        "flag": "hu",
        "population": 9749763,
        "callingCode": "+36",
        "numericCode": "348"
    },
    "Cayman Islands": {
        "tld": "ky",
        "currency": {
            "name": "Cayman Islands dollar",
            "code": "KYD",
            "symbol": "$"
        },
        "capital": "George Town",
        "area": 264,
        "region": "Americas",
        "languages": [
            "English"
        ],
        "flag": "ky",
        "population": 65720,
        "callingCode": "+1345",
        "numericCode": "136"
    },
    "Denmark": {
        "tld": "dk",
        "currency": {
            "name": "Danish krone",
            "code": "DKK",
            "symbol": "kr"
        },
        "capital": "Copenhagen",
        "area": 43094,
        "region": "Europe",
        "languages": [
            "Danish"
        ],
        "flag": "dk",
        "population": 5831404,
        "callingCode": "+45",
        "numericCode": "208"
    },
    "Saint Lucia": {
        "tld": "lc",
        "currency": {
            "name": "Eastern Caribbean dollar",
            "code": "XCD",
            "symbol": "$"
        },
        "capital": "Castries",
        "area": 616,
        "region": "Americas",
        "languages": [
            "English"
        ],
        "flag": "lc",
        "population": 183629,
        "callingCode": "+1758",
        "numericCode": "662"
    },
    "Bolivia": {
        "tld": "bo",
        "currency": {
            "name": "Bolivian boliviano",
            "code": "BOB",
            "symbol": "Bs."
        },
        "capital": "Sucre",
        "area": 1098581,
        "region": "Americas",
        "languages": [
            "Aymara",
            "Guaraní",
            "Quechua",
            "Spanish"
        ],
        "flag": "bo",
        "population": 11673029,
        "callingCode": "+591",
        "numericCode": "068"
    },
    "Djibouti": {
        "tld": "dj",
        "currency": {
            "name": "Djiboutian franc",
            "code": "DJF",
            "symbol": "Fr"
        },
        "capital": "Djibouti",
        "area": 23200,
        "region": "Africa",
        "languages": [
            "Arabic",
            "French"
        ],
        "flag": "dj",
        "population": 988002,
        "callingCode": "+253",
        "numericCode": "262"
    },
    "South Africa": {
        "tld": "za",
        "currency": {
            "name": "South African rand",
            "code": "ZAR",
            "symbol": "R"
        },
        "capital": "Pretoria",
        "area": 1221037,
        "region": "Africa",
        "languages": [
            "Afrikaans",
            "English",
            "Southern Ndebele",
            "Northern Sotho",
            "Southern Sotho",
            "Swazi",
            "Tswana",
            "Tsonga",
            "Venda",
            "Xhosa",
            "Zulu"
        ],
        "flag": "za",
        "population": 59308690,
        "callingCode": "+27",
        "numericCode": "710"
    },
    "Nigeria": {
        "tld": "ng",
        "currency": {
            "name": "Nigerian naira",
            "code": "NGN",
            "symbol": "₦"
        },
        "capital": "Abuja",
        "area": 923768,
        "region": "Africa",
        "languages": [
            "English"
        ],
        "flag": "ng",
        "population": 206139587,
        "callingCode": "+234",
        "numericCode": "566"
    },
    "São Tomé and Príncipe": {
        "tld": "st",
        "currency": {
            "name": "São Tomé and Príncipe dobra",
            "code": "STN",
            "symbol": "Db"
        },
        "capital": "São Tomé",
        "area": 964,
        "region": "Africa",
        "languages": [
            "Portuguese"
        ],
        "flag": "st",
        "population": 219161,
        "callingCode": "+239",
        "numericCode": "678"
    },
    "Nicaragua": {
        "tld": "ni",
        "currency": {
            "name": "Nicaraguan córdoba",
            "code": "NIO",
            "symbol": "C$"
        },
        "capital": "Managua",
        "area": 130373,
        "region": "Americas",
        "languages": [
            "Spanish"
        ],
        "flag": "ni",
        "population": 6624554,
        "callingCode": "+505",
        "numericCode": "558"
    },
    "Guadeloupe": {
        "tld": "gp",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Basse-Terre",
        "area": 1628,
        "region": "Americas",
        "languages": [
            "French"
        ],
        "flag": "gp",
        "population": 400132,
        "callingCode": "+590",
        "numericCode": "312"
    },
    "Saint Pierre and Miquelon": {
        "tld": "pm",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Saint-Pierre",
        "area": 242,
        "region": "Americas",
        "languages": [
            "French"
        ],
        "flag": "pm",
        "population": 6069,
        "callingCode": "+508",
        "numericCode": "666"
    },
    "Ecuador": {
        "tld": "ec",
        "currency": {
            "name": "United States dollar",
            "code": "USD",
            "symbol": "$"
        },
        "capital": "Quito",
        "area": 276841,
        "region": "Americas",
        "languages": [
            "Spanish"
        ],
        "flag": "ec",
        "population": 17643060,
        "callingCode": "+593",
        "numericCode": "218"
    },
    "Greenland": {
        "tld": "gl",
        "currency": {
            "name": "krone",
            "code": "DKK",
            "symbol": "kr."
        },
        "capital": "Nuuk",
        "area": 2166086,
        "region": "Americas",
        "languages": [
            "Greenlandic"
        ],
        "flag": "gl",
        "population": 56367,
        "callingCode": "+299",
        "numericCode": "304"
    },
    "Grenada": {
        "tld": "gd",
        "currency": {
            "name": "Eastern Caribbean dollar",
            "code": "XCD",
            "symbol": "$"
        },
        "capital": "St. George's",
        "area": 344,
        "region": "Americas",
        "languages": [
            "English"
        ],
        "flag": "gd",
        "population": 112519,
        "callingCode": "+1473",
        "numericCode": "308"
    },
    "Bahamas": {
        "tld": "bs",
        "currency": {
            "name": "Bahamian dollar",
            "code": "BSD",
            "symbol": "$"
        },
        "capital": "Nassau",
        "area": 13943,
        "region": "Americas",
        "languages": [
            "English"
        ],
        "flag": "bs",
        "population": 393248,
        "callingCode": "+1242",
        "numericCode": "044"
    },
    "Chile": {
        "tld": "cl",
        "currency": {
            "name": "Chilean peso",
            "code": "CLP",
            "symbol": "$"
        },
        "capital": "Santiago",
        "area": 756102,
        "region": "Americas",
        "languages": [
            "Spanish"
        ],
        "flag": "cl",
        "population": 19116209,
        "callingCode": "+56",
        "numericCode": "152"
    },
    "Malaysia": {
        "tld": "my",
        "currency": {
            "name": "Malaysian ringgit",
            "code": "MYR",
            "symbol": "RM"
        },
        "capital": "Kuala Lumpur",
        "area": 330803,
        "region": "Asia",
        "languages": [
            "English",
            "Malay"
        ],
        "flag": "my",
        "population": 32365998,
        "callingCode": "+60",
        "numericCode": "458"
    },
    "Tuvalu": {
        "tld": "tv",
        "currency": {
            "name": "Australian dollar",
            "code": "AUD",
            "symbol": "$"
        },
        "capital": "Funafuti",
        "area": 26,
        "region": "Oceania",
        "languages": [
            "English",
            "Tuvaluan"
        ],
        "flag": "tv",
        "population": 11792,
        "callingCode": "+688",
        "numericCode": "798"
    },
    "Christmas Island": {
        "tld": "cx",
        "currency": {
            "name": "Australian dollar",
            "code": "AUD",
            "symbol": "$"
        },
        "capital": "Flying Fish Cove",
        "area": 135,
        "region": "Oceania",
        "languages": [
            "English"
        ],
        "flag": "cx",
        "population": 2072,
        "callingCode": "+61",
        "numericCode": "162"
    },
    "Solomon Islands": {
        "tld": "sb",
        "currency": {
            "name": "Solomon Islands dollar",
            "code": "SBD",
            "symbol": "$"
        },
        "capital": "Honiara",
        "area": 28896,
        "region": "Oceania",
        "languages": [
            "English"
        ],
        "flag": "sb",
        "population": 686878,
        "callingCode": "+677",
        "numericCode": "090"
    },
    "Tanzania": {
        "tld": "tz",
        "currency": {
            "name": "Tanzanian shilling",
            "code": "TZS",
            "symbol": "Sh"
        },
        "capital": "Dodoma",
        "area": 945087,
        "region": "Africa",
        "languages": [
            "English",
            "Swahili"
        ],
        "flag": "tz",
        "population": 59734213,
        "callingCode": "+255",
        "numericCode": "834"
    },
    "North Korea": {
        "tld": "kp",
        "currency": {
            "name": "North Korean won",
            "code": "KPW",
            "symbol": "₩"
        },
        "capital": "Pyongyang",
        "area": 120538,
        "region": "Asia",
        "languages": [
            "Korean"
        ],
        "flag": "kp",
        "population": 25778815,
        "callingCode": "+850",
        "numericCode": "408"
    },
    "Guinea-Bissau": {
        "tld": "gw",
        "currency": {
            "name": "West African CFA franc",
            "code": "XOF",
            "symbol": "Fr"
        },
        "capital": "Bissau",
        "area": 36125,
        "region": "Africa",
        "languages": [
            "Portuguese",
            "Upper Guinea Creole"
        ],
        "flag": "gw",
        "population": 1967998,
        "callingCode": "+245",
        "numericCode": "624"
    },
    "Kosovo": {
        "tld": "N",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Pristina",
        "area": 10908,
        "region": "Europe",
        "languages": [
            "Albanian",
            "Serbian"
        ],
        "flag": "xk",
        "population": 1775378,
        "callingCode": "+383",
        "numericCode": "N/A"
    },
    "Vatican City": {
        "tld": "va",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Vatican City",
        "area": 0.44,
        "region": "Europe",
        "languages": [
            "Italian",
            "Latin"
        ],
        "flag": "va",
        "population": 451,
        "callingCode": "+3906698",
        "numericCode": "336"
    },
    "Norway": {
        "tld": "no",
        "currency": {
            "name": "Norwegian krone",
            "code": "NOK",
            "symbol": "kr"
        },
        "capital": "Oslo",
        "area": 323802,
        "region": "Europe",
        "languages": [
            "Norwegian Nynorsk",
            "Norwegian Bokmål",
            "Sami"
        ],
        "flag": "no",
        "population": 5379475,
        "callingCode": "+47",
        "numericCode": "578"
    },
    "Palestine": {
        "tld": "ps",
        "currency": {
            "name": "Egyptian pound",
            "code": "EGP",
            "symbol": "E£"
        },
        "capital": "Ramallah",
        "area": 6220,
        "region": "Asia",
        "languages": [
            "Arabic"
        ],
        "flag": "ps",
        "population": 4803269,
        "callingCode": "+970",
        "numericCode": "275"
    },
    "Cocos (Keeling) Islands": {
        "tld": "cc",
        "currency": {
            "name": "Australian dollar",
            "code": "AUD",
            "symbol": "$"
        },
        "capital": "West Island",
        "area": 14,
        "region": "Oceania",
        "languages": [
            "English"
        ],
        "flag": "cc",
        "population": 544,
        "callingCode": "+61",
        "numericCode": "166"
    },
    "Jamaica": {
        "tld": "jm",
        "currency": {
            "name": "Jamaican dollar",
            "code": "JMD",
            "symbol": "$"
        },
        "capital": "Kingston",
        "area": 10991,
        "region": "Americas",
        "languages": [
            "English",
            "Jamaican Patois"
        ],
        "flag": "jm",
        "population": 2961161,
        "callingCode": "+1876",
        "numericCode": "388"
    },
    "Egypt": {
        "tld": "eg",
        "currency": {
            "name": "Egyptian pound",
            "code": "EGP",
            "symbol": "£"
        },
        "capital": "Cairo",
        "area": 1002450,
        "region": "Africa",
        "languages": [
            "Arabic"
        ],
        "flag": "eg",
        "population": 102334403,
        "callingCode": "+20",
        "numericCode": "818"
    },
    "Cambodia": {
        "tld": "kh",
        "currency": {
            "name": "Cambodian riel",
            "code": "KHR",
            "symbol": "៛"
        },
        "capital": "Phnom Penh",
        "area": 181035,
        "region": "Asia",
        "languages": [
            "Khmer"
        ],
        "flag": "kh",
        "population": 16718971,
        "callingCode": "+855",
        "numericCode": "116"
    },
    "Mauritius": {
        "tld": "mu",
        "currency": {
            "name": "Mauritian rupee",
            "code": "MUR",
            "symbol": "₨"
        },
        "capital": "Port Louis",
        "area": 2040,
        "region": "Africa",
        "languages": [
            "English",
            "French",
            "Mauritian Creole"
        ],
        "flag": "mu",
        "population": 1265740,
        "callingCode": "+230",
        "numericCode": "480"
    },
    "Gambia": {
        "tld": "gm",
        "currency": {
            "name": "dalasi",
            "code": "GMD",
            "symbol": "D"
        },
        "capital": "Banjul",
        "area": 10689,
        "region": "Africa",
        "languages": [
            "English"
        ],
        "flag": "gm",
        "population": 2416664,
        "callingCode": "+220",
        "numericCode": "270"
    },
    "Equatorial Guinea": {
        "tld": "gq",
        "currency": {
            "name": "Central African CFA franc",
            "code": "XAF",
            "symbol": "Fr"
        },
        "capital": "Malabo",
        "area": 28051,
        "region": "Africa",
        "languages": [
            "French",
            "Portuguese",
            "Spanish"
        ],
        "flag": "gq",
        "population": 1402985,
        "callingCode": "+240",
        "numericCode": "226"
    },
    "Lesotho": {
        "tld": "ls",
        "currency": {
            "name": "Lesotho loti",
            "code": "LSL",
            "symbol": "L"
        },
        "capital": "Maseru",
        "area": 30355,
        "region": "Africa",
        "languages": [
            "English",
            "Sotho"
        ],
        "flag": "ls",
        "population": 2142252,
        "callingCode": "+266",
        "numericCode": "426"
    },
    "Martinique": {
        "tld": "mq",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Fort-de-France",
        "area": 1128,
        "region": "Americas",
        "languages": [
            "French"
        ],
        "flag": "mq",
        "population": 378243,
        "callingCode": "+596",
        "numericCode": "474"
    },
    "United States": {
        "tld": "us",
        "currency": {
            "name": "United States dollar",
            "code": "USD",
            "symbol": "$"
        },
        "capital": "Washington, D.C.",
        "area": 9372610,
        "region": "Americas",
        "languages": [
            "English"
        ],
        "flag": "us",
        "population": 329484123,
        "callingCode": "+1201",
        "numericCode": "840"
    },
    "Western Sahara": {
        "tld": "eh",
        "currency": {
            "name": "Algerian dinar",
            "code": "DZD",
            "symbol": "دج"
        },
        "capital": "El Aaiún",
        "area": 266000,
        "region": "Africa",
        "languages": [
            "Berber",
            "Hassaniya",
            "Spanish"
        ],
        "flag": "eh",
        "population": 510713,
        "callingCode": "+2125288",
        "numericCode": "732"
    },
    "United Arab Emirates": {
        "tld": "ae",
        "currency": {
            "name": "United Arab Emirates dirham",
            "code": "AED",
            "symbol": "د.إ"
        },
        "capital": "Abu Dhabi",
        "area": 83600,
        "region": "Asia",
        "languages": [
            "Arabic"
        ],
        "flag": "ae",
        "population": 9890400,
        "callingCode": "+971",
        "numericCode": "784"
    },
    "Mozambique": {
        "tld": "mz",
        "currency": {
            "name": "Mozambican metical",
            "code": "MZN",
            "symbol": "MT"
        },
        "capital": "Maputo",
        "area": 801590,
        "region": "Africa",
        "languages": [
            "Portuguese"
        ],
        "flag": "mz",
        "population": 31255435,
        "callingCode": "+258",
        "numericCode": "508"
    },
    "Algeria": {
        "tld": "dz",
        "currency": {
            "name": "Algerian dinar",
            "code": "DZD",
            "symbol": "د.ج"
        },
        "capital": "Algiers",
        "area": 2381741,
        "region": "Africa",
        "languages": [
            "Arabic"
        ],
        "flag": "dz",
        "population": 510713,
        "callingCode": "+213",
        "numericCode": "012"
    },
    "Zambia": {
        "tld": "zm",
        "currency": {
            "name": "Zambian kwacha",
            "code": "ZMW",
            "symbol": "ZK"
        },
        "capital": "Lusaka",
        "area": 752612,
        "region": "Africa",
        "languages": [
            "English"
        ],
        "flag": "zm",
        "population": 18383956,
        "callingCode": "+260",
        "numericCode": "894"
    },
    "Guatemala": {
        "tld": "gt",
        "currency": {
            "name": "Guatemalan quetzal",
            "code": "GTQ",
            "symbol": "Q"
        },
        "capital": "Guatemala City",
        "area": 108889,
        "region": "Americas",
        "languages": [
            "Spanish"
        ],
        "flag": "gt",
        "population": 16858333,
        "callingCode": "+502",
        "numericCode": "320"
    },
    "South Korea": {
        "tld": "kr",
        "currency": {
            "name": "South Korean won",
            "code": "KRW",
            "symbol": "₩"
        },
        "capital": "Seoul",
        "area": 100210,
        "region": "Asia",
        "languages": [
            "Korean"
        ],
        "flag": "kr",
        "population": 51780579,
        "callingCode": "+82",
        "numericCode": "410"
    },
    "Kyrgyzstan": {
        "tld": "kg",
        "currency": {
            "name": "Kyrgyzstani som",
            "code": "KGS",
            "symbol": "с"
        },
        "capital": "Bishkek",
        "area": 199951,
        "region": "Asia",
        "languages": [
            "Kyrgyz",
            "Russian"
        ],
        "flag": "kg",
        "population": 6591600,
        "callingCode": "+996",
        "numericCode": "417"
    },
    "Timor-Leste": {
        "tld": "tl",
        "currency": {
            "name": "United States dollar",
            "code": "USD",
            "symbol": "$"
        },
        "capital": "Dili",
        "area": 14874,
        "region": "Asia",
        "languages": [
            "Portuguese",
            "Tetum"
        ],
        "flag": "tl",
        "population": 1318442,
        "callingCode": "+670",
        "numericCode": "626"
    },
    "Åland Islands": {
        "tld": "ax",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Mariehamn",
        "area": 1580,
        "region": "Europe",
        "languages": [
            "Swedish"
        ],
        "flag": "ax",
        "population": 29458,
        "callingCode": "+35818",
        "numericCode": "248"
    },
    "Jordan": {
        "tld": "jo",
        "currency": {
            "name": "Jordanian dinar",
            "code": "JOD",
            "symbol": "د.ا"
        },
        "capital": "Amman",
        "area": 89342,
        "region": "Asia",
        "languages": [
            "Arabic"
        ],
        "flag": "jo",
        "population": 10203140,
        "callingCode": "+962",
        "numericCode": "400"
    },
    "Malta": {
        "tld": "mt",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Valletta",
        "area": 316,
        "region": "Europe",
        "languages": [
            "English",
            "Maltese"
        ],
        "flag": "mt",
        "population": 525285,
        "callingCode": "+356",
        "numericCode": "470"
    },
    "Cyprus": {
        "tld": "cy",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Nicosia",
        "area": 9251,
        "region": "Europe",
        "languages": [
            "Greek",
            "Turkish"
        ],
        "flag": "cy",
        "population": 1207361,
        "callingCode": "+357",
        "numericCode": "196"
    },
    "Falkland Islands": {
        "tld": "fk",
        "currency": {
            "name": "Falkland Islands pound",
            "code": "FKP",
            "symbol": "£"
        },
        "capital": "Stanley",
        "area": 12173,
        "region": "Americas",
        "languages": [
            "English"
        ],
        "flag": "fk",
        "population": 2563,
        "callingCode": "+500",
        "numericCode": "238"
    },
    "Kazakhstan": {
        "tld": "kz",
        "currency": {
            "name": "Kazakhstani tenge",
            "code": "KZT",
            "symbol": "₸"
        },
        "capital": "Nur-Sultan",
        "area": 2724900,
        "region": "Asia",
        "languages": [
            "Kazakh",
            "Russian"
        ],
        "flag": "kz",
        "population": 18754440,
        "callingCode": "+76",
        "numericCode": "398"
    },
    "Botswana": {
        "tld": "bw",
        "currency": {
            "name": "Botswana pula",
            "code": "BWP",
            "symbol": "P"
        },
        "capital": "Gaborone",
        "area": 582000,
        "region": "Africa",
        "languages": [
            "English",
            "Tswana"
        ],
        "flag": "bw",
        "population": 2351625,
        "callingCode": "+267",
        "numericCode": "072"
    },
    "Saint Vincent and the Grenadines": {
        "tld": "vc",
        "currency": {
            "name": "Eastern Caribbean dollar",
            "code": "XCD",
            "symbol": "$"
        },
        "capital": "Kingstown",
        "area": 389,
        "region": "Americas",
        "languages": [
            "English"
        ],
        "flag": "vc",
        "population": 110947,
        "callingCode": "+1784",
        "numericCode": "670"
    },
    "Barbados": {
        "tld": "bb",
        "currency": {
            "name": "Barbadian dollar",
            "code": "BBD",
            "symbol": "$"
        },
        "capital": "Bridgetown",
        "area": 430,
        "region": "Americas",
        "languages": [
            "English"
        ],
        "flag": "bb",
        "population": 287371,
        "callingCode": "+1246",
        "numericCode": "052"
    },
    "Tonga": {
        "tld": "to",
        "currency": {
            "name": "Tongan paʻanga",
            "code": "TOP",
            "symbol": "T$"
        },
        "capital": "Nuku'alofa",
        "area": 747,
        "region": "Oceania",
        "languages": [
            "English",
            "Tongan"
        ],
        "flag": "to",
        "population": 105697,
        "callingCode": "+676",
        "numericCode": "776"
    },
    "Thailand": {
        "tld": "th",
        "currency": {
            "name": "Thai baht",
            "code": "THB",
            "symbol": "฿"
        },
        "capital": "Bangkok",
        "area": 513120,
        "region": "Asia",
        "languages": [
            "Thai"
        ],
        "flag": "th",
        "population": 69799978,
        "callingCode": "+66",
        "numericCode": "764"
    },
    "Belgium": {
        "tld": "be",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Brussels",
        "area": 30528,
        "region": "Europe",
        "languages": [
            "German",
            "French",
            "Dutch"
        ],
        "flag": "be",
        "population": 11555997,
        "callingCode": "+32",
        "numericCode": "056"
    },
    "Canada": {
        "tld": "ca",
        "currency": {
            "name": "Canadian dollar",
            "code": "CAD",
            "symbol": "$"
        },
        "capital": "Ottawa",
        "area": 9984670,
        "region": "Americas",
        "languages": [
            "English",
            "French"
        ],
        "flag": "ca",
        "population": 38005238,
        "callingCode": "+1",
        "numericCode": "124"
    },
    "Georgia": {
        "tld": "ge",
        "currency": {
            "name": "lari",
            "code": "GEL",
            "symbol": "₾"
        },
        "capital": "Tbilisi",
        "area": 69700,
        "region": "Asia",
        "languages": [
            "Georgian"
        ],
        "flag": "ge",
        "population": 3714000,
        "callingCode": "+995",
        "numericCode": "268"
    },
    "Wallis and Futuna": {
        "tld": "wf",
        "currency": {
            "name": "CFP franc",
            "code": "XPF",
            "symbol": "₣"
        },
        "capital": "Mata-Utu",
        "area": 142,
        "region": "Oceania",
        "languages": [
            "French"
        ],
        "flag": "wf",
        "population": 11750,
        "callingCode": "+681",
        "numericCode": "876"
    },
    "Fiji": {
        "tld": "fj",
        "currency": {
            "name": "Fijian dollar",
            "code": "FJD",
            "symbol": "$"
        },
        "capital": "Suva",
        "area": 18272,
        "region": "Oceania",
        "languages": [
            "English",
            "Fijian",
            "Fiji Hindi"
        ],
        "flag": "fj",
        "population": 896444,
        "callingCode": "+679",
        "numericCode": "242"
    },
    "Netherlands": {
        "tld": "nl",
        "currency": {
            "name": "Euro",
            "code": "EUR",
            "symbol": "€"
        },
        "capital": "Amsterdam",
        "area": 41850,
        "region": "Europe",
        "languages": [
            "Dutch"
        ],
        "flag": "nl",
        "population": 16655799,
        "callingCode": "+31",
        "numericCode": "528"
    },
    "Armenia": {
        "tld": "am",
        "currency": {
            "name": "Armenian dram",
            "code": "AMD",
            "symbol": "֏"
        },
        "capital": "Yerevan",
        "area": 29743,
        "region": "Asia",
        "languages": [
            "Armenian"
        ],
        "flag": "am",
        "population": 2963234,
        "callingCode": "+374",
        "numericCode": "051"
    },
    "Dominican Republic": {
        "tld": "do",
        "currency": {
            "name": "Dominican peso",
            "code": "DOP",
            "symbol": "$"
        },
        "capital": "Santo Domingo",
        "area": 48671,
        "region": "Americas",
        "languages": [
            "Spanish"
        ],
        "flag": "do",
        "population": 10847904,
        "callingCode": "+1809",
        "numericCode": "214"
    },
    "Guernsey": {
        "tld": "gg",
        "currency": {
            "name": "British pound",
            "code": "GBP",
            "symbol": "£"
        },
        "capital": "St. Peter Port",
        "area": 78,
        "region": "Europe",
        "languages": [
            "English",
            "French",
            "Guernésiais"
        ],
        "flag": "gg",
        "population": 62999,
        "callingCode": "+44",
        "numericCode": "831"
    },
    "Turkmenistan": {
        "tld": "tm",
        "currency": {
            "name": "Turkmenistan manat",
            "code": "TMT",
            "symbol": "m"
        },
        "capital": "Ashgabat",
        "area": 488100,
        "region": "Asia",
        "languages": [
            "Russian",
            "Turkmen"
        ],
        "flag": "tm",
        "population": 6031187,
        "callingCode": "+993",
        "numericCode": "795"
    },
    "Nepal": {
        "tld": "np",
        "currency": {
            "name": "Nepalese rupee",
            "code": "NPR",
            "symbol": "₨"
        },
        "capital": "Kathmandu",
        "area": 147181,
        "region": "Asia",
        "languages": [
            "Nepali"
        ],
        "flag": "np",
        "population": 29136808,
        "callingCode": "+977",
        "numericCode": "524"
    },
    "Maldives": {
        "tld": "mv",
        "currency": {
            "name": "Maldivian rufiyaa",
            "code": "MVR",
            "symbol": ".ރ"
        },
        "capital": "Malé",
        "area": 300,
        "region": "Asia",
        "languages": [
            "Maldivian"
        ],
        "flag": "mv",
        "population": 540542,
        "callingCode": "+960",
        "numericCode": "462"
    },
    "Libya": {
        "tld": "ly",
        "currency": {
            "name": "Libyan dinar",
            "code": "LYD",
            "symbol": "ل.د"
        },
        "capital": "Tripoli",
        "area": 1759540,
        "region": "Africa",
        "languages": [
            "Arabic"
        ],
        "flag": "ly",
        "population": 6871287,
        "callingCode": "+218",
        "numericCode": "434"
    },
    "Brazil": {
        "tld": "br",
        "currency": {
            "name": "Brazilian real",
            "code": "BRL",
            "symbol": "R$"
        },
        "capital": "Brasília",
        "area": 8515767,
        "region": "Americas",
        "languages": [
            "Portuguese"
        ],
        "flag": "br",
        "population": 212559409,
        "callingCode": "+55",
        "numericCode": "076"
    }
}

async function fetchCountryCurrencies() {
    try {
        const API_KEY = "z8gin0DmSb7wmXhjWzF9vYup50NVSgDrhXEiQioO"
        const countries = {};
        const response = await axios.get(`https://countryapi.io/api/all?apikey=${API_KEY}`);
        const responseData = Object.entries(response.data);
        responseData.forEach((no) => {
            countries[no[1].name] = {
                "tld": no[1].topLevelDomain[0].replaceAll(".", ""),
                "currency": {
                    "name": no[1].currencies[Object.keys(no[1].currencies)[0]].name,
                    "code": Object.keys(no[1].currencies)[0],
                    "symbol": no[1].currencies[Object.keys(no[1].currencies)[0]].symbol
                },
                "capital": no[1].capital,
                "area": no[1].area,
                "region": no[1].region,
                "languages": Object.values(no[1].languages),
                "flag": no[0].toLowerCase(),
                "population": no[1].population,
                "callingCode": no[1].callingCode,
                "numericCode": no[1].numericCode
            }
        });
        return countries
    } catch (error) {
        console.error('Error fetching country currencies:', error);
        return null;
    }
};

setTimeout(fetchCountryCurrencies, 6 * 30 * 24 * 60 * 60 * 1000); // 6 months in milliseconds
export default countries;