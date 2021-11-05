import { Component, OnInit } from '@angular/core';

export interface Info {
  personal_info: {
    name: string;
    contact_no: string;
    developer: string;
  };
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  data: any;
  constructor() {}

  ngOnInit(): void {
    this.data = localStorage.getItem('data')
      ? JSON.parse(localStorage.getItem('data'))
      : null;
    console.log('Data', this.data);
  }
}
