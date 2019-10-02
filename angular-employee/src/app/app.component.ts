import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private emp: EmployeeService) {}
  
  name
  id
  department

  addNewEmployee() {
    const employee = {
      id: this.id,
      name: this.name,
      dept: this.department
    }
    this.emp.addEmployee(employee)
  }
}
