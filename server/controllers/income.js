const IncomeSchema= require("../models/IncomeModel")


exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date, userId}  = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date,
        userId
    })

    try {
        //validations
        if(!title || !category || !description || !date || !userId){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount must be a positive number!'})
        }
        await income.save()
        res.status(200).json({message: 'Income Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }

    console.log(income)
}

exports.getIncomes = async (req, res) =>{
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.getIncomeById = async (req, res) =>{
    const {id} = req.params;
    try {
        const incomeById = await IncomeSchema.findById(id)
        res.status(200).json(incomeById)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteIncome = async (req, res) =>{
    const {id} = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Income Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}

exports.updateIncome = async (req, res) =>{
    const {id} = req.params;
    IncomeSchema.findByIdAndUpdate(id,{$set:req.body},{new: true})
        .then((income) =>{
            res.status(200).json({message: 'Income Updated'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })

}