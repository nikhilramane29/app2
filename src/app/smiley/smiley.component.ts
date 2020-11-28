import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smiley',
  templateUrl: './smiley.component.html',
  styleUrls: ['./smiley.component.css']
})
export class SmileyComponent implements OnInit {
  face = 'happy'

  constructor() { }

  ngOnInit(): void {
  }

}
