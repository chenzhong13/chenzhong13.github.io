$(function () {
    var chart;

    $(document).ready(function () {

        // Build the chart
        $('#monthChart').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                borderColor: null,
                plotShadow: false,
                backgroundColor: null,
            },
            legend: {
                align: 'right',
                verticalAlign: 'middle',
                x: 0,
                layout: 'vertical',
                margin: -10000
            },
            title: {
                text: '',
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true,
                    borderColor: null
                }
            },
            series: [{
                type: 'pie',
                name: '比例',
                data: [
                    ['吃', 45.0],
                    ['穿', 26.8],
                    {
                        name: '住',
                        y: 12.8,
                        sliced: true,
                        selected: true,
                        color: 'red'
                    },
                    ['用', 8.5],
                    ['行', 6.2],
                    ['娱乐', 0.7]
                ]
            }],

        });

        var daysOfMonth = [];
        var data1 = [];
        var data2 = [];
        (function () {
            for (var i = 1; i < 32; i++) {
                daysOfMonth.push(i);
                var random = Math.random() * 10 + 20;
                data1.push({y: parseFloat(random.toFixed(2)), color: (Math.random() < 0.5 ? "#2196f3" : 'red')});
                random = Math.random() * 10 + 20;
                data2.push({y: parseFloat(random.toFixed(2)), color: "#00ff00"});
            }
        })();
        $('#monthDetailChart').highcharts({
            chart: {
                type: 'line',
                backgroundColor: null
            },
            legend: {
                enabled: false
            },
            title: {
                text: ''
            },
            subtitle: {
                text: null
            },
            xAxis: {
                categories: daysOfMonth
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            tooltip: {
                enabled: true,
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br>' + this.x + ': ' + this.y + '°C';
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: false
                    },
                    enableMouseTracking: true,
                    lineWidth: 1
                }
            },
            series: [{
                name: '当日消费',
                data: data1
            }]
        });

        if (1 == 1) {
            return;
        }
        var daysOfMonth = [];
        var data1 = [];
        (function () {
            for (var i = 0; i < 24; i++) {
                daysOfMonth.push(i);
                var random = Math.random() * 30 + 0;
                data1.push({y: parseFloat(random.toFixed(2)), color: "#ff0000"});
            }
        })();
        $('#dayDetailChart').highcharts({
            chart: {
                type: 'column',
                backgroundColor: null
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: daysOfMonth,
                labels: {
                    rotation: -45,
                    align: 'right',
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: null
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>',
            },
            series: [{
                name: 'Population',
                data: data1,
                dataLabels: {
                    enabled: false,
                    rotation: -90,
                    color: '#FFFFFF',
                    align: 'right',
                    x: 4,
                    y: 10,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif',
                        textShadow: '0 0 3px black'
                    }
                }
            }]
        });
    });

});