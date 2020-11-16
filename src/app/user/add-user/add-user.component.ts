import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  formData: any = {};
  errors: any = [];

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register(): void {
    this.errors = [];
    this.auth.register1(this.formData)
      .subscribe(() => {
        this.router.navigate(['/user-list']);
       },
        (errorResponse) => {
          this.errors.push(errorResponse.error.error);
        });
  }
}
