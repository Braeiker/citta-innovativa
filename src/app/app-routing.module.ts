import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginTokenComponent } from './login-token/login-token.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Route predefinita
  { path: 'login', component: LoginTokenComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-list/user-details/:id', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
