import {router} from '../main'

const API_URL = 'http://39.108.170.209:8888';
const login_url = API_URL + '/auth';
const check_url = API_URL + '/buyer/balance/whole';

export default {

  user:{
    authenticated: false,
  },
  login(context, creds, redirect) {
    context.$http.post(login_url,creds,{
         emulateJSON: true
       })
      .then(function (response) {
        console.log(response);
        console.log(response.data);
        localStorage.setItem('id_token', response.data.token);
        this.user.authenticated = true;

         this.$http.post(check_url, {
           beginDate: "20170228",
           endDate: "20170228"
         }, {
           headers: {'Authorization': localStorage.getItem('id_token')},
           emulateJSON: true
         }).then(function (response) {

           if(redirect) {
             this.$router.go(redirect);
             this.$router.replace(redirect)}

           console.log(response.data);
             var obj = response.data;
             var trs="";
             for(var k in obj) {
               //遍历对象，k即为key，obj[k]为当前k对应的值
               trs += "<table><tr><td colspan=2><b>" + k +"</b></td></tr>";
               // console.log(k);
               if (typeof(obj[k]) === 'object'){
                 if(Object.prototype.toString.call(obj[k]) === '[object Array]'){
                   var obj4=obj[k]
                   for (var s in obj4){
                     var obj2 = obj4[s];
                     for (var n in obj2) {
                       trs += "<tr><td>" + n + "</td><td>" + obj2[n] + "</td></tr>";
                       // console.log(n);
                       // console.log(obj2[n]);
                     }
                   }
                 }
                 else{
                   var obj3 = obj[k];
                   for(var n in obj3) {
                     trs += "<tr><td>" + n + "</td><td>" + obj3[n] + "</td></tr>";
                     // console.log(n);
                     // console.log(obj3[n]);
                   }
                 }
               }
             }
             trs += "</table>";
             localStorage.setItem('data',trs);
         })
      }, function (response) {
           console.log(response)}
      )
  },
  logout() {
    localStorage.removeItem('id_token');
    this.user.authenticated = false;
  },
  checkAuth() {
    var jwt = localStorage.getItem('id_token');
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false
    }
  },
}
