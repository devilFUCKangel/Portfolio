<template>
  <v-list>
    <v-list-item three-line v-for="(item,i) in itemList" :key="i">
      <v-list-item-content>
        <v-list-item-title v-text="item.title"></v-list-item-title>
        <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
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
      {
        title: "Education",
        subtitle: "Bachelor of Computer Science (Artificial Intelligence)"
      },
      { title: "Hobbies", subtitle: "Meme, Dreaming, Googling" }
    ]
  })
};
</script>