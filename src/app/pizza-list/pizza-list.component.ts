import { Component, OnInit } from '@angular/core';
import { Pizza } from '../shared/Pizza.model';
import { PizzaInfo } from '../shared/pizzaInfo.model';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css'],
})
export class PizzaListComponent implements OnInit {
  public pizzaList: Pizza[] | undefined;

  constructor() {
    let pizzaInfo: PizzaInfo = new PizzaInfo();
    this.pizzaList = pizzaInfo.getPizzas();
  }

  ngOnInit(): void {}
}
