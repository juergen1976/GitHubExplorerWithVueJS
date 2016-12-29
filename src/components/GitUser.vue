<template>
    <div>
        <div>
            <img width="32px" height="32px" :src="user.avatar" />
            <div>Name: <span> {{ user.name }}</span></div>
            <div>Location: <span> {{ user.location }}</span></div>
            <a :href="user.blog">{{ user.blog }}</a>
            <div>Followers: <span> {{ user.followers }}</span></div>
            <div> {{ user.bio }}</div>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>

    export default {
        props: ['user']
    }
</script>
