var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
function openSidebar(){
    if(!sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
};
function closeSidebar(){
    if(sidebarOpen){
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false; 
    }
};

//-------------------CHARTS

//-------------------BAR CHART

var barCharOptions = {
    series: [{
    data: [10,8,6,4,2]
  }],
    chart: {
    type: 'bar',
    height: 350,
    toolbar:{
        Show:false
    },
  },
  colors:[
    "#246dec",
    "#cc3c43",
    "#367952",
    "#f5b741",
    "#4F35al"
  ],
  plotOptions: {
    bar: {
        distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth:'40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend:{
    show:false
  },
  xaxis: {
    categories: ['laptop','phone','monitor','headphones','camera',],
  },
  yaxis:{
    title: {
        text:"count"
    }
  }
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barCharOptions);
  barChart.render();

  //-------------------LINE CHART

  var areaChartOptions = {
    series: [{
    name: 'purchase orders',
    data: [31,40,28,51,42,109,100]
  }, {
    name: 'sales orders',
    data: [11,32,45,32,34,52,41]
  }],
    chart: {
    height: 350,
    type: 'area',
  },
  colors:["#4f35a1","#246dec",],
  datalabels:{
    enabled:false,
  },
  toolbar: {
    show :false,
  },
  stroke: {
    curve: 'smooth'
  },

  labels: ["jan","feb","mar","apr","may","jun","jul",],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'purchase orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'sales orders',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,

  }
  };

  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
  areaChart.render();

  app.get




