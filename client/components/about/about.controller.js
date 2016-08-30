class AboutController {

    /*@ngInject*/
    constructor(Restangular, $http) {

        this.Restangular = Restangular;
        this.self = this;
        this.basicCollection = [];


        //This is get 
        /*users.get("a2").then(function(userslist) {
        console.log(userslist);
      });
*/
        //This is POST
        /*var user = {_id:"a3",name:"aaaa", age:23};
             users.post({"user":user}).then(function(users) {
               console.log("Response >> "+JSON.stringify(users));
             });*/

        //We can hit to user define URL also.
        /*var user = Restangular.allUrl('user', '/server/user/2').getList();
        console.log(JSON.stringify(user));*/

        /* var userlist = users.getList().then(function(userlist) {
               console.log(JSON.stringify(userlist));
           });*/

        //Pattern findings
        /*
             var users = Restangular.one('users',1).one('age','23').get().then(function(user) {
                    console.log(JSON.stringify(user));
                });*/



        //This is delete 

        //var userList = users.getList();

        /*users.getList().then(function(userList) {
                   console.log("~~@~~~~~~~~~~  "+JSON.stringify(userList));
                     var user = userList[0];
                     user.fieldName="test123";
                     //user.put();
                     user.put();
               });*/






    }


    getServerData() {
        console.log("here in getServerData");
        this.Restangular.one('/getBaseList').get().then(function(basicCollectionResult) {
            //console.log("basicCollectionResult.status : " + basicCollectionResult.status);
            //console.log("basicCollectionResult.result : " + basicCollectionResult.result)
            if(basicCollectionResult.status == true){
                this.basicCollection = basicCollectionResult.result;
            }
         }.bind(this.self));

    }



}




export default AboutController;
