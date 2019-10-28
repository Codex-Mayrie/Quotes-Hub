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
      "What is good is not easy",
      "Shee",
      "Anonymous",
      new Date(2018, 3, 17)
    ),
    new Quotes(
      2,
      "Never underestimate the power of a touch and a kind word",
      "Shiku",
      "Herman",
      new Date(2018, 0, 12)
    )
  ];

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  completeQuotes(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() {}

  ngOnInit() {}
}
