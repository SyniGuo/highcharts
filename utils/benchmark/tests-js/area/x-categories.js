{
    chart: {
        renderTo: 'container'
    },
    
    xAxis: {
        categories:[]
    },
    
    series: [{
        type: 'area',
        animation: false,
        data: (function () {
            var arr = [];
            for (var j = 0; j < 100; j++) {
                arr.push(j);
            }
            return arr;
        }())
    }]

}