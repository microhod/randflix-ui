<template>
  <div id="title">
    <div id="title-info-container">
      <div id="title-info">
        <div id="title-header">
          <h2 id="title-name">{{ title.name }}</h2>
          <h3 id="title-year" v-if="title?.year">({{ title.year }})</h3>
        </div>

        <hr />
        
        <div id="metascore" v-if="title?.scores?.metascore" v-bind:class="metascoreClass">
          <b>&nbsp;Metascore: {{ title?.scores?.metascore }}&nbsp;</b>
        </div>
        <p id="title-description">{{ title.description }}</p>

        <span id="service-bar">
          <a
            v-bind:class="[
              { 'disabled-link': !title?.services?.netflix?.url },
              'service-link',
            ]"
            target="_blank"
            v-bind:href="title?.services?.netflix?.url"
          >
            <img
              class="service-logo"
              alt="Netflix"
              src="../assets/netflix-logo.png"
            />
          </a>
          <a
            v-bind:class="[
              { 'disabled-link': !title?.services?.prime?.url },
              'service-link',
            ]"
            target="_blank"
            v-bind:href="title?.services?.prime?.url"
          >
            <img
              class="service-logo"
              alt="Prime Video"
              src="../assets/prime-video-logo.svg"
            />
          </a>
          <a
            v-bind:class="[
              { 'disabled-link': !title?.directories?.imdb?.url },
              'service-link',
            ]"
            target="_blank"
            v-bind:href="title?.directories?.imdb?.url"
          >
            <img
              class="service-logo"
              alt="IMDb"
              src="../assets/imdb-logo.svg"
            />
          </a>
        </span>
      </div>
    </div>
    <img
      id="title-poster"
      v-if="title.poster"
      v-bind:src="title.poster"
    />
  </div>
</template>

<script>
export default {
  name: "Title",
  props: ["title"],
  computed: {
    metascoreClass() {
      return this.title?.scores?.metascore >= 60
        ? "good"
        : this.title?.scores?.metascore >= 40
        ? "medium"
        : "bad";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#title {
  margin: auto;

  display: flex;

  color: white;
  background-color: #40b983;
}

#title-info-container {
  width: 100%;
  padding: 20px;
}

#title-info {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

hr {
  height: 2px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;

  border: none;
  color: white;
  background-color: white;
}

#metascore {
  border-radius: 100px;
  text-align: center;
  align-content: center;
  margin: auto;
  padding: 5px;
  background-color: white;
}

#metascore.good {
  color: limegreen;
}

#metascore.medium {
  color: orange;
}

#metascore.bad {
  color: red;
}

#title-description {
  margin-top: 20px;
  flex-grow: 1;
}

#service-bar {
  width: 100%;
  max-width: 400px;
  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 100px;
}

.service-link {
  width: 30%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.disabled-link {
  filter: grayscale(100%);
}

.service-logo {
  width: 100%;
}

#title-poster {
  padding: 20px;
  margin: auto;
  width: 50%;
  height: 100%;
}
</style>
