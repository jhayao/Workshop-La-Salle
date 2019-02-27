import { Component } from '@angular/core';
import {QuotesService,QuoteGroup, Quote} from "../services/quotes.service";
import { NavController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  quotesGroup:QuoteGroup[];
  favorites: Quote[];
  sizefavorites:number;
  
  constructor(
    private alertCtrl:AlertController,
    private quotesService: QuotesService,
    private navCtrl:NavController)
    {
    this.quotesGroup = quotesService.getGroups();
    this.favorites=this.quotesService.getFavorites();
    
  }
  ionLabelOnClick(i: number)
  {
    this.navCtrl.navigateForward('/quotes/' + i);
  }
  async showQuotes(quote : Quote)
  {
    var alert = await this.alertCtrl.create({
      header:  quote.person,
      message: quote.text,
      cssClass: 'Alerts',

      buttons:[{
        text:"Disagree",
        role:"Cancel",
        handler: () =>
        {
            this.quotesService.removeQuoteFromFavorites(quote)
            this.favorites=this.quotesService.getFavorites();
        }
      },{
        text:"Add to Favorites",
        
      }]}
    )
    alert.present();
  }
}
