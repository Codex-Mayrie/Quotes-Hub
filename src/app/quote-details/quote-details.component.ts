import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailComponentComponent implements OnInit {
  @Input() quote: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  upvotes() {
    this.quote.upvotes += 1;
  }
  downvotes() {
    this.quote.downvotes += 1;
  }
  constructor() {}

  ngOnInit() {}
}
