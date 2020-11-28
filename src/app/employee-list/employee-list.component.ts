import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee={
    id: 1,
    name: 'employee 1',
    department: 'computer',
    salary:15.50,
    role:'developer'
  }

  employees=[
    {
      id: 1,
      name: 'employee 1',
      department: 'computer',
      salary:25.50,
      role:'developer'
    },

    {
      id: 2,
      name: 'employee 2',
      department: 'computer',
      salary:35.50,
      role:'developer'
    },

    {
      id: 3,
      name: 'employee 3',
      department: 'computer',
      salary:65.50,
      role:'developer'
    },

    {
      id: 4,
      name: 'employee 4',
      department: 'IT',
      salary:35.50,
      role:'developer'
    },
    
    {
      id: 5,
      name: 'employee 5',
      department: 'ENTC',
      salary:13.50,
      role:'developer'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
