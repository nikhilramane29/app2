import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars=[
    {
      id: 1,
      model: 'i 20',
      company: 'hyundai',
      price : 7.5,
      color:'space-grey'
    },
    {
      id: 2,
      model: 'nano',
      company: 'tata',
      price : 2.5,
      color:'yellow'
    },

    {
      id: 3,
      model: 'fabia',
      company: 'skoda',
      price : 6.5,
      color:'dark-grey'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
