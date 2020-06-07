<template>
  <v-app>
    <v-card class="flex">
      <v-card-title>{{cardContent.title}}</v-card-title>
      <v-card-text>{{cardContent.subtitle}}</v-card-text>
      <v-tabs background-color="deep-purple accent-4" center-active dark centered>
        <v-tab v-for="(tab,n) in cardContent.tabs" :key="n">{{tab.title}}</v-tab>
        <v-tab-item v-for="(tab,n) in cardContent.tabs" :key="n">
          <component :is="tab.content"></component>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "Card",

  props: {
    cardContent: Object
  },

  data: () => ({
    //
  })
};
</script>
