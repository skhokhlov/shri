/**
 * Реализация API, не изменяйте ее
 * @param {string} url
 * @param {function} callback
 */
function getData(url, callback) {
    var RESPONSES = {
        '/countries': [
            {name: 'Cameroon', continent: 'Africa'},
            {name :'Fiji Islands', continent: 'Oceania'},
            {name: 'Guatemala', continent: 'North America'},
            {name: 'Japan', continent: 'Asia'},
            {name: 'Yugoslavia', continent: 'Europe'},
            {name: 'Tanzania', continent: 'Africa'}
        ],
        '/cities': [
            {name: 'Bamenda', country: 'Cameroon'},
            {name: 'Suva', country: 'Fiji Islands'},
            {name: 'Quetzaltenango', country: 'Guatemala'},
            {name: 'Osaka', country: 'Japan'},
            {name: 'Subotica', country: 'Yugoslavia'},
            {name: 'Zanzibar', country: 'Tanzania'},
        ],
        '/populations': [
            {count: 138000, name: 'Bamenda'},
            {count: 77366, name: 'Suva'},
            {count: 90801, name: 'Quetzaltenango'},
            {count: 2595674, name: 'Osaka'},
            {count: 100386, name: 'Subotica'},
            {count: 157634, name: 'Zanzibar'}
        ]
    };

    setTimeout(function () {
        var result = RESPONSES[url];
        if (!result) {
            return callback('Unknown url');
        }

        callback(null, result);
    }, Math.round(Math.random * 1000));
}

/**
 * Ваши изменения ниже
 */
var requests = ['/countries', '/cities', '/populations'];
var responses = {};


  var l = [];

getData(requests[0], function(error, result){
    if (error) {
        throw new Error(error);
    }

    responses[requests[0]] = result;

    l.push(requests[0]);

    after(l.length);
});

getData(requests[1], function(error, result){
    if (error) {
        throw new Error(error);
    }

    responses[requests[1]] = result;

    l.push(requests[1]);

    after(l.length);
});

getData(requests[2], function(error, result){
    if (error) {
        throw new Error(error);
    }

    responses[requests[2]] = result;

        l.push(requests[2]);

        after(l.length);


});

function after(l) {
    if (l == 3) {
      var c = [], cc = [], p = 0, f = [], fp = 0;

      var find = window.prompt();

      for (i = 0; i < responses['/countries'].length; i++) {
          if (responses['/countries'][i].continent === 'Africa') {
              c.push(responses['/countries'][i].name);
          }
      }

      for (i = 0; i < responses['/cities'].length; i++) {
          for (j = 0; j < c.length; j++) {
              if (responses['/cities'][i].country === c[j]) {
                  cc.push(responses['/cities'][i].name);
              }
          }
          if (responses['/cities'][i].country === find) {
              f.push(responses['/cities'][i].name);
          }
      }

      for (i = 0; i < responses['/populations'].length; i++) {
          for (j = 0; j < cc.length; j++) {
              if (responses['/populations'][i].name === cc[j]) {
                  p += responses['/populations'][i].count;
              }
          }
          for (j = 0; j < f.length; j++) {
              if (responses['/populations'][i].name === f[j]) {
                  fp += responses['/populations'][i].count;
              }
          }
      }

      console.log('Total population in African cities: ' + p);
      console.log('Population in your request: ' + fp);
  }
}
