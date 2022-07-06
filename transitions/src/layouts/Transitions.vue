<template>
    <slot>
        <div class="container">
            <button @click="show = !show">Menu</button>
            <transition name="fade">
                <main-menu v-show="show" />
            </transition>
        </div>
    </slot>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'

export default {
    name: 'MainTransitions',
    components: {
        MainMenu
    },
    data() {
        return {
            show: false,
        }
    }
}
</script>
<style scoped>
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to {
    background-color: buisque;
}

.fade-leave-active,
.fade-enter-active {
    transition: opacity 0.5s ease;
}

.container{
    margin-top: 2em;
}
</style>