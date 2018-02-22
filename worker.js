var request = require('request');
var rp = require('request-promise');
var fs = require('fs');
var Promise = require('bluebird');
Promise.promisifyAll(fs);


let getImages = () => {
  let options = (page) => {
    return {
      url: `https://api.imgur.com/3/gallery/search/top/{{window}}/${page}/`,
      qs: { q_type: 'jpg', q: 'kitten' },

      headers: {
        Authorization: `Client-ID ce6360e2634f0e7`
      }

    };
  };
  var imagesCount = 0;

  rp(options(1))
    .then((val) => {
      val = JSON.parse(val);
      writeImagesToFile(val);
      imagesCount += val.data.length;
      rp(options(2))
        .then((data) => {
          data = JSON.parse(data);
          writeImagesToFile(data);
          imagesCount+= data.data.length;
          rp(options(3))
            .then((more) => {
              more = JSON.parse(more);
              writeImagesToFile(more);
              imagesCount+= more.data.length;
              console.log(imagesCount);
            })
            .catch((err) => {
              console.log(`err on 3rd request: ${err}`)
            })
        })
        .catch((err) => {
          console.log(`err on 2nd request: ${err}`);
        })
         
    })
    .catch((err) => {
      console.log(`caught err : ${err}`);
    })
    
}

let writeImagesToFile = (obj) => {
  obj.data.forEach((pic) => {
    var picture = {
      id: pic.id,
      title: pic.title,
      link: pic.link
    }
    fs.appendFileAsync('data.json', JSON.stringify(picture, null, 2) +',' + '\n')
      .then((data) => {
        console.log(`File saved: ${picture.title}`);
      })
      .catch((err) => {
        console.log(`error saving file: ${err}`);
      })
  })
}


getImages();


