import React, { useState } from "react";
import UpdateRatesButton from "./UpdateRatesButton";
import ResultButton from "./ResultButton";

function GraphicCard({ props }) {
  const [todayRate, setTodayRate] = useState(null)
  const [yesterdayRate, setYesterdayRate] = useState(null)
  function calculateRates(today, yesterday) {
    setTodayRate(today)
    setYesterdayRate(yesterday)
  }
  console.log(todayRate, yesterdayRate)
  return (
    <div id="main">
      <div className="col-lg-3 col-sm-6">
        <div className="card">
          <div className="card-header pb-0">
            <div className="d-flex justify-content-between flex-wrap gap-2">
              <p className="d-block mb-2 text-body">Result</p>
              <div className="d-flex text-success">
                <p className="me-1">+0.000018%</p>
                <i className="mdi mdi-chevron-up"></i>
              </div>
            </div>
            <h4 className="mb-1">$20</h4>
          </div>
          <div className="card-body pt-0">
            <div className="row mt-3">
              <div className="col-4">
                <div className="d-flex gap-2 align-items-center mb-2">
                  <div className="avatar avatar-xs flex-shrink-0">
                    <div className="avatar-initial rounded bg-label-warning bg-white">
                      <svg viewBox="0 0 36 36" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#004600" d="M32 5H9v26h23a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4zm-9.5 20.472a7.5 7.5 0 0 1-7.5-7.5c0-3.72 2.711-6.799 6.263-7.39A6.496 6.496 0 0 0 24 22.972a6.496 6.496 0 0 0 5.89-3.763c-.591 3.553-3.67 6.263-7.39 6.263zm5.11-10.424l-1.213 2.022l-.208-2.349l-2.298-.528l2.17-.924l-.207-2.349l1.548 1.779l2.17-.924l-1.212 2.023l1.548 1.779l-2.298-.529z"></path><path fill="#EEE" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h5V5H4z"></path><path fill="#FFF" d="M29.572 11.775l-2.17.924l-1.548-1.779l.207 2.349l-2.17.924l2.298.528l.208 2.349l1.213-2.022l2.298.529l-1.548-1.779z"></path><path fill="#FFF" d="M24 22.972a6.496 6.496 0 0 1-2.737-12.39c-3.552.592-6.263 3.671-6.263 7.39a7.5 7.5 0 0 0 7.5 7.5c3.72 0 6.799-2.711 7.39-6.263A6.494 6.494 0 0 1 24 22.972z"></path></svg>
                    </div>
                  </div>
                  <p className="mb-0 ws-nowrap">Pakistan</p>
                </div>
                <h4 className="mb-0 pt-1 text-nowrap">23.5%</h4>
                <small className="text-muted">$0.3</small>
              </div>
              <div className="col-4">
                <div className="divider divider-vertical">
                  <div className="divider-text">
                    <span className="badge-divider-bg bg-label-secondary">To</span>
                  </div>
                </div>
              </div>
              <div className="col-4 text-end pe-lg-0 pe-xl-2">
                <div className="d-flex gap-2 justify-content-end align-items-center mb-2">
                  <p className="mb-0 ws-nowrap">United States</p>
                  <div className="avatar avatar-xs flex-shrink-0">
                    <div className="avatar-initial rounded bg-label-primary bg-white">
                      <svg viewBox="0 -4 28 28" fill="none">
                        <g clip-path="url(#clip0_503_3486)">
                          <rect width="28" height="20" rx="2" fill="white" />
                          <mask id="mask0_503_3486" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
                            <rect width="28" height="20" rx="2" fill="white" />
                          </mask>
                          <g mask="url(#mask0_503_3486)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M28 0H0V1.33333H28V0ZM28 2.66667H0V4H28V2.66667ZM0 5.33333H28V6.66667H0V5.33333ZM28 8H0V9.33333H28V8ZM0 10.6667H28V12H0V10.6667ZM28 13.3333H0V14.6667H28V13.3333ZM0 16H28V17.3333H0V16ZM28 18.6667H0V20H28V18.6667Z" fill="#D02F44" />
                            <rect width="12" height="9.33333" fill="#46467F" />
                            <g filter="url(#filter0_d_503_3486)">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66665 1.99999C2.66665 2.36818 2.36817 2.66666 1.99998 2.66666C1.63179 2.66666 1.33331 2.36818 1.33331 1.99999C1.33331 1.63181 1.63179 1.33333 1.99998 1.33333C2.36817 1.33333 2.66665 1.63181 2.66665 1.99999ZM5.33331 1.99999C5.33331 2.36818 5.03484 2.66666 4.66665 2.66666C4.29846 2.66666 3.99998 2.36818 3.99998 1.99999C3.99998 1.63181 4.29846 1.33333 4.66665 1.33333C5.03484 1.33333 5.33331 1.63181 5.33331 1.99999ZM7.33331 2.66666C7.7015 2.66666 7.99998 2.36818 7.99998 1.99999C7.99998 1.63181 7.7015 1.33333 7.33331 1.33333C6.96512 1.33333 6.66665 1.63181 6.66665 1.99999C6.66665 2.36818 6.96512 2.66666 7.33331 2.66666ZM10.6666 1.99999C10.6666 2.36818 10.3682 2.66666 9.99998 2.66666C9.63179 2.66666 9.33331 2.36818 9.33331 1.99999C9.33331 1.63181 9.63179 1.33333 9.99998 1.33333C10.3682 1.33333 10.6666 1.63181 10.6666 1.99999ZM3.33331 3.99999C3.7015 3.99999 3.99998 3.70152 3.99998 3.33333C3.99998 2.96514 3.7015 2.66666 3.33331 2.66666C2.96512 2.66666 2.66665 2.96514 2.66665 3.33333C2.66665 3.70152 2.96512 3.99999 3.33331 3.99999ZM6.66665 3.33333C6.66665 3.70152 6.36817 3.99999 5.99998 3.99999C5.63179 3.99999 5.33331 3.70152 5.33331 3.33333C5.33331 2.96514 5.63179 2.66666 5.99998 2.66666C6.36817 2.66666 6.66665 2.96514 6.66665 3.33333ZM8.66665 3.99999C9.03484 3.99999 9.33331 3.70152 9.33331 3.33333C9.33331 2.96514 9.03484 2.66666 8.66665 2.66666C8.29846 2.66666 7.99998 2.96514 7.99998 3.33333C7.99998 3.70152 8.29846 3.99999 8.66665 3.99999ZM10.6666 4.66666C10.6666 5.03485 10.3682 5.33333 9.99998 5.33333C9.63179 5.33333 9.33331 5.03485 9.33331 4.66666C9.33331 4.29847 9.63179 3.99999 9.99998 3.99999C10.3682 3.99999 10.6666 4.29847 10.6666 4.66666ZM7.33331 5.33333C7.7015 5.33333 7.99998 5.03485 7.99998 4.66666C7.99998 4.29847 7.7015 3.99999 7.33331 3.99999C6.96512 3.99999 6.66665 4.29847 6.66665 4.66666C6.66665 5.03485 6.96512 5.33333 7.33331 5.33333ZM5.33331 4.66666C5.33331 5.03485 5.03484 5.33333 4.66665 5.33333C4.29846 5.33333 3.99998 5.03485 3.99998 4.66666C3.99998 4.29847 4.29846 3.99999 4.66665 3.99999C5.03484 3.99999 5.33331 4.29847 5.33331 4.66666ZM1.99998 5.33333C2.36817 5.33333 2.66665 5.03485 2.66665 4.66666C2.66665 4.29847 2.36817 3.99999 1.99998 3.99999C1.63179 3.99999 1.33331 4.29847 1.33331 4.66666C1.33331 5.03485 1.63179 5.33333 1.99998 5.33333ZM3.99998 5.99999C3.99998 6.36819 3.7015 6.66666 3.33331 6.66666C2.96512 6.66666 2.66665 6.36819 2.66665 5.99999C2.66665 5.6318 2.96512 5.33333 3.33331 5.33333C3.7015 5.33333 3.99998 5.6318 3.99998 5.99999ZM5.99998 6.66666C6.36817 6.66666 6.66665 6.36819 6.66665 5.99999C6.66665 5.6318 6.36817 5.33333 5.99998 5.33333C5.63179 5.33333 5.33331 5.6318 5.33331 5.99999C5.33331 6.36819 5.63179 6.66666 5.99998 6.66666ZM9.33331 5.99999C9.33331 6.36819 9.03484 6.66666 8.66665 6.66666C8.29846 6.66666 7.99998 6.36819 7.99998 5.99999C7.99998 5.6318 8.29846 5.33333 8.66665 5.33333C9.03484 5.33333 9.33331 5.6318 9.33331 5.99999ZM9.99998 8C10.3682 8 10.6666 7.70152 10.6666 7.33333C10.6666 6.96514 10.3682 6.66666 9.99998 6.66666C9.63179 6.66666 9.33331 6.96514 9.33331 7.33333C9.33331 7.70152 9.63179 8 9.99998 8ZM7.99998 7.33333C7.99998 7.70152 7.7015 8 7.33331 8C6.96512 8 6.66665 7.70152 6.66665 7.33333C6.66665 6.96514 6.96512 6.66666 7.33331 6.66666C7.7015 6.66666 7.99998 6.96514 7.99998 7.33333ZM4.66665 8C5.03484 8 5.33331 7.70152 5.33331 7.33333C5.33331 6.96514 5.03484 6.66666 4.66665 6.66666C4.29846 6.66666 3.99998 6.96514 3.99998 7.33333C3.99998 7.70152 4.29846 8 4.66665 8ZM2.66665 7.33333C2.66665 7.70152 2.36817 8 1.99998 8C1.63179 8 1.33331 7.70152 1.33331 7.33333C1.33331 6.96514 1.63179 6.66666 1.99998 6.66666C2.36817 6.66666 2.66665 6.96514 2.66665 7.33333Z" fill="url(#paint0_linear_503_3486)" />
                            </g>
                          </g>
                        </g>
                        <defs>
                          <filter id="filter0_d_503_3486" x="1.33331" y="1.33333" width="9.33331" height="7.66667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_503_3486" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_503_3486" result="shape" />
                          </filter>
                          <linearGradient id="paint0_linear_503_3486" x1="1.33331" y1="1.33333" x2="1.33331" y2="7.99999" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="1" stop-color="#F0F0F0" />
                          </linearGradient>
                          <clipPath id="clip0_503_3486">
                            <rect width="28" height="20" rx="2" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <h4 className="mb-0 pt-1 text-nowrap">76.5%</h4>
                <small className="text-muted">PKR270</small>
              </div>
            </div>
            <div className="d-flex align-items-center mt-2 pt-1">
              <div className="progress w-100 rounded" style={{ height: 10 + "px" }}>
                <div className="progress-bar bg-warning" style={{ width: 20 + "%" }} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="progress-bar bg-primary" role="progressbar" style={{ width: 80 + "%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <UpdateRatesButton fetchRates={calculateRates} />
            <ResultButton />
          </div>
        </div>
      </div>

    </div>
  )
}

export default GraphicCard;