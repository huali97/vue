<template>
    <div id="app">
        <p>
            <router-link to="/home">home</router-link>
            <router-link to="/news">news</router-link>
            <router-link to="/about">about</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {
        }
    }
</script>

<style>
    #app {
    }
</style>
