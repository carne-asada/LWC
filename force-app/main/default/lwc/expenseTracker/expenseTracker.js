import { LightningElement } from 'lwc';

export default class ExpenseTracker extends LightningElement {


Name = 'Expense Name';
Category = 'Category';
Amount = 'Amount'
Date = 'Date'

groceriesExpense = {
    name: 'Groceries',
    category: 'Food',
    amount: '$400',
    date: '06/02/2025'
}

restaurantExpense = {
    name: 'Restaurants',
    category: 'Food',
    amount: '$200',
    date: '06/02/2025'
}

internetExpense = {
    name: 'Internet',
    category: 'Utilities',
    amount: '$100',
    date: '06/02/2025'
}


truckExpense = {
    name: 'Truck Maintenance',
    category: 'Transportation',
    amount: '$50',
    date: '07/02/2025'
}

flightExpense = {
    name: 'Air Travel',
    category: 'Transportation',
    amount: '$500',
    date: '08/02/2025'
}

boatExpense = {
    name: 'New Sailboat',
    category: 'Entertainment',
    amount: '$5000',
    date: '09/02/2025'
    }

}