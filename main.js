//Input of CSV data into world map
d3.csv('https://raw.githubusercontent.com/chujiayi-nm2207/chujiayi-nm2207.github.io/chujiayi-nm2207-finalsubmission/jobsatisfaction.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

    var data = [{
        type: 'choropleth',
        locationmode: 'country names',
        locations: unpack(rows, 'country'),
        z: unpack(rows, 'satisfaction'),
        autocolorscale: true
    }];

    var layout = {
      geo: {
          projection: {
              type: 'robinson'
          }
      }
    };

    Plotly.newPlot("worldmap", data, layout, {showLink: false});

});

//Constructing Bar Chart on global and local job satisfaction levels, not sure why it was not able to be stacked :(
  const global = [62];
  const local = [49];
  const satisfactionLevels = ["Job Satisfaction Levels"];
  
  const dataObj1 = {
    labels: satisfactionLevels,  
    datasets: [
          {
              label: "Local %",
              data: local,
              backgroundColor: "#C51423",
          },
          {
              label: "Global %",
              data: global,
              backgroundColor: "#7B010B",
          },
      ],
  };
  
  new Chart("satisfactionchart", {
    type: "bar",
    data: dataObj1,
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
            display: true,
            labels: {
                color: "#003048",
                font: {
                    family: "Raleway",
                },
            },
        },
      },
      scales: {
        x: {
          type: "linear",
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
        y: {
          type: "category",
          stacked: true,
        },
      },
    },
  });

// Radial charts on why employees push themselves so hard
// Credits: https://apexcharts.com/javascript-chart-demos/radialbar-charts/gradient/
// Desire
var options = {
    series: [58],
    chart: {
    height: 350,
    type: 'radialBar',
    toolbar: {
      show: true
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: 0,
      endAngle: 360,
       hollow: {
        margin: 0,
        size: '70%',
        background: '#7B010B',
      },
      track: {
        background: '#FEEFD7',
        strokeWidth: '80%',
        margin: 0,
        dropShadow: {
          enabled: true,
          top: -3,
          blur: 6,
          opacity: 0.25
        }
      },

      dataLabels: {
        name: {
          show: true,
          color: '#f3f3f3',
          fontSize: '20px'
        },

        value: {
          formatter: function(val) {
            return parseInt(val) + "%";
          },
          color: '#f3f3f3',
          fontSize: '20px',
          show: true,
        }
      }
    }
  },
  stroke: {
    lineCap: 'round',
  },
  labels: ['For A Better Life'],
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

// Accomoplishment
  var options = {
    series: [53],
    chart: {
    height: 350,
    type: 'radialBar',
    toolbar: {
      show: true
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: 0,
      endAngle: 360,
       hollow: {
        margin: 0,
        size: '70%',
        background: '#7B010B',
      },
      track: {
        background: '#FEEFD7',
        strokeWidth: '80%',
        margin: 0,
        dropShadow: {
          enabled: true,
          top: -3,
          blur: 6,
          opacity: 0.25
        }
      },

      dataLabels: {
        name: {
          show: true,
          color: '#f3f3f3',
          fontSize: '20px'
        },

        value: {
          formatter: function(val) {
            return parseInt(val) + "%";
          },
          color: '#f3f3f3',
          fontSize: '20px',
          show: true,
        }
      }
    }
  },
  stroke: {
    lineCap: 'round',
  },
  labels: ['Accomplishment'],
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

// Earning
  var options = {
    series: [50],
    chart: {
    height: 350,
    type: 'radialBar',
    toolbar: {
      show: true
    }
  },
  plotOptions: {
    radialBar: {
      startAngle: 0,
      endAngle: 360,
       hollow: {
        margin: 0,
        size: '70%',
        background: '#7B010B',
      },
      track: {
        background: '#FEEFD7',
        strokeWidth: '80%',
        margin: 0,
        dropShadow: {
          enabled: true,
          top: -3,
          blur: 6,
          opacity: 0.25
        }
      },

      dataLabels: {
        name: {
          show: true,
          color: '#f3f3f3',
          fontSize: '20px'
        },

        value: {
          formatter: function(val) {
            return parseInt(val) + "%";
          },
          color: '#f3f3f3',
          fontSize: '20px',
          show: true,
        }
      }
    }
  },
  stroke: {
    lineCap: 'round',
  },
  labels: ['Higher Pay'],
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

// Fear
var options = {
  series: [30],
  chart: {
  height: 350,
  type: 'radialBar',
  toolbar: {
    show: true
  }
},
plotOptions: {
  radialBar: {
    startAngle: 0,
    endAngle: 360,
     hollow: {
      margin: 0,
      size: '70%',
      background: '#7B010B',
    },
    track: {
      background: '#FEEFD7',
      strokeWidth: '80%',
      margin: 0,
      dropShadow: {
        enabled: true,
        top: -3,
        blur: 6,
        opacity: 0.25
      }
    },

    dataLabels: {
      name: {
        show: true,
        color: '#f3f3f3',
        fontSize: '20px'
      },

      value: {
        formatter: function(val) {
          return parseInt(val) + "%";
        },
        color: '#f3f3f3',
        fontSize: '20px',
        show: true,
      }
    }
  }
},
stroke: {
  lineCap: 'round',
},
labels: ['Peer Pressure'],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

//Constructing Bar Chart on why employees leave their companies
const Reasons = ["Co-workers", "Leadership", "Career Development", "Financial Rewards","Work-Life Balance"];
const Num = [25, 80, 115, 120, 125];

const dataObj = {
    labels: Reasons,
    datasets: [
        {
            label: "Number of Employees",
            data: Num,
            borderWidth: 5,
            backgroundColor: "#7B010B",
            borderColor: "#C51423",
        }
    ]
};

new Chart("leave-bar", {
    type: "horizontalBar",
    data: dataObj,
});

// Linking button to article, article opens in a new page
var website = function() {
  window.open("https://www.channelnewsasia.com/commentary/will-job-hopping-hurt-career-cv-quit-2514236#:~:text=A%20recent%20Milieu%20Insight%20survey,be%20vital%20for%20continued%20success.", "_blank");
};
