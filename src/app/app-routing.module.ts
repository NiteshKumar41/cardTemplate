import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatesmsComponent } from './components/createsms/createsms.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SmsitemsComponent } from './components/smsitems/smsitems.component';

const routes: Routes = [
  {
    path: 'navbar',
    component: NavbarComponent,
    children: [
      {
        path: 'createsms',
        component: CreatesmsComponent,
      },
      { path: 'smsitems', component: SmsitemsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
