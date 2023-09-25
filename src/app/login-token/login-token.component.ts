import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-token',
  templateUrl: './login-token.component.html',
  styleUrls: ['./login-token.component.css'],
})
export class LoginTokenComponent implements OnInit {
  user = {
    apikey: '', 
  };
  errorMessage: string = '';
  isFromFailedLogin = false;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('isAuthFailed') == 'failed') {
      this.isFromFailedLogin = true;
    }
    sessionStorage.setItem('isAuthFailed', 'false');
  }

  onSubmit() {
    if (this.user.apikey) {
      this.apiService.setApiKey(this.user.apikey);
      this.router.navigate(['user-list']);
    } else {
      this.errorMessage = 'Please enter a valid API key.';
    }
  }

  logUser() {
    console.log(this.user);
  }

 
}

