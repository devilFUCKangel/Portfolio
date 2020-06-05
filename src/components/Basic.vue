<template>
  <v-content>
    <v-list-item v-for="(item,i) in itemList" :key="i">
      <v-list-item-content>
        <v-list-item-title>{{item.title}}</v-list-item-title>
        <v-list-item-subtitle>{{item.subtitle}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-content>
</template>

<script>
export default {
  name: "Basic",
  data: () => ({
    itemList: [
      { title: "Nationality", subtitle: "Malaysian" },
      { title: "Gender", subtitle: "Male" },
      { title: "Age", subtitle: "24" },
      { title: "Race", subtitle: "Chinese" },
      { title: "Education", subtitle: "Bachelor of Computer Science (Artificial Intelligence)" },
      { title: "Hobbies", subtitle: "Meme, Dreaming, Googling" },
    ]
  })
};
</script>