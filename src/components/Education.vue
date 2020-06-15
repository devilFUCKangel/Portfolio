<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" v-for="(edu,i) in textFieldData" :key="i">
        <CardListTextArea :cardContent="edu" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardListTextArea from "./CardListTextArea"; 

export default {
  name: "Education",

  components:{CardListTextArea},

  data: () => ({
    textFieldData: [
      {
        title: "Degree",
        imgsrc:
          "https://www.utem.edu.my/images/2020/pages/imageWelcomeUTeM.jpg",
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
              "Study Bachelor of Computer Science (Artificial Intelligence), CGPA 3.69",
            label: "Course"
          },
          {
            value:
              "Robotics, Machine Learning, Image Processing, Statistics, Calculus",
            label: "Core Subjects"
          }
        ]
      },
      {
        title: "Postsecondary (pre-university)",
        imgsrc:
          "https://fastly.4sqi.net/img/general/width960/7303610_opXm6TkQdEhforn4d0smqlHZMx8ell1mhdQLVyC2cbw.jpg",
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
          },
          {
            value: "Physics, Pure Mathematics, Chemistry",
            label: "Core Subjects"
          }
        ]
      },
      {
        title: "Secondary",
        imgsrc:
          "http://2.bp.blogspot.com/_sN-poQ4oF0w/THd5KJc0H1I/AAAAAAAAAFY/PjgIsFm5QXk/s1600/CIMG1233.JPG",
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
          },
          {
            value: "Physics, Additional Mathematics, Chemistry, Biology",
            label: "Core Subjects"
          }
        ]
      }
    ]
  })
};
</script>