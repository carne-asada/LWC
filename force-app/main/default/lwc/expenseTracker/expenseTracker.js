import { LightningElement } from 'lwc';

export default class ExpenseTracker extends LightningElement {

columns = [
    {label : 'Expense Name',fieldName:'name'},
    {label : 'Category',fieldName:'category'},
    {label : 'Amount',fieldName:'amount',type:'currency'},
    {label : 'Date',fieldName:'date',type:'date',  
        typeAttributes:{
            month: "2-digit",
            day: "2-digit",
            year: "numeric"
        }}
];


expenses = [
    {
        name: 'Groceries',
        category: 'Food',
        amount: 400,
        date: '06/02/2025'
    },

    {
        name: 'Restaurants',
        category: 'Food',
        amount: 200,
        date: '06/02/2025'
    },

    {
        name: 'Internet',
        category: 'Utilities',
        amount: 100,
        date: '06/02/2025'
    },


    {
        name: 'Truck Maintenance',
        category: 'Transportation',
        amount: 50,
        date: '07/02/2025'
    },

    {
        name: 'Air Travel',
        category: 'Transportation',
        amount: 500,
        date: '08/02/2025'
    },

    {
        name: 'New Sailboat',
        category: 'Entertainment',
        amount: 5000,
        date: '09/02/2025'
        }
];

}