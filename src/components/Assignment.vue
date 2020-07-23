<template>
  <v-card>
    <template v-for="project in data">
      <projectCardItem :project="project" :key="project"></projectCardItem>
    </template>
  </v-card>
</template>

<script>
import ProjectCardItem from "./ProjectCardItem";
export default {
  name: "Assignment",
  components: { ProjectCardItem },
  data: () => ({
    data: [
      {
        title: "Online Police Reporting System",
        course: "Workshop 1",
        projectTitle: "Online Police Reporting System",
        description:
          "A system that help police store report data, share to all police station and analysis cases. This system lets residents to do police report without go to police station.",
        programmingLanguage: "C++, SQL",
        systems: "Windows 10, Relational Database Management System (MySQL)",
        hardwareAndTools: "Localhost server on laptop",
        softwareDevelopmentTools:
          "QtCreator (Qt Quick 2), Mysql Workbench, Visual Studio"
      },
      {
        title: "Auto Farming Robot",
        course: "Workshop 2",
        projectTitle:
          "INTELLIGENT FARMING ROBOT PROTOTYPE USING IoT APPLICATION",
        description:
          "A robot with arm and camera that can auto plant and harvest crop. A farm used vertical farming method with the help of robot.",
        programmingLanguage: "Python",
        systems:
          "ev3dev Debian, System Management Bus, Google Cloud Platform, Remote Python Call and Windows 10 as central place",
        hardwareAndTools:
          "Lego Mindstorm EV3, TETRIX, HiTechnic, Phone Camera, Laptop for RPyC administration",
        softwareDevelopmentTools:
          "Visual Studio Code, OpenCV, Android IPWebCam, Google Cloud Vision API, Keras API Tensorflow"
      },
      {
        title: "Lipreading Model",
        course: "Final Year Project",
        projectTitle:
          "REPLICATION OF LIPNET MODEL USING TENSORFLOW LIBRARY AND PYTHON",
        description:
          "A software that use a camera to perform lipreading to know what a person talking without input of sound. Research and review on LipNet model. Build a lipreading software to help people communicate in noisy environment. Build new dataset for train and test.",
        programmingLanguage: "Python",
        systems: "Ubuntu",
        hardwareAndTools: "Laptop with Nvidia GEFORCE 940M, laptop's camera",
        softwareDevelopmentTools:
          "Visual Studio Code, OpenCV, NVIDIA CUDA, Keras API Tensorflow"
      },
      {
        title: "EMPLOYEE ASSIGNATION FOR A PROJECT",
        course: "EVOLUTIONARY COMPUTING",
        projectTitle:
          "EMPLOYEE ASSIGNATION FOR A PROJECT BY USING GENETIC ALGORITHM",
        description:
          "A software that use to achieve the best solution which pay out the minimum of salary and get back the maximum of employees’ efficiency. Design genetic algorithm.",
        programmingLanguage: "C++",
        systems: "Windows 10",
        hardwareAndTools: "-",
        softwareDevelopmentTools: "Visual Studio"
      },
      {
        title: "Smartphone Inventory System",
        course: "Object Orientated Programming",
        projectTitle:
          "Smartphone Inventory System",
        description:
          "A system to help calculate price, store record in database, and transaction running efficiently.",
        programmingLanguage: "Java, SQL",
        systems: "Windows 10, Relational Database Management System (Apache Derby)",
        hardwareAndTools: "-",
        softwareDevelopmentTools: "Eclipse, Apache Derby"
      }
    ]
  })
};
</script>