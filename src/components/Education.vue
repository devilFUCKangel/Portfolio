<template>
  <v-container fluid>
      <v-row dense>
    <v-col cols="12" v-for="(edu,i) in textFieldData" :key="i">
        <v-card>
        <v-img
              :src="edu.imgsrc"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)"
              height="300px"
            >
      <v-card-title>{{edu.eduLevel}}</v-card-title>
      <v-card-text>
        <template v-for="(detailData,i) in edu.detail">
          <v-text-field
            hide-details
            :key="i"
            :label="detailData.label"
            :value="detailData.value"
            filled
            readonly
          ></v-text-field>
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
  name: "Education",
  data: () => ({
    textFieldData: [
      {
        eduLevel: "Degree",
        imgsrc: "https://www.utem.edu.my/images/2020/pages/imageWelcomeUTeM.jpg",
        detail: [
          {
            value:
              "Technical University of Malaysia Malacca | Universiti Teknikal Malaysia Melaka (UTeM)",
            label: "University"
          },
          {
            value: "2016 - 2020",
            label: "Date"
          },
          {
            value:
              "Study Bachelor of Computer Science (Artificial Intelligence), CGPA 3.67",
            label: "Course"
          }
        ]
      },
      {
        eduLevel: "Postsecondary (pre-university)",
        imgsrc: "https://fastly.4sqi.net/img/general/width960/7303610_opXm6TkQdEhforn4d0smqlHZMx8ell1mhdQLVyC2cbw.jpg",
        detail: [
          {
            value: "SMK Telok Datok",
            label: "Secondary school"
          },
          {
            value: "2014-2015",
            label: "Date"
          },
          {
            value: "Sijil Tinggi Persekolahan Malaysia (STPM), CGPA 2.33",
            label: "Examination"
          }
        ]
      },
      {
        eduLevel: "Secondary",
        imgsrc: "http://2.bp.blogspot.com/_sN-poQ4oF0w/THd5KJc0H1I/AAAAAAAAAFY/PjgIsFm5QXk/s1600/CIMG1233.JPG",
        detail: [
          {
            value: "SMK Tanjong Sepat",
            label: "Secondary school"
          },
          {
            value: "2009 - 2013",
            label: "Date"
          },
          {
            value: "Study Sijil Pelajaran Malaysia (SPM), 5A",
            label: "Examination"
          }
        ]
      }
    ]
  })
};
</script>