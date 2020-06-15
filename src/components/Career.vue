<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" v-for="(company,i) in textFieldData" :key="i">
        <CardListTextArea :cardContent="company" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardListTextArea from "./CardListTextArea"; 

export default {
  name: "Career",
  components: {
    CardListTextArea
  },
  data: () => ({
    textFieldData: [
      {
        title: "Top Glove",
        imgsrc:
          "https://graduan.sgp1.cdn.digitaloceanspaces.com/media/381023/original/26f6ac75-c70b-4f2f-b5ed-8eaab0c871fb-MzgxMDIz.jpeg",
        detail: [
          {
            value: "Data Scientist (Trainee)",
            label: "Position"
          },
          {
            value: "Sept 2019 - Mar 2020",
            label: "Date"
          },
          {
            value: "Full-Stack Python Developer, Image Processing Project",
            label: "Job"
          },
          {
            value:
              "Python Programming, Neural Network, Machine Learning, Image Processing, Network Server",
            label: "Core skill"
          },
          {
            value:"Handle project alone. Learnt many new things related to Business and Economics such as stock market and business skill.",
            label: "Experience"
          },
        ],
      }
    ]
  })
};
</script>