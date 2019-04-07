// !function(globe,fantory){
//
// }(window,function () {
//

$(function () {

        //
        // var year=[
        //     {code:0,
        //         name:"不限"},
        //     {code:1,
        //         name:"其他"}
        // ];
        //
        // $("#year").dxSelectBox({
        //     dataSource:year,
        //     items:name.value,
        //
        // });
        //
        // $("#season").dxSelectBox({
        //     // dataSource:year,
        //     items:[],
        //
        // });
        //
        // $("#month").dxSelectBox({
        //     // dataSource:year,
        //     items:[],
        //
        // });

        $("#source").dxSelectBox({
            // dataSource:year,
            items:[],

        });

        $("#fastweek").dxSelectBox({
            // dataSource:year,
            items:[],

        });

        var now=new Date();
        var startime=now-(30*24*60*60*1000);
        $("#begin-time").dxDateBox({
            type:"datetime",
            displayFormat: "yyyy-MM-dd HH:mm:ss",
            value:startime
        });
        $("#end-time").dxDateBox({
            type:"datetime",
            displayFormat: "yyyy-MM-dd HH:mm:ss",
            value:now
        });

        $("#stati").dxButton({
            text:"统计",
            type:"nomar"
        });
        $("#export").dxButton({
            text:"导出",
            type:"nomar"
        });


        $("#gridData").dxDataGrid({
            dataSource: customers,
            colums:["需求类型","总数","已观测","未观测","观测次数","成像时长"],
            showBorders:true,
        });
//////////
    $("#pie1").dxPieChart({
        palette: "bright",
        dataSource: dataSource,
        showBorders:true,
        series: [
            {
                argumentField: "country",
                valueField: "area",
            }
        ],
        title:{
            text: "需求状态",
        },
    });
    $("#pie2").dxPieChart({
        palette: "bright",
        dataSource: dataSource,
        series: [
            {
                argumentField: "country",
                valueField: "area",
            }
        ],
        title:{
            text: "应用领域",
        },
    });

    $("#pie3").dxPieChart({
        palette: "bright",
        dataSource: dataSource,
        series: [
            {
                argumentField: "country",
                valueField: "area",
            }
        ],
        title:{
            text: "需求来源",

        },
    });

    $("#pie4").dxPieChart({
        palette: "bright",
        dataSource: dataSource,
        series: [
            {
                argumentField: "country",
                valueField: "area",
            }
        ],
        title:{
           text: "需求分辨率",
        },
    });



    $("#bar1").dxChart({
        dataSource: dataSourceCharts,
        title:"123",
        series: {
            argumentField: "day",
            valueField: "oranges",
            name: "My oranges",
            type: "bar",
            color: '#ffaa66'
        }
    });
    $("#bar2").dxChart({
        dataSource: dataSourceCharts,
        title:"123",
        series: {
            argumentField: "day",
            valueField: "oranges",
            name: "My oranges",
            type: "bar",
            color: '#ffaa66'
        }
    });
    $("#bar3").dxChart({
        dataSource: dataSourceCharts,
        title:"123",
        series: {
            argumentField: "day",
            valueField: "oranges",
            name: "My oranges",
            type: "bar",
            color: '#ffaa66'
        }
    });



})



// });
