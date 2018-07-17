<template lang="pug">
.container
  textarea(v-model="tweet")
  button(@click="post()")
    | post
  .list-group
    .list-item(v-for="t in timeline")
      | {{t}}
</template>

<style lang="sass">
</style>

<script>
export default {
  data() {
    return {
      tweet: '',
      tweetList: [],
      timeline: []
    }
  },
  methods: {
    post() {
      this.tweetList.push(this.tweet)
      this.timeline = (this.tweetList.slice()).reverse()
      this.clear()
    },
    clear() {
      this.tweet = ''
    }
  }
}
</script>
