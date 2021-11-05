import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  data: any;
  ngOnInit(): void {
    this.data = localStorage.getItem('data')
      ? JSON.parse(localStorage.getItem('data'))
      : null;
    console.log('Data', this.data);
  }
}
