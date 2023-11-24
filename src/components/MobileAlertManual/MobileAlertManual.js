import React from 'react'
import './mobilealertmanual.css'

const MobileAlertManual = () => {
  return (
      <div className="alertManualRight">
        <div className="alertRightCard">
          <div className="alertRightManualCard">
            <div className="alertmanual">
              <div className="alert-manual-card">
                <div className="createAlertHeading">
                  <h4>Create Alert</h4>
                </div>
                <div className="alert-name">
                  <p>Name</p>
                    <div className="nameSelect">
                      <select id="Name">
                        <option value="">Alert 1</option>
                      </select>
                  </div>
                </div>
                <div className="alert-discription">
                  <p>Discription</p>
                  <div className="discription-text">
                  <input
                    className="textArea"
                    type="text"
                    rows={3}
                    multiple={true}
                    placeholder=""
                  />
                  </div>
                </div>
                <div className="alert-instrument">
                  <p>Instrument</p>
                  <div className="instrumentSelect">
                    <select id="Instrument">
                      <option value="">BLS FINANCIAL SERVICES</option>
                    </select>
                  </div>
                </div>
                <div className="alert-price">
                    <p>Price</p>
                   <div className="price-mid">
                   <div className="priceSelect">
                      <select id="Price">
                        <option value="Price">Price</option>
                      </select>
                    </div>
                    <div className="aboveSelect">
                      <select id="above">
                        <option value="above">above</option>
                      </select>
                    </div>
                    <div className="priceInput">
                      <input type="text" placeholder="" />
                    </div>
                   </div>
                    <div className="alertPriceBottom">
                      <p>%change</p>
                  </div>
                </div>
                <div className="alert-volume">
                <p>Volume</p>
                <div className="volume-mid">
                <div className="priceSelect">
                    <select id="Price">
                      <option value="Price">Price</option>
                    </select>
                  </div>
                  <div className="aboveSelect">
                    <select id="above">
                      <option value="above">above</option>
                    </select>
                  </div>
                  <div className="volumeInput">
                    <input type="text" placeholder="" />
                  </div>
                </div>
                </div>
                <div className="alert-schedule">
                  <p>Schedule</p>
                  <div className="scheduleSelect">
                    <select id="Schedule">
                      <option value=""></option>
                    </select>
                  </div>
                </div>
                <div className="alertManualButton">
                  <div className="proceedButton">
                    <p>Proceed</p>
                  </div>
                  <div className="cancelButton">
                    <p>Cancel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MobileAlertManual