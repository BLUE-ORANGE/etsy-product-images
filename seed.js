
let Sequelize = require('sequelize');
let sqlz = new Sequelize('etsy-scratch', 'student', 'student', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});


// const User = sqlz.define('user', {
//   name: Sequelize.TEXT,
//   avatarurl: Sequelize.TEXT
// },{
//   schema: 'public'
// });

// const Review = sqlz.define('review', {
//   description: Sequelize.TEXT,
//   rating: Sequelize.INTEGER
// },{
//   schema: 'public'
// });

// const Product = sqlz.define('product', {
//   name: Sequelize.TEXT,
//   description: Sequelize.TEXT,
//   price: Sequelize["DOUBLE PRECISION"],
//   imageUrl: Sequelize.TEXT
// },{
//   schema: 'public'
// })

// const Shop = sqlz.define('shop', {
//   avatarurl: Sequelize.TEXT,
//   name: Sequelize.STRING
// },{
//   schema: 'public'
// });  

// const UsersProductsFavorite = sqlz.define('usersproductsfavorite', {

// },{
//   schema: 'public'
// });

// const UsersShopsFavorite = sqlz.define('usersshopsfavorite',{

// },{
//   schema: 'public'
// })


// ProductImageUrl.bulkCreate(cats)
// .then((success) => {
//   console.log(success);
// })
// .catch((error) => {
//   console.log(`error caught inserting cat urls: ${error}`)
// })

