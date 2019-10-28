import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { QuotesComponent } from "./quotes/quotes.component";
import { QuoteFormComponent } from "./quote-form/quote-form.component";
import { HighlightDirective } from "./highlight.directive";
import { QuoteDetailComponentComponent } from "./quote-details/quote-details.component";
import { DateCountPipe } from "./date-count.pipe";
import { VotesComponent } from './votes/votes.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailComponentComponent,
    QuoteFormComponent,
    HighlightDirective,
    DateCountPipe,
    VotesComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
