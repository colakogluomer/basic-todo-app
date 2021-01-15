<script>
// @ is an alias to /src
import PersonCard from '@/components/person-card.vue'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    PersonCard
  },
  computed: {
    ...mapState(['people','counter'])
  },
  methods: {
    ...mapActions(['fetchPeople', 'incrementCounter', 'addPerson'])
  },
  created() {
    this.fetchPeople()
      
  }
}
</script>


<template lang="pug">
  main

    button(@click="addPerson" ) Increment 
    div {{ counter }}

    person-card(v-for="person in people", v-bind:key="person.id", :person="person") 
</template>
