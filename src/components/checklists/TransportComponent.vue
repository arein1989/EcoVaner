<template>
 <NavComponent />
 <MenuComponent />


   <v-container align="center" justify="center" :style="{ backgroundColor: '#000', width: '100%', marginBottom: '24px', padding:'0'}">
     <br/><br/>
     <v-col cols="12"  class="text-center">
       <h1 class="question">Transport</h1>
     </v-col>
     <CheckList
       :checklistItems="checklistItems"
       :selectedItems="selectedItems"
       @update:selectedItems="updateSelectedItems"
     />
    <br/>


     <ArrowComponent nextRoute="/elUse" previousRoute="/userPage" />
   </v-container>


</template>


<script>
import CheckList from '../features/CheckList.vue';
import NavComponent from '../navigation/NavComponent.vue';
import ArrowComponent from '../navigation/ArrowComponent.vue';
import MenuComponent from '../navigation/MenuComponent.vue';


export default {
 components: {
   MenuComponent,
   CheckList,
   NavComponent,
   ArrowComponent,
 },
 data() {
   return {
     checklistItems: [],
   };
 },
 computed: {
   selectedItems() {
     return this.$store.state.selectedItems; // Get selected items from Vuex state
   },
   totalPoints() {
     return this.$store.getters.getTotalPoints; // Get total points from Vuex getter
   },
   userLevel() {
     return this.$store.getters.getUserInfo.level; // Get user level from Vuex store
   }
 },
 created() {
   this.fetchChecklistItems();
 },
 methods: {
   async fetchChecklistItems() {
     try {
       // Antag at category_id for 'transport' er 2
       const categoryId = 2;
       const response = await fetch(`http://localhost:3000/api/checklists/${categoryId}/${this.userLevel}`);
       const data = await response.json();
       this.checklistItems = data;
     } catch (error) {
       console.error('Error fetching checklist items:', error);
     }
   },
   updateSelectedItems(newSelectedItems) {
     this.$store.dispatch('updateSelectedItems', newSelectedItems); // Update selected items in Vuex
     this.$store.dispatch('updateTotalPoints'); // Recalculate total points after updating selected items
   },
 speakPageContent() {
     const utterance = new SpeechSynthesisUtterance();
     utterance.text = `
       Velkommen til transport-siden.
       Her kan du se en checkliste over transportrelaterede opgaver.
       Vælg de opgaver, du vil udføre, forste opgave er Jeg har gået eller cyklet på ture under 2 km.
       anden opgave er Jeg har brugt offentlig transport til mindst én tur.
       tredje opgave er Jeg har reduceret biltransport.
       og du kan tryk på pilene for at navigere til næste eller forrige side.
     `;
     speechSynthesis.speak(utterance);
   }
 },
 mounted() {
   this.speakPageContent();
 }
};
</script>


<style scoped>
.v-container {
 background: #000;
 color: #8981A8;
}


.question {
 font-weight: bold;
 color: #8981A8;
}


</style>


