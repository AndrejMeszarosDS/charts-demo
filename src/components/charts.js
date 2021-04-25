import React from "react";
import "./charts.scss";
import {
  Bar,
  Line,
  Polar,
  Doughnut,
  Pie,
  HorizontalBar,
} from "react-chartjs-2";
import "chartjs-plugin-datalabels";

const default_data = {
  labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  datasets: [
    {
      label: "Digit count",
      backgroundColor: [
        "rgba(255, 241, 0, 0.5)",
        "rgba(255, 140, 0, 0.5)",
        "rgba(232, 17, 35, 0.5)",
        "rgba(236, 0, 140, 0.5)",
        "rgba(104, 33, 122, 0.5)",
        "rgba(0, 24, 143, 0.5)",
        "rgba(0, 188, 242, 0.5)",
        "rgba(0, 178, 148, 0.5)",
        "rgba(0, 158, 73, 0.5)",
        "rgba(186, 216, 10, 0.5)",
      ],
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,0)",
      data: [65, 59, 80, 81, 56, 55, 40, 68, 45, 65],
    },
  ],
};

export const Charts = (props) => {
  var data = default_data;
  data.datasets[0].data = props.chartData;
  return (
    <div className="ChartContainer">
      {props.chartType === 1 && (
        <Bar
          data={data}
          width={10}
          height={10}
          options={{
            plugins: {
              datalabels: {
                display: true,
                align: "top",
              },
            },
            legend: {
              display: false,
            },
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "counts",
                  },
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "digits",
                  },
                },
              ],
            },
          }}
        />
      )}
      {props.chartType === 2 && (
        <HorizontalBar
          data={data}
          width={10}
          height={10}
          options={{
            plugins: {
              datalabels: {
                align: 0,
                anchor: "mid",
                color: "#cc55aa",
                offset: 5,
                padding: {
                  left: 0,
                  top: 0,
                },
              },
            },
            legend: {
              display: false,
            },
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "digits",
                  },
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "counts",
                  },
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      )}
      {props.chartType === 3 && (
        <Line
          data={data}
          width={10}
          height={10}
          options={{
            plugins: {
              datalabels: {
                display: true,
                align: "top",
              },
            },
            legend: {
              display: false,
            },
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "counts",
                  },
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "digits",
                  },
                },
              ],
            },
          }}
        />
      )}
      {props.chartType === 4 && (
        <Polar
          data={data}
          width={10}
          height={10}
          options={{
            plugins: {
              datalabels: {
                display: true,
                align: "top",
              },
            },
            legend: {
              display: true,
            },
            maintainAspectRatio: false,
            yAxes: {},
            scales: {
              yAxes: [
                {
                  display: false,
                  scaleLabel: {
                    display: false,
                    labelString: "counts",
                  },
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
              xAxes: [
                {
                  display: false,
                  scaleLabel: {
                    display: true,
                    labelString: "digits",
                  },
                },
              ],
            },
          }}
        />
      )}
      {props.chartType === 5 && (
        <Doughnut
          data={data}
          width={10}
          height={10}
          options={{
            plugins: {
              datalabels: {
                display: true,
                align: "top",
              },
            },
            legend: {
              display: true,
            },
            maintainAspectRatio: false,
            yAxes: {},
            scales: {
              yAxes: [
                {
                  display: false,
                  scaleLabel: {
                    display: false,
                    labelString: "counts",
                  },
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
              xAxes: [
                {
                  display: false,
                  scaleLabel: {
                    display: true,
                    labelString: "digits",
                  },
                },
              ],
            },
          }}
        />
      )}
      {props.chartType === 6 && (
        <Pie
          data={data}
          width={10}
          height={10}
          options={{
            plugins: {
              datalabels: {
                display: true,
                align: "top",
              },
            },
            legend: {
              display: true,
            },
            maintainAspectRatio: false,
            yAxes: {},
            scales: {
              yAxes: [
                {
                  display: false,
                  scaleLabel: {
                    display: false,
                    labelString: "counts",
                  },
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
              xAxes: [
                {
                  display: false,
                  scaleLabel: {
                    display: true,
                    labelString: "digits",
                  },
                },
              ],
            },
          }}
        />
      )}
    </div>
  );
};
