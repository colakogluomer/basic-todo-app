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
    section
      person-card(v-for="person in people", v-bind:key="person.id", :person="person")
    section
      button.increment-button(@click="addPerson" ) Increment 
      div {{ counter }}
</template>

<style scoped>

section {
  padding: 40x 0;
  
}

.increment-button{
  color: darkcyan;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: white;
  border: 5px solid darkcyan;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px; 
}

.increment-button:hover {
  background-color: darkcyan;
  color: red;
}

</style>


