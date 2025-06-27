public with sharing class AllUsersController {
   
    @AuraEnabled(cacheable=true)
    public static List<User> getUsers(){
        System.debug('in controller');
        return [SELECT FirstName, LastName, Profile.Name, Email FROM User ORDER BY LastName,FirstName];
    }
    
}