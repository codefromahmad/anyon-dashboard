import React from 'react'
import './payment.css'
import BankIcon from '../../assets/images/bank.svg'
import EditIcon from '../../assets/images/edit-2.svg'
import AddIcon from '../../assets/images/add.svg'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import AddBankDetail from '../AddBankDetail/AddBankDetail'
import { useDispatch, useSelector } from 'react-redux'

const Payment = () => {
  const addBank = useSelector(state => state.page.addBank)
  const dispatch = useDispatch()

  const handleAddBankComp = () => {
    dispatch({ type: 'setAddBank', payload: true })
  }

  return (
    <>
      {addBank ? (
        <AddBankDetail />
      ) : (
        <div className='profilePaymentCard'>
          <div className='addressForPayment'>
            <div className='bankAddressLeft'>
              <img src={BankIcon} alt='BankIcon' />
              <p>Adefarasin Jonah</p>
            </div>
            <div className='bankAddressRight'>
              <p>5463215499....</p>
              <img src={EditIcon} alt='EditIcon' />
            </div>
          </div>
          <Link
            onClick={handleAddBankComp}
            to='/payment/addbank'
            className='bankAccountDetailCard'
          >
            <div className='bankAccountDetailLeft'>
              <img src={AddIcon} alt='AddIcon' />
              <p>Add Bank account details</p>
            </div>
            <div className='bankAccountDetailRight'>
              <IoIosArrowForward />
            </div>
          </Link>
        </div>
      )}
    </>
  )
}

export default Payment
