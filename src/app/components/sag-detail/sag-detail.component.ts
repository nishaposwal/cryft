import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sag-detail',
  templateUrl: './sag-detail.component.html',
  styleUrls: ['./sag-detail.component.scss']
})
export class SagDetailComponent implements OnInit {

  constructor( private route: ActivatedRoute ) { }

   sags = [{ "img": "image 7.png", "sag": "Metaverse Sag", "about": "Best metaverse projects all in one sag" },
  { "img": "image 12.png", "sag": "Blue Chip Index Sag", "about": "Includes all the premium coins" },
  { "img": "image 13.png", "sag": "Deso Sag", "about": "Contains social media projects" },
  { "img": "image 14.png", "sag": "Defi Sag", "about": "Decentralized finance coins and tokens" },
  { "img": "image 10.png", "sag": "Backbone Sag", "about": "Invests in core technology of crytocurriencies" },
  { "img": "binance.png", "sag": "Value Token Sag", "about": "Value able tokens that have real use case are included" },
  { "img": "NFT Logo.png", "sag": "NFT Sag", "about": "Invests in premium digital art" },
  { "img": "image 8.png", "sag": "Digital Land Sag", "about": "Real estate projects on metaverse" },
  { "img": "image 11.png", "sag": "Stake - It", "about": "Includes staking and mining projects" }]
  id: any;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
  })
  }



}
