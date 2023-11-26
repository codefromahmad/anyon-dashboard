import React from 'react'
import './createeditalert.css'

const CreateEditAlert = ({ title }) => {
  return (
    <div className='alert-manual'>
      <div className='alert-manual-card'>
        <div className='create-alert-heading'>
          <h4>{title}</h4>
        </div>
        <div className='alert-name'>
          <p>Name</p>
          <div className='nameSelect'>
            <select id='Name'>
              <option value=''>Alert 1</option>
              <option value=''>Alert 2</option>
            </select>
          </div>
        </div>
        <div className='alert-discription'>
          <p>Discription</p>
          <div className='discription-text'>
            <input
              className='textArea'
              type='text'
              rows={3}
              multiple={true}
              placeholder=''
            />
          </div>
        </div>
        <div className='alert-instrument'>
          <p>Instrument</p>
          <div className='instrumentSelect'>
            <select id='Instrument'>
              <option value=''>BLS FINANCIAL SERVICES</option>
            </select>
          </div>
        </div>
        <div className='alert-price'>
          <p>Price</p>
          <div className='price-mid'>
            <div className='price-select'>
              <select id='Price'>
                <option value='Price'>Price</option>
              </select>
            </div>
            <div className='above-select'>
              <select id='above'>
                <option value='above'>above</option>
              </select>
            </div>
            <div className='price-input'>
              <input type='text' placeholder='' />
            </div>
          </div>
          <div className='alertPriceBottom'>
            <p>%change</p>
          </div>
        </div>
        <div className='alert-volume'>
          <p>Volume</p>
          <div className='volume-mid'>
            <div className='price-select'>
              <select id='Price'>
                <option value='Price'>Price</option>
              </select>
            </div>
            <div className='above-select'>
              <select id='above'>
                <option value='above'>above</option>
              </select>
            </div>
            <div className='volume-input'>
              <input type='text' placeholder='' />
            </div>
          </div>
        </div>
        <div className='alert-schedule'>
          <p>Schedule</p>
          <div className='scheduleSelect'>
            <select id='Schedule'>
              <option value=''></option>
            </select>
          </div>
        </div>
        <div className='alertManualButton'>
          <div className='proceedButton'>
            <p>Proceed</p>
          </div>
          <div className='cancelButton'>
            <p>Cancel</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateEditAlert
