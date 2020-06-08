<template>
  <v-card>
    <v-divider></v-divider>
    <b-card-title>Personality Trait Scores</b-card-title>
    <b-card-sub-title>
      The big five personality theory is by far the most scientifically validated and reliable psychological model to measure personality.
      This is valuable information for choosing a career and better understand about me.
    </b-card-sub-title>
    <v-divider></v-divider>
    <v-list dense>
      <v-subheader>"The theory identifies five factors:</v-subheader>
      <v-list-item class="v-btn--outlined" color="rgba(0,0,0,0.5)" disabled>
        <a style="color:red">O</a>
        <b-icon
          class="ma-1"
          icon="circle-fill"
          variant="primary"
          font-scale="0.3"
          animation="cylon"
        ></b-icon>
        <a
          style="color:rgba(255,255,255,0.5)"
        >openness to experience (inventive/curious vs. consistent/cautious)</a>
      </v-list-item>
      <v-list-item class="v-btn--outlined" color="rgba(0,0,0,0.5)" disabled>
        <a style="color:red">C</a>
        <b-icon
          class="ma-1"
          icon="circle-fill"
          variant="primary"
          font-scale="0.3"
          animation="cylon"
        ></b-icon>
        <a
          style="color:rgba(255,255,255,0.5)"
        >conscientiousness (efficient/organized vs. extravagant/careless)</a>
      </v-list-item>
      <v-list-item class="v-btn--outlined" color="rgba(0,0,0,0.5)" disabled>
        <a style="color:red">E</a>
        <b-icon
          class="ma-1"
          icon="circle-fill"
          variant="primary"
          font-scale="0.3"
          animation="cylon"
        ></b-icon>
        <a
          style="color:rgba(255,255,255,0.5)"
        >extraversion (outgoing/energetic vs. solitary/reserved)</a>
      </v-list-item>
      <v-list-item class="v-btn--outlined" color="rgba(0,0,0,0.5)" disabled>
        <a style="color:red">A</a>
        <b-icon
          class="ma-1"
          icon="circle-fill"
          variant="primary"
          font-scale="0.3"
          animation="cylon"
        ></b-icon>
        <a
          style="color:rgba(255,255,255,0.5)"
        >agreeableness (friendly/compassionate vs. challenging/callous)</a>
      </v-list-item>
      <v-list-item class="v-btn--outlined" color="rgba(0,0,0,0.5)" disabled>
        <a style="color:red">N</a>
        <b-icon
          class="ma-1"
          icon="circle-fill"
          variant="primary"
          font-scale="0.3"
          animation="cylon"
        ></b-icon>
        <a
          style="color:rgba(255,255,255,0.5)"
        >neuroticism (sensitive/nervous vs. resilient/confident)</a>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <b-card-sub-title>
      Below result is averaged score taken from
      <a
        href="https://bigfive-test.com/result/5ed7cf58bc509600070f0d1c"
      >bigfive-test.com</a>
      ,
      <a
        href="https://www.truity.com/personality-test/17315/test-results/21215808"
      >truity.com</a>,
      <a href="https://www.123test.com/report/3G3X0N1CKVYCOHQM0F/">123test.com</a>,
      <a
        href="https://openpsychometrics.org/tests/IPIP-BFFM/results.php?r=2.7,4.2,3.9,4,4.1"
      >openpsychometrics.org</a>
      . Click on the hyperlinks for more details of the results. To conclude that, I am friendly, like to learn new things, organized, a bit shy, and steady person.
    </b-card-sub-title>
    <Plotly :data="aveRadarRForRadarSummary" :layout="big5layout"></Plotly>
    <b-card-sub-title>The next chart show results taken from each website, remind that openpsychometrics.org using term Emotional stability instead of Neuroticism. The score of Neuroticism is calculated with 100% - score of Emotional stability.</b-card-sub-title>
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
        r: [90, 95, 78, 94, 53],
        theta: ["O", "C", "E", "A", "N"],
        fill: "toself",
        name: "Bigfive-test",
      },
      {
        type: "scatterpolar",
        r: [90, 69, 33, 81, 31],
        theta: ["O", "C", "E", "A", "N"],
        fill: "toself",
        name: "Truity",
      },
      {
        type: "scatterpolar",
        r: [69, 76, 42, 67, 13],
        theta: ["O", "C", "E", "A", "N"],
        fill: "toself",
        name: "123test",
      },
      {
        type: "scatterpolar",
        r: [65, 80, 37, 56, 100 - 93],
        theta: ["O", "C", "E", "A", "N"],
        fill: "toself",
        name: "Open Source Psychometrics Project",
      }
    ],
    big5layout: {
      polar: {
        radialaxis: {
          visible: true,
          range: [0, 100]
        },
        bgcolor: "rgba(0,0,0,0)",
      },
      plot_bgcolor: "rgba(0,0,0,0)",
      paper_bgcolor: "rgba(0,0,0,0)",
      showlegend: true,
      font: { color: "white" },
      legend: { x: 0, y: 0 },
      margin: { l: 30, r: 30, t: 30, b: 30 },
    }
  }),
  computed: {
    aveRadarRForRadarSummary: function() {
      var avearr = [];
      for (var i = 0; i < this.big5data[0].r.length; i++) {
        avearr.push(
          this.big5data.reduce(
            (accumulator, nextel) => accumulator + nextel.r[i],
            0
          ) / this.big5data.length
        );
      }

      return [
        {
          type: "scatterpolar",
          r: avearr,
          theta: ["O", "C", "E", "A", "N"],
          fill: "toself",
          name: "Score Average",
        }
      ];
    }
  }
};
</script>