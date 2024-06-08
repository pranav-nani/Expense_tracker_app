import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger, faCar, faDollar, faEllipsisH, faFilm, faHeartbeat, faLightbulb, faShoppingBag, faTrash } from '@fortawesome/free-solid-svg-icons'

const TransactionList = ({ transactions, deleteItem }) => {
    return (
        <>
            {transactions?.length ? (
                <ul className="list-group transactions shadow">
                    {transactions.map(item => (
                        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                            {expenseIcons[item.type]}
                            <div className="ms-3 me-auto">
                                <div className="fw-bold">{item.description}</div>
                                {item.amount}
                            </div>
                            <FontAwesomeIcon icon={faTrash} fontSize={24} cursor="pointer" onClick={() => deleteItem(item.id)} />
                        </li>
                    ))}
                </ul>
            ) : (
                <div className='text-center text-italic no-record card shadow'>No Transactions Yet</div>
            )}
        </>
    )
}

export default TransactionList

export const expenseIcons = {
    default: <FontAwesomeIcon icon={faDollar} fontSize={24} />,
    food: <FontAwesomeIcon icon={faBurger} fontSize={24} />,
    entertainment: <FontAwesomeIcon icon={faFilm} fontSize={24} />,
    transportation: <FontAwesomeIcon icon={faCar} fontSize={24} />,
    shopping: <FontAwesomeIcon icon={faShoppingBag} fontSize={24} />,
    health: <FontAwesomeIcon icon={faHeartbeat} fontSize={24} />,
    utilities: <FontAwesomeIcon icon={faLightbulb} fontSize={24} />,
    other: <FontAwesomeIcon icon={faEllipsisH} fontSize={24} />
}

