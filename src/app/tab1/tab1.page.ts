import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  email:string;
  name:string;
  message:string;
  constructor(private http:HttpClient,private alertCtrl:AlertController)
  {

  }
  async submitButtonOnClick()
  {
   await  this.http.post('https://api.earlp.ru/ict10/contact',{
      name: this.name,
      email: this.email,
      message:this.message
    }).toPromise();

    var alert = await this.alertCtrl.create({
      header:  "Success",
      message: "Message Sent",
      });
      alert.present();
      
  }
}
