import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sags',templateUrl: './sags.component.html',styleUrls: ['./sags.component.scss']
})
export class SagsComponent implements OnInit {
  constructor() { }

  sags = [
    { "img": "../../../../assets/images/image 7.png", "sag": "Metaverse Sag", "about": "Best metaverse projects all in one sag" },
    { "img": "../../../../assets/images/image 12.png", "sag": "Blue Chip Index Sag", "about": "Includes all the premium coins" },
    { "img": "../../../../assets/images/image 13.png", "sag": "Deso Sag", "about": "Contains social media projects" },
    { "img": "../../../../assets/images/image 14.png", "sag": "Defi Sag", "about": "Decentralized finance coins and tokens" },
    { "img": "../../../../assets/images/image 10.png", "sag": "Backbone Sag", "about": "Invests in core technology of crytocurriencies" },
    { "img": "../../../../assets/images/binance.png", "sag": "Value Token Sag", "about": "Value able tokens that have real use case are included" },
    { "img": "../../../../assets/images/NFT Logo.png", "sag": "NFT Sag", "about": "Invests in premium digital art" },
    { "img": "../../../../assets/images/image 8.png", "sag": "Digital Land Sag", "about": "Real estate projects on metaverse" },
    { "img": "../../../../assets/images/image 11.png", "sag": "Stake - It", "about": "Includes staking and mining projects" }
  ]
  ngOnInit(): void {
  }

}
