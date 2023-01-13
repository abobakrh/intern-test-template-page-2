window.onload = function () {
	var chart = new CanvasJS.Chart("car", {
		animationEnabled: true,
		title: {
			text: "Company Revenue by Year",
		},
		axisY: {
			labelFontSize: 0,
			tickThickness: 0,
		},
		axisX: {
			title: "",
			valueFormatString: "",
			suffix: "",
			prefix: "",
			tickThickness: 0,
		},
		data: [
			{
				markerType: "none",
				type: "splineArea",
				color: "rgba(255,118,76,.24)",
				markerSize: 5,
				xValueFormatString: "",
				yValueFormatString: "$#,##0.##",
				dataPoints: [
					{ x: new Date(2000, 0), y: 3289000 },
					{ x: new Date(2001, 0), y: 3880000 },
					{ x: new Date(2002, 0), y: 3950000 },
					{ x: new Date(2003, 0), y: 4830000 },
					{ x: new Date(2004, 0), y: 6830000 },
					{ x: new Date(2005, 0), y: 6830000 },
					{ x: new Date(2006, 0), y: 2821000 },
					{ x: new Date(2007, 0), y: 2000000 },
					{ x: new Date(2008, 0), y: 1397000 },
					{ x: new Date(2009, 0), y: 2506000 },
					{ x: new Date(2010, 0), y: 2798000 },
					{ x: new Date(2011, 0), y: 3386000 },
					{ x: new Date(2012, 0), y: 6704000 },
					{ x: new Date(2013, 0), y: 6026000 },
					{ x: new Date(2014, 0), y: 2394000 },
					{ x: new Date(2015, 0), y: 1872000 },
					{ x: new Date(2016, 0), y: 2140000 },
				],
			},
		],
	});
	chart.render();
};
