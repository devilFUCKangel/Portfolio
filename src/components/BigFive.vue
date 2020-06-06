<template>
  <v-card>
    <v-divider></v-divider>
    <b-card-title>Personality Trait Scores</b-card-title>
    <b-card-sub-title>
      result taken from
      <a
        href="https://bigfive-test.com/result/5ed7cf58bc509600070f0d1c"
      >bigfive-test.com</a>
    </b-card-sub-title>
    <la-cartesian autoresize :data="values">
      <la-line prop="pv"></la-line>
      <la-y-axis></la-y-axis>
      <la-x-axis prop="name"></la-x-axis>
      <la-tooltip></la-tooltip>
    </la-cartesian>
    <v-divider></v-divider>
    <b-card-title>Personality Trait Scores</b-card-title>
    <b-card-sub-title>
      result taken from
      <a
        href="https://www.truity.com/personality-test/17315/test-results/21215808"
      >truity.com/</a>
    </b-card-sub-title>
    <la-cartesian autoresize :data="values">
      <la-line prop="pv"></la-line>
      <la-y-axis></la-y-axis>
      <la-x-axis prop="name"></la-x-axis>
      <la-tooltip></la-tooltip>
    </la-cartesian>
    <Plotly :data="data2" :layout="layout2" ></Plotly>

    <bar />
  </v-card>
</template>

<script>
import { Cartesian, Line } from "laue";
import { Bar } from "vue-chartjs";
import { Plotly } from "vue-plotly";

export default {
  name: "BigFive",
  components: {
    LaCartesian: Cartesian,
    LaLine: Line,
    Bar,
    Plotly
  },

  data: () => ({
    values: [
      { name: "Page A", pv: 2000 },
      { name: "Page B", pv: 3000 },
      { name: "Page C", pv: 1200 }
    ],
    chartdata: {
      labels: ["January", "February"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "#f87979",
          data: [40, 20]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    },
    data: [
      {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: "scatter"
      }
    ],
    layout: {
      title: "My graph",
      paper_bgcolor: "rgba(0,0,0,0)",
      plot_bgcolor: "rgba(0,0,0,0)"
    },
    data2: [{
      type: "scatterpolar",
      r: [39, 28, 8, 7, 28, 39],
      theta: ["A", "B", "C", "D", "E", "A"],
      fill: "toself"
    }],
    layout2: {
      polar: {
        radialaxis: {
          visible: true,
          range: [0, 50]
        }
      },
      showlegend: false
    }
  }),

  extends: Bar,

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>