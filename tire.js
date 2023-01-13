am5.ready(function () {
	// Create root element
	// https://www.amcharts.com/docs/v5/getting-started/#Root_element
	var root = am5.Root.new("tire");
	root._logo.dispose();

	// Set themes
	// https://www.amcharts.com/docs/v5/concepts/themes/
	root.setThemes([am5themes_Animated.new(root)]);

	// Create chart
	// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
	var chart = root.container.children.push(
		am5percent.PieChart.new(root, {
			startAngle: 160,
			endAngle: 380,
		})
	);
	// Create series
	// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series

	var series0 = chart.series.push(
		am5percent.PieSeries.new(root, {
			valueField: "litres",
			categoryField: "country",
			startAngle: 0,
			endAngle: 0,
			radius: am5.percent(70),
			innerRadius: am5.percent(65),
		})
	);
	series0.ticks.template.set("forceHidden", true);
	series0.labels.template.set("forceHidden", true);

	var series1 = chart.series.push(
		am5percent.PieSeries.new(root, {
			startAngle: 160,
			endAngle: 380,
			valueField: "bottles",
			innerRadius: am5.percent(80),
			categoryField: "country",
		})
	);

	series1.ticks.template.set("forceHidden", true);
	series1.labels.template.set("forceHidden", true);

	var label = chart.seriesContainer.children.push(
		am5.Label.new(root, {
			textAlign: "center",
			centerY: am5.p50,
			centerX: am5.p50,
			color: "#008000",
			fill: "#000000",
			text: "[bold fontSize:30px]25%[/]",
		})
	);

	series0

		.get("colors")
		.set("colors", [am5.color(0xf6cc0d), am5.color(0xf0f0e9)]);

	var data = [
		{
			country: "tire wear",
			bottles: 25,
		},
		{
			country: "",
			bottles: 75,
		},
	];

	// Set data
	// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
	series0.data.setAll(data);
	series1.data.setAll(data);
}); // end am5.ready()
