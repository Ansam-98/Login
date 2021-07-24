import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AdminComponent } from './admin/admin.component';
import { RegisteradminComponent } from './registeradmin/registeradmin.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path: 'events',
    component:EventsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'special',
    component:SpecialEventsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path: 'admin',
    component:AdminComponent
  },{
    path: 'registeradmin',
    component:RegisteradminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
