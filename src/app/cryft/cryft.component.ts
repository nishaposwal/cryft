import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cryft',
  templateUrl: './cryft.component.html',
  styleUrls: ['./cryft.component.scss'],
})
export class CryftComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  deliveryForm: FormGroup | undefined;
  ngOnInit(): void {
    this.deliveryForm = this.formBuilder.group({
      recipeintName: ['', Validators.required],
      recipeintEmail: ['', Validators.required],
      senderName: ['', Validators.required],
      message: [''],
      deliveryDate: ['', Validators.required],
      amount: ['', Validators.required],
      typeOfCrypto: ['', Validators.required],
    });
  }

  typesOfCrypo = [
    {
      id: 1,
      name: 'Bitcoin',
      image : ''
    },
    {
      id: 2,
      name: 'Ether',
    },
    {
      id: 3,
      name: 'Ghonchu',
    },
    {
      id: 4,
      name: 'type4',
    },
    {
      id: 5,
      name: 'type5',
    },
  ];
  amount: Number | undefined;
}
