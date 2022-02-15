import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute) { }

  blogs = [
    {"id": 0, "head": 'What is Cryptocurrency?', "content": "Cryptocurrencies are a form of digital money that runs on blockchain technology. Although there are many currencies, Bitcoin and Ether are the most popular.<br><br>Cryptocurrency gets its name because it uses encryption to secure transactions. Encryption is an advanced coding method where the data getting transferred are embedded in codes to protect them. It means advanced techniques are involved in making the crypto transaction secure. <br><br>Cryptocurrency is a virtual payment system that doesn’t require banks to operate in the process. It’s an encrypted payment ecosystem where one can send or receive the payment to anyone from anywhere.Although we have many physical currencies which are exchanged around the globe, Cryptocurrencies transactions are purely digital and payments sent or received are anonymous and are stored in an online database. One can store crypto in a secured digital wallet. <br><br><b>How does cryptocurrency work?</b><br><br><ul><li>Cryptocurrency uses blockchain technology and its transactions are immutable.</li><li>By mining, you can earn cryptocurrency without actually investing money.</li><br>Cryptocurrency uses blockchain technology, all the records are kept digitally in an online directory. It works like a general ledger where after a successful transaction it transforms into a block and gets chained to the ledger, and once it is chained it cannot be reversed. That’s why blockchains can be described as \“immutable\". <br><br>Cryptocurrencies are created through a tough process called mining. Mining includes solving tough mathematical problems to generate coins. Interested users can also buy cryptocurrencies from brokers and store them in their secured digital wallet, which they may use for different transactions. <br>The first cryptocurrency was bitcoin which was introduced way back in 2009, by an unknown person. Currently its the most popular cryptocurrency in the global market<br><br> <b>Examples of Cryptocurrency</b><br><br>Although there are many cryptocurrencies in the market globally, some of the most popular among them are listed here. <br><br><b>Bitcoin</b>-  Bitcoin is at the top of the table because of its popularity. It first came to limelight in 2009 by an unknown person. Among all the currencies in the market right now, bitcoin is something that most of the investors have in their wallet. <br><br><b>Litecoin</b> -  After the immense popularity of bitcoin, a former engineer came up with Litecoin in 2011. It has lots of similarities with bitcoin, It was mainly designed to be used for cheaper transactions. <br><br><b>Ethereum</b>- Ethereum was new to the market as compared to bitcoin and Litecoin, but got popular at a rapid pace and is now most used after bitcoin. It's the first blockchain technology platform with its cryptocurrency named ‘Ether’ or Ethereum. <br><br><b>Ripple</b> - Ripple was first introduced in 2012 by two men Chris Larsen and Jed McCaleb, Ripple acts as a digital payment network for financial transactions as well as Cryptocurrency. <br><br><b>How to Buy Cryptocurrency?</b><br><br>After knowing much, you should be thinking about where to buy cryptocurrencies safely.<br>It's not as complicated as it seems to be, but you should be aware of the risk and the factors to keep in mind while jumping into the crypto portfolio.<br><br>You can choose between the 2 platforms : <br><br><ul><li>Traditional Broker</li><li>Cryptocurrency Exchange</li><br>Traditional brokers are online based brokers, they allow users to buy and sell cryptocurrencies, they are mainly on commission based patterns. They charge a little amount on every payment transaction. <br><br>There are numerous Cryptocurrency exchanges in the global market where a user can trade crypto in exchange for other assets."},
    {"id": 1, "head": "What are the different types of Cryptocurrency?", "content":'The world is getting digitized day by day. From paying from physical currencies to paying for a little via different online payment systems the world is getting digital. Numerous payment systems currently exist in the market, from investing to paying a merchant, lots of options are available. Since the past year, From Tv channels to online platforms, the word \'Cryptocurrency\' is grabbing everyone\'s attention. Cryptocurrency is not something new to gossip about, but one should know what is completely changing the payment ecosystem. <br><br> Cryptocurrency is a digital type of currency that does not require any bank to be a middle man, they function through blockchain technology and the transactions are encrypted. <br><br><b> What are the different types of Cryptocurrency?</b><br> <br> There are a ton of crypto in the market right now, so choosing one from the different types of Cryptocurrency is still a big decision to make if you are a newbie and want to invest in Cryptocurrency. Although investments are of high return and worth investing in, there are some consequences too. So choosing the right platform to invest in is as important as making a plan before implementing the process. <br>Here we provide the list of some of the most popular different cryptocurrency platforms to start building your first crypto portfolio- <br><br><b> Bitcoin -</b> <br><br>When we start to discuss cryptocurrency the first word that pops up in our mind is Bitcoin. It is the most trending word in the current scenario. Bitcoin was first coined in 2009 by an unknown person with the code name \'Satoshi Nakamoto. Bitcoin is just a digital currency that uses blockchain technology to handle all payment transactions. There is no need for bank authority in between to run this process and thus, its payments are completely digital and encrypted. <br><br><b> Ethereum -</b> <br><br> After Bitcoin, the most famed crypto among different cryptocurrencies is Ethereum which is growing at a rapid pace. Ethereum was first introduced in 2013 by a programmer named Vitalik buterin. Like Bitcoin, it also uses blockchain technology to secure its transaction. Ethereum is widely popular because it has its currency to operate named \'Ether\' that\'s what makes Ethereum second most popular among different types of cryptocurrency. <br><br><b> Litecoin -</b>  <br><br>Litecoin came to the limelight in 2011, just after bitcoin was gaining popularity. It was created and introduced by a former Google programmer named \'Charlie Lee\'. It was considered an alternative for the altcoin which is an open-source code of bitcoin. Like every different type of cryptocurrency, It also doesn\'t need a middle man to operate in between and completely runs on a digitally open payment ecosystem. <br><br><b>Ripple -</b><br><br> Ripple is a kind of cryptocurrency that provides multi-features to a user. The reason for its immense popularity is that it can act two ways. It can be used as a cryptocurrency as well as it can also be used for financial transactions. It was developed by two men namely, Jed McCaleb and Chris Larsen in the year 2012. Its main feature includes the exchange of asset and payment settlements.'},
    {"id": 2, "head": "How to Invest in Cryptocurrency in India?", "content":"The word cryptocurrency has become immensely popular in recent times. Anyone who has even little knowledge about online transactions is gaining interest in cryptocurrencies.We have different articles regarding what cryptocurrency is and what are some of the most popular cryptos to get your hands on if you are new to this investment.<br><br>Here we discuss from the beginning the procedure on how you can invest in cryptocurrency from scratch if you are from India.<br><br><b>How to Invest in Cryptocurrency in India?</b><br><br>The first step in investment in cryptocurrency is to choose the right platform. Numerous websites provide investment in different crypto. If you are done choosing a platform you are now ready to invest in cryptocurrency in India. <br><br>You have already heard about the investment in the stock market which has been done for nearly a decade. Investing in crypto is somehow similar to investing in the stock market. Like the stock market, crypto has brokers who make the investing process easier for you. They work on a commission-based pattern and charge a reasonable amount for every transaction. To make the investment exciting and to attract the user they often give rewards for hitting some milestone or giving sign-up rewards to the user. <br><br>Here are some of the crypto exchanges to invest in cryptocurrency in India- <br><br><b>Gappy.in</b> <br>CoinDCX <br>Wazirx, etc<br><br>Not only for buying and investing in crypto, but these exchanges also give you insights into what the value of the currency is right now and when you should buy it or you can sell it for a good return of investment. <br>The system of crypto is dependent on investors as well as buyers, Users come in bulk to exchange their currencies and many are already engaging to buy it and the brokers work in the middle to finalize the deal. <br><br>The main rich aspect of getting into this investment is that you can buy a small fraction of the currency, so you don't have to worry about making your first investment. On Gappy.in you can invest from as low as 100 rupees in India. <br><br>Buying your first cryptocurrency in India is not so difficult, all you have to do is to choose a platform and then you have to sign up on the website or app. After the signup process, you have to be ready with your KYC details. As soon as you completed the KYC process, Hurray! You are ready to invest in cryptocurrency. You can buy different crypto like bitcoin, ether, litecoin, dogecoin, etc, and regularly monitor the current pricing and how well your investment is making money for you. <br><br>We here at Gappy.in provide support to start investing in cryptocurrency by clearing your every small doubt about building your first crypto portfolio. <br><br>Gappy.in is safe, reliable, and user-friendly. To read more about cryptocurrency do visit gappy.in"},
    {"id": 3, "head": "Cryptocurrency terms you should know", "content":"The cryptocurrency market is currently getting hotter than ever. The entrance of NFTs in the market has made the global market a prime place for investors. And if you are jumping into the investment in cryptos you should know these terms related to cryptocurrency.<br>Cryptocurrency terms you should know.<br><br>Some common cryptocurrency terms - <br><br><b>Cryptocurrency</b> - <br><br>It's a digital type of currency that does not involve a bank being in the middle of all its transactions. All the transactions are done through an online payment system and are secured by a method known as cryptography. <br><br><b>Cryptography</b> - <br><br>The terms cryptography and cryptocurrency are much similar to each other but have different meanings. 'Crypto' means hidden and the term graphy means the form of writing. Cryptography is a method to secure the transactions which are done through an online payment system. This method involves changing sensitive information into codes to protect them from getting stolen. It's an advanced method to protect your data and to do transactions safely. <br><br><b>Blockchain </b>- .<br><br>The word Blockchain itself says to make a chain of blocks, in easy words, it's like a library of books where every new book added is a block and gets attached to the library, similarly, blockchain is a type of record directory where all the records are stored as a block, and when the block is added to the chain it cannot be removed or is immutable. Each block has one specific data fitted into it and adding it forms a chain known as the blockchain. This process continues and new blocks are getting added throughout. <br><br><b>Block</b> - <br><br>Blocks are nothing but like a single book in the library with specific information about a transaction stored in it. And when a single block gets attached to the chain of blocks it forms a chain known as the blockchain. A block has all the records of every past and the present transaction, the transaction occurred from where and to whom and for what, which ultimately removes any chances of using a currency repeatedly. <br><br><b>Mining </b>- <br><br>The term mining is for those who don’t want to pay money to buy cryptocurrencies but want it in their wallet for free. Yes, you read it right, you can earn free cryptos by solving some of the toughest crypto equations. Mining refers to digging out cryptocurrency by solving problems through computers. Its processes are monitored and it is done through a secure network. Miners with full dedication try to solve the toughest equations and if done successfully a new block gets added to the blockchain. <br><br><b>Bitcoin</b> - .<br><br>Bitcoin is an immensely popular cryptocurrency that was introduced by an unknown person in 2009. Bitcoin can also be discovered with the mining process. Anyone who owns bitcoin in their wallet can exchange it for different products, services, or different currencies. Bitcoin has the most users in terms of cryptocurrency. Research done by the University of Cambridge states that of 5.8 million cryptocurrency users, 2.9 million alone are using bitcoin for transactions. "}
  ]
  id: any;
  htmlToAdd: any;
  snippet: any;
  ngOnInit(): void 
  {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.htmlToAdd = this.blogs[this.id].content;
      
  })
}
}


