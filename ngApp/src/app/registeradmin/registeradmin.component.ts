import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-registeradmin',
  templateUrl: './registeradmin.component.html',
  styleUrls: ['./registeradmin.component.css']
})
export class RegisteradminComponent implements OnInit {

  registerAdminData:any={}
  constructor(private _auth:AuthService,
    private _router:Router) { }

  ngOnInit(): void {
  }

  registerAdmin(){
    this._auth.registerAdmin(this.registerAdminData).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token',res.token)
        this._router.navigate(['/special'])
      },
err => console.log(err)
    )
  }
}