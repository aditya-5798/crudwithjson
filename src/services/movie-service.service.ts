import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor() { }

  loginservice(username: string, password: string): number {
    if (username === "admin" && password === "12345") {
      return 200;
    } else {
      return 404;
    }
  }

  logoutService() {
    return true;
  }
}