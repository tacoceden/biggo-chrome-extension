'use strict';

document.getElementById('submit').onclick = function () {
  var value = document.getElementById('searchinput').value;
  chrome.tabs.create({
    url: 'https://biggo.com.tw/s/'+ value +'/?sort=lp'
  });
};

document.getElementById('link').onclick = function () {
  chrome.tabs.create({
    url: 'https://biggo.com.tw'
  });
};