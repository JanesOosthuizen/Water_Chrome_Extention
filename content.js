chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        var facts = [
          "<h2 style=\"text-transform: uppercase;font-size: 30px;\">Have another glass of water it lubricates the joints</h2><span style=\"font-size: 27px; \">Cartilage, found in joints and the disks of the spine, contains around 80 percent water. Long-term dehydration can reduce the joints' shock-absorbing ability, leading to joint pain.</span>",
          "<h2 style=\"text-transform: uppercase;font-size: 30px;\">Have another glass of water it forms saliva and mucus</h2><span style=\"font-size: 27px; \">Saliva helps us digest our food and keeps the mouth, nose, and eyes moist. This prevents friction and damage. Drinking water also keeps the mouth clean. Consumed instead of sweetened beverages, it can also reduce tooth decay.</span>",
          "<h2 style=\"text-transform: uppercase;font-size: 30px;\">Have another glass of water it delivers oxygen throughout the body</h2><span style=\"font-size: 27px; \">Blood is more than 90 percent water, and blood carries oxygen to different parts of the body</span>",
          "<h2 style=\"text-transform: uppercase;font-size: 30px;\">Have another glass of water it boosts skin health and beauty</h2><span style=\"font-size: 27px; \">With dehydration, the skin can become more vulnerable to skin disorders and premature wrinkling.</span>",
          "<h2 style=\"text-transform: uppercase;font-size: 30px;\">Have another glass of water it cushions the brain, spinal cord, and other sensitive tissues</h2><span style=\"font-size: 27px; \">Dehydration can affect brain structure and function. It is also involved in the production of hormones and neurotransmitters. Prolonged dehydration can lead to problems with thinking and reasoning.</span>",
          "<h2 style=\"text-transform: uppercase;font-size: 30px;\">Have another glass of water it regulates body temperature</h2><span style=\"font-size: 27px; \">Water that is stored in the middle layers of the skin comes to the skin's surface as sweat when the body heats up. As it evaporates, it cools the body. In sport.</br>Some scientists have suggested that when there is too little water in the body, heat storage increases and the individual is less able to tolerate heat strain.</br>Having a lot of water in the body may reduce physical strain if heat stress occurs during exercise. However, more research is needed into these effects.</span>",
          "<h2 style=\"text-transform: uppercase;font-size: 30px;\">Have another glass of water, The digestive system depends on it</h2><span style=\"font-size: 27px; \">The bowel needs water to work properly. Dehydration can lead to digestive problems, constipation, and an overly acidic stomach. This increases the risk of heartburn and stomach ulcers.</span>",
          "<h2 style=\"text-transform: uppercase;font-size: 30px;\">Have another glass of water it flushes body waste</h2><spa style=\"font-size: 27px; \"n>Water is needed in the processes of sweating and removal of urine and feces.</span>",
          "<h2 style=\"text-transform: uppercase;font-size: 30px;\">Have another glass of water it helps maintain blood pressure</h2><span style=\"font-size: 27px; \">A lack of water can cause blood to become thicker, increasing blood pressure.</span>",
          "<h2 style=\"text-transform: uppercase;font-size: 30px;\">Have another glass of water, The airways need it</h2><span style=\"font-size: 27px; \">When dehydrated, airways are restricted by the body in an effort to minimize water loss. This can make asthma and allergies worse.</span>",
          "<h2 style=\"text-transform: uppercase;font-size: 30px;\">Have another glass of water it makes minerals and nutrients accessible</h2><span style=\"font-size: 27px; \">These dissolve in water, which makes it possible for them to reach different parts of the body.</span>",
          "<h2 style=\"text-transform: uppercase;font-size: 30px;\">Have another glass of water it prevents kidney damage</h2><span style=\"font-size: 27px; \">The kidneys regulate fluid in the body. Insufficient water can lead to kidney stones and other problems.</span>",
          "<h2 style=\"text-transform: uppercase;font-size: 30px;\">Have another glass of water it boosts performance during exercise</h2><span style=\"font-size: 27px; \">Some scientists have proposed that consuming more water might enhance performance during strenuous activity.</br>More research is needed to confirm this, but one review found that dehydration reduces performance in activities lasting longer than 30 minutes.</span>",
          "<h2 style=\"text-transform: uppercase;font-size: 30px;\">Have another glass of water, Weight loss</h2><span style=\"font-size: 27px; \">Water may also help with weight loss, if it is consumed instead of sweetened juices and sodas. \"Preloading\" with water before meals can help prevent overeating by creating a sense of fullness</span>",
          "<h2 style=\"text-transform: uppercase;font-size: 30px;\">Have another glass of water it reduces the chance of a hangover</h2><span style=\"font-size: 27px; \">When partying, unsweetened soda water with ice and lemon alternated with alcoholic drinks can help prevent overconsumption of alcohol.</span>"
        ]
        var min=1; 
        var max=15;  
        var random = Math.floor(Math.random() * (+max - +min)) + +min;
        var content = "<div style='width:800px;margin: 25vh auto;height: 500px;text-align: center;'>"+facts[random]+"</div>";
        document.getElementsByTagName('body')[0].innerHTML = content;
      }
    }   
);