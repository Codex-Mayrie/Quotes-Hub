import { Component, OnInit } from "@angular/core";
import { Quotes } from "../quotes";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.css"]
})
export class QuotesComponent implements OnInit {
  quote: Quotes[] = [
    new Quotes(
      1,
      "What is good is not easy",
      "Shee",
      "Anonymous",
      new Date(2018, 3, 17)
    ),
    new Quotes(1, 'Never underestimate the power of a touch and a kind word', 'Shiku', 'Herman', new Date(2018, 0,12))
  ];

  constructor() {}

  ngOnInit() {}
}
