import { LightningElement,api } from 'lwc';
import STAGE_OPPORTUNITY_FIELD from '@salesforce/schema/Opportunity.StageName';
import NAME_OPPORTUNITY_FIELD from '@salesforce/schema/Opportunity.Name';
import CLOSEDATE_OPPORTUNITY_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import OWNERID_OPPORTUNITY_FIELD from '@salesforce/schema/Opportunity.OwnerId';


export default class RecordEditForm extends LightningElement {
    @api objectApiName;
    @api recordId;



}