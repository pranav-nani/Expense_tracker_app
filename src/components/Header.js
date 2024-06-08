import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown, faCircleArrowUp, faWallet } from '@fortawesome/free-solid-svg-icons';


const Header = ({ income, expense, balance }) => {
    return (
        <div className='row mb-3'>
            <div className='col-md-4 col-6 order-2'>
                <div className='card shadow'>
                    <div className='card-body'>
                        <h1 className='display-4'>₹{expense}</h1>
                        <h3><FontAwesomeIcon icon={faCircleArrowUp} color='red' /> Expense</h3>
                    </div>
                </div>
            </div>
            <div className='col-md-4 col-6 order-4'>
                <div className='card shadow'>
                    <div className='card-body'>
                        <h1 className='display-4'>₹{income}</h1>
                        <h3><FontAwesomeIcon icon={faCircleArrowDown} color='green' /> Income</h3>
                    </div>
                </div>
            </div>
            <div className='col-md-4 col-12 mb-md-0 mb-3 order-md-3 order-1'>
                <div className='card shadow'>
                    <div className='card-body'>
                        <h1 className='display-4'>₹{balance}</h1>
                        <h3><FontAwesomeIcon icon={faWallet} color='brown' /> Balance</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header