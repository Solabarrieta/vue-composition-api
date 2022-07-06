<template>
    <ul>
        <li>{{prop1}}</li>
        <li>{{prop2}}</li>
        <li>{{prop3}}</li>
    </ul>
</template>
<script>
export default {

    name: "MainMenu",
    props: {
        prop1: {
            type: String,
            //default: "Prop1"
        },
        prop2: {
            type: String,
            //default: "Prop2"
        },
        prop3: {
            type: String,
            //default: "Prop3"
        }
    }
}
</script>