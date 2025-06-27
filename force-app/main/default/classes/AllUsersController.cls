public with sharing class AllUsersController {
   
    @AuraEnabled
    public static List<User> getUsers(){
        return [SELECT FirstName, LastName, Profile.Name, Email FROM User ORDER BY LastName,FirstName];
    }
    
}