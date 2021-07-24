import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  loginAdminData:any={}
  constructor(private _auth:AuthService,
    private _router:Router) { }

  ngOnInit(): void {
  }

  loginAdmin(){
    this._auth.loginAdmin(this.loginAdminData).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token',res.token)
        this._router.navigate(['/events'])
      },
      err => console.log(err)
    )
   }
}
