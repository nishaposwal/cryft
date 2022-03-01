import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-and-support',
  templateUrl: './help-and-support.component.html',
  styleUrls: ['./help-and-support.component.scss']
})
export class HelpAndSupportComponent implements OnInit {

  constructor() { }

  comms = [
    {
      'img': 'email.png',
      'value': 'hi@kilope.com',
      'id': 'email'
    },
    {
      'img': 'phone.png',
      'value': '+919672421830',
      'id': 'phone'
    }
  ]
  ngOnInit(): void {
  }

}
