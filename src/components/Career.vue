<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" v-for="(company,i) in textFieldData" :key="i">
        <v-card>
          <v-img
            :src="company.imgsrc"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)"
            :height="company.detail.length*(56+7*4)+16+120"
          >
            <v-card-title>{{company.companyName}}</v-card-title>
            <v-card-text>
              <template v-for="(detailData,j) in company.detail">
                <v-textarea
                  hide-details
                  filled
                  readonly
                  dense
                  row-height="6"
                  rows="1"
                  auto-grow
                  :key="j"
                  :label="detailData.label"
                  :value="detailData.value"
                ></v-textarea>
              </template>
            </v-card-text>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Career",
  data: () => ({
    textFieldData: [
      {
        companyName: "Top Glove",
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