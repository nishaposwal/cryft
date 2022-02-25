import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sag-detail',
  templateUrl: './sag-detail.component.html',
  styleUrls: ['./sag-detail.component.scss']
})
export class SagDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  sags = [{
    "img": "image 7.png",
    "sag": "Metaverse Sag",
    "about": "Metaverse sag contains all the Important coins/tokens which are pioneers of creating a new universe for the world where things are virtual and abstract. you can have your virtual home and your avatar. the global market for Metaverse estimated at US$107.1 Billion in the year 2020, is projected to reach a revised size of US$758.6 Billion by 2026",
    "companies": [
      {
        "name": "Decentraland MANA",
        "percent": 30
      },
      {
        "name": "The SandboxSAND",
        "percent": 30
      }
      ,
      {
        "name": "Theta NetworkTHETA",
        "percent": 10
      }
      ,
      {
        "name": "Axie InfinityAXS",
        "percent": 10
      }
      ,
      {
        "name": "Enjin CoinENJ",
        "percent": 10
      }
      ,
      {
        "name": "ChromiaCHR",
        "percent": 10
      }
    ]
  },
  {
    "img": "image 12.png",
    "sag": "Blue Chip Index Sag",
    "about": "We have curated this sag which contains all the coins/tokens which have a market capitalization in the billions, are generally the market leader, excellent reputations For all of these reasons, blue-chip stocks are among the most popular to buy among investors.    ",
    "companies": [
      {
        "name": "Bitcoin BTC",
        "percent": 30
      },
      {
        "name": "Ethereum ETH",
        "percent": 30
      }
      ,
      {
        "name": "Binance Coin BNB",
        "percent": 10
      }
      ,
      {
        "name": "USD Coin",
        "percent": 10
      }
      ,
      {
        "name": "XRP",
        "percent": 10
      }
      ,
      {
        "name": "Cardano ADA",
        "percent": 10
      }
    ]
  },
  {
    "img": "image 13.png",
    "sag": "Polkadot coins ",
    "about": "Polkadot is a protocol that connects blockchains — allowing value and data to be sent across previously incompatible networks (Bitcoin and Ethereum, for example). It's also designed to be fast and scalable. The DOT token is used for staking and governance; over the period Polkadot has proved itself as an ecosystem that is continuously growing so we have put together all the protocols that are in the Polkadot ecosystem in one way or the other.",
    "companies": [
      {
        "name": "Ocean Protocol OCEAN",
        "percent": 10
      },
      {
        "name": "Celer Network CELR",
        "percent": 10
      }
      ,
      {
        "name": "Moonriver MOVR",
        "percent": 10
      }
      ,
      {
        "name": "OriginTrail TRAC",
        "percent": 10
      }
      ,
      {
        "name": "MXC",
        "percent": 10
      }
      ,
      {
        "name": "Reef REEF",
        "percent": 10
      },
      {
        "name": "Astar ASTR",
        "percent": 10
      },
      {
        "name": "Energy Web Token EWT",
        "percent": 10
      },
      {
        "name": "RMRK",
        "percent": 10
      },
      {
        "name": "Polkastarter POLS",
        "percent": 10
      }
    ]
  },
  {
    "img": "image 14.png",
    "sag": "Defi Sag",
    "about": "Defi is the short form of decentralized finance Decentralized finance offers financial instruments without relying on intermediaries such as brokerages, exchanges, or banks by using smart contracts on a blockchain. where borrowing and lending of assets takes place we have curated the bucket of top Defi protocols that help in borrowing and lending the crypto assets.",
    "companies": [
      {
        "name": "Uniswap UNI",
        "percent": 30
      },
      {
        "name": "Aave AAVE",
        "percent": 30
      },
      {
        "name": "PancakeSwap CAKE",
        "percent": 10
      },
      {
        "name": "Tezos XTZ",
        "percent": 5
      },
      {
        "name": "Loopring LRC",
        "percent": 5
      }
      ,
      {
        "name": "yearn.finance YFI",
        "percent": 10
      }
      ,
      {
        "name": "Compound COMP",
        "percent": 10
      }
    ]
  },
  {
    "img": "image 10.png",
    "sag": "Backbone Sag",
    "about": "Backbone sags contain blockchain that are backbone blockchains that power the web 3 applications. it contains all the new and old blockchain coins which are responsible for powering the blockchains. their coins are powerful assets to have there is no token added to this sag.",
    "companies": [{
      "name": "Bitcoin BTC",
      "percent": 30
    },
    {
      "name": "Ethereum ETH",
      "percent": 30
    }
    ,
    {
      "name": "BNB",
      "percent": 10
    }
    ,
    {
      "name": "Solana SOL",
      "percent": 10
    }
    ,
    {
      "name": "Polkadot DOT",
      "percent": 10
    }
    ,
    {
      "name": "Polygon MATIC",
      "percent": 10
    }
  ]
  },
  {
    "img": "binance.png",
    "sag": "Bull Run Sag",
    "about": "This sag brings you the most dreamt coins  which have shown the emormus growh over the period of the time. the sag is actively managed and diversified. according to marekt trends",
    "companies": [{
      "name": "gala",
      "percent": 10
    },
    {
      "name": "hive",
      "percent": 10
    }
    ,
    {
      "name": "lrc",
      "percent": 10
    }
    ,
    {
      "name": "sand",
      "percent": 40
    }
    ,
    {
      "name": "req",
      "percent": 10
    }
    ,
    {
      "name": "lpt",
      "percent": 10
    },
    {
      "name": "AVax",
      "percent": 10
    }
  ]
  },
  {
    "img": "NFT Logo.png",
    "sag": "NFT Sag",
    "about": "NFTs are nonfungible tokens that ie any form of digital assets that are minted on the blockchain and cannot be duplicated these can be a piece of art that have future value because of the rarity of the art. curated sag contains top NFT projects.",
    "companies": [{
      "name": "I'M AIKO",
      "percent": 10
    },
    {
      "name": "SOLIZENS",
      "percent": 10
    }
    ,
    {
      "name": "Nude and beautiful",
      "percent": 10
    }
    ,
    {
      "name": "DavidBioux | Boudoir",
      "percent": 10
    }
    ,
    {
      "name": "OG Astro Babies",
      "percent": 10
    }
    ,
    {
      "name": "Solana Pawn Stars",
      "percent": 10
    },
    {
      "name": "Astro Baby Apes",
      "percent": 10
    },
    {
      "name": "Famous People",
      "percent": 10
    },
    {
      "name": "Solflowers",
      "percent": 10
    },
    {
      "name": "CitizenOne",
      "percent": 10
    }
  ]
  },
  {
    "img": "image 8.png",
    "sag": "Utility tokens",
    "about": "utility token sag has token that have use on particualr platfrom. these token have plenty of value in dao and native platform utility. value of the token increases as the users on the platform",
    "companies": [
      {
        "name": "BAT",
        "percent": 25
      },
      {
        "name": "The graph",
        "percent": 25
      },
      {
        "name": "Ciclius",
        "percent": 25
      },
      {
        "name": "Torent",
        "percent": 25
      }
    ]
  },
  {
    "img": "image 11.png",
    "sag": "Stake - It",
    "about": "This sag deployes funds on the projects/companies that pay for staking your assests .your funds are invested these companies which are 100% safe and secure and average of 10-12 % average APY is genrated.",
    "companies": [
      {
        "name": "Hodlnaut",
        "percent": 25
      },
      {
        "name": "BlockFi",
        "percent": 25
      },
      {
        "name": "Nexo",
        "percent": 25
      },
      {
        "name": "CoinLoan",
        "percent": 25
      }
    ]
  }]
  id: any;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
    })
  }



}
