import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sags',templateUrl: './sags.component.html',styleUrls: ['./sags.component.scss']
})
export class SagsComponent implements OnInit {
  constructor(
    private router : Router) { }

  sags = [
    { "id" : 0, "img": "../../../../assets/images/image 7.png", "sag": "Metaverse Sag", "about": "Best metaverse projects all in one sag" },
    { "id" : 1, "img": "../../../../assets/images/image 12.png", "sag": "Blue Chip Index Sag", "about": "Includes all the premium coins" },
    { "id" : 2, "img": "../../../../assets/images/image 13.png", "sag": "Deso Sag", "about": "Contains social media projects" },
    { "id" : 3, "img": "../../../../assets/images/image 14.png", "sag": "Defi Sag", "about": "Decentralized finance coins and tokens" },
    { "id" : 4, "img": "../../../../assets/images/image 10.png", "sag": "Backbone Sag", "about": "Invests in core technology of crytocurriencies" },
    { "id" : 5, "img": "../../../../assets/images/binance.png", "sag": "Value Token Sag", "about": "Value able tokens that have real use case are included" },
    { "id" : 6, "img": "../../../../assets/images/NFT Logo.png", "sag": "NFT Sag", "about": "Invests in premium digital art" },
    { "id" : 7, "img": "../../../../assets/images/image 8.png", "sag": "Digital Land Sag", "about": "Real estate projects on metaverse" },
    { "id" : 8, "img": "../../../../assets/images/image 11.png", "sag": "Stake - It", "about": "Includes staking and mining projects" }
  ]
  ngOnInit(): void {
  }

  route (id: any) {
    this.router.navigate(['/invest/sag'], {queryParams: {'id': id}});
  }

}
