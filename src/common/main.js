var appid = '7d4e07d7214599a95d9980aa809cbe63';
function load_start(){
	var locat_detail = {
			method:	'GET',
			url:	'http://ipinfo.io/json',
			contentType: 'json'
		};
	kango.xhr.send(locat_detail, function(locat_data) {
		if (locat_data.status == 200 && locat_data.response != null) {
			var loc =  locat_data.response['loc'].split(",");
			kango.storage.setItem('loc0',loc[0]);
			kango.storage.setItem('loc1',loc[1]);
			getWeather();
		}
		else {
			load_start();
		}
	});
}
load_start();

setInterval(function(){
		getWeather();
	}, 120000);
function getWeather(){
	var loc0 = kango.storage.getItem('loc0');
	var loc1 = kango.storage.getItem('loc1');
	var post_details = {
			method: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/forecast/daily',
			params: {'lat': loc0,'lon':loc1,'APPID':appid,'units':'metric'},
			contentType: 'json'
	};
	kango.xhr.send(post_details, function(weather_data) {
			if (weather_data.status == 200 && weather_data.response != null) {
					var current_data = weather_data.response;
					if (current_data)
					{
						kango.storage.setItem('city', current_data['city']['name']);
						var length = current_data['list'].length;
						var tmp = [];
						
						for (var i=0; i<=length-1; i++)
						{
							var day = getDay(current_data['list'][i]['dt']);
							tmp.push({
								day:day,
								temp:Math.floor(current_data['list'][i]['temp']['day']),
								max:Math.floor(current_data['list'][i]['temp']['max']),
								min:Math.floor(current_data['list'][i]['temp']['min']),
								icon:current_data['list'][i]['weather'][0]['icon']
							});
						}
						kango.storage.setItem('storage_data',JSON.stringify(tmp));
					}
					if (current_data['list'][0]['weather'][0]['icon'])
					{
						setCurrentSTS(current_data['list'][0]['weather'][0]['icon'], current_data['list'][0]['temp']['day']);
					}
			}
			else { 
				getWeather();
			}
	});
}
function setCurrentSTS(icon, temp){
	kango.ui.browserButton.setIcon('icons/'+icon+'.png');
	//kango.ui.browserButton.setIcon('icons/01d1.png');
	kango.ui.browserButton.setBadgeValue(Math.floor(temp)+'°C');
	kango.ui.browserButton.setBadgeBackgroundColor([255, 0, 0, 255]);
}

/*kango.addMessageListener('getStorage', function(event) {
	sendData();
});*/
/*function sendData(){
	var data = JSON.parse(kango.storage.getItem('storage_data'));
	var local_array = [];
	for (var j=0; j<data.length; j++)
	{
		if (j==0)
		{
			var local_day = 'Today';
		}else var local_day = data[j]['day'];
		local_array.push(kango.i18n.getMessage(local_day));
	}
	kango.browser.tabs.getAll(function(tabs) {
		for (var i = 0; i < tabs.length; i++) {
		 tabs[i].dispatchMessage('returnStorage', {'data': data, 'city': kango.storage.getItem('city'), local:local_array});
		}
	});
}*/
function getTime(){
	var currentdate = new Date();
	var datetime = currentdate.getDate() + "/" + (currentdate.getMonth()+1) + "/" + currentdate.getFullYear() + " @ " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
	return datetime;
}
/*kango.ui.browserButton.addEventListener(kango.ui.browserButton.event.COMMAND, function(event) {
   kango.browser.tabs.getCurrent(function(tab) {
		tab.dispatchMessage('show');
	});
});*/
function getDay(val){
	var curdate = new Date(null);
	curdate.setTime(val*1000);
	myDays=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	var myDate=myDays[curdate.getDay()]
	return myDate;
}


