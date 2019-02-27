import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.page.html',
  styleUrls: ['./sample.page.scss'],
})
export class SamplePage implements OnInit {

  constructor(private route:ActivatedRoute,private quotesService:QuotesService) { 
    
  }

  ngOnInit() {
  }

}
