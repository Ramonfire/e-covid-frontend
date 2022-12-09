import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-create-acc-modal',
  templateUrl: './create-acc-modal.component.html',
  styleUrls: ['./create-acc-modal.component.css']
})
export class CreateAccModalComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null,
    role: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  showModal = false;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  toggleModal(){
    this.showModal = !this.showModal;
  }

  onSubmit(): void {
    const { username, email, password , role } = this.form;

    this.authService.register(username, email, password,role).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
            setTimeout(function(){  window.location.reload() ; }, 3000);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}

