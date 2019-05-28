var waterAmount;
chrome.browserAction.setBadgeBackgroundColor({color: 'red'});
chrome.browserAction.setBadgeText({text: '0'});
chrome.browserAction.onClicked.addListener(function(tab) {
    
    chrome.browserAction.getBadgeText({},function(result)
    {
        chrome.storage.sync.get({
            water_goal: 0
        }, function(items) {
           
            waterAmount = parseInt(result);
            waterAmount = waterAmount+1;
            addOverallCount();
            
            chrome.browserAction.setBadgeText({text: waterAmount.toString()});
            if(waterAmount > 0 && waterAmount < 8){
                console.log(waterAmount+' < '+items.water_goal);
                chrome.browserAction.setBadgeBackgroundColor({color: 'skyblue'});
                if(waterAmount == Math.floor(items.water_goal/2)){
                    //alert('Half Way Champ!');
                }
            } else if (waterAmount === items.water_goal-1){
                console.log(waterAmount+' = '+items.water_goal);
                chrome.browserAction.setBadgeBackgroundColor({color: 'green'});
                //alert('Well done!!');
            } else if (waterAmount === parseInt(items.water_goal)){
                console.log(waterAmount+' > '+items.water_goal);
                chrome.browserAction.setBadgeBackgroundColor({color: 'red'});
                chrome.browserAction.setBadgeText({text: '0'});
            }   
            
        });
        
    });
});

function addOverallCount() {
    chrome.storage.sync.get({
        overallCounter: 0
    }, function(items) {
        count = items.overallCounter;
        nCount = parseInt(count) + 1;
        chrome.storage.sync.set({"overallCounter": nCount});
    });
}

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {       
        chrome.storage.sync.get({
            blockedUrls: ''
        }, function(items) {
            var url = items.blockedUrls;
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                var activeTab = tabs[0];
                var activeUrl = tabs[0].url;
                if(url === activeUrl){
                    chrome.browserAction.getBadgeText({},function(result)
                    {
                        waterAmount = parseInt(result);
                        if(waterAmount < 5){
                            chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
                        }
                    });                    
                }
            });
        });
  
    }
  })