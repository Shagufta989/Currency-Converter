import React from "react";

function GraphicCard({ result }) {
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
                        <p className="countryno2-button">
                            Country Button<p className="countryno1-rate">Price</p>
                        </p>
                    </div>

                    <div className="compare-text">
                        <p className="To-text">To</p>
                    </div>

                    <div className="countrytwo">
                        <p className="countryname">Country Two</p>
                        <p className="countryno2-button">
                            Country Button<p className="countryno2-rate">Price</p>
                        </p>
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

export default GraphicCard;