// sqlz
//   .authenticate()
//   .then(() => {
//     console.log(`connected`)
//   })
//   .catch(err => {
//     console.error(`unable to connect: ${err}`)
//   })
  
  
  
  // User.sync({force: true}).then(() => {
  //   return User.create({
  //     name: 'trevor',
  //     avatarurl: 'image.jpg'
  //   })
  // })
  // Shop.sync({force: true}).then(() => {
  //   return Shop.create({
  //     avatarurl: 'image.jpg',
  //     name: 'trevors-shop'
  //   })
  // })
  
  // User.sync({force: true});
  // setTimeout(() => {
  //   Shop.sync({force: true})
  // }, 5000);

  // setTimeout(() => {
  //   Product.belongsTo(Shop);
  //   Product.sync({force: true});

  // }, 5000)

  // setTimeout(() => {
  //   UsersShopsFavorite.belongsTo(User);
  //   UsersShopsFavorite.belongsTo(Shop)
  //   UsersShopsFavorite.sync({force:true});

  // }, 5000)

  // setTimeout(() => {
  //   UsersProductsFavorite.belongsTo(User);
  //   UsersProductsFavorite.belongsTo(Product);
  //   UsersProductsFavorite.sync({force:true});

  // }, 5000)
  
  
  // setTimeout(() => {
  //   Review.belongsTo(User)
  //   Review.belongsTo(Product);
    
  //   Review.sync({force: true});

  // }, 5000);
  // // Review.hasMany(User);
  // // Review.hasMany(Product);

  // setTimeout(() => {
  //   ProductImageUrl.belongsTo(Product);
  //   ProductImageUrl.sync({force: true});

  // }, 5000)

  var cats = [{
    "title": "soft little kitten furs",
    "imageUrl": "https://i.imgur.com/OvN4yYU.jpg",
    "productId": 100
  },
  {
    "title": "Just a kitten being cute and stuff",
    "imageUrl": "https://i.imgur.com/6NtZ1kb.jpg",
    "productId": 116
  },
  {
    "title": "my kitten is extra cute today :)",
    "imageUrl": "https://i.imgur.com/30Jimdg.jpg",
    "productId": 115
  },
  {
    "title": "Kitten on a farm",
    "imageUrl": "https://i.imgur.com/JH9m4yS.jpg",
    "productId": 108
  },
  {
    "title": "Today is my Cake Day, so here is a kitten to celebrate!",
    "imageUrl": "https://i.imgur.com/NmZMmOb.jpg",
    "productId": 31
  },
  {
    "title": "Feline Gooood",
    "imageUrl": "https://i.imgur.com/uJvrQFB.jpg",
    "productId": 156
  },
  {
    "title": "Kitty hunting",
    "imageUrl": "https://i.imgur.com/wWe5Yth.jpg",
    "productId": 173
  },
  {
    "title": "Got my brother a kitten, to which he exclaimed \"AH. It's so cute I want to barf.\"",
    "imageUrl": "https://i.imgur.com/OaYH3C0.jpg",
    "productId": 156
  },
  {
    "title": "Our kitten trying the whole \"If I fits I sits\" thing.",
    "imageUrl": "https://i.imgur.com/YDZdXaO.jpg",
    "productId": 169
  },
  {
    "title": "My 2 month-old British Shorthair kitten smelling a flower for the first time.",
    "imageUrl": "https://i.imgur.com/6A2Bp6n.jpg",
    "productId": 178
  },
  {
    "title": "I'm not cute, I'm scary!",
    "imageUrl": "https://i.imgur.com/QnGg2oc.jpg",
    "productId": 196
  },
  {
    "title": "It finally happened. A cute, random ass kitten decided to come and start playing on my porch",
    "imageUrl": "https://i.imgur.com/ticIotr.jpg",
    "productId": 54
  },
  {
    "title": "Hey Imgur, my family is adopting this cute kitten! But we're having problems with names, so I'm asking you guys for some ideas! She's a girl!",
    "imageUrl": "https://i.imgur.com/NmjXlzI.jpg",
    "productId": 1
  },
  {
    "title": "my kitten when he broke his wittle weg. so sad, so cute",
    "imageUrl": "https://i.imgur.com/b7Sps.jpg",
    "productId": 164
  },
  {
    "title": "Kitten wuvs Imgur",
    "imageUrl": "https://i.imgur.com/CV3uldt.jpg",
    "productId": 73
  },
  {
    "title": "Look at my cute kitten!",
    "imageUrl": "https://i.imgur.com/hxpAtAS.jpg",
    "productId": 50
  },
  {
    "title": "Meet my new roommate",
    "imageUrl": "https://i.imgur.com/2qGf5l0.jpg",
    "productId": 30
  },
  {
    "title": "2 day old kitten",
    "imageUrl": "https://i.imgur.com/0ePju3K.jpg",
    "productId": 22
  },
  {
    "title": "I tried to take a cute photo of my kitten. He didn't approve.",
    "imageUrl": "https://i.imgur.com/amf5jjf.jpg",
    "productId": 7
  },
  {
    "title": "Imgur, meet my cat Sebastian, who is always a kitten at heart.",
    "imageUrl": "https://i.imgur.com/AzmLNFR.jpg",
    "productId": 128
  },
  {
    "title": "Spider cat, spider cat...",
    "imageUrl": "https://i.imgur.com/CXxolGa.jpg",
    "productId": 159
  },
  {
    "title": "I walked into the vets office today and these two guys were working up front. I don't think they had any idea what they were doing.",
    "imageUrl": "https://i.imgur.com/BSeJQsh.jpg",
    "productId": 193
  },
  {
    "title": "Good morning...",
    "imageUrl": "https://i.imgur.com/nP2n4kQ.jpg",
    "productId": 78
  },
  {
    "title": "Smee",
    "imageUrl": "https://i.imgur.com/XOXHIwD.jpg",
    "productId": 122
  },
  {
    "title": "How i feel about imgur",
    "imageUrl": "https://i.imgur.com/WTAAWly.jpg",
    "productId": 181
  },
  {
    "title": "no, my kitten would never hurt me.  I just ran in to a door.",
    "imageUrl": "https://i.imgur.com/sQLlqc0.jpg",
    "productId": 64
  },
  {
    "title": "I think my kitten is broken.",
    "imageUrl": "https://i.imgur.com/OtDS2ft.jpg",
    "productId": 51
  },
  {
    "title": "Come on kitty those pants clearly don't fit you",
    "imageUrl": "https://i.imgur.com/ASL67Hf.jpg",
    "productId": 154
  },
  {
    "title": "TBT: this little nugget, with a ball the size of his little kitten belly",
    "imageUrl": "https://i.imgur.com/xEnhM6G.jpg",
    "productId": 103
  },
  {
    "title": "Feeding the Kitten",
    "imageUrl": "https://i.imgur.com/KZeWVrV.jpg",
    "productId": 32
  },
  {
    "title": "Do you guys think this kitten is cute?",
    "imageUrl": "https://i.imgur.com/b0gou9E.jpg",
    "productId": 15
  },
  {
    "title": "Kitten Kneesocks. CUTE!",
    "imageUrl": "https://i.imgur.com/EewmgYE.jpg",
    "productId": 105
  },
  {
    "title": "I'd say yes in a heartbeat",
    "imageUrl": "https://i.imgur.com/EaRR7hJ.jpg",
    "productId": 8
  },
  {
    "title": "Look at the cute kitten! :D",
    "imageUrl": "https://i.imgur.com/V1XNLjh.jpg",
    "productId": 97
  },
  {
    "title": "The cat likes the new kitten I think...",
    "imageUrl": "https://i.imgur.com/eFNrmFP.jpg",
    "productId": 6
  },
  {
    "title": "This kitten melted my heart last night",
    "imageUrl": "https://i.imgur.com/tl3gdlv.jpg",
    "productId": 168
  },
  {
    "title": "Mattress pad kitten says hello",
    "imageUrl": "https://i.imgur.com/pw0u63R.jpg",
    "productId": 175
  },
  {
    "title": "My kitten has been home for 2 hours and already figured this one out... Reddit, meet Saber!",
    "imageUrl": "https://i.imgur.com/jsaZF0m.jpg",
    "productId": 154
  },
  {
    "title": "My Cat",
    "imageUrl": "https://i.imgur.com/Zr8roU0.jpg",
    "productId": 125
  },
  {
    "title": "Mortimer is not amused",
    "imageUrl": "https://i.imgur.com/dL6IQ2L.jpg",
    "productId": 35
  },
  {
    "title": "I wanna be friends",
    "imageUrl": "https://i.imgur.com/BNoLB7k.jpg",
    "productId": 131
  },
  {
    "title": "I accidentally aquired a kitten",
    "imageUrl": "https://i.imgur.com/6twSu3N.jpg",
    "productId": 162
  },
  {
    "title": "Our new kitten Olive!",
    "imageUrl": "https://i.imgur.com/OnAIJLp.jpg",
    "productId": 35
  },
  {
    "title": "Meet Mina. She can't meow.",
    "imageUrl": "https://i.imgur.com/ZghDlQA.jpg",
    "productId": 62
  },
  {
    "title": "Got my first kitten! =3",
    "imageUrl": "https://i.imgur.com/rBLlG4J.jpg",
    "productId": 151
  },
  {
    "title": "My friends ginger kitten wearing a bow-tie awww",
    "imageUrl": "https://i.imgur.com/J2h0sAm.jpg",
    "productId": 134
  },
  {
    "title": "The Circle of Life",
    "imageUrl": "https://i.imgur.com/9YbnHNf.jpg",
    "productId": 31
  },
  {
    "title": "Furbaby",
    "imageUrl": "https://i.imgur.com/w2z3tPh.jpg",
    "productId": 45
  },
  {
    "title": "My new kitten toby <3",
    "imageUrl": "https://i.imgur.com/Z53gU8R.jpg",
    "productId": 129
  },
  {
    "title": "Say hello to \"Chance\" :)",
    "imageUrl": "https://i.imgur.com/fjUGCiQ.jpg",
    "productId": 126
  },
  {
    "title": "pocket pussy kitty",
    "imageUrl": "https://i.imgur.com/cx9bih5.jpg",
    "productId": 190
  },
  {
    "title": "I Just Wanted to Brag About How Cute My Kitten, Raglan, is",
    "imageUrl": "https://i.imgur.com/yJPEyW2.jpg",
    "productId": 176
  },
  {
    "title": "One of my friend's posted this pic of her kitten... It is too damn cute not to share...",
    "imageUrl": "https://i.imgur.com/yF2hHjN.jpg",
    "productId": 35
  },
  {
    "title": "Cute kitten  doing yoga",
    "imageUrl": "https://i.imgur.com/ec7OT3e.jpg",
    "productId": 115
  },
  {
    "title": "My cat appears to be growing a kitten out of his belly...",
    "imageUrl": "https://i.imgur.com/ryeLPz2.jpg",
    "productId": 183
  },
  {
    "title": "My kitten being cute :3",
    "imageUrl": "https://i.imgur.com/BK9TSl6.jpg",
    "productId": 5
  },
  {
    "title": "About 3 weeks old",
    "imageUrl": "https://i.imgur.com/YIFrmXU.jpg",
    "productId": 170
  },
  {
    "title": "Don't leave me hooman ...",
    "imageUrl": "https://i.imgur.com/0kmZ0Td.jpg",
    "productId": 153
  },
  {
    "title": "My friends kitty is all like, \"I don't always lean, but when I do, I'm cute as hell\"",
    "imageUrl": "https://i.imgur.com/r2DGt8Z.jpg",
    "productId": 127
  },
  {
    "title": "Little kitten thinks about how it's possible that he could be this cute!",
    "imageUrl": "https://i.imgur.com/fIlIC3t.jpg",
    "productId": 113
  },
  {
    "title": "Penguin viciously attacks kitten",
    "imageUrl": "https://i.imgur.com/F45rIrc.jpg",
    "productId": 103
  },
  {
    "title": "Rebound - Pocket Kitten",
    "imageUrl": "https://i.imgur.com/BfIOA98.jpg",
    "productId": 6
  },
  {
    "title": "When you’re at a party and someone says you’ve had enough to drink",
    "imageUrl": "https://i.imgur.com/XkZgRt6.jpg",
    "productId": 91
  },
  {
    "title": "My new kitten played a bit too hard today and fell asleep in my lap.",
    "imageUrl": "https://i.imgur.com/DGUCZRB.jpg",
    "productId": 130
  },
  {
    "title": "I heard you like pink beans.",
    "imageUrl": "https://i.imgur.com/YAEVMOn.jpg",
    "productId": 113
  },
  {
    "title": "Dutchess",
    "imageUrl": "https://i.imgur.com/xJaXhUT.jpg",
    "productId": 7
  },
  {
    "title": "Not a kitten, but my Mimic Octopus trying to intimidate me by mimicking a venomous lion fish- I find him cute!",
    "imageUrl": "https://i.imgur.com/PJWanAV.jpg",
    "productId": 90
  },
  {
    "title": "Every cat owner will know...",
    "imageUrl": "https://i.imgur.com/hhcvC0C.jpg",
    "productId": 13
  },
  {
    "title": "i invincible nao",
    "imageUrl": "https://i.imgur.com/5IuetUx.jpg",
    "productId": 115
  },
  {
    "title": "Just another kitten picture",
    "imageUrl": "https://i.imgur.com/yycFBpW.jpg",
    "productId": 172
  },
  {
    "title": "A cute kitten, dreaming evil dreams.",
    "imageUrl": "https://i.imgur.com/iMclrBw.jpg",
    "productId": 46
  },
  {
    "title": "kitten says its time to stop working!",
    "imageUrl": "https://i.imgur.com/GEsE6xK.jpg",
    "productId": 180
  },
  {
    "title": "I give you all kitten hug Imgur ! :)",
    "imageUrl": "https://i.imgur.com/HG1YkV0.jpg",
    "productId": 133
  },
  {
    "title": "RAWR",
    "imageUrl": "https://i.imgur.com/qxBbjfF.jpg",
    "productId": 49
  },
  {
    "title": "Look at this cute kitten.",
    "imageUrl": "https://i.imgur.com/UgfXFmi.jpg",
    "productId": 122
  },
  {
    "title": "This kitten has a giant head, also I am fairly certain that is a pillow made of popcorn in the back.",
    "imageUrl": "https://i.imgur.com/v3B4iNf.jpg",
    "productId": 144
  },
  {
    "title": "All these kitten rescue pictures inspired me. Here's 2 rescues my neighbor found in the woods.",
    "imageUrl": "https://i.imgur.com/AeXiU3c.jpg",
    "productId": 46
  },
  {
    "title": "Archer and our new kitten Watson",
    "imageUrl": "https://i.imgur.com/XHmpqXl.jpg",
    "productId": 69
  },
  {
    "title": "Got my mom a kitten, didn't realize it was actually a demon.",
    "imageUrl": "https://i.imgur.com/TJd61wS.jpg",
    "productId": 82
  },
  {
    "title": "Distraction pose 10/10",
    "imageUrl": "https://i.imgur.com/UPwQNJn.jpg",
    "productId": 55
  },
  {
    "title": "Baby squirrel and kitten friends, baby squirrel and kitten friends, baby squirrel and kitten friends. I'll say it one more time: BABY SQUIRREL AND KITTEN FRIENDS.",
    "imageUrl": "https://i.imgur.com/QZqQPxF.jpg",
    "productId": 1
  },
  {
    "title": "The Great Catsby",
    "imageUrl": "https://i.imgur.com/dD519qC.jpg",
    "productId": 52
  },
  {
    "title": "Cute Kitten in the window :)",
    "imageUrl": "https://i.imgur.com/d0yWWpm.jpg",
    "productId": 147
  },
  {
    "title": "Today I found this little stray kitten. I loved her so much but she had to be put down. I don't care if this gets notes or not, I just wanted to share with someone how cute and loving she was ):",
    "imageUrl": "https://i.imgur.com/YlIriI7.jpg",
    "productId": 73
  },
  {
    "title": "Meet Fred",
    "imageUrl": "https://i.imgur.com/A8zDe7U.jpg",
    "productId": 55
  },
  {
    "title": "My incredibly good looking kittens",
    "imageUrl": "https://i.imgur.com/qB6tMnR.jpg",
    "productId": 175
  },
  {
    "title": "This is my new kitten, Luna. I'm in love with those paws!",
    "imageUrl": "https://i.imgur.com/15neVt7.jpg",
    "productId": 31
  },
  {
    "title": "cute kitten",
    "imageUrl": "https://i.imgur.com/jpc5JTA.jpg",
    "productId": 161
  },
  {
    "title": "I heard you like cats. How do you like this cat with a cute bit of dark hair placed beneath her mouth?",
    "imageUrl": "https://i.imgur.com/4RUNmIj.jpg",
    "productId": 153
  },
  {
    "title": "Help Me To Name My Kitten ?",
    "imageUrl": "https://i.imgur.com/Y2ssr2a.jpg",
    "productId": 64
  },
  {
    "title": "4 days...",
    "imageUrl": "https://i.imgur.com/9gzKt7X.jpg",
    "productId": 174
  },
  {
    "title": "Hypno-cat guilt trips me all the way to the door every morning. Asshole.",
    "imageUrl": "https://i.imgur.com/1Lhuvkj.jpg",
    "productId": 103
  },
  {
    "title": "Cute kitten",
    "imageUrl": "https://i.imgur.com/BanPCWV.jpg",
    "productId": 92
  },
  {
    "title": "Cute little kitten",
    "imageUrl": "https://i.imgur.com/aS0WJqI.jpg",
    "productId": 115
  },
  {
    "title": "this judge at a local cat show was whispering sweet nothings to each kitten he inspected",
    "imageUrl": "https://i.imgur.com/1HmRmnA.jpg",
    "productId": 78
  },
  {
    "title": "For my cakeday: Me and My boy Clinton at his tiniest",
    "imageUrl": "https://i.imgur.com/lChqeZ2.jpg",
    "productId": 29
  },
  {
    "title": "This is Bowser",
    "imageUrl": "https://i.imgur.com/UQOUgGX.jpg",
    "productId": 0
  },
  {
    "title": "My new kitten, Joseph!",
    "imageUrl": "https://i.imgur.com/V7kpigi.jpg",
    "productId": 193
  },
  {
    "title": "Our new kitten Aapo:)",
    "imageUrl": "https://i.imgur.com/nAAebAs.jpg",
    "productId": 94
  },
  {
    "title": "My friend found a kitten under a car, but is too much of a lurker to post her.",
    "imageUrl": "https://i.imgur.com/iEATIyb.jpg",
    "productId": 58
  },
  {
    "title": "My new kitten thinks my bulldog is super cuddly.",
    "imageUrl": "https://i.imgur.com/Py7ulAh.jpg",
    "productId": 23
  },
  {
    "title": "Tortilla the Cat",
    "imageUrl": "https://i.imgur.com/hBVqTJr.jpg",
    "productId": 182
  },
  {
    "title": "Fell asleep in my hands",
    "imageUrl": "https://i.imgur.com/5BHI9lt.jpg",
    "productId": 49
  },
  {
    "title": "My ridiculously cute new rescue kitten",
    "imageUrl": "https://i.imgur.com/HIx5T.jpg",
    "productId": 150
  },
  {
    "title": "a kitten on the beach",
    "imageUrl": "https://i.imgur.com/KiZ8ASi.jpg",
    "productId": 159
  },
  {
    "title": "My boyfriend got his first kitten after years of waiting, I thought you guys might like him and his name",
    "imageUrl": "https://i.imgur.com/UDSmYFb.jpg",
    "productId": 102
  },
  {
    "title": "She isn't a cute kitten, but she's all I have in this world and I love her to death :)",
    "imageUrl": "https://i.imgur.com/lyvk0.jpg",
    "productId": 93
  },
  {
    "title": "Bright eyed and bushy tailed",
    "imageUrl": "https://i.imgur.com/km1NZ9w.jpg",
    "productId": 136
  },
  {
    "title": "I found this cute. In all seriousness, though, I was having a crappy night when my kitten came over and curled up next to me... I love pets.",
    "imageUrl": "https://i.imgur.com/DvZyBXM.jpg",
    "productId": 13
  },
  {
    "title": "Play time!",
    "imageUrl": "https://i.imgur.com/1nDINex.jpg",
    "productId": 105
  },
  {
    "title": "Cute Kitten",
    "imageUrl": "https://i.imgur.com/hSpS9Wv.jpg",
    "productId": 44
  },
  {
    "title": "Camouflaged Kitten",
    "imageUrl": "https://i.imgur.com/QbL7hAR.jpg",
    "productId": 63
  },
  {
    "title": "GF and iadopted a kitten today. Everyone meet Ripley.",
    "imageUrl": "https://i.imgur.com/gpV6jEB.jpg",
    "productId": 115
  },
  {
    "title": "We got our kitten a new toy.",
    "imageUrl": "https://i.imgur.com/ckALSpq.jpg",
    "productId": 34
  },
  {
    "title": "Meet my classy kitten emmy!",
    "imageUrl": "https://i.imgur.com/w9dncOC.jpg",
    "productId": 162
  },
  {
    "title": "Went to the farmer's market, came back with a kitten. Meet Murray",
    "imageUrl": "https://i.imgur.com/rRj3qB4.jpg",
    "productId": 95
  },
  {
    "title": "An amazingly cute kitten",
    "imageUrl": "https://i.imgur.com/l2LDa.jpg",
    "productId": 81
  },
  {
    "title": "I found a kitten.. what do I doooo?",
    "imageUrl": "https://i.imgur.com/Z3C1gIa.jpg",
    "productId": 15
  },
  {
    "title": "My kitten is kinda cute",
    "imageUrl": "https://i.imgur.com/3M7TQLy.jpg",
    "productId": 68
  },
  {
    "title": "my stupid cat when she was a stupid kitten",
    "imageUrl": "https://i.imgur.com/P3mOuAi.jpg",
    "productId": 150
  },
  {
    "title": "Cute hug given by Kitten",
    "imageUrl": "https://i.imgur.com/BVUbu8c.jpg",
    "productId": 13
  },
  {
    "title": "Cookie Kitten",
    "imageUrl": "https://i.imgur.com/yEDfAzp.jpg",
    "productId": 149
  },
  {
    "title": "This kitten is so cute it almost hurts",
    "imageUrl": "https://i.imgur.com/AslHRrc.jpg",
    "productId": 95
  },
  {
    "title": "pocket kitten",
    "imageUrl": "https://i.imgur.com/Ga9LXvg.jpg",
    "productId": 190
  },
  {
    "title": "cute kitten is cute",
    "imageUrl": "https://i.imgur.com/CJyPLT5.jpg",
    "productId": 72
  },
  {
    "title": "Sad kitten",
    "imageUrl": "https://i.imgur.com/gJ8NJcH.jpg",
    "productId": 196
  },
  {
    "title": "My first post was an abject failure. Perhaps a cute kitten?",
    "imageUrl": "https://i.imgur.com/gBsCqUL.jpg",
    "productId": 118
  },
  {
    "title": "Found a kitten at the rail yard I work at",
    "imageUrl": "https://i.imgur.com/mu3GDEO.jpg",
    "productId": 61
  },
  {
    "title": "So she has 4 little bubs now...shit's gonna get cute.",
    "imageUrl": "https://i.imgur.com/uiTo78B.jpg",
    "productId": 9
  },
  {
    "title": "Just a little kitten cuddle puddle",
    "imageUrl": "https://i.imgur.com/BlKbW7B.jpg",
    "productId": 150
  },
  {
    "title": "So Imgur likes cats right? and it christmas, so here's my kitten being cute and not murdering the shinys",
    "imageUrl": "https://i.imgur.com/ReIHJpF.jpg",
    "productId": 59
  },
  {
    "title": "IMGUR, meet Joffrey!",
    "imageUrl": "https://i.imgur.com/jeV78Wm.jpg",
    "productId": 64
  },
  {
    "title": "Hello imgur! Here is a cute kitten!",
    "imageUrl": "https://i.imgur.com/CsQRdzW.jpg",
    "productId": 194
  },
  {
    "title": "Lily, My 9 week old Kitten",
    "imageUrl": "https://i.imgur.com/daUaQxU.jpg",
    "productId": 168
  },
  {
    "title": "Found an infant kitten in a parking lot crying, guess I'm Mommy now. :) (Story in comments!)",
    "imageUrl": "https://i.imgur.com/KnCyUF0.jpg",
    "productId": 77
  },
  {
    "title": "I think I saw a cute kitten",
    "imageUrl": "https://i.imgur.com/kTkyIfv.jpg",
    "productId": 120
  },
  {
    "title": "My kitten has a permanent sad face...",
    "imageUrl": "https://i.imgur.com/RzTVyog.jpg",
    "productId": 127
  },
  {
    "title": "Need more Kitties",
    "imageUrl": "https://i.imgur.com/G6mzsl3.jpg",
    "productId": 33
  },
  {
    "title": "Every time I eat cereal...",
    "imageUrl": "https://i.imgur.com/NJIv3as.jpg",
    "productId": 107
  },
  {
    "title": "Obligatory Cake Day picture of my cat as a kitten...",
    "imageUrl": "https://i.imgur.com/iNMN0yY.jpg",
    "productId": 167
  },
  {
    "title": "my kitten holding on to her minion teddybear",
    "imageUrl": "https://i.imgur.com/6yR7GEQ.jpg",
    "productId": 136
  },
  {
    "title": "My sister asked me to check on her kitten today",
    "imageUrl": "https://i.imgur.com/COvPRxv.jpg",
    "productId": 135
  },
  {
    "title": "Kitten chasing a mouse",
    "imageUrl": "https://i.imgur.com/eK4v9CV.jpg",
    "productId": 11
  },
  {
    "title": "I found a thing!",
    "imageUrl": "https://i.imgur.com/S2TLb2I.jpg",
    "productId": 157
  },
  {
    "title": "The cutest barn kitten I've ever seen",
    "imageUrl": "https://i.imgur.com/Aigy5IX.jpg",
    "productId": 120
  },
  {
    "title": "Hello, I'm an adorable one eared kitten!",
    "imageUrl": "https://i.imgur.com/8ji1BqF.jpg",
    "productId": 110
  },
  {
    "title": "Kitten love",
    "imageUrl": "https://i.imgur.com/V9pMxta.jpg",
    "productId": 121
  },
  {
    "title": "Just brought this girl home! I call upon user sub to assist me in naming her!",
    "imageUrl": "https://i.imgur.com/YQFTQ07.jpg",
    "productId": 111
  },
  {
    "title": "So I just adopted a new kitten, I guess",
    "imageUrl": "https://i.imgur.com/RrUY0oL.jpg",
    "productId": 131
  },
  {
    "title": "Meet Sue, the male torbie kitten!",
    "imageUrl": "https://i.imgur.com/9hOJcGE.jpg",
    "productId": 98
  },
  {
    "title": "I got a kitten for my 3rd birthday and put her in a doll stroller..16 years later she'll come to me to get a ride in it.",
    "imageUrl": "https://i.imgur.com/OCCbfXz.jpg",
    "productId": 140
  },
  {
    "title": "Friend's cat just had one kitten but it's as cute as a whole litter",
    "imageUrl": "https://i.imgur.com/6Ra2wF1.jpg",
    "productId": 154
  },
  {
    "title": "We expected him to tolerate our new kitten, we did not expect him to love him.",
    "imageUrl": "https://i.imgur.com/v8ZKNfm.jpg",
    "productId": 48
  },
  {
    "title": "Cute! There's a kitten somewhere, too.",
    "imageUrl": "https://i.imgur.com/5bdHPEE.jpg",
    "productId": 60
  },
  {
    "title": "Just the two of us..",
    "imageUrl": "https://i.imgur.com/jcUYKJ3.jpg",
    "productId": 101
  },
  {
    "title": "Happy Fluff Baby",
    "imageUrl": "https://i.imgur.com/z4EBxfM.jpg",
    "productId": 13
  },
  {
    "title": "We found a kitten at the firehouse today! Named her Ash.",
    "imageUrl": "https://i.imgur.com/gFm7SDY.jpg",
    "productId": 87
  },
  {
    "title": "Agent 1 and Agent 2",
    "imageUrl": "https://i.imgur.com/aZIMPpH.jpg",
    "productId": 111
  },
  {
    "title": "He's not a cute little kitten or puppy but he's still awesome! Say hello to Brock.",
    "imageUrl": "https://i.imgur.com/siIVU0W.jpg",
    "productId": 53
  },
  {
    "title": "Now, where is my boat?",
    "imageUrl": "https://i.imgur.com/KXb2R0B.jpg",
    "productId": 29
  },
  {
    "title": "\"I know some new tricks\" said the Cat in the Hat",
    "imageUrl": "https://i.imgur.com/URf29Vt.jpg",
    "productId": 48
  },
  {
    "title": "Cute sleepy kitten makes me smile.",
    "imageUrl": "https://i.imgur.com/wsdC9GN.jpg",
    "productId": 93
  },
  {
    "title": "Kitten circle super cute.",
    "imageUrl": "https://i.imgur.com/9nQFDLM.jpg",
    "productId": 36
  },
  {
    "title": "The biggest ears",
    "imageUrl": "https://i.imgur.com/TvJc3Ib.jpg",
    "productId": 14
  },
  {
    "title": "When your kitten is better looking than most people",
    "imageUrl": "https://i.imgur.com/Y0mq5RS.jpg",
    "productId": 89
  },
  {
    "title": "Found on the street today",
    "imageUrl": "https://i.imgur.com/Fk2Cvb5.jpg",
    "productId": 76
  },
  {
    "title": "Found an adorable stray kitten!",
    "imageUrl": "https://i.imgur.com/pX8HX6Z.jpg",
    "productId": 46
  },
  {
    "title": "This is the cute little ball of bastard that loves to spread garbage throughout my house for leaving him alone too long... Damn, I love him.",
    "imageUrl": "https://i.imgur.com/kDfokV6.jpg",
    "productId": 182
  },
  {
    "title": "Cute small kitten",
    "imageUrl": "https://i.imgur.com/CQhaUfH.jpg",
    "productId": 13
  },
  {
    "title": "May I introduce my gf's kitten Lois... She's cute but boy are those little claws sharp!",
    "imageUrl": "https://i.imgur.com/LYcskzF.jpg",
    "productId": 38
  },
  {
    "title": "Wallet (check), Keys (check), Napping Kitten (check!)",
    "imageUrl": "https://i.imgur.com/80w1Rrg.jpg",
    "productId": 29
  },
  {
    "title": "So I Got a Kitten",
    "imageUrl": "https://i.imgur.com/CpKxOnG.jpg",
    "productId": 36
  },
  {
    "title": "Cute kitten in gift bag",
    "imageUrl": "https://i.imgur.com/ADXR1wk.jpg",
    "productId": 55
  },
  {
    "title": "cute black kitten",
    "imageUrl": "https://i.imgur.com/Dn2QAJe.jpg",
    "productId": 14
  },
  {
    "title": "Meet Nova!",
    "imageUrl": "https://i.imgur.com/qX96cJg.jpg",
    "productId": 108
  },
  {
    "title": "This little one having a nap against the curtain",
    "imageUrl": "https://i.imgur.com/HkJvrpL.jpg",
    "productId": 59
  },
  {
    "title": "When albertbabycat a kitten.",
    "imageUrl": "https://i.imgur.com/eQURubP.jpg",
    "productId": 52
  },
  {
    "title": "D'aw! It's a sock kitteh!",
    "imageUrl": "https://i.imgur.com/bu1q8Hn.jpg",
    "productId": 128
  },
  {
    "title": "Cute Foster Kitten",
    "imageUrl": "https://i.imgur.com/e1zRzqM.jpg",
    "productId": 83
  },
  {
    "title": "This little kitten is too cute.",
    "imageUrl": "https://i.imgur.com/r2MdR81.jpg",
    "productId": 185
  },
  {
    "title": "My Golden Retriever meeting the new kitten.",
    "imageUrl": "https://i.imgur.com/IRs3EJM.jpg",
    "productId": 34
  },
  {
    "title": "Meet my new kitten, Kira!",
    "imageUrl": "https://i.imgur.com/k4FBhfG.jpg",
    "productId": 43
  },
  {
    "title": "My brother brought a kitten home. She likes my shoes and doesn't have a name yet.",
    "imageUrl": "https://i.imgur.com/WGqYwpj.jpg",
    "productId": 86
  },
  {
    "title": "The Cute Kitten Family",
    "imageUrl": "https://i.imgur.com/m3TpYLw.jpg",
    "productId": 73
  },
  {
    "title": "Here's a kitten for my cakeday",
    "imageUrl": "https://i.imgur.com/TrzJ9SC.jpg",
    "productId": 53
  },
  {
    "title": "Always get a bit jealous of everyone's super cute pet photos, but here's the stray kitten I adopted last week..",
    "imageUrl": "https://i.imgur.com/adzFGhX.jpg",
    "productId": 81
  },
  {
    "title": "Just my kitten being cute...",
    "imageUrl": "https://i.imgur.com/xGOoAkO.jpg",
    "productId": 49
  },
  {
    "title": "Cute Kitten- Cuteness overloaded",
    "imageUrl": "https://i.imgur.com/oH0tcL2.jpg",
    "productId": 8
  },
  {
    "title": "Cute Kitten enjoy the snow falling",
    "imageUrl": "https://i.imgur.com/7UPYizq.jpg",
    "productId": 156
  },
  {
    "title": "A cute kitten for my friend who is stuck in bed after surgery. Stay strong Julieta!",
    "imageUrl": "https://i.imgur.com/kxVJSBs.jpg",
    "productId": 87
  },
  {
    "title": "Cute kitten and its tiny claw",
    "imageUrl": "https://i.imgur.com/R93spzf.jpg",
    "productId": 176
  },
  {
    "title": "Cat Paws: A Study",
    "imageUrl": "https://i.imgur.com/hRV5aGZ.jpg",
    "productId": 56
  },
  {
    "title": "if you are upvoting everything why not a kitten being cute",
    "imageUrl": "https://i.imgur.com/12xtUcT.jpg",
    "productId": 173
  },
  {
    "title": "What a delicious chair!",
    "imageUrl": "https://i.imgur.com/BNPfzij.jpg",
    "productId": 73
  },
  {
    "title": "My kitten Pepper, he is so cute, I decided to share this cuteness with imgur",
    "imageUrl": "https://i.imgur.com/zIsAcTz.jpg",
    "productId": 196
  },
  {
    "title": "Introducing: Jack Sparrow",
    "imageUrl": "https://i.imgur.com/AEOlxpF.jpg",
    "productId": 100
  },
  {
    "title": "Meet Banye, The Surprised Cat",
    "imageUrl": "https://i.imgur.com/QULpX4n.jpg",
    "productId": 94
  },
  {
    "title": "Cutest Kitten Ever!",
    "imageUrl": "https://i.imgur.com/TnyDqgF.jpg",
    "productId": 188
  },
  {
    "title": "My Kitten ^^",
    "imageUrl": "https://i.imgur.com/cQ8alae.jpg",
    "productId": 21
  },
  {
    "title": "Cat & Kitten on Grass",
    "imageUrl": "https://i.imgur.com/WAByQYm.jpg",
    "productId": 124
  },
  {
    "title": "Pebbles",
    "imageUrl": "https://i.imgur.com/YnbtYEq.jpg",
    "productId": 163
  },
  {
    "title": "My kitten looks like it's plotting something devious",
    "imageUrl": "https://i.imgur.com/EDNeFao.jpg",
    "productId": 42
  },
  {
    "title": "My friend's Maine Coon kitten. So much cute.",
    "imageUrl": "https://i.imgur.com/d1PWgxr.jpg",
    "productId": 53
  },
  {
    "title": "Obi Wan",
    "imageUrl": "https://i.imgur.com/75Axh1E.jpg",
    "productId": 11
  },
  {
    "title": "No sad story, just my cute kitten Loki.",
    "imageUrl": "https://i.imgur.com/2wvXy.jpg",
    "productId": 60
  },
  {
    "title": "Say hi to my new kitten, Jellybean :)",
    "imageUrl": "https://i.imgur.com/leopNXq.jpg",
    "productId": 32
  },
  {
    "title": "Meet Mocha. The Cutest little fur-ball ever.",
    "imageUrl": "https://i.imgur.com/VTl01mD.jpg",
    "productId": 48
  },
  {
    "title": "I'm ready for my close up",
    "imageUrl": "https://i.imgur.com/WHJpkJR.jpg",
    "productId": 137
  },
  {
    "title": "Crazy Little Parker!",
    "imageUrl": "https://i.imgur.com/zHGsxNy.jpg",
    "productId": 47
  },
  {
    "title": "My friend's new kitten",
    "imageUrl": "https://i.imgur.com/HYmRrQm.jpg",
    "productId": 185
  },
  {
    "title": "My new foster kitten, Dixon",
    "imageUrl": "https://i.imgur.com/Z7yHIKc.jpg",
    "productId": 172
  },
  {
    "title": "She loves to use humans for their warming qualities.",
    "imageUrl": "https://i.imgur.com/HUle7pG.jpg",
    "productId": 38
  },
  {
    "title": "This is Bingo the kitten",
    "imageUrl": "https://i.imgur.com/CZQUzK8.jpg",
    "productId": 73
  },
  {
    "title": "My kitten is just too damn cute! :3",
    "imageUrl": "https://i.imgur.com/M4rUR2X.jpg",
    "productId": 161
  },
  {
    "title": "What's so funny, kitten?",
    "imageUrl": "https://i.imgur.com/bFN1hrl.jpg",
    "productId": 144
  },
  {
    "title": "Tiny = Cute? How about a tiny grapefruit? (kitten included in case it's not)",
    "imageUrl": "https://i.imgur.com/jnD7fSL.jpg",
    "productId": 172
  },
  {
    "title": "Cute small kitty",
    "imageUrl": "https://i.imgur.com/b9Mw8sq.jpg",
    "productId": 145
  },
  {
    "title": "Cute and fuzzy... A lonesome kitten.",
    "imageUrl": "https://i.imgur.com/59mnwl2.jpg",
    "productId": 85
  },
  {
    "title": "somebody told me it was my cake day! so have my cute sleepy kitten!",
    "imageUrl": "https://i.imgur.com/qfkSp9c.jpg",
    "productId": 12
  },
  {
    "title": "Pikachu as a kitten. Not mine, just thought it was cute.",
    "imageUrl": "https://i.imgur.com/zW3xEXV.jpg",
    "productId": 122
  },
  {
    "title": "I was told Imgur may like to see how our newly adopted kitten sleeps",
    "imageUrl": "https://i.imgur.com/QzN22pA.jpg",
    "productId": 21
  },
  {
    "title": "lost the kitten, found the kitten",
    "imageUrl": "https://i.imgur.com/TnA69LC.jpg",
    "productId": 46
  },
  {
    "title": "Cute Kitten",
    "imageUrl": "https://i.imgur.com/iqloBce.jpg",
    "productId": 89
  },
  {
    "title": "Felix & Zelda.",
    "imageUrl": "https://i.imgur.com/YQbDONV.jpg",
    "productId": 96
  },
  {
    "title": "He likes to help clean the dishes",
    "imageUrl": "https://i.imgur.com/QwWSBZJ.jpg",
    "productId": 91
  },
  {
    "title": "Update on the kitten I rescued",
    "imageUrl": "https://i.imgur.com/28JgyEi.jpg",
    "productId": 119
  },
  {
    "title": "Ready for the first day of kittengarten .",
    "imageUrl": "https://i.imgur.com/mPnZKhA.jpg",
    "productId": 54
  },
  {
    "title": "Kitten picture of my best friend.",
    "imageUrl": "https://i.imgur.com/jMh9eCj.jpg",
    "productId": 39
  },
  {
    "title": "Cute kitten searches for a burrito",
    "imageUrl": "https://i.imgur.com/RzeJoFp.jpg",
    "productId": 142
  },
  {
    "title": "One Happy Kitty",
    "imageUrl": "https://i.imgur.com/1V2QiMx.jpg",
    "productId": 48
  },
  {
    "title": "Adopted a kitten last week. We were afraid they wouldn't get along.",
    "imageUrl": "https://i.imgur.com/eEJ8yb9.jpg",
    "productId": 41
  },
  {
    "title": "My kitty decided to be cute last night, he's pushing 14, but he acts like a kitten sometimes",
    "imageUrl": "https://i.imgur.com/6KVK2N0.jpg",
    "productId": 181
  },
  {
    "title": "I volunteer with shelter cats and we just got a Maine Coon kitten. Meet Sebastian the Cute.",
    "imageUrl": "https://i.imgur.com/9UCUNWc.jpg",
    "productId": 115
  },
  {
    "title": "Big kittens need love too! My cat gave birth to six kittens last night. At the same time, she adopted our 10-week-old kitten who needed a mother's love.",
    "imageUrl": "https://i.imgur.com/fYiBEhr.jpg",
    "productId": 81
  },
  {
    "title": "Cute kitten snuggling with baby bunnies",
    "imageUrl": "https://i.imgur.com/urca3zn.jpg",
    "productId": 40
  },
  {
    "title": "kitty family picture . <3",
    "imageUrl": "https://i.imgur.com/Gq0eB7W.jpg",
    "productId": 48
  },
  {
    "title": "'Scuse me... Your kitten printer is running out of toner",
    "imageUrl": "https://i.imgur.com/kmLXRDl.jpg",
    "productId": 152
  },
  {
    "title": "My little Totoro kitten",
    "imageUrl": "https://i.imgur.com/jXI99Ft.jpg",
    "productId": 25
  },
  {
    "title": "Kitty kuddles",
    "imageUrl": "https://i.imgur.com/ORcuaKB.jpg",
    "productId": 190
  },
  {
    "title": "It finally happened. A cute, random ass kitten decided to come and start playing on my porch",
    "imageUrl": "https://i.imgur.com/yAQTUwW.jpg",
    "productId": 50
  },
  {
    "title": "A friend of mine is a vet who does pro bono work for a local wildlife rescue organisation - here she is with an orphaned bobcat kitten",
    "imageUrl": "https://i.imgur.com/7NRGwbO.jpg",
    "productId": 53
  },
  {
    "title": "My roommate found a kitten in her car engine. Reddit meet Keith. Toilet paper for scale.",
    "imageUrl": "https://i.imgur.com/1U4YNjb.jpg",
    "productId": 56
  },
  {
    "title": "cute little kitteh <3",
    "imageUrl": "https://i.imgur.com/GNkJRtc.jpg",
    "productId": 66
  },
  {
    "title": "Forget all these cute puppy and kitten posts, How about a post that captures true happiness in a man?",
    "imageUrl": "https://i.imgur.com/Qsjd0S4.jpg",
    "productId": 129
  },
  {
    "title": "She ran out of toner...",
    "imageUrl": "https://i.imgur.com/r8l2eHC.jpg",
    "productId": 6
  },
  {
    "title": "My husband and I found a 3 week old kitten in the Lowes parking lot. To say she enjoys her bottles is an understatement.",
    "imageUrl": "https://i.imgur.com/aUHA662.jpg",
    "productId": 27
  },
  {
    "title": "He Bwoke His Awm",
    "imageUrl": "https://i.imgur.com/4GUTJpb.jpg",
    "productId": 78
  },
  {
    "title": "Stray kitten in my friends yard, so cute!",
    "imageUrl": "https://i.imgur.com/YtbWLDY.jpg",
    "productId": 8
  },
  {
    "title": "Kitten Hobos",
    "imageUrl": "https://i.imgur.com/XL1oG70.jpg",
    "productId": 89
  },
  {
    "title": "Psst... you guys want some pocket kitten?",
    "imageUrl": "https://i.imgur.com/zOaue4h.jpg",
    "productId": 172
  },
  {
    "title": "YES! I will watch the parking lot kitten for the rest of the work day!! Best work day ever.",
    "imageUrl": "https://i.imgur.com/EGyTGOw.jpg",
    "productId": 57
  },
  {
    "title": "CUTE KITTEN!",
    "imageUrl": "https://i.imgur.com/aB4EOGL.jpg",
    "productId": 190
  },
  {
    "title": "just when you give up searching for your new kitten...",
    "imageUrl": "https://i.imgur.com/RMMt5Y1.jpg",
    "productId": 183
  },
  {
    "title": "The I deserve a treat for being so cute face.",
    "imageUrl": "https://i.imgur.com/tyuQVwJ.jpg",
    "productId": 114
  },
  {
    "title": "My kitten fell asleep in a container today and it was too cute not to share!",
    "imageUrl": "https://i.imgur.com/hyLlADL.jpg",
    "productId": 102
  },
  {
    "title": "German soldiers taking a break from fighting as they play with a cute kitten. 1943.",
    "imageUrl": "https://i.imgur.com/IzYG4.jpg",
    "productId": 138
  },
  {
    "title": "Minze, a lilac point siamese",
    "imageUrl": "https://i.imgur.com/8JW8GNz.jpg",
    "productId": 31
  },
  {
    "title": "I got a new kitten to keep my dog company..",
    "imageUrl": "https://i.imgur.com/DJvkEHY.jpg",
    "productId": 149
  },
  {
    "title": "Keks the kitten",
    "imageUrl": "https://i.imgur.com/MsHDfzJ.jpg",
    "productId": 143
  },
  {
    "title": "Cute mother and her kitten",
    "imageUrl": "https://i.imgur.com/3OdIhP4.jpg",
    "productId": 45
  },
  {
    "title": "Everyone meet Nacho :)",
    "imageUrl": "https://i.imgur.com/XYqIwpk.jpg",
    "productId": 53
  },
  {
    "title": "My friends just adopted a blind kitten. Meet Skeeter.",
    "imageUrl": "https://i.imgur.com/z9pIl31.jpg",
    "productId": 185
  },
  {
    "title": "Rescue Kitten. Then vs Now.",
    "imageUrl": "https://i.imgur.com/JpF9GaB.jpg",
    "productId": 35
  },
  {
    "title": "It's so fluffy",
    "imageUrl": "https://i.imgur.com/wxHwhX7.jpg",
    "productId": 115
  },
  {
    "title": "My new kitten, Blousey",
    "imageUrl": "https://i.imgur.com/udwY29A.jpg",
    "productId": 75
  },
  {
    "title": "My Dog Meets The New Kitten For The First Time",
    "imageUrl": "https://i.imgur.com/kVIfFd3.jpg",
    "productId": 98
  },
  {
    "title": "In case anyone else needed something cute and happy today",
    "imageUrl": "https://i.imgur.com/K95NHEv.jpg",
    "productId": 28
  },
  {
    "title": "Little Foot the Foster Kitten",
    "imageUrl": "https://i.imgur.com/Mr3w4dr.jpg",
    "productId": 2
  },
  {
    "title": "My sister got a new kitten. Reddit, meet Bellatrix!",
    "imageUrl": "https://i.imgur.com/uWTLxMa.jpg",
    "productId": 141
  },
  {
    "title": "Bagheera's Roar",
    "imageUrl": "https://i.imgur.com/0OLcbGz.jpg",
    "productId": 173
  },
  {
    "title": "My girlfriend got a kitten while I was out of town. I'm not even mad.",
    "imageUrl": "https://i.imgur.com/XBeSPmk.jpg",
    "productId": 35
  },
  {
    "title": "Cute Kitten - Belle",
    "imageUrl": "https://i.imgur.com/ho94h.jpg",
    "productId": 68
  },
  {
    "title": "My 16 day old rescue kitten and his year old big brother Husky.",
    "imageUrl": "https://i.imgur.com/MSRIb3e.jpg",
    "productId": 63
  },
  {
    "title": "The little kitten with the heart nose",
    "imageUrl": "https://i.imgur.com/k2mqOEy.jpg",
    "productId": 29
  },
  {
    "title": "Whatcha thinking?",
    "imageUrl": "https://i.imgur.com/qHFHynb.jpg",
    "productId": 62
  },
  {
    "title": "My brother got a kitten. Say hi to Penelope.",
    "imageUrl": "https://i.imgur.com/GShrM1T.jpg",
    "productId": 5
  },
  {
    "title": "My kitten fell asleep hugging his favorite stuffed animal.",
    "imageUrl": "https://i.imgur.com/JipLTuu.jpg",
    "productId": 153
  },
  {
    "title": "I think my foster kitten may have already found his home...",
    "imageUrl": "https://i.imgur.com/zpBgSDo.jpg",
    "productId": 171
  },
  {
    "title": "Stray Kitten",
    "imageUrl": "https://i.imgur.com/D0VngGG.jpg",
    "productId": 198
  },
  {
    "title": "My new kitten, Lune, he's a Maine coon x Ragdoll and is deaf",
    "imageUrl": "https://i.imgur.com/60Hz04U.jpg",
    "productId": 122
  },
  {
    "title": "Just got my first Kitten, her name is Eva.",
    "imageUrl": "https://i.imgur.com/D73dgaO.jpg",
    "productId": 138
  },
  {
    "title": "Ferguson Took a Bath Today",
    "imageUrl": "https://i.imgur.com/gm4WTCV.jpg",
    "productId": 9
  },
  {
    "title": "Rescued a kitten after my holiday break a couple weeks ago. This is his favorite way to sleep.",
    "imageUrl": "https://i.imgur.com/7V8wwgL.jpg",
    "productId": 128
  },
  {
    "title": "cute kitten in a tophat",
    "imageUrl": "https://i.imgur.com/nJrR4Jn.jpg",
    "productId": 57
  },
  {
    "title": "Exhausted kitten sitter",
    "imageUrl": "https://i.imgur.com/tD0IXb3.jpg",
    "productId": 26
  },
  {
    "title": "Enough lurking. Unfortunately I have no cute kitten available but here's one of my adorable pet rats.",
    "imageUrl": "https://i.imgur.com/F1UgAT2.jpg",
    "productId": 60
  },
  {
    "title": "this kitten has the most beautiful eyes I have ever seen",
    "imageUrl": "https://i.imgur.com/51Hf9yl.jpg",
    "productId": 18
  },
  {
    "title": "Cat and Kitten Friendhip",
    "imageUrl": "https://i.imgur.com/s4Rp7Xc.jpg",
    "productId": 97
  },
  {
    "title": "One of my local rescues posted this photo of a kitten after his first solid food meal.",
    "imageUrl": "https://i.imgur.com/3usp97L.jpg",
    "productId": 182
  },
  {
    "title": "Cute Kitten",
    "imageUrl": "https://i.imgur.com/J6x0m11.jpg",
    "productId": 86
  },
  {
    "title": "Found a kitten a couple days ago. Was very skittish but we took him/her and gave her a home. She went from daily hiding to being very playful in her area. Reddit, meet our new baby.",
    "imageUrl": "https://i.imgur.com/ULNpSlX.jpg",
    "productId": 24
  },
  {
    "title": "My kitten Toast after licking lemons",
    "imageUrl": "https://i.imgur.com/3tGp3LO.jpg",
    "productId": 130
  },
  {
    "title": "Cute Cat Coverage....",
    "imageUrl": "https://i.imgur.com/6RTx07m.jpg",
    "productId": 19
  },
  {
    "title": "Kitten invasion",
    "imageUrl": "https://i.imgur.com/0SJrR9S.jpg",
    "productId": 154
  },
  {
    "title": "this is a kitten.",
    "imageUrl": "https://i.imgur.com/Dgbbbtr.jpg",
    "productId": 115
  },
  {
    "title": "Reddit meet our new kitten, Savvy!",
    "imageUrl": "https://i.imgur.com/HWXUD0c.jpg",
    "productId": 193
  },
  {
    "title": "Every time I see a cute kitten on imgur",
    "imageUrl": "https://i.imgur.com/6o091.jpg",
    "productId": 133
  },
  {
    "title": "Tried to take a photo of my matching adult cats in their matching beds but the kitten had other ideas.",
    "imageUrl": "https://i.imgur.com/9ZABpTl.jpg",
    "productId": 48
  },
  {
    "title": "I spend my days with this kitten named Kuba...",
    "imageUrl": "https://i.imgur.com/XpbGrsZ.jpg",
    "productId": 49
  },
  {
    "title": "Bought home a new kitten a little while ago, I think things will be ok.",
    "imageUrl": "https://i.imgur.com/MavSf8X.jpg",
    "productId": 8
  },
  {
    "title": "Finally adopted a new kitten to hang out at my apartment. Meet Tom.",
    "imageUrl": "https://i.imgur.com/ha8wUmz.jpg",
    "productId": 112
  },
  {
    "title": "GREETINGS!",
    "imageUrl": "https://i.imgur.com/i8E8qBM.jpg",
    "productId": 75
  },
  {
    "title": "My foster kitten Basil practicing senior photo poses",
    "imageUrl": "https://i.imgur.com/Ii3HUTl.jpg",
    "productId": 151
  },
  {
    "title": "My GF and I have decided to adopt this lil' guy, what do you think?",
    "imageUrl": "https://i.imgur.com/wdf4Fmb.jpg",
    "productId": 182
  },
  {
    "title": "I like cubs over pups and kitten",
    "imageUrl": "https://i.imgur.com/9nNchwL.jpg",
    "productId": 134
  },
  {
    "title": "you've got to be kitten me!",
    "imageUrl": "https://i.imgur.com/hZxnJNc.jpg",
    "productId": 6
  },
  {
    "title": "Kitten with a Backpack~",
    "imageUrl": "https://i.imgur.com/2i4933F.jpg",
    "productId": 121
  },
  {
    "title": "Here's my kitten",
    "imageUrl": "https://i.imgur.com/nBPVijA.jpg",
    "productId": 194
  },
  {
    "title": "This is Nitro",
    "imageUrl": "https://i.imgur.com/haSOK2b.jpg",
    "productId": 52
  },
  {
    "title": "We found this adorable kitten on a July 4th getaway",
    "imageUrl": "https://i.imgur.com/6nV2oxD.jpg",
    "productId": 133
  },
  {
    "title": "We couldn't find the kitten, but we kept hearing a rustling noise followed by crunching...",
    "imageUrl": "https://i.imgur.com/YRobqPg.jpg",
    "productId": 186
  },
  {
    "title": "Meet Snow White and her kittens",
    "imageUrl": "https://i.imgur.com/cevwDYO.jpg",
    "productId": 79
  },
  {
    "title": "Cute Kitten",
    "imageUrl": "https://i.imgur.com/ZgZ8YKN.jpg",
    "productId": 105
  },
  {
    "title": "My friend adopted an eyeless kitten. Reddit, meet Milly!",
    "imageUrl": "https://i.imgur.com/PgEOn64.jpg",
    "productId": 1
  },
  {
    "title": "This is Bill. He is 22 years old this November. Still cute as a kitten.",
    "imageUrl": "https://i.imgur.com/kF1V7Qd.jpg",
    "productId": 26
  },
  {
    "title": "Found this cutey while browsing /random",
    "imageUrl": "https://i.imgur.com/kPm84L4.jpg",
    "productId": 106
  },
  {
    "title": "MY cute kitten taking a cat nap",
    "imageUrl": "https://i.imgur.com/k9AtHaQ.jpg",
    "productId": 76
  },
  {
    "title": "8 week old Noah, he's the cheekiest kitten I've ever met. He knows he's handsome.",
    "imageUrl": "https://i.imgur.com/Mw8gu6H.jpg",
    "productId": 62
  },
  {
    "title": "Home for an abandoned kitten?",
    "imageUrl": "https://i.imgur.com/PCJBW1D.jpg",
    "productId": 182
  },
  {
    "title": "I blame you Imgur",
    "imageUrl": "https://i.imgur.com/giYWf6W.jpg",
    "productId": 127
  },
  {
    "title": "9 week old kitten that I raised from birth",
    "imageUrl": "https://i.imgur.com/6DdjQJH.jpg",
    "productId": 185
  },
  {
    "title": "Cute Kitten Wear a Chaplet on head",
    "imageUrl": "https://i.imgur.com/5F4Ix9I.jpg",
    "productId": 63
  },
  {
    "title": "Behold, the World!",
    "imageUrl": "https://i.imgur.com/pE4FgXM.jpg",
    "productId": 136
  },
  {
    "title": "Can i trade my GFs kitten for Imgurs love?",
    "imageUrl": "https://i.imgur.com/7hxOkc1.jpg",
    "productId": 49
  },
  {
    "title": "New kitten in family!",
    "imageUrl": "https://i.imgur.com/dO17F6J.jpg",
    "productId": 0
  },
  {
    "title": "Little kitten's body guard",
    "imageUrl": "https://i.imgur.com/T5zjDfB.jpg",
    "productId": 16
  },
  {
    "title": "See? It doesn't have to be a puppy or a kitten to be irresistibly cute.",
    "imageUrl": "https://i.imgur.com/7oPXMUn.jpg",
    "productId": 44
  },
  {
    "title": "CUTE KITTEN",
    "imageUrl": "https://i.imgur.com/SMOX2Hj.jpg",
    "productId": 98
  },
  {
    "title": "My sister held her new kitten for the first time, and she was ecstatic. Him, not so much...",
    "imageUrl": "https://i.imgur.com/SHKhiM4.jpg",
    "productId": 83
  },
  {
    "title": "Foster Relaxing",
    "imageUrl": "https://i.imgur.com/fFBAZO5.jpg",
    "productId": 20
  },
  {
    "title": "Baby Malibu",
    "imageUrl": "https://i.imgur.com/NWS2srS.jpg",
    "productId": 78
  },
  {
    "title": "Look at this adorable kitten that I am fostering.",
    "imageUrl": "https://i.imgur.com/nFfCfLb.jpg",
    "productId": 170
  },
  {
    "title": "I got you pinned!",
    "imageUrl": "https://i.imgur.com/k5wKiKD.jpg",
    "productId": 110
  },
  {
    "title": "Felix, cuddling a tiny giraffe",
    "imageUrl": "https://i.imgur.com/XPrxvok.jpg",
    "productId": 166
  },
  {
    "title": "Diva",
    "imageUrl": "https://i.imgur.com/Slqi1SL.jpg",
    "productId": 65
  },
  {
    "title": "I think my kitten is adjusting well to her new home..",
    "imageUrl": "https://i.imgur.com/zIJvBbI.jpg",
    "productId": 162
  },
  {
    "title": "I got a new desk and my kitten just likes to sit at it, patiently waiting for some work to do.",
    "imageUrl": "https://i.imgur.com/F2BUZh6.jpg",
    "productId": 137
  },
  {
    "title": "A wink for all them bitches",
    "imageUrl": "https://i.imgur.com/0l1vuG8.jpg",
    "productId": 43
  },
  {
    "title": "Just adopted my first kitten. She seems pleased.",
    "imageUrl": "https://i.imgur.com/7m72uqx.jpg",
    "productId": 74
  },
  {
    "title": "Batman the cute foster feral kitten -  caturday",
    "imageUrl": "https://i.imgur.com/wre5R5Y.jpg",
    "productId": 156
  },
  {
    "title": "Adopted, very pregnant, stray kitten (6-8 mo)",
    "imageUrl": "https://i.imgur.com/oLKXMIV.jpg",
    "productId": 92
  },
  {
    "title": "A co-worker found a kitten and was going to take it to the shelter. This is the picture she sent. It didn't go to the shelter.",
    "imageUrl": "https://i.imgur.com/LIV6V2P.jpg",
    "productId": 77
  },
  {
    "title": "You gotta be kitten me",
    "imageUrl": "https://i.imgur.com/rY2aTMY.jpg",
    "productId": 30
  },
  {
    "title": "Just brought home a kitten and her brother. This is their first night here :)",
    "imageUrl": "https://i.imgur.com/f11WP29.jpg",
    "productId": 195
  },
  {
    "title": "Bengal kittens first photoshoot",
    "imageUrl": "https://i.imgur.com/GuCaEDH.jpg",
    "productId": 133
  },
  {
    "title": "Cute Kitten",
    "imageUrl": "https://i.imgur.com/nXhrzRN.jpg",
    "productId": 170
  },
  {
    "title": "walked into the dinning room and i caught him sniffing the flowers.",
    "imageUrl": "https://i.imgur.com/HS3Xv9j.jpg",
    "productId": 81
  },
  {
    "title": "I need some!",
    "imageUrl": "https://i.imgur.com/h7p5kLC.jpg",
    "productId": 11
  },
  {
    "title": "So I got a kitten last night (sorry for potato)",
    "imageUrl": "https://i.imgur.com/Uk2NdwM.jpg",
    "productId": 141
  },
  {
    "title": "Is it comfy ?",
    "imageUrl": "https://i.imgur.com/1Y18FxP.jpg",
    "productId": 104
  },
  {
    "title": "My new kitten Aurora!!",
    "imageUrl": "https://i.imgur.com/B7EK3mU.jpg",
    "productId": 54
  },
  {
    "title": "Hold me closer tiny kitten.",
    "imageUrl": "https://i.imgur.com/bkvQIsw.jpg",
    "productId": 104
  },
  {
    "title": "I love mi new kitten... =)",
    "imageUrl": "https://i.imgur.com/XbMlNbr.jpg",
    "productId": 75
  },
  {
    "title": "The start of a beautiful friendship",
    "imageUrl": "https://i.imgur.com/GLVeimg.jpg",
    "productId": 199
  },
  {
    "title": "Bunny & Kitten",
    "imageUrl": "https://i.imgur.com/16fNgIg.jpg",
    "productId": 3
  },
  {
    "title": "Some people said I ruined the last picture of my kitty with a filter. The eyes are better in this one.",
    "imageUrl": "https://i.imgur.com/5G0fv1l.jpg",
    "productId": 40
  },
  {
    "title": "It's not a cute little kitten, cat or a puppy... but would imgur appreciate some baby opossums?",
    "imageUrl": "https://i.imgur.com/yoFNuZL.jpg",
    "productId": 16
  },
  {
    "title": "My friends new kitten, Piper",
    "imageUrl": "https://i.imgur.com/NWQgtBw.jpg",
    "productId": 118
  },
  {
    "title": "X-Men 5: Magneto Gets a Kitten",
    "imageUrl": "https://i.imgur.com/UiPjNPi.jpg",
    "productId": 138
  },
  {
    "title": "No, MY kitten is the tiniest!",
    "imageUrl": "https://i.imgur.com/2nBGlmb.jpg",
    "productId": 136
  },
  {
    "title": "Cute little kitten with her mother cat",
    "imageUrl": "https://i.imgur.com/y8YauSe.jpg",
    "productId": 94
  },
  {
    "title": "My kitten sleeps like she's ashamed of herself",
    "imageUrl": "https://i.imgur.com/edrV1my.jpg",
    "productId": 4
  },
  {
    "title": "New rescued kitten, Toothless",
    "imageUrl": "https://i.imgur.com/HQPOY5i.jpg",
    "productId": 114
  },
  {
    "title": "My friend's new kitten is an adorable ball of static",
    "imageUrl": "https://i.imgur.com/D7H28Bc.jpg",
    "productId": 151
  },
  {
    "title": "My rescued kitten (Carbon) on his first night at home... we wrapped him up like a burrito in the blanket the humane society gave us and he slept like this for 2 hours",
    "imageUrl": "https://i.imgur.com/hGhTlQV.jpg",
    "productId": 82
  },
  {
    "title": "Adopted a kitten and my SO took a picture!",
    "imageUrl": "https://i.imgur.com/6a0HJYZ.jpg",
    "productId": 71
  },
  {
    "title": "Conan and an Asian Leopard Cat kitten.",
    "imageUrl": "https://i.imgur.com/NQbvxlU.jpg",
    "productId": 136
  },
  {
    "title": "Cat and kitten \"I told you I'd fit!\"",
    "imageUrl": "https://i.imgur.com/3Uqccc4.jpg",
    "productId": 11
  },
  {
    "title": "MRW I can't decide if I the urge to be lazy is stronger or not",
    "imageUrl": "https://i.imgur.com/zOg6W7x.jpg",
    "productId": 119
  },
  {
    "title": "(First post) Reddit, meet my new kitten: Atari!",
    "imageUrl": "https://i.imgur.com/c01Svpu.jpg",
    "productId": 138
  },
  {
    "title": "I got a new kitten!",
    "imageUrl": "https://i.imgur.com/GvqqlmH.jpg",
    "productId": 82
  },
  {
    "title": "My blue Russian kitten sticking his tongue out",
    "imageUrl": "https://i.imgur.com/00IK2nj.jpg",
    "productId": 100
  },
  {
    "title": "a Cute Kitten & Bubbles",
    "imageUrl": "https://i.imgur.com/P1oIaoq.jpg",
    "productId": 160
  },
  {
    "title": "Melody for a kitten",
    "imageUrl": "https://i.imgur.com/iZuo4Kj.jpg",
    "productId": 166
  },
  {
    "title": "Please take me home. I will be a good kitten for you.",
    "imageUrl": "https://i.imgur.com/7g0vhQg.jpg",
    "productId": 82
  },
  {
    "title": "Our new kitten thought it would be cute to become a Christmas ornament",
    "imageUrl": "https://i.imgur.com/1iaozSh.jpg",
    "productId": 102
  },
  {
    "title": "His previous owners got rid of him because their older cat was too mean to him. Here's our happy new kitten, Kobe.",
    "imageUrl": "https://i.imgur.com/lCbugSR.jpg",
    "productId": 53
  },
  {
    "title": "Cute little wigglefloof.",
    "imageUrl": "https://i.imgur.com/yQav4YC.jpg",
    "productId": 138
  },
  {
    "title": "My mom says his name is Phantom, but I call him Harvey.",
    "imageUrl": "https://i.imgur.com/av3Sput.jpg",
    "productId": 191
  },
  {
    "title": "My new kitten, Ragnar.",
    "imageUrl": "https://i.imgur.com/JI35oAV.jpg",
    "productId": 154
  },
  {
    "title": "Caught a kitten at work today",
    "imageUrl": "https://i.imgur.com/p3RPEaB.jpg",
    "productId": 19
  },
  {
    "title": "My tiny, wolfy kitten, Fenrir.",
    "imageUrl": "https://i.imgur.com/SMqhpCV.jpg",
    "productId": 131
  },
  {
    "title": "Dog & kitten Sleeping together",
    "imageUrl": "https://i.imgur.com/yIQcZub.jpg",
    "productId": 87
  },
  {
    "title": "Last one got deleted, my cat is extremely clingy. He's a rescue kitten.",
    "imageUrl": "https://i.imgur.com/AWdAeyk.jpg",
    "productId": 89
  },
  {
    "title": "It's my first, it had to be a cute kitten",
    "imageUrl": "https://i.imgur.com/fb9iAcD.jpg",
    "productId": 75
  },
  {
    "title": "Boop!",
    "imageUrl": "https://i.imgur.com/Yn3GDPT.jpg",
    "productId": 5
  },
  {
    "title": "My new kitten Dug's reaction to my dog Kevin",
    "imageUrl": "https://i.imgur.com/u8qsx8K.jpg",
    "productId": 2
  },
  {
    "title": "Catsu The Cat",
    "imageUrl": "https://i.imgur.com/3zhQG4f.jpg",
    "productId": 93
  },
  {
    "title": "He bats those baby blues my way and I have no choice but to let him be a sink kitten :\\",
    "imageUrl": "https://i.imgur.com/WNet3le.jpg",
    "productId": 25
  },
  {
    "title": "My New Kitten, Mew!",
    "imageUrl": "https://i.imgur.com/kP2zG1V.jpg",
    "productId": 146
  },
  {
    "title": "How on earth do people get enough likes to get out of the user submitted most I've ever got is 20. So here's a cute kitten",
    "imageUrl": "https://i.imgur.com/2pURbpt.jpg",
    "productId": 133
  },
  {
    "title": "Here's a cute kitty to cheer up your monday",
    "imageUrl": "https://i.imgur.com/AeiKlQW.jpg",
    "productId": 93
  },
  {
    "title": "My kitten, Malala, is perpetually sad (like so sad)",
    "imageUrl": "https://i.imgur.com/Wfm8okY.jpg",
    "productId": 117
  },
  {
    "title": "Imgur meet Baldurs",
    "imageUrl": "https://i.imgur.com/I76Xb5e.jpg",
    "productId": 133
  },
  {
    "title": "My new kitten, Vinnie",
    "imageUrl": "https://i.imgur.com/FRD0Pz5.jpg",
    "productId": 130
  },
  {
    "title": "My cat as a kitten and today",
    "imageUrl": "https://i.imgur.com/6wHkHJy.jpg",
    "productId": 6
  },
  {
    "title": "Two weeks ago I got a kitten and my other cat was not happy. I was scared I would have to give the kitten back. Today I walked in the kitchen and found them like this.",
    "imageUrl": "https://i.imgur.com/1rrMPoR.jpg",
    "productId": 67
  },
  {
    "title": "I received this yesterday. I was advised to share",
    "imageUrl": "https://i.imgur.com/vFOGav3.jpg",
    "productId": 37
  }]
  
  const ProductImageUrl = sqlz.define('productimageurl', {

    imageUrl: Sequelize.STRING,
    productId: Sequelize.INTEGER
  }, {
    schema: 'public'
  });
  ProductImageUrl.sync(() => {   
  })
  .then((data) => {
    ProductImageUrl.bulkCreate(cats)
    .then(success => {
      console.log(`success: ${success}`)
    })
    .catch(eror => {
      console.log(`error: ${eror}`)
    })
  })
  .catch((error) => {
    console.log(`error syncing: ${error}`)
  })