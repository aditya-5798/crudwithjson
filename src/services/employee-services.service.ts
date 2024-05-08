import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/interfaces/employeeInterface';
import { request } from 'http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService {

  url = "http://localhost:3500/data";
  constructor(private http: HttpClient) { }

  getAllEmployees() {
    return this.http.get<any>(this.url);
  }

  addNewEmployee(employee: Employee) {
    return this.http.post(this.url, employee)
  }



  deleteEmployee(name: string) {
    const urlWithParams = `${this.url}/${name}`;
    return this.http.delete(urlWithParams);
  }

  updateEmployee() {

  }
}
