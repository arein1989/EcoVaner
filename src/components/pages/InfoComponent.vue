<template>
  <NavComponent />
  <br/><br/><br/><br/>
  <v-container fluid fill-height align="center" justify="center" :style="{width: '100%'}" class="info">
    <br/><br/>
    <h1>Velkommen</h1>
    <br/>
    <h3>{{ userName }}</h3>
    <br/>
    <img src="@/images/EcoVaner.svg" alt="Logo" :style="{ width: '200px' }" />
    <br/>
    <v-card-text>
      - gør bæredygtige vaner lette som en leg!
    </v-card-text>
    <v-spacer></v-spacer>

    <v-card-text>
     Vores mission er at skabe en grønnere fremtid. Vi tror på, at små vaner gør en stor forskel, når vi alle bidrager til miljøet.
    </v-card-text>
    <v-spacer></v-spacer>

    <v-card-text>
      At ændre adfærd og skabe nye vaner kan være en udfordring – men det er her, EcoVaner gør en forskel.
    </v-card-text>
    <v-spacer></v-spacer>

    <v-card-text>
      ✔️ Tjek ind dagligt: Udfør en bæredygtig handling, og giv den et flueben.
    </v-card-text>

    <v-spacer></v-spacer>
    <v-card-text>
     🌱 Tjen dråber: Jo flere handlinger, du gennemfører, jo højere niveau opnår du.
    </v-card-text>
    <v-spacer></v-spacer>

    <v-card-text>
      🌳 Se dit træ vokse: Brug dråberne til at vande dit træ, der symboliserer din voksende vane. Når træet er fuldt udvokset, er handlingerne blevet en naturlig del af din hverdag.
    </v-card-text>
    <v-spacer></v-spacer>

    <v-card-text>
      Tag det første skridt mod en bæredygtig fremtid – start i dag med EcoVaner!
    </v-card-text>
    <v-spacer></v-spacer>
  </v-container>
</template>

<script>
import { defineComponent, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import NavComponent from '../navigation/NavComponent.vue';

export default defineComponent({
  name: 'InfoComponent',
  components: {
    NavComponent,
  },
  setup() {
    const store = useStore();
    const userName = computed(() => store.getters.getUserInfo.name);

    onMounted(() => {
      store.dispatch('fetchUserInfo');
    });

    return {
      userName,
    };
  },
});
</script>

<style scoped>
.info {
  text-align: center;
  color: #fff;

}

h1 {
  font-weight: bolder;
}
</style>
