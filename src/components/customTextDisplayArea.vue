<template>
  <v-textarea
        hide-details
        filled
        readonly
        dense
        row-height="6"
        rows="1"
        auto-grow
        :label="label"
        :value="value"
        >
    </v-textarea>
</template>

<script>
export default {
    name: "customTextDisplayArea",
    props: {
        label: String,
        value: String,
    }
}
</script>
