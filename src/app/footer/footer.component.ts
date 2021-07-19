import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public date: Date = new Date();
  public creator: string = 'Koskas Dani';

  constructor() {}

  ngOnInit(): void {}
}
