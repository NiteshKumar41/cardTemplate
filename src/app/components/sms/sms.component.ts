import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css'],
})
export class SmsComponent implements OnInit {
  showParent = true;
  showChild = false;
  constructor() {}

  ngOnInit(): void {}
  createsms() {
    (this.showParent = false), (this.showChild = true);
  }
}
