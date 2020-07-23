<template>
  <v-card>
    <v-card-title>{{project.title}}</v-card-title>
    <v-card-text>
      <customTextDisplayArea :label="label" :value="project.course"></customTextDisplayArea>
      <customTextDisplayArea label="Project Title" :value="project.projectTitle"></customTextDisplayArea>

      <v-expansion-panels hover>
        <v-expansion-panel>
          <v-expansion-panel-header color="rgba(176, 69, 69, 0.1)" class="rounded">Detail</v-expansion-panel-header>
          <v-expansion-panel-content color="rgba(176, 69, 69, 0.1)">
            <customTextDisplayArea label="Description" :value="project.description"></customTextDisplayArea>
            <customTextDisplayArea
              label="Programming Language"
              :value="project.programmingLanguage"
            ></customTextDisplayArea>
            <customTextDisplayArea label="Systems" :value="project.systems"></customTextDisplayArea>
            <customTextDisplayArea label="Hardware and Tools" :value="project.hardwareAndTools"></customTextDisplayArea>
            <customTextDisplayArea
              label="Software Development Tools"
              :value="project.softwareDevelopmentTools"
            ></customTextDisplayArea>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
  </v-card>
</template>

<script>
import customTextDisplayArea from "./customTextDisplayArea";

export default {
  name: "ProjectCardItem",
  components: {
    customTextDisplayArea
  },
  props: {
    project: Object,
    label: {default: "Course",type: String    }
  }
};
</script>