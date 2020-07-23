<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to My Portfolio
        </h1>

        <p class="subheading font-weight-regular">
          I am Malaysian, 24 years old male and still look like a kid.
          <br>
          Study in local university and graduated with a bachelor's degree in computer science.
          <br>
          A chinese boy, know to speak Malay and English but not fluently.
          The language I can “spoke fluent” is Python.
          <br>
          Live in Tanjong Sepat, Selangor. A small fishing village.
          <br>You can visit my 
          <a
            href="https://nangweilun.blogspot.com/"
            target="_blank"
          >Blogspot</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      whatsNext: [
        {
          text: 'I am looking for job',
          href: 'https://www.linkedin.com/in/wei-lun-nang-164728186/',
        },
        {
          text: 'Cryptography and Linguistics research with data science techniques and applications, project focus on Liber Primus Cicada 3301 and Voynich manuscript',
          href: 'https://github.com/devilFUCKangel',
        },
      ],
    }),
  }
</script>
