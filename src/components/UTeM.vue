<template>
  <v-container class="flex-wrap d-flex" fluid>
        <v-card width="370" height="370">
          <p>{{selected}}</p>
        </v-card>
        <v-card class="col-lg-8" height="370">
          <v-list class="text-left overflow-y-auto" height="350" dense single-line>
            <v-list-item-group v-model="selected" color="primary">
              <template v-for="subjectType in subjectData">
                <v-subheader inset :key="subjectType">{{subjectType.title}}</v-subheader>
                <v-list-item v-for="subjectItem in subjectType.subItem" :key="subjectItem" :value="subjectItem.detail">
                  <b-icon-dot></b-icon-dot>
                  <v-list-item-content>{{subjectItem.name}}</v-list-item-content>
                </v-list-item>
              </template>
            </v-list-item-group>
          </v-list>
        </v-card>
  </v-container>
</template>

<script>
export default {
  name: "UTeM",
  data: () => ({
    selected: 0,
    subjectData: [
      {
        title: "Major Subject",
        subItem: [
          {name: "INDUSTRIAL TRAINING", detail: "Internship, data science job at Top Glove. Field included image processing, machine learning and python project"},
          {name: "INDUSTRIAL TRAINING REPORT", detail: "Report about the tasks done in internship. Report included CCTV monitoring project"},
          {name: "PROJECT II", detail: "Complete or enchance the final year project. Project replicate LipNet Model with python."},
          {name: "PROJECT I", detail: "Literature review and startup for final year project. Research Lipreading Model, in field of Automated Visual Speech Recognition"},
          {name: "INTELLIGENT AGENT", detail: "Learn how the agent react to environment to achieve goal. Teaching material included JADE (Environment), Jason, AnyLogic (Supply Chain GIS), LogixPro, Trsoccerbots, TeamBots, NetBean (Java Develop Software)."},
          {name: "EVOLUTIONARY COMPUTING", detail: "Learn about the genetic algorithm and its use case. Project develop C++ software and implement genetic algorithm to solve problem."},
          {name: "IMAGE PROCESSING AND PATTERN RECOGNITION", detail: "Learn about how the image represented in digital form, how to analysis and process the image (background subtraction, edge detection, blur filter and so on). Teaching material included Image-J, Microsoft Excel. Project use python train CNN model to recognize ripeness tomato."},
          {name: "FUZZY LOGIC", detail: "Learn the concept of fuzzy logic, fuzzy clustering. Teaching material included MatLab."},
          {name: "NEURAL NETWORK", detail: "Learn about the basic of neural network, the structure of a neural network and math behide. Teaching material included MatLab. Project python to train a iris flower classification model."},
          {name: "WORKSHOP II", detail: "Use Lego Mindstorm EV3, TETRIX, HiTechnic to build a robot project. Project auto farming with computer vision."},
          {name: "KNOWLEDGE BASED SYSTEM", detail: "Learn the concept of knowledge-based systems, knowledge representations and expert system. Project develop expert system (Eye Disease Diagnosis System) using CLIPS."},
          {name: "MACHINE LEARNING", detail: "Learn how to build a computer system that learns from experience, topics such as decision tree learning, Bayesian learning, linear model. Teaching material using RapidMiner Studio. Project cooperate with Bangsar Village to share electrical data for student to build machine learning project (predict electrical peek usage)."},
          {name: "ARTIFICIAL INTELLIGENCE IN ROBOTIC AND AUTOMATION", detail: "Learn how to build a automated-robot, the history and type of robot, and ethics in Robotics & Automation. Teaching material included Lego Mindstorm EV3, develop with C# language."},
          {name: "LOGIC PROGRAMMING", detail: ""},
          {name: "STATISTICS AND PROBABILITY", detail:""},
          {name: "OBJECT ORIENTED PROGRAMMING", detail:""},
          {name: "WORKSHOP I", detail:""},
          {name: "ARTIFICIAL INTELLIGENCE", detail:""},
          {name: "CALCULUS AND NUMERICAL METHODS", detail:""},
          {name: "DATA STRUCTURE AND ALGORITHM", detail:""},
          {name: "ALGEBRA LINEAR DISCRETE MATHEMATICS", detail:""},
          {name: "PROGRAMMING TECHNIQUE", detail:""},
        ]
      },
      {
        title: "Minor Subject",
        subItem: [
          {name: "INFORMATION TECHNOLOGY SECURITY", detail: "Learn about the cryptographic, how encryption and decryption work. Teaching material included GnuPG" },
          {name: "TECHNOLOGY ENTREPRENEURSHIP", detail: "Learn about entrepreneur such as business plan. Assignment Entrepreneur Profiling, Project Business Plan"},
          {name: "ARTIFICIAL INTELLIGENCE PROJECT MANAGEMENT", detail: "Learn how to manage a project, manage work and resource. Project manage a project using Microsoft Project."},
          {name: "WEB APPLICATION DEVELOPMENT", detail: "Learn how to develop a web page with HTML, CSS, PHP. Project develop a order food website with domain and CPanel."},
          {name: "HUMAN-COMPUTER INTERACTION", detail: "Learn the concepts and theories of human computer interaction, conceptual thinking in problems solving related to application, website or product design. Project design and record video to promote a product."},
          {name: "SOFTWARE ENGINEERING", detail: "Learn about systematic application of engineering approaches to the development of software, such as software developing life cycles and use case diagram."},
          {name: "DATA COMMUNICATION AND NETWORKING", detail: ""},
          {name: "DATABASE", detail:""},
          {name: "OPERATING SYSTEM", detail:""},
          {name: "MULTIMEDIA SYSTEM", detail:""},
          {name: "COMPUTER ARCHITECTURE AND ORGANIZATION", detail:""},
          {name: "CREATIVE & CRITICAL THINKING", detail:""},
          {name: "ENGLISH FOR PROFESSIONAL COMMUNICATION", detail:""},
          {name: "TECHNICAL ENGLISH", detail:""},
          {name: "ISLAMIC AND ASIAN CIVILIZATION", detail:""},
          {name: "ETHNIC RELATIONS", detail:""},
          {name: "JAPANESE I", detail:""},
          {name: "CHOIR", detail:""},
          {name: "RED CRESCENT", detail:""},
        ]
      }
    ]
  }),
};
</script>