"use strict";var normal=chrome.contextMenus.create({id:"main",title:chrome.i18n.getMessage("menuDescription"),type:"normal",contexts:["selection"]});chrome.contextMenus.onClicked.addListener(function(e,t){chrome.tabs.create({url:"https://biggo.com.tw/s/"+e.selectionText+"/?sort=lp"})});
//# sourceMappingURL=background.js.map
