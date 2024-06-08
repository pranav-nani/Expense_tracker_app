import React, { useEffect, useState } from 'react'
import Header from './Header'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction'

const ExpenseTracker = () => {
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("transactions"));
        if (items?.length)
            setTransactions(items);
    }, []);

    useEffect(() => {
        if (transactions) {
            let totalExpense = 0;
            let totalIncome = 0;

            transactions.forEach(item => {
                if (item.mode === "expense") {
                    totalExpense += Number(item.amount);
                } else if (item.mode === "income") {
                    totalIncome += Number(item.amount);
                }
            });

            setExpense(totalExpense);
            setIncome(totalIncome);
        }
    }, [transactions, setExpense, setIncome]);

    const onAddTransaction = (formData) => {
        let data = [formData, ...transactions];
        setTransactions(data);
        localStorage.setItem("transactions", JSON.stringify(data));
    }

    const deleteTransaction = (id) => {
        let newItems = transactions.filter(x => x.id !== id);
        setTransactions(newItems);
        localStorage.setItem("transactions", JSON.stringify(newItems));
    }

    return (
        <div className='container-fluid'>
            <Header income={income} expense={expense} balance={income - expense} />
            <TransactionList transactions={transactions} deleteItem={deleteTransaction} />
            <AddTransaction onAddTransaction={onAddTransaction} balance={income - expense} />
        </div>
    )
}

export default ExpenseTracker