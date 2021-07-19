import { Pizza } from './Pizza.model';

export class PizzaInfo {
  public getPizzas(): Pizza[] {
    let pizzaArr: Pizza[] = new Array<Pizza>(100);

    for (let i: number = 0; i < pizzaArr.length; i++) {
      let diameter: number = Math.floor(Math.random() * (50 - 10) + 10);
      let slices: number = Math.floor(Math.random() * (8 - 3) + 10);
      let toppings: number = Math.floor(Math.random() * 4);

      pizzaArr[i] = new Pizza(diameter, slices, toppings);
    }
    return pizzaArr;
  }
}
