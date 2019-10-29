import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { QuotesComponent } from "./quotes/quotes.component";
import { QuoteFormComponent } from "./quote-form/quote-form.component";
import { HighlightDirective } from "./highlight.directive";
import { QuoteDetailComponentComponent } from "./quote-details/quote-details.component";
import { DateCountPipe } from "./date-count.pipe";

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailComponentComponent,
    QuoteFormComponent,
    HighlightDirective,
    DateCountPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
