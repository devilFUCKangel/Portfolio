<template id="top">
  <v-app>
    <b-navbar class="red darken-4" sticky toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#top">Wei Lun</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <v-item-group class="shrink" v-model="tabVmodel" mandatory tag="v-flex">
          <b-navbar-nav>
            <v-item
              v-for="(tabText,n) in mainContents"
              :key="n"
              v-slot:default="{ active, toggle }"
            >
              <v-tab :input-value="active" icon @click="toggle">{{tabText.title}}</v-tab>
            </v-item>
          </b-navbar-nav>
        </v-item-group>
      </b-collapse>
    </b-navbar>
    <v-content>
      <HelloWorld />
      <v-window v-model="tabVmodel" class="elevation-24" align="center" show-arrows>
        <v-window-item v-for="(cardContent,n) in mainContents" :key="n">
          <Card class="w-75" v-bind:cardContent="cardContent" />
        </v-window-item>
      </v-window>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Card from "./components/Card";
import Basic from "./components/Basic";
import BigFive from "./components/BigFive";
import Education from "./components/Education";
import Career from "./components/Career";
import UTeM from "./components/UTeM";
import Skill from "./components/Skill";
import Project from "./components/Project";

export default {
  name: "App",

  components: {
    HelloWorld,
    Card
  },

  data: () => ({
    mainContents: [
      {
        title: "About Me & SNS",
        subtitle:
          "People around me said I am a weird person, got a lot of weird idea, and cute...And I afraid to change people's minds, maybe this weird way of thinking cause me hard to communicate with others. A listener, but not always. Hard to maintain a relationship through long-distance because I didn't like texting.",
        tabs: [
          { title: "Basic", content: Basic },
          { title: "Big Five", content: BigFive }
        ]
      },
      {
        title: "Education & Career",
        subtitle:
          "Now I am unemployed after finish internship in March 2020. In internship period, I work as data scientist and full-stack developer in TopGlove, dealing with CCTV and image processing project.",
        tabs: [
          { title: "Education", content: Education },
          { title: "UTeM", content: UTeM },
          { title: "Career", content: Career }
        ]
      },
      {
        title: "Skill & Project",
        subtitle: "about me sub",
        tabs: [
          { title: "Skill", content: Skill },
          { title: "Project", content: Project }
        ]
      },
      { title: "Contact & Comments", subtitle: "about me sub" },
      { title: "Blog & Other", subtitle: "about me sub" }
    ],
    tabVmodel: 0,
    swipeDirection: "None"
  })
};
</script>
