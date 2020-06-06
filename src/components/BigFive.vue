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
    <v-divider></v-divider>
    <b-card-title>Personality Trait Scores</b-card-title>
    <b-card-sub-title>
      result taken from
      <a
        href="https://www.truity.com/personality-test/17315/test-results/21215808"
      >truity.com/</a>
    </b-card-sub-title>
    <Plotly :data="big5data" :layout="big5layout"></Plotly>
  </v-card>
</template>

<script>
import { Plotly } from "vue-plotly";

export default {
  name: "BigFive",
  components: {
    Plotly
  },

  data: () => ({
    big5data: [
      {
        type: "scatterpolar",
        r: [39, 28, 8, 7, 28, 39],
        theta: ["A", "B", "C", "D", "E", "A"],
        fill: "toself"
      },
       {
        type: 'scatterpolar',
        r: [1.5, 10, 39, 31, 15, 1.5],
        theta: ['A','B','C', 'D', 'E', 'A'],
        fill: 'toself',
        name: 'Group B'
        },
    ],
    big5layout: {
      polar: {
        radialaxis: {
          visible: true,
          range: [0, 50]
        },
        bgcolor: "rgba(0,0,0,0)",
      },
      plot_bgcolor: "rgba(0,0,0,0)",
      paper_bgcolor: "rgba(0,0,0,0)",
      showlegend: false,
    }
  })
};
</script>