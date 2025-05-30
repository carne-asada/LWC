import { LightningElement } from 'lwc';

export default class SimpleTable extends LightningElement {

column1 = 'Opportunity Name';
column2 = 'Stage';
column3 = 'Amount';
column4 = 'Close Date';


opp1 = {
    name: 'Acme Inc',
    stage: 'Prospecting',
    amount: '$55'+','+'5555',
    closedate: '06/02/2025'
}

opp2 = {
    name : 'Global co',
    stage: 'Closed Won',
    amount: '15'+','+'555',
    closedate: '09/05/2025'
}

opp3 = {
    name: 'Vandelay Industries',
    stage: 'Closed Lost',
    amount: '230',
    closedate: '01/02/2026'
}

opp4 = {
    name: 'Kramerica',
    stage: 'Negotiation',
    amount: '25'+','+'555',
    closedate: '10/05/2025'
}

opp5 = {
    name: 'Kruger Sanding',
    stage: 'Closing',
    amount: '25'+','+'211',
    closedate: '7/02/2025'
}




}