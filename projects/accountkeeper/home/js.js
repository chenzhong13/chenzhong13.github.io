var HomeCtrl = {
    init: function () {
        /* because loading data will cost too munch time,
         so we postpone the loading task to avoid blocking
         UI rendering
         */
        var self = this;
        setTimeout(function () {
            self.loadData();
        }, 1000);
        this.bindEvent();
    },
    loadData: function () {
        this.loadChart();
    },
    loadChart: function () {
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
                margin: -10000,
                style: {
                    color: 'red'
                }
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
        (function () {
            for (var i = 1; i < 32; i++) {
                daysOfMonth.push(i);
                var random = Math.random() * 10 + 20;
                data1.push({y: parseFloat(random.toFixed(2)), color: (Math.random() < 0.5 ? "#BBDEFB" : '#FF5252')});
            }
        })();
        $('#month-detail-chart').highcharts({
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
    },
    bindEvent: function () {
        $('.month-card-content').on('click', function () {
            var url = $(this).attr("data-target-url");
            window.location.href = url;
        });
        $('.float-btn').on('click', function () {
            var url = $(this).attr("data-target-url");
            window.location.href = url;
        });
    }
};
$(document).ready(HomeCtrl.init());