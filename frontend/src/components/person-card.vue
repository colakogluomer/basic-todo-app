<script>
export default {
    name: 'PersonCard',
    props: ['person']
}
</script>

<template lang="pug">
article.card 
    img(:src="`https://picsum.photos/300/200?random=${person._id}`", alt=" photo has not been installed ")
    h2.card-title {{ person.name}} 
    p {{person.surname}} {{person.age}} 
</template>

<style scoped>
    .card {
        display: inline-block;
        text-align: left;
        padding: 20px;
        border: 1px solid rgb(110, 33, 33);
        border-radius: 30px;
        margin: 20px;
        min-width: 200px;
        
    }
    
</style>