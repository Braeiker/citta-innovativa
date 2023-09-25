import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  userData: any=[];

  constructor(private userService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      console.log('ID:', id);
      this.userService.userDet(Number(id)).subscribe(
        (response) => {
          this.userData = [response]; 
          console.log('Data:', this.userData);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }
}
