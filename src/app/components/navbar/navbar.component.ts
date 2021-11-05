import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  projectName = "Portfolio Builder";
  ngOnInit(): void {
    this.isExist = localStorage.getItem("data") ? true: false;
    if(localStorage.getItem("data")){
        const data = JSON.parse(localStorage.getItem('data'));
        this.projectName  = data.personal_info && data.personal_info.name ? data.personal_info.name :"Portfolio Builder";
    }
  }
  collapsed = true;
  isExist = false;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
