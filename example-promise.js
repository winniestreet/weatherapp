function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    resolve(79);
    reject('City not found');
  });
}

getTempPromise('London').then(function (temp) {
  console.log('promise success', temp)
}, function (err) {
  console.log('promise error', err)
})

function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found')
}

//this is the callback
getTempCallback('Philadelphia', function (err, temp) {
  if (err) {
    console.log('error', err);
  }
  else {
    console.log('success', temp)
  }
});

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    }
    else {
      reject('Cannot add these two');
    }
  });
}

addPromise(3, 4).then(function (sum) {
  console.log('Addition success', sum)
}, function(err) {
  console.log('Addition failure', err)
});


addPromise('hello', 4).then(function (sum) {
  console.log('Addition success', sum)
}, function(err) {
  console.log('Addition failure', err)
});
