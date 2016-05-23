/**
 * Created by hujj on 2016/5/19.
 */


var users = {
    id:1,
    fullName : null,
    setUserName : function(firstName,lastName){
        this.fullName = firstName + " " + lastName;
    }
};

function  getUser(user){
    if(typeof user == "string"){
        console.log(user);
    }
    else if(typeof user == "object"){
        for(var i in user){
            console.log( i +"|" + user[i]);
        }
    }
}



function setUser(firstName, lastName, callback, callbackObj){
    if(typeof callback == "function"){
       // callback(option);
        callback.call(callbackObj,firstName,lastName);
      //  callback.apply(callbackObj,[firstName,lastName]);
    }

}

setUser("HU","JUNJIE",users.setUserName,users);

console.log(users.fullName);
