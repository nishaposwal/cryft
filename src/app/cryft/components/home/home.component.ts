import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { EventEmitterService } from 'src/app/core/services/event-emitter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('buyGift', { static: false })
  buyGift: ElementRef<HTMLElement> = {} as ElementRef;
  @ViewChild('home', { static: false })
  home: ElementRef<HTMLElement> = {} as ElementRef;
  @ViewChild('faq', { static: false })
  faq: ElementRef<HTMLElement> = {} as ElementRef;
  subscription: any = [];
  constructor(private eventEmitterService: EventEmitterService, private authService : AuthService) {}

  ngOnInit(): void {
    this.subscription.push(
      this.eventEmitterService.subscribe((event: any) => {
        switch (event.type) {
          case 'BUY_GIFT':
            this.buy();
            break;
          case 'SROLL_TO_THE_TOP':
            this.home.nativeElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest',
            });
            break;

          case 'FAQ':
            this.scrollToFAQ();
            break;

          default:
            break;
        }
      })
    ); 

    this.authService.getServerProfile().subscribe(res=>{
      this.authService.setProfile(res);
    })
  }

  ngAfterViewInit() {}

  buy() {
    this.buyGift.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  scrollToFAQ() {
    this.faq.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
