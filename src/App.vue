<template id="top">
  <v-app>
    <b-navbar class="red darken-4" sticky toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#top">Nang Wei Lun</b-navbar-brand>
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

export default {
  name: "App",

  components: {
    HelloWorld,
    Card,
  },


  data: () => ({
    mainContents: [
      {
        title: "About Me & SNS",
        subtitle: "about me sub",
        tabs: [
          { title: "Basic", content: Basic },
          { title: "Big Five", content: BigFive }
        ]
      },
      { title: "Education & Career", subtitle: "about me sub" },
      { title: "Contact & Comments", subtitle: "about me sub" },
      { title: "Skill & Project", subtitle: "about me sub" },
      { title: "Blog & Other", subtitle: "about me sub" }
    ],
    tabVmodel: 0,
    swipeDirection: 'None',
  }),
};
</script>
