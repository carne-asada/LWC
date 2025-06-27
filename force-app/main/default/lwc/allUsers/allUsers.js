import { LightningElement } from 'lwc';
import getUsers from '@salesforce/apex/AllUsersController.getUsers';

export default class AllUsers extends LightningElement {
    users;
    columns = [
        {label: 'First Name', fieldName: 'FirstName', type: 'text'},
        {label: 'Last Name', fieldName: 'LastName', type: 'text'},
        {label: 'Profile', fieldName: 'Profile', type: 'text'},
        {label: 'Email', fieldName: 'Email', type: 'email'}
    ];

    connectedCallback(){
        getUsers().then(result => {
            this.users = result;
        })
    }

}