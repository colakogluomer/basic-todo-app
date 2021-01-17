<script>
// @ is an alias to /src
import PersonCard from '@/components/person-card.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Person',
  components: {
    PersonCard
  },
  computed: {
    ...mapState(['person'])
  },
  methods: {
    ...mapActions(['fetchPerson'])
  },
  created() {
    this.fetchPerson(this.$route.params.id)
  }
}
</script>

<template lang="pug">
  main
    section
      person-card(:person="person")
  
      
</template>

<style scoped>
</style>