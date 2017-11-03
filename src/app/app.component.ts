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

  get_time(zone) {
    this.isClear = false;
    this.time = new Date();
    if (zone === 'PST') {
      this.time = this.time;
    }else if (zone === 'EST') {
      this.time.setHours(this.time.getHours() + 3);
    } else if (zone === 'MST') {
      this.time.setHours(this.time.getHours() + 2);
    } else if (zone === 'CST') {
      this.time.setHours(this.time.getHours() + 1);
    }
  }

  clear() {
    this.isClear = true;
  }
}
