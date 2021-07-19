export class Pizza {
  public constructor(
    public diameter: number,
    public slices: number,
    public toppings: number
  ) {}
  public get price(): number {
    return this.diameter + this.toppings * 5;
  }
}
