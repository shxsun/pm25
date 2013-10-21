var chartData = {
	labels : ["2013-10-01","2013-10-02","2013-10-03","2012-10-04","2013-10-05","2013-10-06","2013-10-07"],
	datasets : [
	{
		fillColor : "rgba(220,220,220,0.5)",
		strokeColor : "rgba(220,220,220,1)",
		data : [65,59,90,81,56,55,40]
	},
	{
		fillColor : "rgba(151,187,205,0.5)",
		strokeColor : "rgba(151,187,205,1)",
		data : [28,48,40,19,96,27,100]
	}
	]
}
$(function(){
	var apiUrl = "api/v2/pm25" // /city_list
	$.get(apiUrl + "/city_list", {}, function(data, textStatus) {
		//alert(textStatus);
		//alert(data.data);
		chartData.labels = data.data;
		new Chart(ctx).Line(chartData);
	}, "json");
//Get the context of the canvas element we want to select
//var ctx = $("#myChart").get(0).getContext("2d");
var ctx = document.getElementById("myChart").getContext("2d");
var newNewChart = new Chart(ctx).Line(chartData);
});

