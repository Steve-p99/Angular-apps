import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeService {

    employee = [
        {id:1, name: 'Stevens Philip', dept: 'CSE'},
        {id:2, name: 'Mukesh Raj', dept: 'MC'},
        {id:3, name: 'Dev Singh', dept: 'Civil'},
    ]

    getEmployee() {
        return this.employee
    }

    addEmployee(emp) {
        this.employee.push(emp)
    }
}