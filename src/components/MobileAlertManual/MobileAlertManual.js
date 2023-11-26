import React from 'react'
import './mobilealertmanual.css'
import { CreateEditAlert } from '../../components'

const MobileAlertManual = ({ title }) => {
  return (
    <div className='alertManualRight'>
      <div className='alertRightCard'>
        <div className='alertRightManualCard'>
          <CreateEditAlert title={title} />
        </div>
      </div>
    </div>
  )
}

export default MobileAlertManual
