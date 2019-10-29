import { Component, OnInit } from "@angular/core";
import { Quotes } from "../quotes";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.css"]
})
export class QuotesComponent implements OnInit {
  quotes: Quotes[] = [
    new Quotes(
      1,
      "What is good is not easy and what is not easy is worth every struggle",
      "Shee",
      "Anonymous",
      "Myquote",
      new Date(2019, 3, 17)
    ),
    new Quotes(
      2,
      "Never underestimate the power of a touch and a kind word",
      "Shiku",
      "Herman",
      "Myquote",
      new Date(2019, 0, 12)
    ),
    new Quotes(
      2,
      "No human is limited",
      "Kipchoge",
      "Marion",
      "myQuote",
      new Date(2019, 1, 23)
    ),
    new Quotes(
      3,
      "A person is a person no matter how small",
      "Bob collymore",
      "Wambui Collymore",
      "Myquote",
      new Date(2019, 3, 12)
    )
  ];

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    console.log(quote);

    this.quotes.push(quote);
    console.log(this.quotes);
  }

  constructor() {}

  ngOnInit() {}
}
