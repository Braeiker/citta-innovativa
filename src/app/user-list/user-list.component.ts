import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  deleteUser(userId: string) {
    console.log( this.apiService.getApiKey );
    if (confirm('Sei sicuro di voler eliminare questo utente?')) {
      this.apiService.deleteUser(userId).subscribe(
        () => {
          this.users = this.users.filter(user => user.id !== userId);
        },
        error => {
          console.error('Errore durante l\'eliminazione dell\'utente:', error);
        }
      );
    }
  }

  loadUsers(): void {
    this.isLoading = true;
    this.errorMessage = ''; // Reset the error message

    this.apiService.getUsers().subscribe(
      response => {
        console.log('API Response:', response);
        this.isLoading = false;
        if (response && Array.isArray(response)) {
          this.users = response;
          console.log('Users:', this.users);
        } else {
          this.errorMessage = 'Response data is missing or not an array.';
        }
      },
      error => {
        console.error('An error occurred:', error);
        if(error.status == 401){
          console.log("apikyey non valida");
          console.log("reourting user to login page");
          sessionStorage.setItem("isAuthFailed", "failed");
          this.router.navigate(['login']);
          
        }
        this.isLoading = false;
        this.errorMessage = 'An error occurred while fetching users.';
      }
    );
  }
 
}