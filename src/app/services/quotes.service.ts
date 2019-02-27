import { Injectable } from '@angular/core';
import qoutesGroup from './quotes';
@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private favoriteQuotes: Quote[] = [];
  private favoriteQuotessize=0;
  constructor() { }

  public getGroups() {
    return qoutesGroup;

  }
  public getfavoritesize()
  {
    return this.favoriteQuotessize;
  }
  public getFavorites() {
    return this.favoriteQuotes;
  }
  public addQuoteToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);
    
  }
  public removeQuoteFromFavorites(quote:Quote){
    this.favoriteQuotes=this.favoriteQuotes.filter(
      q => q.id !=quote.id
    )
  }
}

export interface Quote {
  id: string;
  person: string;
  text: string;

}
export interface QuoteGroup {
  category: string;
  quotes: Quote[];
  icon: string;
  description:string;
  color:string;
}


