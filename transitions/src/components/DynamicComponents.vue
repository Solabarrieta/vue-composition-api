<template>
    <component :is="componente" v-bind="properties"></component>
</template>

<script>
import MainMenu from './MainMenu.vue';

export default {
    name: "DynamicComponents",
    components: {
        MainMenu,
    },
    data() {
        return {
            componente: "MainMenu",
            properties: {prop1: "Hola1", prop2: "Hola2", prop3: "Hola3"}
        };
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
