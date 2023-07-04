const router = require('express').Router();
const { addIncome , getIncomes, deleteIncome, updateIncome, getIncomeById} = require('../controllers/income');
const { addExpense, getExpense, deleteExpense, updateExpense, getExpenseById} = require('../controllers/expense');
const { loginUser,registerUser} = require('../controllers/login');

router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .get('/get-income/:id', getIncomeById)
    .delete('/delete-income/:id', deleteIncome)
    .put('/update-income/:id', updateIncome)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .get('/get-expense/:id', getExpenseById)
    .delete('/delete-expense/:id', deleteExpense)
    .put('/update-expense/:id', updateExpense)
    .post('/register', registerUser)
    .post('/login', loginUser)


module.exports = router