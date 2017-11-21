<template>
  <div>
    <p>{{subject}}</p>
    <p>{{type}}</p>
  </div>
</template>

<script>
import {getTicket} from '../zaf'

export default {
  name: 'ticket',
  data () {
    return {
      type: '',
      subject: ''
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      getTicket().then((result) => {
        this.subject = result.ticket.subject
        this.type = result.ticket.type
      })
    }
  }
}
</script>

<style scoped>
p {
  color: #666;
  font-size: 16px;
  font-weight: 400;
  margin-top: 5px;
}
</style>
