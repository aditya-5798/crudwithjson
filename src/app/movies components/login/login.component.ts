import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MovieServiceService } from 'src/services/movie-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fieldMissing!: boolean;
  InvalidFields!: boolean;

  constructor(private movieService: MovieServiceService, private router: Router) { }

  loginForm = new FormGroup({
    userName: new FormControl(),
    password: new FormControl()

  })

  ngOnInit(): void {
  }

  loginCred() {
    console.log(this.loginForm.value);
    const username = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;

    if (!username || !password) {
      this.fieldMissing = true;
    } else {
      this.fieldMissing = false;
      console.log(username, password);

      const res = this.movieService.loginservice(username, password);
      console.log(res);

      if (res === 200) {
        this.InvalidFields = false;
        this.router.navigate(['home']);
      } else {
        this.InvalidFields = true;
      }
    }
  }
}
