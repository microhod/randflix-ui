<template>
  <div id="header">
    <h1>Randflix</h1>
  </div>
  <div id="container">
    <Search
      id="search"
      :genres="genres"
      :disabled="loading"
      :search="refreshTitle"
    />
    <div id="error" v-if="error">
      {{ error }}
    </div>
    <Title id="title" v-if="title.name" :title="title" />
  </div>
</template>

<script>
import Title from "./components/Title.vue";
import Search from "./components/Search.vue";
import getRandomTitle from "./api.js"

var getGenres = () => {
  return ["any", "comedy", "drama", "adventure"];
};

export default {
  name: "App",
  data() {
    return {
      genres: getGenres(),
      title: {},
      loading: false,
      error: "",
    };
  },
  components: {
    Title,
    Search,
  },
  methods: {
    refreshTitle() {
      this.loading = true;
      this.error = null;
      getRandomTitle()
        .then(t => {
          this.title = t;
          this.loading = false;
        })
        .catch((error) => {
          this.error = error.toString();
          this.loading = false;
        });
    },
  },
  mounted() {
    this.refreshTitle();
  },
};
</script>

<style>
* {
  /* disable default margin */
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #40b983;
}

#header {
  padding: 20px;
  color: white;
  background-color: #40b983;
  margin: 0px;
}

#container {
  padding: 20px;
  margin: auto;
}

@media only screen and (min-width: 800px) {
  #container {
    width: 75%;
  }
}

@media only screen and (min-width: 1000px) {
  #container {
    width: 50%;
  }
}

#error {
  font-weight: bold;
  color: crimson;
}
</style>
