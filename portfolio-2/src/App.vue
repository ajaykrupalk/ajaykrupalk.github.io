<template>
  <Header></Header>
  <Chips></Chips>
  <Card></Card>
  <Projects></Projects>
  <Footer></Footer>
</template>

<script>
import Header from './components/Header.vue';
import Chips from './components/Chips.vue';
import Card from './components/FtCards.vue';
import Projects from './components/Projects.vue';
import Footer from './components/Footer.vue';

export default{
  name: "App",
  components: {
    Header,
    Chips,
    Card,
    Projects,
    Footer,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
</style>