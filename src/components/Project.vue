<template>
  <v-card>
    <template v-for="project in data">
      <projectCardItem label="Related Field" :project="project" :key="project"></projectCardItem>
    </template>
  </v-card>
</template>

<script>
import ProjectCardItem from "./ProjectCardItem";
export default {
  name: "Project",
  components: { ProjectCardItem },
  data: () => ({
    data: [
      {
        title: "Anjian GrowCastle",
        course: "Game, Automation, Computer Vision",
        projectTitle: "Automated Anjian Script for android game GrowCastle",
        description:
          "An automated AnJian script for android game named GrowCastle. Allow to afk, bypass bot check, auto skill and auto pick item.",
        programmingLanguage: "Q",
        systems: "Android, Android Emulator, Windows 10",
        hardwareAndTools: "Android Phone, Laptop, USB",
        softwareDevelopmentTools:
          "AnJian Desktop and Mobile (AnJianJingLing 按键精灵), MemuPlay, USB Debugging"
      },
      {
        title: "Sudoku Solver",
        course: "Mathematics of Sudoku, Searching Algorithm",
        projectTitle:
          "Sudoku Solver with exhaustive search and rule",
        description:
          "This is sudoku solver with built-in sudoku game. Run only in terminal and everything start from zero. Objective of this project is to train programming skill.",
        programmingLanguage: "C++",
        systems:
          "Windows 10",
        hardwareAndTools:
          "Laptop",
        softwareDevelopmentTools:
          "Visual Studio 2017"
      },
      {
        title: "Portfolio",
        course: "Web Application, Data Visualize, VueJs, Hosting and Server",
        projectTitle:
          "Learn Web Programing and Hosting with the development of my own Portfolio. ",
        description:
          "This portfolio is underdevelopment, and I found that I add too much element into it, it seems like a platform for me to organize my own thing instead use as a portfolio.",
        programmingLanguage: "Vue",
        systems:
          "Windows 10, Vuejs",
        hardwareAndTools:
          "Laptop, Smart Phone",
        softwareDevelopmentTools:
          "Visual Studio Code, NPM, Vue CLI, "
      },
    ]
  })
};
</script>