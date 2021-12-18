import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-gift',
  templateUrl: './buy-gift.component.html',
  styleUrls: ['./buy-gift.component.scss'],
})
export class BuyGiftComponent implements OnInit {
  constructor() {}

  giftCards = [
    {
      curency: 'Bitcoin',
      img: 'gift-card.png',
    },
    {
      curency: 'Bitcoin',
      img: 'gift-card.png',
    },
    {
      curency: 'Bitcoin',
      img: 'gift-card.png',
    },
    {
      curency: 'Bitcoin',
      img: 'gift-card.png',
    },
    {
      curency: 'Bitcoin',
      img: 'gift-card.png',
    },
    {
      curency: 'Bitcoin',
      img: 'gift-card.png',
    },
    {
      curency: 'Bitcoin',
      img: 'gift-card.png',
    },
    {
      curency: 'Bitcoin',
      img: 'gift-card.png',
    },
  ];

  amounts = [
    100, 200, 500, 1000
  ]

  selectedAmountPill = 0

  ngOnInit(): void {}

  selecteAmount(i:number){
    this.selectedAmountPill = i;
  }
}
