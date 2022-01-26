import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
})
export class DropDownComponent implements OnInit {
  @Input() tabs: any;
  profile: any;
  isloggedIn = false;
  @Output() navClick: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isloggedIn = this.authService.getAuthToken() ? true : false;
    this.profile = this.authService.getProfile();
    this.authService.profile$.subscribe((res) => {
      this.profile = res;
    });
    this.authService.loggedIn$.subscribe((res : any)=>{
      this.isloggedIn = res;
    })
  }

  navigateTo(tab: any) {
    this.navClick.emit(tab);
  }
}
