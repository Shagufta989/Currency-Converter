import React from "react";


function SampleGraphicCard({props}){
    return (
        <div class="col-lg-3 col-sm-6">
                  <div class="card">
                    <div class="card-header pb-0">
                      <div class="d-flex justify-content-between flex-wrap gap-2">
                        <p class="d-block mb-2 text-body">Total Visits</p>
                        <div class="d-flex text-success">
                          <p class="me-1">+18.4%</p>
                          <i class="mdi mdi-chevron-up"></i>
                        </div>
                      </div>
                      <h4 class="mb-1">$42.5k</h4>
                    </div>
                    <div class="card-body pt-0">
                      <div class="row mt-3">
                        <div class="col-4">
                          <div class="d-flex gap-2 align-items-center mb-2">
                            <div class="avatar avatar-xs flex-shrink-0">
                              <div class="avatar-initial rounded bg-label-warning">
                                <i class="mdi mdi-cellphone mdi-14px"></i>
                              </div>
                            </div>
                            <p class="mb-0">Mobile</p>
                          </div>
                          <h4 class="mb-0 pt-1 text-nowrap">23.5%</h4>
                          <small class="text-muted">2,890</small>
                        </div>
                        <div class="col-4">
                          <div class="divider divider-vertical">
                            <div class="divider-text">
                              <span class="badge-divider-bg bg-label-secondary">VS</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-4 text-end pe-lg-0 pe-xl-2">
                          <div class="d-flex gap-2 justify-content-end align-items-center mb-2">
                            <p class="mb-0">Desktop</p>
                            <div class="avatar avatar-xs flex-shrink-0">
                              <div class="avatar-initial rounded bg-label-primary">
                                <i class="mdi mdi-monitor mdi-14px"></i>
                              </div>
                            </div>
                          </div>
                          <h4 class="mb-0 pt-1 text-nowrap">76.5%</h4>
                          <small class="text-muted">22,465</small>
                        </div>
                      </div>
                      <div class="d-flex align-items-center mt-2 pt-1">
                        <div class="progress w-100 rounded" style="height: 10px">
                          <div class="progress-bar bg-warning" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                          <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    )
}

export default SampleGraphicCard;