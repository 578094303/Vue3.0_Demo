<template>
  <div id="app">
    <!-- <button @click="hahahai()">1</button> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  setup() {
    function hahahai() {
      alert("111");
    }

    return {
      hahahai,
    };
  },
};
</script>
