<template>
  <v-container class="anden-nav">
    <router-link to="/transportComponent" @click="setActive('transportComponent')">
      <img :class="{ active: activeImage === 'transportComponent' }" src="@/images/transport.svg" />
    </router-link>

    <router-link to="/elUse" @click="setActive('elUse')">
      <img :class="{ active: activeImage === 'elUse' }" src="@/images/El-forbruge.svg" />
    </router-link>

    <router-link to="/genbrugeComponent" @click="setActive('genbrugeComponent')">
      <img :class="{ active: activeImage === 'genbrugeComponent' }" src="@/images/Genbruge.svg" />
    </router-link>

    <router-link to="/foodWaste" @click="setActive('foodWaste')">
      <img :class="{ active: activeImage === 'foodWaste' }" src="@/images/Madspile.svg" />
    </router-link>
  </v-container>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'MenuComponent',
  setup() {
    const activeImage = ref('');
    const route = useRoute();

    const setActive = (image) => {
      activeImage.value = image;
    };

    watch(route, (newRoute) => {
      setActive(newRoute.name);
    }, { immediate: true });

    return {
      activeImage,
      setActive,
    };
  },
});
</script>

<style scoped>
.anden-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 92px;
  margin-top: 100px; /* Adjust this value based on the height of your fixed nav */
}

.anden-nav img {
  margin-top: 70px;
  margin-bottom: 70px;
  border-radius: 50%;
}

.active {
  border: 5px solid #D3BE03;
  box-shadow: 0 10px 10px rgba(189, 185, 185, 0.5);
}
</style>
