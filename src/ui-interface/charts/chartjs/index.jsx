import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../../layouts/Header";
import Sidebar from "../../../layouts/Sidebar";
import { Chart } from "primereact/chart";
import { useEffect } from "react";

const ChartJs = () => {
  const [menu, setMenu] = useState(false);
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [chartVertical, setChartVertical] = useState({});
  const [chartVerticalOptions, setChartVerticalOptions] = useState({});
  const [stackedChart, setStackedChart] = useState({});
  const [stackedOptions, setStackedOptions] = useState({});
  const [lineChartData, setLineChartData] = useState({});
  const [lineChartOptions, setLineChartOptions] = useState({});
  const [pieChartData, setPiechartData] = useState({});
  const [pieChartOptions, setPiechartOptions] = useState({});
  const [doughnutChart, setDoughnutChartData] = useState({});
  const [doughnutChartOptions, setDoughnutChartOptions] = useState({});
  const [BarlineData, setBarlineChartData] = useState({});
  const [BarlineOptions, setBarlineOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Sales",
          data: [540, 325, 702, 620],
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const verticaldata = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: documentStyle.getPropertyValue("--blue-500"),
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          backgroundColor: documentStyle.getPropertyValue("--pink-500"),
          borderColor: documentStyle.getPropertyValue("--pink-500"),
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };
    const verticalOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            fontColor: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    setChartVertical(verticaldata);
    setChartVerticalOptions(verticalOptions);
  }, []);

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const stackedData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          type: "bar",
          label: "Dataset 1",
          backgroundColor: documentStyle.getPropertyValue("--blue-500"),
          data: [50, 25, 12, 48, 90, 76, 42],
        },
        {
          type: "bar",
          label: "Dataset 2",
          backgroundColor: documentStyle.getPropertyValue("--green-500"),
          data: [21, 84, 24, 75, 37, 65, 34],
        },
        {
          type: "bar",
          label: "Dataset 3",
          backgroundColor: documentStyle.getPropertyValue("--yellow-500"),
          data: [41, 52, 24, 74, 23, 21, 32],
        },
      ],
    };
    const stackedOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        tooltips: {
          mode: "index",
          intersect: false,
        },
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          stacked: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setStackedChart(stackedData);
    setStackedOptions(stackedOptions);
  }, []);

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const lineData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Dataset 1",
          fill: false,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          yAxisID: "y",
          tension: 0.4,
          data: [65, 59, 80, 81, 56, 55, 10],
        },
        {
          label: "Dataset 2",
          fill: false,
          borderColor: documentStyle.getPropertyValue("--green-500"),
          yAxisID: "y1",
          tension: 0.4,
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };
    const lineOptions = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            drawOnChartArea: false,
            color: surfaceBorder,
          },
        },
      },
    };

    setLineChartData(lineData);
    setLineChartOptions(lineOptions);
  }, []);

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const pieData = {
      labels: ["A", "B", "C"],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
        },
      ],
    };
    const pieOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setPiechartData(pieData);
    setPiechartOptions(pieOptions);
  }, []);

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const doughnutdata = {
      labels: ["A", "B", "C"],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
        },
      ],
    };
    const doughnutoptions = {
      cutout: "60%",
    };

    setDoughnutChartData(doughnutdata);
    setDoughnutChartOptions(doughnutoptions);
  }, []);

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const Barlinedata = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          type: "line",
          label: "Dataset 1",
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          data: [50, 25, 12, 48, 56, 76, 42],
        },
        {
          type: "bar",
          label: "Dataset 2",
          backgroundColor: documentStyle.getPropertyValue("--green-500"),
          data: [21, 84, 24, 75, 37, 65, 34],
          borderColor: "white",
          borderWidth: 2,
        },
        {
          type: "bar",
          label: "Dataset 3",
          backgroundColor: documentStyle.getPropertyValue("--orange-500"),
          data: [41, 52, 24, 74, 23, 21, 32],
        },
      ],
    };
    const BarlineOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setBarlineChartData(Barlinedata);
    setBarlineOptions(BarlineOptions);
  }, []);

  const toggleMobileMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        <Header onMenuClick={() => toggleMobileMenu()} />
        <Sidebar />
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <Helmet>
            <title>Dashboard- CRMS admin Template</title>
            <meta name="description" content="Reactify Blank Page" />
          </Helmet>
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="content-page-header">
                <h5>Chartjs</h5>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              {/* Chart */}
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Bar Chart</div>
                  </div>
                  <div className="card-body">
                    <div>
                      {/* <Bar className="h-300" data={state1} options={option1} /> */}
                      <Chart
                        type="bar"
                        data={chartData}
                        options={chartOptions}
                        style={{ height: "300px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Chart */}
              {/* Chart */}
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Vertical Chart </div>
                  </div>
                  <div className="card-body">
                    <div>
                      {/* <Bar className="h-300" data={state2} options={option2} /> */}
                      <Chart
                        type="bar"
                        data={chartVertical}
                        options={chartVerticalOptions}
                        style={{ height: "300px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Chart */}
              {/* Chart */}
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Stacked Bar</div>
                  </div>
                  <div className="card-body">
                    <div>
                      {/* <Bar className="h-300" data={state3} options={option3} /> */}
                      <Chart
                        type="bar"
                        data={stackedChart}
                        options={stackedOptions}
                        style={{ height: "300px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Chart */}
              {/* Chart */}
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Line Chart</div>
                  </div>
                  <div className="card-body">
                    <div className="chartjs-wrapper-demo">
                      {/* <Bar className="h-300" data={state4} options={option4} /> */}
                      <Chart
                        type="line"
                        data={lineChartData}
                        options={lineChartOptions}
                        style={{ height: "300px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Chart */}
              {/* Chart */}
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Pie Chart</div>
                  </div>
                  <div className="card-body">
                    <div className="chartjs-wrapper-demo">
                      {/* <Bar className="h-300" data={state5} options={option5} /> */}
                      <Chart
                        type="pie"
                        data={pieChartData}
                        options={pieChartOptions}
                        className="w-full md:w-30rem"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Chart */}
              {/* Chart */}
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Doughnut Chart</div>
                  </div>
                  <div className="card-body">
                    <div className="chartjs-wrapper-demo">
                      {/* <Bar className="h-300" data={state6} options={option6} /> */}
                      <Chart
                        type="doughnut"
                        data={doughnutChart}
                        options={doughnutChartOptions}
                        className="primechart"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Chart */}
              {/* Chart */}
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">Combo Chart</div>
                  </div>
                  <div className="card-body">
                    <div className="chartjs-wrapper-demo">
                      {/* <Bar className="h-300" data={state7} options={option7} /> */}
                      <Chart
                        type="line"
                        data={BarlineData}
                        options={BarlineOptions}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Chart */}
            </div>
          </div>
        </div>
        {/* /Page Wrapper */}
      </div>
    </>
  );
};
export default ChartJs;
