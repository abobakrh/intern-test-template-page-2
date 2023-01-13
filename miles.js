am5.ready(function () {
	// Create root element
	// https://www.amcharts.com/docs/v5/getting-started/#Root_element
	var root = am5.Root.new("miles");
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
			paddingRight: 0,
			paddingTop: 0,
			paddingBottom: 0,
			paddingLeft: 0,
		})
	);

	// Add cursor
	// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
	var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
	cursor.lineY.set("visible", false);

	// Create axes
	// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
	var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
	xRenderer.labels.template.setAll({
		centerY: am5.p50,
		centerX: am5.p50,
	});

	var xAxis = chart.xAxes.push(
		am5xy.CategoryAxis.new(root, {
			maxDeviation: 0.3,
			categoryField: "time",
			renderer: xRenderer,
			tooltip: am5.Tooltip.new(root, {}),
		})
	);

	var yAxis = chart.yAxes.push(
		am5xy.ValueAxis.new(root, {
			maxDeviation: 0.3,
			renderer: am5xy.AxisRendererY.new(root, {}),
			visible: false,
		})
	);
	// Create series
	// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
	var series = chart.series.push(
		am5xy.ColumnSeries.new(root, {
			name: "Series 1",
			xAxis: xAxis,
			yAxis: yAxis,
			valueYField: "value",
			sequencedInterpolation: true,
			categoryXField: "time",
			tooltip: am5.Tooltip.new(root, {
				labelText: "{valueY}",
			}),
		})
	);
	series.columns.template.adapters.add("fill", function (fill, target) {
		return chart.get("colors").set("colors", [am5.color(0xf5f5f5)]);
	});

	series.columns.template.adapters.add("fill", function (fill, target) {
		if (target.dataItem.get("valueY") == 2300) {
			return am5.color(0x2884ff);
		} else {
			return fill;
		}
	});

	series.columns.template.adapters.add("stroke", function (stroke, target) {
		return chart.get("colors").set("colors", [am5.color(0xf5f5f5)]);
	});
	// Set data
	var data = [
		{
			time: "1 PM",
			value: 2025,
		},
		{
			time: "2 PM",
			value: 1882,
		},
		{
			time: "3 PM",
			value: 2300,
		},
		{
			time: "4 PM",
			value: 1500,
		},
		{
			time: "5 PM",
			value: 2025,
		},
		{
			time: "6 PM",
			value: 1400,
		},
		{
			time: "7 PM",
			value: 1950,
		},
	];

	xAxis.data.setAll(data);
	series.data.setAll(data);
	var myTheme = am5.Theme.new(root);

	myTheme.rule("Grid").setAll({
		stroke: am5.color(0xffffff),
		strokeWidth: 0,
	});

	root.setThemes([myTheme]);
	// Make stuff animate on load
	// https://www.amcharts.com/docs/v5/concepts/animations/
	series.appear(1000);
	chart.appear(1000, 100);
}); // end am5.ready()
