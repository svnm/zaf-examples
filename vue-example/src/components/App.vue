<template>
  <div id="app">
    <heading></heading>
    <ticket></ticket>
  </div>
</template>

<script>
import Heading from './Heading.vue'
import Ticket from './Ticket.vue'

export default {
  name: 'app',
  components: {
    Heading, Ticket
  }
}
</script>

<style>
hr {
  background: #eee;
  border-color: #eee;
  margin: 2px 0;
}
h1 {
  color: #444;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  text-align: center;
}
p {
  color: #444;
  font-size: 14px;
  margin-top: 5px;
  margin-left: 5px;
}
</style>
