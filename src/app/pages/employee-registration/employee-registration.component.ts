import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { error } from 'console';
import { EmployeeServicesService } from 'src/services/employee-services.service';
import { Employee } from 'src/app/interfaces/employeeInterface';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  constructor(private http: HttpClient, private empServ: EmployeeServicesService) { }
  department: any[] = [];
  employees: Employee[] = [];

  showDialog = false;
  selectedEmployeeName!: string;

  updateEmployee(name: string) {
    this.selectedEmployeeName = name;
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
    this.selectedEmployeeName = '';
  }



  RegiForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl(''),
    department: new FormControl('')
  })

  ngOnInit(): void {
    this.loadDepartments();
    this.loadEmployess();
    console.log(this.department);

  }
  displayEmployees: boolean = false;

  loadDepartments() {
    this.http.get('./assets/dept.json').subscribe((res: any) => {
      console.log(res.departments);
      this.department = res.departments;


    }, (error) => {
      console.log("file not found", error);

    }, () => {
      console.log("file read");

    })
  }

  loadEmployess() {

    this.empServ.getAllEmployees().subscribe((res) => {
      console.log(res);
      this.employees = res;
      console.log(this.employees);
    }, (error) => {
      console.log("file not found", error);

    }, () => {
      console.log("file read");

    })
  }

  formSubmit() {
    const employeeData = this.RegiForm.value;
    this.empServ.addNewEmployee(employeeData).subscribe(
      (response) => {
        console.log('Employee added successfully:', response);
      },
      (error) => {
        console.error('Error adding employee:', error);
      }
    );



  }

  deleteEmployee(name: string) {
    this.empServ.deleteEmployee(name).subscribe(
      () => {
        // Handle successful deletion
        // For example, remove the employee from a list in your component
        this.employees = this.employees.filter(emp => emp.name !== name);
      },
      (error: any) => {
        // Handle error scenario
        console.error('Error occurred while deleting employee:', error);
      }
    );
  }


}




// this.http.get('./assets/employees.json').subscribe((res: any) => {
//   console.log(res.employees);
//   this.employees = res.employees;


// }, (error) => {
//   console.log("file not found", error);

// }, () => {
//   console.log("file read");

// })