import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  time: any;
  isClear = false;

  get_PST() {
    this.isClear = false;
    this.time = new Date();
  }

  get_EST() {
    this.isClear = false;
    this.time = new Date();
    this.time.setHours(this.time.getHours() + 3);
  }

  get_CST() {
    this.isClear = false;
    this.time = new Date();
    this.time.setHours(this.time.getHours() + 1);
  }

  get_MST() {
    this.isClear = false;
    this.time = new Date();
    this.time.setHours(this.time.getHours() + 2);
  }

  clear() {
    this.isClear = true;
  }
}
