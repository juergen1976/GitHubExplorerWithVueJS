<template>
  <div class="container" id="app">
    <div id="main" class="content">
    <span> {{ getTitle }}</span>
      <div id="offline-content" style="display: none">
        <span>You are offline</span>
      </div>
      <div class="user-list">
        <git-user class="item" v-for="user in getUsers" :user="user"></git-user>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import GitUser from './components/GitUser.vue'

export default {
  name: 'app',
  computed: mapGetters([
    'getTitle',
    'getUsers'
  ]),
  methods: mapActions([
    'addUser'
  ]),
  created () {
    this.$store.dispatch('addUser', { name: 'Juergen', location: 'Basel', blog: 'example', bio: 'Test33', followers: 4, avatar: 'https://avatars3.githubusercontent.com/u/1202528?v=3&s=400'});
    this.$store.dispatch('addUser', { name: 'Peter', location: 'Basel', blog: 'example', bio: 'Test33', followers: 6, avatar: 'https://avatars3.githubusercontent.com/u/1202528?v=3&s=400'});
    this.$store.dispatch('addUser', { name: 'Hans', location: 'Basel', blog: 'example', bio: 'Test33', followers: 4, avatar: 'https://avatars3.githubusercontent.com/u/1202528?v=3&s=400'});
    this.$store.dispatch('addUser', { name: 'Gerd', location: 'Basel', blog: 'example', bio: 'Test33', followers: 4, avatar: 'https://avatars3.githubusercontent.com/u/1202528?v=3&s=400'});
  },
  components: {
    GitUser
  }
}
</script>

<style>
.content {
  max-width: 72em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3em;
  width: 100%;
  position: relative;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}


.user-list {
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  transition: opacity 0.8s ease-in-out;
  padding: 0 0.5em;
}

.user-list.loading {
  opacity: 0.2;
}

.item {
  border-radius: 4px;
  margin: 0.5em auto;
  padding: 1em;
  width: 100%;
  background-color: #fff;
  text-align: left;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

#offline-content {
  background: #ff5b36;
  color: #fff;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}


</style>
