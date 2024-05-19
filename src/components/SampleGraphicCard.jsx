import React from "react";

function SampleGraphicCard({ result }) {
    return (<div>
        <div className="selection-container">
            <div className="selection-bg">
                <div className="result">
                    <p className="result-label">Result</p>
                    <p className="result-integar">50{result}</p>
                    <p className="result-percentage">20%</p>
                </div>
                <div className="selection-area">
                    <div className="countryone">
                        <p className="countryname">Country One</p>
                        <div className="countryno2-button">
                            Country Button<p className="countryno1-rate">Price</p>
                        </div>
                    </div>

                    <div className="compare-text">
                        <p className="To-text">To</p>
                    </div>

                    <div className="countrytwo">
                        <p className="countryname">Country Two</p>
                        <div className="countryno2-button">
                            Country Button<p className="countryno2-rate">Price</p>
                        </div>
                    </div>
                </div>
                <div className="rate-bar">
                    <div className="first-percentage"></div>
                    <div className="second-percentage"></div>
                </div>
            </div>
        </div>
    </div>)
}

export default SampleGraphicCard;