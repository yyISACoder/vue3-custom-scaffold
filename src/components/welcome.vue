<template>
  <div class="welcome">
    <img :src="avatar" class="avatar" />
    <p>{{ welcomeText }}</p>
    <p>
      github地址：<a :href="githubLink" target="_blank">{{ githubLink }}</a>
    </p>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import avatar from '@src/assets/images/avatar.jpg'

export default {
  name: 'welcome',
  data() {
    return {
      avatar
    }
  },
  setup() {
    const store = useStore()

    return {
      githubLink: computed(() => store.state.githubLink),
      welcomeText: computed(() => store.state.welcomeText)
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #c2e9ff;
  .avatar {
    width: 200px;
    border-radius: 50%;
  }
  p {
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    &:nth-child(3) {
      margin-top: 100px;
      a {
        color: #00f;
        text-decoration: underline;
        &:hover {
          color: #40a9ff;
        }
      }
    }
  }
}
</style>
