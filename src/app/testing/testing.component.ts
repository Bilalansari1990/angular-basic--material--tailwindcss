import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
})
export class TestingComponent implements OnInit {
  name = 'Angular';
  data = {
    aDateTypeDate: new Date('2018-08-29'),
  };
  currency = 54781.7622;
  transformdValue: any;

  constructor(private cp: CurrencyPipe) {
    this.transformdValue = cp.transform(
      this.currency,
      'USD',
      'symbol',
      '1.2-2'
    );
    console.log(this.transformdValue);
  }

  ngOnInit(): void {}
}
