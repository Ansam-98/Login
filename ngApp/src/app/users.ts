export class Users {
    appname:string;
    email:string;
password:string;
title:string;
experiance:string;
_id:string;

constructor(email:any,password:any,appname:any,title:any,experiance:any,_id:any){
    this.appname=appname;
    this.email=email;
    this.password=password;
    this.title=title;
    this.experiance=experiance;
    this._id=_id

}
}
