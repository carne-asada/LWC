import { LightningElement } from 'lwc';

export default class SimpleTable extends LightningElement {

columns = [ 
    {label: 'Opportunity Name', fieldName : 'name'},
    {label: 'Stage', fieldName : 'stage'},
    {label: 'Amount', fieldName : 'amount'},
    {label: 'Close Date', fieldName : 'closedate'}
];



opportunities  = [
    {
        name: 'Acme Inc',
        stage: 'Prospecting',
        amount: '$55'+','+'5555',
        closedate: '06/02/2025'
    },

    {
        name : 'Global co',
        stage: 'Closed Won',
        amount: '15'+','+'555',
        closedate: '09/05/2025'
    },

    {
        name: 'Vandelay Industries',
        stage: 'Closed Lost',
        amount: '230',
        closedate: '01/02/2026'
    },

    {
        name: 'Kramerica',
        stage: 'Negotiation',
        amount: '25'+','+'555',
        closedate: '10/05/2025'
    },

    {
        name: 'Kruger Sanding',
        stage: 'Closing',
        amount: '25'+','+'211',
        closedate: '7/02/2025'
    }];




}