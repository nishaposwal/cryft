import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buy-gift',
  templateUrl: './buy-gift.component.html',
  styleUrls: ['./buy-gift.component.scss'],
})
export class BuyGiftComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  cryptos = [
    {
      id: 1,
      curency: 'Bitcoin',
      img: 'gift-card.png',
    },
    {
      id: 2,
      curency: 'Ether',
      img: 'gift-card1.png',
    },
    {
      id: 3,
      curency: 'Ghonchu',
      img: 'gift-card.png',
    },
    {
      id: 4,
      curency: 'type4',
      img: 'gift-card1.png',
    },
    {
      id: 5,
      curency: 'type5',
      img: 'gift-card.png',
    },
    {
      id: 6,
      curency: 'type6',
      img: 'gift-card1.png',
    },
    {
      id: 7,
      curency: 'type7',
      img: 'gift-card.png',
    },
    {
      id: 8,
      curency: 'type8',
      img: 'gift-card1.png',
    },
  ];

  amounts = [100, 200, 500, 1000];
  selectedAmount = 100;
  selectedCrypto: any;

  deliveryForm: any;
  ngOnInit(): void {
    this.selectedCrypto = this.cryptos[0];
    this.deliveryForm = this.formBuilder.group({
      recipeintName: ['', Validators.required],
      recipeintEmail: ['', Validators.required],
      senderName: ['', Validators.required],
      message: [''],
      delivryTime: ['', Validators.required],
      amount: [100, Validators.required],
      typeOfCrypto: ['', Validators.required],
    });
  }

  amount: Number | undefined;

  selecteAmount(amount: number) {
    this.selectedAmount = amount;
  }

  selectTypeOfCrypto(crypto: any) {
    this.selectedCrypto = crypto;
  }

  print(event: any) {
    console.log(event.target.value);
  }

  buyNow() {
    console.log(this.deliveryForm?.value);
  }
}
