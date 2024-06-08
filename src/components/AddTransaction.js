import React, { useState } from 'react';
import { expenseIcons } from './TransactionList';
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSave } from '@fortawesome/free-solid-svg-icons';

const AddTransaction = ({ onAddTransaction, balance }) => {
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        id: new Date().getTime().toString(),
        amount: '',
        description: '',
        type: 'default',
        mode: balance <= 0 ? 'income' : 'expense'
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTransaction(formData);
        setSuccess(true);
        setFormData({
            id: new Date().getTime().toString(),
            amount: '',
            description: '',
            type: '',
            mode: balance <= 0 ? 'income' : 'expense'
        });
        setTimeout(() => {
            setSuccess(false);
        }, 800);
    };

    return (
        <div>
            <div className='text-center'>
                <button
                    className="btn btn-dark col-md-4 col-12 my-3"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#bottomOffcanvas"
                    aria-controls="bottomOffcanvas"
                >
                    + Add Transaction
                </button>
            </div>

            <div
                className={`offcanvas offcanvas-bottom`}
                tabIndex="-1"
                id="bottomOffcanvas"
                aria-labelledby="bottomOffcanvasLabel"
                style={{ height: "auto" }}
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="bottomOffcanvasLabel">
                        Add Transaction
                    </h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="type" className="form-label">
                                Type
                            </label>
                            <select
                                className="form-select"
                                id="mode"
                                value={formData.mode}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>
                                    Select Type
                                </option>
                                <option key={"type1"} value={"expense"} disabled={balance <= 0}>
                                    Expense
                                </option>
                                <option key={"type2"} value={"income"}>
                                    Income
                                </option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="amount" className="form-label">
                                Amount
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="amount"
                                max={formData.mode === "expense" ? balance : Infinity}
                                value={formData.amount}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">
                                Description
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="type" className="form-label">
                                Category
                            </label>
                            <select
                                className="form-select"
                                id="type"
                                value={formData.mode === "income" ? "default" : formData.type}
                                onChange={handleChange}
                                disabled={formData.mode === "income"}
                                required
                            >
                                <option value="" disabled>
                                    Select Category
                                </option>
                                {Object.keys(expenseIcons).map((type) => (
                                    <option key={type} value={type}>
                                        {type.charAt(0).toUpperCase() + type.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-dark">
                            <FontAwesomeIcon icon={faSave} /> Save
                        </button> <span className={`ms-3 fade ${success ? 'show' : ''}`}><FontAwesomeIcon icon={faCheck} /> Transaction Added Successfully!</span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTransaction;
