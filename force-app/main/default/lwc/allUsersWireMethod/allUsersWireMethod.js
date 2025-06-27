import { LightningElement,wire } from 'lwc';
import getUsers from '@salesforce/apex/AllUsersController.getUsers';

export default class AllUsersWireMethod extends LightningElement {

    users;
    columns = [
        {label: 'First Name', fieldName: 'FirstName', type: 'text'},
        {label: 'Last Name', fieldName: 'LastName', type: 'text'},
        {label: 'Profile', fieldName: 'Profile', type: 'text'},
        {label: 'Email', fieldName: 'Email', type: 'email'}
    ];


    @wire(getUsers)
    wiredData({ data, error }) {
    if (data) {
        console.log('Wired data received:', data);
        this.users = data;
    } else if (error) {
        console.error('Error in wire:', error);
    }
}


        

    
}