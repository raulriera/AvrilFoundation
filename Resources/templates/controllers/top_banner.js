
var DonateWindow = require('/templates/windows/DonateWindow');

module.exports = function(view) {
  var Repo = nrequire('/lib/repo');
      
  var url = 'http://www.doctorswithoutborders.com/',
  
      openDonateLink = function() {
//        Ti.Platform.openURL(url);
		var modal = new DonateWindow();
		
		modal.open({modal:true});
      },
  
      updateTopbarMessage = function(val) {
        if(!isIPad) { return; }
        if(val) { view.title_message.text = val; }
      },
  
      updateLogo = function(val) {
        if(val) { view.logo.image = val; }
      },
  
      pullAcsInfo = function() {
        Repo.getTopBarMessageAndLogoAndDonateUrl(function(e){
          updateTopbarMessage(e.topbar_message);
          updateLogo(e.logo_url);
          url = e.donate_url;
        });
      };

  //view.donate_button.addEventListener('click', openDonateLink);
  view.view.addEventListener('click', openDonateLink);
  pullAcsInfo();
};
