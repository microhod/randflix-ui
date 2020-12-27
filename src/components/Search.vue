<template>
  <div id="search">
    <button id="search-button" :disabled="disabled"  v-on:click="search">&nbsp;Search&nbsp;</button>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["genres", "search", "disabled"],
};
</script>

<style scoped>
#search {
  width: 100%;

  margin-bottom: 20px;

  font-weight: bold;
  color: #40b983;
  display: flex;

  justify-content: center;
}

#search > * {
  margin: 10px;
}

#search-button {
  font-size: 20px;
  background-color: white;
  border: solid 3px #40b983;
  border-radius: 100px;
  outline: none;

  color: #40b983;
  font-weight: bold;

  padding: 5px;

  transition: 0.5s;
}

#search-button:disabled {
  background-color: #40b983;
  color: white;
}

#search-button:hover:enabled {
  background-color: #40b983;
  color: white;
}

#search-button:active:enabled {
  background-color: white;
  border: solid 3px #40b983;
}
</style>