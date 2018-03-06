'use strict';

var normal = chrome.contextMenus.create({
  id: 'main',
  title: chrome.i18n.getMessage('menuDescription'),
  type: 'normal',
  contexts: ['selection']
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  chrome.tabs.create({
    url: 'https://biggo.com.tw/s/' + info.selectionText + '/?sort=lp'
  });
});