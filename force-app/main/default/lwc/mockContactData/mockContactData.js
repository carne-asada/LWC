import { LightningElement } from 'lwc';

export default class MockContactData extends LightningElement {

    columns = [
        {label: 'First Name', fieldName: 'firstName'},
        {label: 'Last Name', fieldName: 'lastName'},
        {label: 'Email', fieldName: 'email'},
        {label: 'Phone', fieldName: 'phone', type: 'phone'},
        {label: 'Birthday', fieldName: 'birthday', type: 'date'},
    ];

    data = [
        {firstName: 'David', lastName: 'Lee', email: 'dlee@mail.com', phone: '234-567-8912', birthday: '02/17/1984'},
        {firstName: 'Bob', lastName: 'Lee', email: 'bob.lee@lee.com', phone: '555-567-8912', birthday: '10/05/1984'},
        {firstName: 'Sarah', lastName: 'Lee', email: 'sarah.lee@lee.com', phone: '234-562-3012', birthday: '1/9/1980'},
    ];

}