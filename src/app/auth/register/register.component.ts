import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RegisterRequest } from 'src/app/models/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // @ViewChild('registerForm') registerForm!: NgForm

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    if (f.valid){
      // let data: RegisterRequest = {
      //   name: f.value.name,
      //   surname: f.value.surname,
      //   email: f.value.email,
      //   password: f.value.password
      // }

      let data: RegisterRequest = f.value;

    }
  }
}
