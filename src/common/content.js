/*var icon_url = 'http://www.openweathermap.org/img/w/';
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
$(document).ready(function(){
	$('head').append("<style type='text/css'>    #weather_container {position: fixed; bottom: 0px; right: 0px; display:none;z-index:99999;text-shadow: 0px 0px 0px #ffffff; height: 271px; margin: 20px auto;box-sizing: border-box;padding: 5px;width: 741px;font-family: arial,helvetica,sans-serif;font-size: 16px; margin: 0;}#weather_container div {display: block;overflow: hidden;} #weather_container p {  margin: 0;  padding: 0;} #weather_top {height: 38px; position: relative; background-color: #2f69af; background-image: -webkit-gradient(linear, left top, left bottom, from(#2f69af), to(#92CCFA));  background-image: -webkit-linear-gradient(top, #2f69af, #92CCFA); background-image: -moz-linear-gradient(top, #2f69af, #92CCFA); background-image: -ms-linear-gradient(top, #2f69af, #92CCFA);background-image: -o-linear-gradient(top, #2f69af, #92CCFA);background-image: linear-gradient(to bottom, #2f69af, #92CCFA);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#2f69af, endColorstr=#92CCFA);color: #ffffff;           display: inline-block;font-weight: bold; box-sizing: border-box;padding: 10px 5px; width: 730px;text-align: center; } #weather_top div {display: inline-block;} .weather_time {float: left;} .weather_next, .weather_prev {cursor: pointer;}.weather_place { position: absolute; width: 700px; text-align: center; display: block !important; margin: 0px 10px; }.weather_date {float: right;}#weather_main {width:740px;}            .weather_today {color: #ffffff;font-size: 60px;box-sizing: border-box;padding: 0 325px;line-height:69px} #weather_main2 {} .weather_border {margin-top: 5px;float: left; height: 151px; width: 3px; } .weather_dailydiv { box-sizing: border-box;float: left;line-height: 22px;box-sizing: border-box;padding: 5px; width: 101px; } .weather_clouds { height: 50px; margin: auto; width: 50px;}          .weather_clouds2 { background: url('2.png') no-repeat scroll 0 0 rgba(0, 0, 0, 0); height: 50px; margin: auto; width: 50px;} .weather_clouds3 { height: 50px; margin: auto; width: 50px; } .weather_cel { color: #b6dbff;                font-size: 24px;}  .weather_fah { color: #79afe4; float: right; font-size: 24px; line-height:41px; margin-bottom: 5px; } .weather_day { background-color: #77bef6; background-image: -webkit-gradient(linear, left top, left bottom, from(#77bef6), to(#103E93)); background-image: -webkit-linear-gradient(top, #77bef6, #103E93);                background-image: -moz-linear-gradient(top, #77bef6, #103E93); background-image: -ms-linear-gradient(top, #77bef6, #103E93); background-image: -o-linear-gradient(top, #77bef6, #103E93); background-image: linear-gradient(to bottom, #77bef6, #103E93);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#77bef6, endColorstr=#103E93); clear: both; color: #ffffff;box-sizing: border-box; font-size: 20px; margin-top: 10px; padding: 5px; } .weather_day p { text-align: center;} #weather_container .clear {clear: both;}</style>");
	
	$('body').append("<div id='weather_container' class='ui-widget-content'> <div id='weather_top'> <div id='weather_time' class='weather_time'></div> <div id='weather_place' class='weather_place'></div> <div id='weather_date' class='weather_date'></div><div class = 'clear'></div></div> <div id='weather_main'> <div id='weather_today' class='weather_today'></div> <div id='weather_main2'><div class='weather_border'></div><div id='weather_dailydiv' class='weather_dailydiv'> <div id='weather_clouds0' class='weather_clouds3'></div> <div id='weather_cel0' class='weather_cel'></div> <div id='weather_fah0' class='weather_fah'></div> <div id='weather_day0' class='weather_day'> </div> </div> <div class='weather_border'></div><div id='weather_dailydiv' class='weather_dailydiv'> <div id='weather_clouds1' class='weather_clouds3'></div> <div id='weather_cel1' class='weather_cel'></div> <div id='weather_fah1' class='weather_fah'></div> <div id='weather_day1' class='weather_day'> </div> </div> <div class='weather_border'></div><div id='weather_dailydiv' class='weather_dailydiv'> <div id='weather_clouds2' class='weather_clouds3'></div> <div id='weather_cel2' class='weather_cel'></div> <div id='weather_fah2' class='weather_fah'></div> <div id='weather_day2' class='weather_day'></div> </div> <div class='weather_border'></div><div id='weather_dailydiv' class='weather_dailydiv'> <div id='weather_clouds3' class='weather_clouds3'></div> <div id='weather_cel3' class='weather_cel'></div> <div id='weather_fah3' class='weather_fah'></div> <div id='weather_day3' class='weather_day'></div> </div> <div class='weather_border'></div><div id='weather_dailydiv' class='weather_dailydiv'> <div id='weather_clouds4' class='weather_clouds3'></div> <div id='weather_cel4' class='weather_cel'></div> <div id='weather_fah4' class='weather_fah'></div> <div id='weather_day4' class='weather_day'></div> </div> <div class='weather_border'></div><div id='weather_dailydiv' class='weather_dailydiv'> <div id='weather_clouds5' class='weather_clouds3'></div> <div id='weather_cel5' class='weather_cel'></div> <div id='weather_fah5' class='weather_fah'></div> <div id='weather_day5' class='weather_day'>  </div> </div> <div class='weather_border'></div><div id='weather_dailydiv' class='weather_dailydiv'> <div id='weather_clouds6' class='weather_clouds3'></div> <div id='weather_cel6' class='weather_cel'></div> <div id='weather_fah6' class='weather_fah'></div> <div id='weather_day6' class='weather_day'></div> </div> <div class='weather_border'></div></div> </div> </div>");
	kango.dispatchMessage('getStorage', '');
	var bg_icon = kango.io.getResourceUrl('res/bg.png');
	var line_icon = kango.io.getResourceUrl('res/line.png');
	$('#weather_container').css("background","url('"+bg_icon+"') no-repeat scroll 0 0 rgba(0, 0, 0, 0)");
	$('.weather_border').css("background","url('"+line_icon+"') no-repeat scroll 0 0 rgba(0, 0, 0, 0)");
	kango.addMessageListener('returnStorage', function(event) {
		if (event.data)
		{
			$('#weather_time').text(getDateTime('time'));
			$('#weather_date').text(getDateTime('date'));
			$('#weather_place').text(event.data['city']);
			$('#weather_today').text(event.data['data'][0]['temp']+'°');
			for (var i=0; i<event.data['data'].length; i++)
			{
				$('#weather_clouds'+i).css("background","url('"+icon_url+event.data['data'][i]['icon']+".png') no-repeat scroll 0 0 rgba(0, 0, 0, 0)");
				$('#weather_day'+i).html("<p>"+event.data['local'][i]+"</p>");
				$('#weather_cel'+i).text(event.data['data'][i]['max']+'°');
				$('#weather_fah'+i).text(event.data['data'][i]['min']+'°');
				$('#weather_fah'+i).text(event.data['data'][i]['min']+'°');
			}
		}
	});
	kango.addMessageListener('show', function(event) {
		if($('#weather_container').css('display') == 'none'){ 
		   $('#weather_container').show(); 
		} else { 
		   $('#weather_container').hide(); 
		}
	});
});

*/