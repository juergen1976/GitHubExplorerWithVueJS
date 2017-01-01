<template>
  <div class="container" id="app">
    <div id="main" class="content">
    <span class="title"> {{ getTitle }}</span>
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
  methods: {
      ...mapActions({
          addUser: 'addUser'
      }),
      loadUser(username) {
           this.$http.get('https://api.github.com/users/' + username).then(response => {
            return response.json();
                        })
                        .then(data => {
                           this.$store.dispatch('addUser',
                              { name: data.name,
                                location: data.location,
                                blog: data.blog,
                                bio: data.bio,
                                followers: data.followers,
                                avatar: data.avatar_url
                               });

                        });
      }
    },
  created () {
    var accountNames = ['kentbeck', 'royfielding', 'juergen1976', 'johnpapa', 'jakearchibald', 'robdodson', 'torvalds', 'addyosmani'];
    accountNames.forEach((name) => {
                                      this.loadUser(name);
                                   });
  },
  mounted() {
    window.handleOfflineOnlineStatus = function() {
    var online  = window.navigator.onLine;
    if (online) {
      var element = document.querySelector('#offline-content');
      element.style.display = 'none';
    } else {
      var element = document.querySelector('#offline-content');
      element.style.display = 'block';
      element.querySelector('span').innerHTML = 'You are offline';
    }
   }

    window.addEventListener('online', function(e) {
      window.handleOfflineOnlineStatus();
    }, false);

    window.addEventListener('offline', function(e) {
      window.handleOfflineOnlineStatus();
    }, false);

    window.handleOfflineOnlineStatus();
  },
  components: {
    GitUser
  }
}
</script>

<style>

.title {
  font-weight: bold;
}

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
