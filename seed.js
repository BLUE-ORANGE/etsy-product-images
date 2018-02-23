
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
    imgurHash: "6KVK2N0",
    imageTitle: "My kitty decided to be cute last night, he's pushing 14, but he acts like a kitten sometimes",
    imageUrl: "https://i.imgur.com/6KVK2N0.jpg"
  },
  {
    imgurHash: "9UCUNWc",
    imageTitle: "I volunteer with shelter cats and we just got a Maine Coon kitten. Meet Sebastian the Cute.",
    imageUrl: "https://i.imgur.com/9UCUNWc.jpg"
  },
  {
    imgurHash: "fYiBEhr",
    imageTitle: "Big kittens need love too! My cat gave birth to six kittens last night. At the same time, she adopted our 10-week-old kitten who needed a mother's love.",
    imageUrl: "https://i.imgur.com/fYiBEhr.jpg"
  },
  {
    imgurHash: "urca3zn",
    imageTitle: "Cute kitten snuggling with baby bunnies",
    imageUrl: "https://i.imgur.com/urca3zn.jpg"
  },
  {
    imgurHash: "Gq0eB7W",
    imageTitle: "kitty family picture . <3",
    imageUrl: "https://i.imgur.com/Gq0eB7W.jpg"
  },
  {
    imgurHash: "kmLXRDl",
    imageTitle: "'Scuse me... Your kitten printer is running out of toner",
    imageUrl: "https://i.imgur.com/kmLXRDl.jpg"
  },
  {
    imgurHash: "jXI99Ft",
    imageTitle: "My little Totoro kitten",
    imageUrl: "https://i.imgur.com/jXI99Ft.jpg"
  },
  {
    imgurHash: "ORcuaKB",
    imageTitle: "Kitty kuddles",
    imageUrl: "https://i.imgur.com/ORcuaKB.jpg"
  },
  {
    imgurHash: "yAQTUwW",
    imageTitle: "It finally happened. A cute, random ass kitten decided to come and start playing on my porch",
    imageUrl: "https://i.imgur.com/yAQTUwW.jpg"
  },
  {
    imgurHash: "7NRGwbO",
    imageTitle: "A friend of mine is a vet who does pro bono work for a local wildlife rescue organisation - here she is with an orphaned bobcat kitten",
    imageUrl: "https://i.imgur.com/7NRGwbO.jpg"
  },
  {
    imgurHash: "1U4YNjb",
    imageTitle: "My roommate found a kitten in her car engine. Reddit meet Keith. Toilet paper for scale.",
    imageUrl: "https://i.imgur.com/1U4YNjb.jpg"
  },
  {
    imgurHash: "GNkJRtc",
    imageTitle: "cute little kitteh <3",
    imageUrl: "https://i.imgur.com/GNkJRtc.jpg"
  },
  {
    imgurHash: "Qsjd0S4",
    imageTitle: "Forget all these cute puppy and kitten posts, How about a post that captures true happiness in a man?",
    imageUrl: "https://i.imgur.com/Qsjd0S4.jpg"
  },
  {
    imgurHash: "r8l2eHC",
    imageTitle: "She ran out of toner...",
    imageUrl: "https://i.imgur.com/r8l2eHC.jpg"
  },
  {
    imgurHash: "aUHA662",
    imageTitle: "My husband and I found a 3 week old kitten in the Lowes parking lot. To say she enjoys her bottles is an understatement.",
    imageUrl: "https://i.imgur.com/aUHA662.jpg"
  },
  {
    imgurHash: "4GUTJpb",
    imageTitle: "He Bwoke His Awm",
    imageUrl: "https://i.imgur.com/4GUTJpb.jpg"
  },
  {
    imgurHash: "YtbWLDY",
    imageTitle: "Stray kitten in my friends yard, so cute!",
    imageUrl: "https://i.imgur.com/YtbWLDY.jpg"
  },
  {
    imgurHash: "XL1oG70",
    imageTitle: "Kitten Hobos",
    imageUrl: "https://i.imgur.com/XL1oG70.jpg"
  },
  {
    imgurHash: "zOaue4h",
    imageTitle: "Psst... you guys want some pocket kitten?",
    imageUrl: "https://i.imgur.com/zOaue4h.jpg"
  },
  {
    imgurHash: "EGyTGOw",
    imageTitle: "YES! I will watch the parking lot kitten for the rest of the work day!! Best work day ever.",
    imageUrl: "https://i.imgur.com/EGyTGOw.jpg"
  },
  {
    imgurHash: "aB4EOGL",
    imageTitle: "CUTE KITTEN!",
    imageUrl: "https://i.imgur.com/aB4EOGL.jpg"
  },
  {
    imgurHash: "RMMt5Y1",
    imageTitle: "just when you give up searching for your new kitten...",
    imageUrl: "https://i.imgur.com/RMMt5Y1.jpg"
  },
  {
    imgurHash: "tyuQVwJ",
    imageTitle: "The I deserve a treat for being so cute face.",
    imageUrl: "https://i.imgur.com/tyuQVwJ.jpg"
  },
  {
    imgurHash: "hyLlADL",
    imageTitle: "My kitten fell asleep in a container today and it was too cute not to share!",
    imageUrl: "https://i.imgur.com/hyLlADL.jpg"
  },
  {
    imgurHash: "IzYG4",
    imageTitle: "German soldiers taking a break from fighting as they play with a cute kitten. 1943.",
    imageUrl: "https://i.imgur.com/IzYG4.jpg"
  },
  {
    imgurHash: "8JW8GNz",
    imageTitle: "Minze, a lilac point siamese",
    imageUrl: "https://i.imgur.com/8JW8GNz.jpg"
  },
  {
    imgurHash: "DJvkEHY",
    imageTitle: "I got a new kitten to keep my dog company..",
    imageUrl: "https://i.imgur.com/DJvkEHY.jpg"
  },
  {
    imgurHash: "MsHDfzJ",
    imageTitle: "Keks the kitten",
    imageUrl: "https://i.imgur.com/MsHDfzJ.jpg"
  },
  {
    imgurHash: "3OdIhP4",
    imageTitle: "Cute mother and her kitten",
    imageUrl: "https://i.imgur.com/3OdIhP4.jpg"
  },
  {
    imgurHash: "XYqIwpk",
    imageTitle: "Everyone meet Nacho :)",
    imageUrl: "https://i.imgur.com/XYqIwpk.jpg"
  },
  {
    imgurHash: "z9pIl31",
    imageTitle: "My friends just adopted a blind kitten. Meet Skeeter.",
    imageUrl: "https://i.imgur.com/z9pIl31.jpg"
  },
  {
    imgurHash: "JpF9GaB",
    imageTitle: "Rescue Kitten. Then vs Now.",
    imageUrl: "https://i.imgur.com/JpF9GaB.jpg"
  },
  {
    imgurHash: "wxHwhX7",
    imageTitle: "It's so fluffy",
    imageUrl: "https://i.imgur.com/wxHwhX7.jpg"
  },
  {
    imgurHash: "udwY29A",
    imageTitle: "My new kitten, Blousey",
    imageUrl: "https://i.imgur.com/udwY29A.jpg"
  },
  {
    imgurHash: "kVIfFd3",
    imageTitle: "My Dog Meets The New Kitten For The First Time",
    imageUrl: "https://i.imgur.com/kVIfFd3.jpg"
  },
  {
    imgurHash: "K95NHEv",
    imageTitle: "In case anyone else needed something cute and happy today",
    imageUrl: "https://i.imgur.com/K95NHEv.jpg"
  },
  {
    imgurHash: "Mr3w4dr",
    imageTitle: "Little Foot the Foster Kitten",
    imageUrl: "https://i.imgur.com/Mr3w4dr.jpg"
  },
  {
    imgurHash: "uWTLxMa",
    imageTitle: "My sister got a new kitten. Reddit, meet Bellatrix!",
    imageUrl: "https://i.imgur.com/uWTLxMa.jpg"
  },
  {
    imgurHash: "0OLcbGz",
    imageTitle: "Bagheera's Roar",
    imageUrl: "https://i.imgur.com/0OLcbGz.jpg"
  },
  {
    imgurHash: "XBeSPmk",
    imageTitle: "My girlfriend got a kitten while I was out of town. I'm not even mad.",
    imageUrl: "https://i.imgur.com/XBeSPmk.jpg"
  },
  {
    imgurHash: "ho94h",
    imageTitle: "Cute Kitten - Belle",
    imageUrl: "https://i.imgur.com/ho94h.jpg"
  },
  {
    imgurHash: "MSRIb3e",
    imageTitle: "My 16 day old rescue kitten and his year old big brother Husky.",
    imageUrl: "https://i.imgur.com/MSRIb3e.jpg"
  },
  {
    imgurHash: "k2mqOEy",
    imageTitle: "The little kitten with the heart nose",
    imageUrl: "https://i.imgur.com/k2mqOEy.jpg"
  },
  {
    imgurHash: "qHFHynb",
    imageTitle: "Whatcha thinking?",
    imageUrl: "https://i.imgur.com/qHFHynb.jpg"
  },
  {
    imgurHash: "GShrM1T",
    imageTitle: "My brother got a kitten. Say hi to Penelope.",
    imageUrl: "https://i.imgur.com/GShrM1T.jpg"
  },
  {
    imgurHash: "JipLTuu",
    imageTitle: "My kitten fell asleep hugging his favorite stuffed animal.",
    imageUrl: "https://i.imgur.com/JipLTuu.jpg"
  },
  {
    imgurHash: "zpBgSDo",
    imageTitle: "I think my foster kitten may have already found his home...",
    imageUrl: "https://i.imgur.com/zpBgSDo.jpg"
  },
  {
    imgurHash: "D0VngGG",
    imageTitle: "Stray Kitten",
    imageUrl: "https://i.imgur.com/D0VngGG.jpg"
  },
  {
    imgurHash: "60Hz04U",
    imageTitle: "My new kitten, Lune, he's a Maine coon x Ragdoll and is deaf",
    imageUrl: "https://i.imgur.com/60Hz04U.jpg"
  },
  {
    imgurHash: "HQPOY5i",
    imageTitle: "New rescued kitten, Toothless",
    imageUrl: "https://i.imgur.com/HQPOY5i.jpg"
  },
  {
    imgurHash: "D7H28Bc",
    imageTitle: "My friend's new kitten is an adorable ball of static",
    imageUrl: "https://i.imgur.com/D7H28Bc.jpg"
  },
  {
    imgurHash: "hGhTlQV",
    imageTitle: "My rescued kitten (Carbon) on his first night at home... we wrapped him up like a burrito in the blanket the humane society gave us and he slept like this for 2 hours",
    imageUrl: "https://i.imgur.com/hGhTlQV.jpg"
  },
  {
    imgurHash: "6a0HJYZ",
    imageTitle: "Adopted a kitten and my SO took a picture!",
    imageUrl: "https://i.imgur.com/6a0HJYZ.jpg"
  },
  {
    imgurHash: "NQbvxlU",
    imageTitle: "Conan and an Asian Leopard Cat kitten.",
    imageUrl: "https://i.imgur.com/NQbvxlU.jpg"
  },
  {
    imgurHash: "3Uqccc4",
    imageTitle: "Cat and kitten \"I told you I'd fit!\"",
    imageUrl: "https://i.imgur.com/3Uqccc4.jpg"
  },
  {
    imgurHash: "zOg6W7x",
    imageTitle: "MRW I can't decide if I the urge to be lazy is stronger or not",
    imageUrl: "https://i.imgur.com/zOg6W7x.jpg"
  },
  {
    imgurHash: "c01Svpu",
    imageTitle: "(First post) Reddit, meet my new kitten: Atari!",
    imageUrl: "https://i.imgur.com/c01Svpu.jpg"
  },
  {
    imgurHash: "00IK2nj",
    imageTitle: "My blue Russian kitten sticking his tongue out",
    imageUrl: "https://i.imgur.com/00IK2nj.jpg"
  },
  {
    imgurHash: "GvqqlmH",
    imageTitle: "I got a new kitten!",
    imageUrl: "https://i.imgur.com/GvqqlmH.jpg"
  },
  {
    imgurHash: "P1oIaoq",
    imageTitle: "a Cute Kitten & Bubbles",
    imageUrl: "https://i.imgur.com/P1oIaoq.jpg"
  },
  {
    imgurHash: "iZuo4Kj",
    imageTitle: "Melody for a kitten",
    imageUrl: "https://i.imgur.com/iZuo4Kj.jpg"
  },
  {
    imgurHash: "7g0vhQg",
    imageTitle: "Please take me home. I will be a good kitten for you.",
    imageUrl: "https://i.imgur.com/7g0vhQg.jpg"
  },
  {
    imgurHash: "1iaozSh",
    imageTitle: "Our new kitten thought it would be cute to become a Christmas ornament",
    imageUrl: "https://i.imgur.com/1iaozSh.jpg"
  },
  {
    imgurHash: "lCbugSR",
    imageTitle: "His previous owners got rid of him because their older cat was too mean to him. Here's our happy new kitten, Kobe.",
    imageUrl: "https://i.imgur.com/lCbugSR.jpg"
  },
  {
    imgurHash: "yQav4YC",
    imageTitle: "Cute little wigglefloof.",
    imageUrl: "https://i.imgur.com/yQav4YC.jpg"
  },
  {
    imgurHash: "av3Sput",
    imageTitle: "My mom says his name is Phantom, but I call him Harvey.",
    imageUrl: "https://i.imgur.com/av3Sput.jpg"
  },
  {
    imgurHash: "JI35oAV",
    imageTitle: "My new kitten, Ragnar.",
    imageUrl: "https://i.imgur.com/JI35oAV.jpg"
  },
  {
    imgurHash: "p3RPEaB",
    imageTitle: "Caught a kitten at work today",
    imageUrl: "https://i.imgur.com/p3RPEaB.jpg"
  },
  {
    imgurHash: "SMqhpCV",
    imageTitle: "My tiny, wolfy kitten, Fenrir.",
    imageUrl: "https://i.imgur.com/SMqhpCV.jpg"
  },
  {
    imgurHash: "yIQcZub",
    imageTitle: "Dog & kitten Sleeping together",
    imageUrl: "https://i.imgur.com/yIQcZub.jpg"
  },
  {
    imgurHash: "AWdAeyk",
    imageTitle: "Last one got deleted, my cat is extremely clingy. He's a rescue kitten.",
    imageUrl: "https://i.imgur.com/AWdAeyk.jpg"
  },
  {
    imgurHash: "fb9iAcD",
    imageTitle: "It's my first, it had to be a cute kitten",
    imageUrl: "https://i.imgur.com/fb9iAcD.jpg"
  },
  {
    imgurHash: "Yn3GDPT",
    imageTitle: "Boop!",
    imageUrl: "https://i.imgur.com/Yn3GDPT.jpg"
  },
  {
    imgurHash: "u8qsx8K",
    imageTitle: "My new kitten Dug's reaction to my dog Kevin",
    imageUrl: "https://i.imgur.com/u8qsx8K.jpg"
  },
  {
    imgurHash: "3zhQG4f",
    imageTitle: "Catsu The Cat",
    imageUrl: "https://i.imgur.com/3zhQG4f.jpg"
  },
  {
    imgurHash: "WNet3le",
    imageTitle: "He bats those baby blues my way and I have no choice but to let him be a sink kitten :\\",
    imageUrl: "https://i.imgur.com/WNet3le.jpg"
  },
  {
    imgurHash: "kP2zG1V",
    imageTitle: "My New Kitten, Mew!",
    imageUrl: "https://i.imgur.com/kP2zG1V.jpg"
  },
  {
    imgurHash: "2pURbpt",
    imageTitle: "How on earth do people get enough likes to get out of the user submitted most I've ever got is 20. So here's a cute kitten",
    imageUrl: "https://i.imgur.com/2pURbpt.jpg"
  },
  {
    imgurHash: "AeiKlQW",
    imageTitle: "Here's a cute kitty to cheer up your monday",
    imageUrl: "https://i.imgur.com/AeiKlQW.jpg"
  },
  {
    imgurHash: "Wfm8okY",
    imageTitle: "My kitten, Malala, is perpetually sad (like so sad)",
    imageUrl: "https://i.imgur.com/Wfm8okY.jpg"
  },
  {
    imgurHash: "I76Xb5e",
    imageTitle: "Imgur meet Baldurs",
    imageUrl: "https://i.imgur.com/I76Xb5e.jpg"
  },
  {
    imgurHash: "FRD0Pz5",
    imageTitle: "My new kitten, Vinnie",
    imageUrl: "https://i.imgur.com/FRD0Pz5.jpg"
  },
  {
    imgurHash: "6wHkHJy",
    imageTitle: "My cat as a kitten and today",
    imageUrl: "https://i.imgur.com/6wHkHJy.jpg"
  },
  {
    imgurHash: "1rrMPoR",
    imageTitle: "Two weeks ago I got a kitten and my other cat was not happy. I was scared I would have to give the kitten back. Today I walked in the kitchen and found them like this.",
    imageUrl: "https://i.imgur.com/1rrMPoR.jpg"
  },
  {
    imgurHash: "vFOGav3",
    imageTitle: "I received this yesterday. I was advised to share",
    imageUrl: "https://i.imgur.com/vFOGav3.jpg"
  },
  {
    imgurHash: "aS0WJqI",
    imageTitle: "Cute little kitten",
    imageUrl: "https://i.imgur.com/aS0WJqI.jpg"
  },
  {
    imgurHash: "1HmRmnA",
    imageTitle: "this judge at a local cat show was whispering sweet nothings to each kitten he inspected",
    imageUrl: "https://i.imgur.com/1HmRmnA.jpg"
  },
  {
    imgurHash: "lChqeZ2",
    imageTitle: "For my cakeday: Me and My boy Clinton at his tiniest",
    imageUrl: "https://i.imgur.com/lChqeZ2.jpg"
  },
  {
    imgurHash: "UQOUgGX",
    imageTitle: "This is Bowser",
    imageUrl: "https://i.imgur.com/UQOUgGX.jpg"
  },
  {
    imgurHash: "V7kpigi",
    imageTitle: "My new kitten, Joseph!",
    imageUrl: "https://i.imgur.com/V7kpigi.jpg"
  },
  {
    imgurHash: "nAAebAs",
    imageTitle: "Our new kitten Aapo:)",
    imageUrl: "https://i.imgur.com/nAAebAs.jpg"
  },
  {
    imgurHash: "iEATIyb",
    imageTitle: "My friend found a kitten under a car, but is too much of a lurker to post her.",
    imageUrl: "https://i.imgur.com/iEATIyb.jpg"
  },
  {
    imgurHash: "Py7ulAh",
    imageTitle: "My new kitten thinks my bulldog is super cuddly.",
    imageUrl: "https://i.imgur.com/Py7ulAh.jpg"
  },
  {
    imgurHash: "hBVqTJr",
    imageTitle: "Tortilla the Cat",
    imageUrl: "https://i.imgur.com/hBVqTJr.jpg"
  },
  {
    imgurHash: "5BHI9lt",
    imageTitle: "Fell asleep in my hands",
    imageUrl: "https://i.imgur.com/5BHI9lt.jpg"
  },
  {
    imgurHash: "HIx5T",
    imageTitle: "My ridiculously cute new rescue kitten",
    imageUrl: "https://i.imgur.com/HIx5T.jpg"
  },
  {
    imgurHash: "KiZ8ASi",
    imageTitle: "a kitten on the beach",
    imageUrl: "https://i.imgur.com/KiZ8ASi.jpg"
  },
  {
    imgurHash: "UDSmYFb",
    imageTitle: "My boyfriend got his first kitten after years of waiting, I thought you guys might like him and his name",
    imageUrl: "https://i.imgur.com/UDSmYFb.jpg"
  },
  {
    imgurHash: "lyvk0",
    imageTitle: "She isn't a cute kitten, but she's all I have in this world and I love her to death :)",
    imageUrl: "https://i.imgur.com/lyvk0.jpg"
  },
  {
    imgurHash: "km1NZ9w",
    imageTitle: "Bright eyed and bushy tailed",
    imageUrl: "https://i.imgur.com/km1NZ9w.jpg"
  },
  {
    imgurHash: "DvZyBXM",
    imageTitle: "I found this cute. In all seriousness, though, I was having a crappy night when my kitten came over and curled up next to me... I love pets.",
    imageUrl: "https://i.imgur.com/DvZyBXM.jpg"
  },
  {
    imgurHash: "1nDINex",
    imageTitle: "Play time!",
    imageUrl: "https://i.imgur.com/1nDINex.jpg"
  },
  {
    imgurHash: "hSpS9Wv",
    imageTitle: "Cute Kitten",
    imageUrl: "https://i.imgur.com/hSpS9Wv.jpg"
  },
  {
    imgurHash: "QbL7hAR",
    imageTitle: "Camouflaged Kitten",
    imageUrl: "https://i.imgur.com/QbL7hAR.jpg"
  },
  {
    imgurHash: "gpV6jEB",
    imageTitle: "GF and iadopted a kitten today. Everyone meet Ripley.",
    imageUrl: "https://i.imgur.com/gpV6jEB.jpg"
  },
  {
    imgurHash: "ckALSpq",
    imageTitle: "We got our kitten a new toy.",
    imageUrl: "https://i.imgur.com/ckALSpq.jpg"
  },
  {
    imgurHash: "w9dncOC",
    imageTitle: "Meet my classy kitten emmy!",
    imageUrl: "https://i.imgur.com/w9dncOC.jpg"
  },
  {
    imgurHash: "rRj3qB4",
    imageTitle: "Went to the farmer's market, came back with a kitten. Meet Murray",
    imageUrl: "https://i.imgur.com/rRj3qB4.jpg"
  },
  {
    imgurHash: "l2LDa",
    imageTitle: "An amazingly cute kitten",
    imageUrl: "https://i.imgur.com/l2LDa.jpg"
  },
  {
    imgurHash: "Z3C1gIa",
    imageTitle: "I found a kitten.. what do I doooo?",
    imageUrl: "https://i.imgur.com/Z3C1gIa.jpg"
  },
  {
    imgurHash: "3M7TQLy",
    imageTitle: "My kitten is kinda cute",
    imageUrl: "https://i.imgur.com/3M7TQLy.jpg"
  },
  {
    imgurHash: "P3mOuAi",
    imageTitle: "my stupid cat when she was a stupid kitten",
    imageUrl: "https://i.imgur.com/P3mOuAi.jpg"
  },
  {
    imgurHash: "BVUbu8c",
    imageTitle: "Cute hug given by Kitten",
    imageUrl: "https://i.imgur.com/BVUbu8c.jpg"
  },
  {
    imgurHash: "yEDfAzp",
    imageTitle: "Cookie Kitten",
    imageUrl: "https://i.imgur.com/yEDfAzp.jpg"
  },
  {
    imgurHash: "AslHRrc",
    imageTitle: "This kitten is so cute it almost hurts",
    imageUrl: "https://i.imgur.com/AslHRrc.jpg"
  },
  {
    imgurHash: "Ga9LXvg",
    imageTitle: "pocket kitten",
    imageUrl: "https://i.imgur.com/Ga9LXvg.jpg"
  },
  {
    imgurHash: "CJyPLT5",
    imageTitle: "cute kitten is cute",
    imageUrl: "https://i.imgur.com/CJyPLT5.jpg"
  },
  {
    imgurHash: "gJ8NJcH",
    imageTitle: "Sad kitten",
    imageUrl: "https://i.imgur.com/gJ8NJcH.jpg"
  },
  {
    imgurHash: "gBsCqUL",
    imageTitle: "My first post was an abject failure. Perhaps a cute kitten?",
    imageUrl: "https://i.imgur.com/gBsCqUL.jpg"
  },
  {
    imgurHash: "mu3GDEO",
    imageTitle: "Found a kitten at the rail yard I work at",
    imageUrl: "https://i.imgur.com/mu3GDEO.jpg"
  },
  {
    imgurHash: "uiTo78B",
    imageTitle: "So she has 4 little bubs now...shit's gonna get cute.",
    imageUrl: "https://i.imgur.com/uiTo78B.jpg"
  },
  {
    imgurHash: "BlKbW7B",
    imageTitle: "Just a little kitten cuddle puddle",
    imageUrl: "https://i.imgur.com/BlKbW7B.jpg"
  },
  {
    imgurHash: "ReIHJpF",
    imageTitle: "So Imgur likes cats right? and it christmas, so here's my kitten being cute and not murdering the shinys",
    imageUrl: "https://i.imgur.com/ReIHJpF.jpg"
  },
  {
    imgurHash: "jeV78Wm",
    imageTitle: "IMGUR, meet Joffrey!",
    imageUrl: "https://i.imgur.com/jeV78Wm.jpg"
  },
  {
    imgurHash: "CsQRdzW",
    imageTitle: "Hello imgur! Here is a cute kitten!",
    imageUrl: "https://i.imgur.com/CsQRdzW.jpg"
  },
  {
    imgurHash: "daUaQxU",
    imageTitle: "Lily, My 9 week old Kitten",
    imageUrl: "https://i.imgur.com/daUaQxU.jpg"
  },
  {
    imgurHash: "KnCyUF0",
    imageTitle: "Found an infant kitten in a parking lot crying, guess I'm Mommy now. :) (Story in comments!)",
    imageUrl: "https://i.imgur.com/KnCyUF0.jpg"
  },
  {
    imgurHash: "kTkyIfv",
    imageTitle: "I think I saw a cute kitten",
    imageUrl: "https://i.imgur.com/kTkyIfv.jpg"
  },
  {
    imgurHash: "RzTVyog",
    imageTitle: "My kitten has a permanent sad face...",
    imageUrl: "https://i.imgur.com/RzTVyog.jpg"
  },
  {
    imgurHash: "G6mzsl3",
    imageTitle: "Need more Kitties",
    imageUrl: "https://i.imgur.com/G6mzsl3.jpg"
  },
  {
    imgurHash: "yF2hHjN",
    imageTitle: "One of my friend's posted this pic of her kitten... It is too damn cute not to share...",
    imageUrl: "https://i.imgur.com/yF2hHjN.jpg"
  },
  {
    imgurHash: "ec7OT3e",
    imageTitle: "Cute kitten  doing yoga",
    imageUrl: "https://i.imgur.com/ec7OT3e.jpg"
  },
  {
    imgurHash: "ryeLPz2",
    imageTitle: "My cat appears to be growing a kitten out of his belly...",
    imageUrl: "https://i.imgur.com/ryeLPz2.jpg"
  },
  {
    imgurHash: "BK9TSl6",
    imageTitle: "My kitten being cute :3",
    imageUrl: "https://i.imgur.com/BK9TSl6.jpg"
  },
  {
    imgurHash: "YIFrmXU",
    imageTitle: "About 3 weeks old",
    imageUrl: "https://i.imgur.com/YIFrmXU.jpg"
  },
  {
    imgurHash: "0kmZ0Td",
    imageTitle: "Don't leave me hooman ...",
    imageUrl: "https://i.imgur.com/0kmZ0Td.jpg"
  },
  {
    imgurHash: "r2DGt8Z",
    imageTitle: "My friends kitty is all like, \"I don't always lean, but when I do, I'm cute as hell\"",
    imageUrl: "https://i.imgur.com/r2DGt8Z.jpg"
  },
  {
    imgurHash: "fIlIC3t",
    imageTitle: "Little kitten thinks about how it's possible that he could be this cute!",
    imageUrl: "https://i.imgur.com/fIlIC3t.jpg"
  },
  {
    imgurHash: "F45rIrc",
    imageTitle: "Penguin viciously attacks kitten",
    imageUrl: "https://i.imgur.com/F45rIrc.jpg"
  },
  {
    imgurHash: "BfIOA98",
    imageTitle: "Rebound - Pocket Kitten",
    imageUrl: "https://i.imgur.com/BfIOA98.jpg"
  },
  {
    imgurHash: "XkZgRt6",
    imageTitle: "When you’re at a party and someone says you’ve had enough to drink",
    imageUrl: "https://i.imgur.com/XkZgRt6.jpg"
  },
  {
    imgurHash: "DGUCZRB",
    imageTitle: "My new kitten played a bit too hard today and fell asleep in my lap.",
    imageUrl: "https://i.imgur.com/DGUCZRB.jpg"
  },
  {
    imgurHash: "YAEVMOn",
    imageTitle: "I heard you like pink beans.",
    imageUrl: "https://i.imgur.com/YAEVMOn.jpg"
  },
  {
    imgurHash: "xJaXhUT",
    imageTitle: "Dutchess",
    imageUrl: "https://i.imgur.com/xJaXhUT.jpg"
  },
  {
    imgurHash: "PJWanAV",
    imageTitle: "Not a kitten, but my Mimic Octopus trying to intimidate me by mimicking a venomous lion fish- I find him cute!",
    imageUrl: "https://i.imgur.com/PJWanAV.jpg"
  },
  {
    imgurHash: "hhcvC0C",
    imageTitle: "Every cat owner will know...",
    imageUrl: "https://i.imgur.com/hhcvC0C.jpg"
  },
  {
    imgurHash: "5IuetUx",
    imageTitle: "i invincible nao",
    imageUrl: "https://i.imgur.com/5IuetUx.jpg"
  },
  {
    imgurHash: "yycFBpW",
    imageTitle: "Just another kitten picture",
    imageUrl: "https://i.imgur.com/yycFBpW.jpg"
  },
  {
    imgurHash: "iMclrBw",
    imageTitle: "A cute kitten, dreaming evil dreams.",
    imageUrl: "https://i.imgur.com/iMclrBw.jpg"
  },
  {
    imgurHash: "GEsE6xK",
    imageTitle: "kitten says its time to stop working!",
    imageUrl: "https://i.imgur.com/GEsE6xK.jpg"
  },
  {
    imgurHash: "HG1YkV0",
    imageTitle: "I give you all kitten hug Imgur ! :)",
    imageUrl: "https://i.imgur.com/HG1YkV0.jpg"
  },
  {
    imgurHash: "qxBbjfF",
    imageTitle: "RAWR",
    imageUrl: "https://i.imgur.com/qxBbjfF.jpg"
  },
  {
    imgurHash: "UgfXFmi",
    imageTitle: "Look at this cute kitten.",
    imageUrl: "https://i.imgur.com/UgfXFmi.jpg"
  },
  {
    imgurHash: "v3B4iNf",
    imageTitle: "This kitten has a giant head, also I am fairly certain that is a pillow made of popcorn in the back.",
    imageUrl: "https://i.imgur.com/v3B4iNf.jpg"
  },
  {
    imgurHash: "AeXiU3c",
    imageTitle: "All these kitten rescue pictures inspired me. Here's 2 rescues my neighbor found in the woods.",
    imageUrl: "https://i.imgur.com/AeXiU3c.jpg"
  },
  {
    imgurHash: "XHmpqXl",
    imageTitle: "Archer and our new kitten Watson",
    imageUrl: "https://i.imgur.com/XHmpqXl.jpg"
  },
  {
    imgurHash: "TJd61wS",
    imageTitle: "Got my mom a kitten, didn't realize it was actually a demon.",
    imageUrl: "https://i.imgur.com/TJd61wS.jpg"
  },
  {
    imgurHash: "UPwQNJn",
    imageTitle: "Distraction pose 10/10",
    imageUrl: "https://i.imgur.com/UPwQNJn.jpg"
  },
  {
    imgurHash: "QZqQPxF",
    imageTitle: "Baby squirrel and kitten friends, baby squirrel and kitten friends, baby squirrel and kitten friends. I'll say it one more time: BABY SQUIRREL AND KITTEN FRIENDS.",
    imageUrl: "https://i.imgur.com/QZqQPxF.jpg"
  },
  {
    imgurHash: "dD519qC",
    imageTitle: "The Great Catsby",
    imageUrl: "https://i.imgur.com/dD519qC.jpg"
  },
  {
    imgurHash: "d0yWWpm",
    imageTitle: "Cute Kitten in the window :)",
    imageUrl: "https://i.imgur.com/d0yWWpm.jpg"
  },
  {
    imgurHash: "YlIriI7",
    imageTitle: "Today I found this little stray kitten. I loved her so much but she had to be put down. I don't care if this gets notes or not, I just wanted to share with someone how cute and loving she was ):",
    imageUrl: "https://i.imgur.com/YlIriI7.jpg"
  },
  {
    imgurHash: "A8zDe7U",
    imageTitle: "Meet Fred",
    imageUrl: "https://i.imgur.com/A8zDe7U.jpg"
  },
  {
    imgurHash: "qB6tMnR",
    imageTitle: "My incredibly good looking kittens",
    imageUrl: "https://i.imgur.com/qB6tMnR.jpg"
  },
  {
    imgurHash: "15neVt7",
    imageTitle: "This is my new kitten, Luna. I'm in love with those paws!",
    imageUrl: "https://i.imgur.com/15neVt7.jpg"
  },
  {
    imgurHash: "jpc5JTA",
    imageTitle: "cute kitten",
    imageUrl: "https://i.imgur.com/jpc5JTA.jpg"
  },
  {
    imgurHash: "4RUNmIj",
    imageTitle: "I heard you like cats. How do you like this cat with a cute bit of dark hair placed beneath her mouth?",
    imageUrl: "https://i.imgur.com/4RUNmIj.jpg"
  },
  {
    imgurHash: "Y2ssr2a",
    imageTitle: "Help Me To Name My Kitten ?",
    imageUrl: "https://i.imgur.com/Y2ssr2a.jpg"
  },
  {
    imgurHash: "9gzKt7X",
    imageTitle: "4 days...",
    imageUrl: "https://i.imgur.com/9gzKt7X.jpg"
  },
  {
    imgurHash: "1Lhuvkj",
    imageTitle: "Hypno-cat guilt trips me all the way to the door every morning. Asshole.",
    imageUrl: "https://i.imgur.com/1Lhuvkj.jpg"
  },
  {
    imgurHash: "BanPCWV",
    imageTitle: "Cute kitten",
    imageUrl: "https://i.imgur.com/BanPCWV.jpg"
  },
  {
    imgurHash: "6DdjQJH",
    imageTitle: "9 week old kitten that I raised from birth",
    imageUrl: "https://i.imgur.com/6DdjQJH.jpg"
  },
  {
    imgurHash: "5F4Ix9I",
    imageTitle: "Cute Kitten Wear a Chaplet on head",
    imageUrl: "https://i.imgur.com/5F4Ix9I.jpg"
  },
  {
    imgurHash: "pE4FgXM",
    imageTitle: "Behold, the World!",
    imageUrl: "https://i.imgur.com/pE4FgXM.jpg"
  },
  {
    imgurHash: "7hxOkc1",
    imageTitle: "Can i trade my GFs kitten for Imgurs love?",
    imageUrl: "https://i.imgur.com/7hxOkc1.jpg"
  },
  {
    imgurHash: "dO17F6J",
    imageTitle: "New kitten in family!",
    imageUrl: "https://i.imgur.com/dO17F6J.jpg"
  },
  {
    imgurHash: "T5zjDfB",
    imageTitle: "Little kitten's body guard",
    imageUrl: "https://i.imgur.com/T5zjDfB.jpg"
  },
  {
    imgurHash: "7oPXMUn",
    imageTitle: "See? It doesn't have to be a puppy or a kitten to be irresistibly cute.",
    imageUrl: "https://i.imgur.com/7oPXMUn.jpg"
  },
  {
    imgurHash: "SMOX2Hj",
    imageTitle: "CUTE KITTEN",
    imageUrl: "https://i.imgur.com/SMOX2Hj.jpg"
  },
  {
    imgurHash: "SHKhiM4",
    imageTitle: "My sister held her new kitten for the first time, and she was ecstatic. Him, not so much...",
    imageUrl: "https://i.imgur.com/SHKhiM4.jpg"
  },
  {
    imgurHash: "fFBAZO5",
    imageTitle: "Foster Relaxing",
    imageUrl: "https://i.imgur.com/fFBAZO5.jpg"
  },
  {
    imgurHash: "NWS2srS",
    imageTitle: "Baby Malibu",
    imageUrl: "https://i.imgur.com/NWS2srS.jpg"
  },
  {
    imgurHash: "nFfCfLb",
    imageTitle: "Look at this adorable kitten that I am fostering.",
    imageUrl: "https://i.imgur.com/nFfCfLb.jpg"
  },
  {
    imgurHash: "k5wKiKD",
    imageTitle: "I got you pinned!",
    imageUrl: "https://i.imgur.com/k5wKiKD.jpg"
  },
  {
    imgurHash: "XPrxvok",
    imageTitle: "Felix, cuddling a tiny giraffe",
    imageUrl: "https://i.imgur.com/XPrxvok.jpg"
  },
  {
    imgurHash: "Slqi1SL",
    imageTitle: "Diva",
    imageUrl: "https://i.imgur.com/Slqi1SL.jpg"
  },
  {
    imgurHash: "zIJvBbI",
    imageTitle: "I think my kitten is adjusting well to her new home..",
    imageUrl: "https://i.imgur.com/zIJvBbI.jpg"
  },
  {
    imgurHash: "F2BUZh6",
    imageTitle: "I got a new desk and my kitten just likes to sit at it, patiently waiting for some work to do.",
    imageUrl: "https://i.imgur.com/F2BUZh6.jpg"
  },
  {
    imgurHash: "0l1vuG8",
    imageTitle: "A wink for all them bitches",
    imageUrl: "https://i.imgur.com/0l1vuG8.jpg"
  },
  {
    imgurHash: "7m72uqx",
    imageTitle: "Just adopted my first kitten. She seems pleased.",
    imageUrl: "https://i.imgur.com/7m72uqx.jpg"
  },
  {
    imgurHash: "wre5R5Y",
    imageTitle: "Batman the cute foster feral kitten -  caturday",
    imageUrl: "https://i.imgur.com/wre5R5Y.jpg"
  },
  {
    imgurHash: "oLKXMIV",
    imageTitle: "Adopted, very pregnant, stray kitten (6-8 mo)",
    imageUrl: "https://i.imgur.com/oLKXMIV.jpg"
  },
  {
    imgurHash: "LIV6V2P",
    imageTitle: "A co-worker found a kitten and was going to take it to the shelter. This is the picture she sent. It didn't go to the shelter.",
    imageUrl: "https://i.imgur.com/LIV6V2P.jpg"
  },
  {
    imgurHash: "rY2aTMY",
    imageTitle: "You gotta be kitten me",
    imageUrl: "https://i.imgur.com/rY2aTMY.jpg"
  },
  {
    imgurHash: "f11WP29",
    imageTitle: "Just brought home a kitten and her brother. This is their first night here :)",
    imageUrl: "https://i.imgur.com/f11WP29.jpg"
  },
  {
    imgurHash: "GuCaEDH",
    imageTitle: "Bengal kittens first photoshoot",
    imageUrl: "https://i.imgur.com/GuCaEDH.jpg"
  },
  {
    imgurHash: "nXhrzRN",
    imageTitle: "Cute Kitten",
    imageUrl: "https://i.imgur.com/nXhrzRN.jpg"
  },
  {
    imgurHash: "HS3Xv9j",
    imageTitle: "walked into the dinning room and i caught him sniffing the flowers.",
    imageUrl: "https://i.imgur.com/HS3Xv9j.jpg"
  },
  {
    imgurHash: "h7p5kLC",
    imageTitle: "I need some!",
    imageUrl: "https://i.imgur.com/h7p5kLC.jpg"
  },
  {
    imgurHash: "Uk2NdwM",
    imageTitle: "So I got a kitten last night (sorry for potato)",
    imageUrl: "https://i.imgur.com/Uk2NdwM.jpg"
  },
  {
    imgurHash: "1Y18FxP",
    imageTitle: "Is it comfy ?",
    imageUrl: "https://i.imgur.com/1Y18FxP.jpg"
  },
  {
    imgurHash: "B7EK3mU",
    imageTitle: "My new kitten Aurora!!",
    imageUrl: "https://i.imgur.com/B7EK3mU.jpg"
  },
  {
    imgurHash: "bkvQIsw",
    imageTitle: "Hold me closer tiny kitten.",
    imageUrl: "https://i.imgur.com/bkvQIsw.jpg"
  },
  {
    imgurHash: "XbMlNbr",
    imageTitle: "I love mi new kitten... =)",
    imageUrl: "https://i.imgur.com/XbMlNbr.jpg"
  },
  {
    imgurHash: "GLVeimg",
    imageTitle: "The start of a beautiful friendship",
    imageUrl: "https://i.imgur.com/GLVeimg.jpg"
  },
  {
    imgurHash: "16fNgIg",
    imageTitle: "Bunny & Kitten",
    imageUrl: "https://i.imgur.com/16fNgIg.jpg"
  },
  {
    imgurHash: "5G0fv1l",
    imageTitle: "Some people said I ruined the last picture of my kitty with a filter. The eyes are better in this one.",
    imageUrl: "https://i.imgur.com/5G0fv1l.jpg"
  },
  {
    imgurHash: "yoFNuZL",
    imageTitle: "It's not a cute little kitten, cat or a puppy... but would imgur appreciate some baby opossums?",
    imageUrl: "https://i.imgur.com/yoFNuZL.jpg"
  },
  {
    imgurHash: "NWQgtBw",
    imageTitle: "My friends new kitten, Piper",
    imageUrl: "https://i.imgur.com/NWQgtBw.jpg"
  },
  {
    imgurHash: "UiPjNPi",
    imageTitle: "X-Men 5: Magneto Gets a Kitten",
    imageUrl: "https://i.imgur.com/UiPjNPi.jpg"
  },
  {
    imgurHash: "2nBGlmb",
    imageTitle: "No, MY kitten is the tiniest!",
    imageUrl: "https://i.imgur.com/2nBGlmb.jpg"
  },
  {
    imgurHash: "y8YauSe",
    imageTitle: "Cute little kitten with her mother cat",
    imageUrl: "https://i.imgur.com/y8YauSe.jpg"
  },
  {
    imgurHash: "edrV1my",
    imageTitle: "My kitten sleeps like she's ashamed of herself",
    imageUrl: "https://i.imgur.com/edrV1my.jpg"
  }]
  const ProductImageUrl = sqlz.define('productimageurl', {
    imgurHash: Sequelize.STRING,
    imageTitle: Sequelize.STRING,
    imageUrl: Sequelize.STRING
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