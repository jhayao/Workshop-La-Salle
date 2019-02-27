import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuotesService, QuoteGroup, Quote } from '../services/quotes.service';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { AlertPromise } from 'selenium-webdriver';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {
  id:number;
  currentGroup:QuoteGroup;
  constructor(private alertCtrl:AlertController,private navCtrl: NavController ,private route: ActivatedRoute,private qoutesService:QuotesService) { 
    this.id =+this.route.snapshot.paramMap.get("id");
    this.currentGroup=this.qoutesService.getGroups()[this.id];
  }

  ngOnInit() {
  }
  backButtonOnClick()
  {
    this.navCtrl.navigateBack('/tabs/tab3');
  }
 
async showQuotes(quote : Quote)
  {
    var alert = await this.alertCtrl.create({
      header:  quote.person,
      message: quote.text,
      cssClass: 'Alerts',

      buttons:[{
        text:"Close",
        role:"Cancel",
        handler: () =>
        {
            this.qoutesService.removeQuoteFromFavorites(quote)
        }
      },{
        text:"Add to Favorites",
        handler: () =>
        {
          this.qoutesService.addQuoteToFavorites(quote)
        }
      }]}
    )
    alert.present();
  }
}
