<template>
  <div class="heading">
    <img class='header-image' src='https://i.imgur.com/KLG0rBS.png' />
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'heading',
  data () {
    return {
      title: 'Zendesk test app'
    }
  }
}
</script>

<style scoped>
.header-image {
  display: block;
  height: 40px;
  width: 40px;
  margin: 5px auto;
}
</style>
