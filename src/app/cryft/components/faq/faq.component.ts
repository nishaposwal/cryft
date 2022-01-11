import { Component, OnInit } from '@angular/core';
import { QUESTIONS } from 'src/assets/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  constructor() {}
  questions = QUESTIONS;
  ngOnInit(): void {}

  toggleQuestion(question: any) {
    question.show = !question.show;
  }
}
