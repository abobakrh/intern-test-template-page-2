am5.ready(function () {
	// Create root element
	// https://www.amcharts.com/docs/v5/getting-started/#Root_element
	var root = am5.Root.new("car");
	root._logo.dispose();
	// Set themes
	// https://www.amcharts.com/docs/v5/concepts/themes/
	root.setThemes([am5themes_Animated.new(root)]);

	// Create chart
	// https://www.amcharts.com/docs/v5/charts/xy-chart/
	var chart = root.container.children.push(
		am5xy.XYChart.new(root, {
			panX: true,
			panY: true,
			wheelX: "panX",
			wheelY: "zoomX",
			pinchZoomX: true,
		})
	);

	// Add cursor
	// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
	var cursor = chart.set(
		"cursor",
		am5xy.XYCursor.new(root, {
			behavior: "none",
		})
	);
	cursor.lineY.set("visible", false);

	// The data
	var data = [
		{
			year: "7 PM",
			cars: 1691,
		},
		{
			year: "9 PM",
			cars: 1700,
		},
		{
			year: "11 PM",
			cars: 1600,
		},
		{
			year: "1 AM",
			cars: 1500,
		},
		{
			year: "3 AM",
			cars: 1400,
		},
		{
			year: "5 AM",
			cars: 1200,
		},
		{
			year: "7 AM",
			cars: 1300,
		},
		{
			year: "9 AM",
			cars: 1600,
		},
		{
			year: "11 AM",
			cars: 1680,
		},
		{
			year: "1 PM",
			cars: 1700,
		},
	];
	// Create axes
	// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
	var xAxis = chart.xAxes.push(
		am5xy.CategoryAxis.new(root, {
			categoryField: "year",
			renderer: am5xy.AxisRendererX.new(root, {}),
			tooltip: am5.Tooltip.new(root, {}),
		})
	);

	xAxis.data.setAll(data);

	var yAxis = chart.yAxes.push(
		am5xy.ValueAxis.new(root, {
			renderer: am5xy.AxisRendererY.new(root, {}),
			visible: false,
		})
	);

	// Add series
	// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
	var gradient = am5.LinearGradient.new(root, {
		stops: [
			{
				color: am5.color(0xff764c),
				opacity: 0.1,
				brighten: 1,
			},
			{
				color: am5.color(0xff7e07),
				opacity: 0.1,
				brighten: -0.5,
			},
		],
	});
	function createSeries(name, field) {
		var series = chart.series.push(
			am5xy.LineSeries.new(root, {
				name: name,
				xAxis: xAxis,
				yAxis: yAxis,
				fillGradient: gradient,
				valueYField: field,
				categoryXField: "year",
				tooltip: am5.Tooltip.new(root, {
					pointerOrientation: "horizontal",
					labelText: "[bold]{name}[/]\n{categoryX}: {valueY}",
				}),
			})
		);

		series.fills.template.setAll({
			fillOpacity: 0.2,
			visible: true,
		});

		series.data.setAll(data);
		series.set("fill", am5.color(0xff764c, 0xff7e07));
		series.set("stroke", am5.color(0xff764c, 0xff7e07));
	}

	createSeries("Cars", "cars");
	var myTheme = am5.Theme.new(root);

	myTheme.rule("Grid").setAll({
		stroke: am5.color(0xffffff),
		strokeWidth: 0,
	});

	root.setThemes([myTheme]);

	// Create axis ranges
	// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/axis-ranges/

	// Make stuff animate on load
	// https://www.amcharts.com/docs/v5/concepts/animations/
	chart.appear(1000, 100);
});
