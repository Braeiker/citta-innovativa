import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginTokenComponent } from './login-token/login-token.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPostComponent } from './user-post/user-post.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginTokenComponent,
    UserListComponent,
    UserDetailsComponent,
    UserPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // Aggiungi HttpClientModule qui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
