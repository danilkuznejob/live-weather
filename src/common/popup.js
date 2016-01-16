var icon_url = 'http://www.openweathermap.org/img/w/';
function getDateTime(val) {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
        var month = '0'+month;
    }
    if(day.toString().length == 1) {
        var day = '0'+day;
    }   
    if(hour.toString().length == 1) {
        var hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
        var minute = '0'+minute;
    }
    if(second.toString().length == 1) {
        var second = '0'+second;
    }   
	if (val=='time')
	{
		return hour+':'+minute;
	}else{
		return year+'/'+month+'/'+day;
	}
}
KangoAPI.onReady(function() {
	var data = JSON.parse(kango.storage.getItem('storage_data'));
	var city = kango.storage.getItem('city');
	if (city)
	{
		for (var j=0; j<data.length; j++)
		{
			if (j==0)
			{
				var local_day = 'Today';
			}else var local_day = data[j]['day'];
			$('#weather_clouds'+j).css("background","url('"+icon_url+data[j]['icon']+".png') no-repeat scroll 0 0 rgba(0, 0, 0, 0)");
			$('#weather_day'+j).html("<p>"+kango.i18n.getMessage(local_day)+"</p>");
			$('#weather_cel'+j).text(data[j]['max']+'°');
			$('#weather_fah'+j).text(data[j]['min']+'°');
			$('#weather_fah'+j).text(data[j]['min']+'°');
		}
		$('#weather_time').text(getDateTime('time'));
		$('#weather_date').text(getDateTime('date'));
		$('#weather_place').text(city);
		$('#weather_today').text(data[0]['temp']+'°');
	}
	
});