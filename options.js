// Saves options to chrome.storage
function save_options() {
    var blocked_urls = document.getElementById('blocked_urls').value;
    var water_goal = document.getElementById('water_goal').value;
    chrome.storage.sync.set({
        water_goal: water_goal,
        blockedUrls: blocked_urls,
    }, function() {
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    chrome.storage.sync.get({
        water_goal: 0,
        blockedUrls: '',
        overallCounter : 0
    }, function(items) {
      document.getElementById('water_goal').value = items.water_goal;
      document.getElementById('blocked_urls').value = items.blockedUrls;
      document.getElementById('overallCounter').innerHTML = items.overallCounter;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);