<template>
  <v-card>
    <v-img
      :src="cardContent.imgsrc"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)"
      :height="cardContent.detail.length*(56+7*4)+16+120"
    >
      <v-card-title>{{cardContent.title}}</v-card-title>
      <v-card-text>
        <template v-for="(detailData,j) in cardContent.detail">
          <customTextDisplayArea :label="detailData.label" :value="detailData.value" :key="j"></customTextDisplayArea>
        </template>
      </v-card-text>
    </v-img>
  </v-card>
</template>

<script>
import customTextDisplayArea from "./customTextDisplayArea";

export default {
  name: "CardListTextArea",
  props: {
    cardContent: Object
  },
  components: {
    customTextDisplayArea
  }
};
</script>
