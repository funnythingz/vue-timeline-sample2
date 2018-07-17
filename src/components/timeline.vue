<template lang="pug">
.container
  v-ons-scroller
    textarea.textarea(v-model="tweet" rows="3" placeholder="暑いよね！今の気持ちをシェアしよう！")
    v-ons-button(@click="post()" modifier="outline")
      | post
    v-ons-card(v-for="(t, tIndex) of timeline")
      v-ons-card-content
        | {{t.tweet}}
        v-ons-card
          v-ons-card-content
            v-ons-list
              v-ons-list-item(v-for="m in t.messageList")
                | {{m}}
              v-ons-list-item
                v-ons-input.input(placeholder="返信" v-model="message[tIndex]" float)
                v-ons-button(@click="res(tIndex)" modifier="outline")
                  | レス
</template>

<style lang="sass" scoped>
.container
  min-width: 240px
  max-width: 480px
  margin: 1em auto
.textarea
  width: 100%
.input
  width: 80%
</style>

<script>
import SecureRandom from 'secure-random/lib/secure-random'

export default {
  data() {
    return {
      tweet: '',
      tweetList: [],
      timeline: [],
      message: []
    }
  },
  methods: {
    post() {
      this.tweetList.push({
        id: SecureRandom(4).toString().replace(/,/g, ''),
        tweet: this.tweet,
        messageList: []
      })
      this.timeline = (this.tweetList.slice()).reverse()
      this.clear()
    },
    res(index) {
      this.timeline[index].messageList.push(this.message[index])
      this.message[index] = ''
    },
    clear() {
      this.tweet = ''
    }
  }
}
</script>
