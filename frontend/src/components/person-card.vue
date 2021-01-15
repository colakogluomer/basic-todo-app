<script>
export default {
    name: 'PersonCard',
    props: ['person']
}
</script>

<template lang="pug">
div.name {{ person.name }} {{person.surname}}
</template>

<style scoped>
    .name{
        color: red;
    }
</style>