<template>
  <div class="main">
    <div class="banner">
      <h1 class="banner__heading">{{ bannerTitle }}</h1>
    </div>
    <div class="list">
      <div class="wrapper">
        <div class="list__top top">
          <span class="top__line-red line-red" />
          <p class="top__text text-heading">{{ topHeading }}</p>
          <card-with-flag
              class="top__card"
              v-bind="topCardProps"
          />
        </div>
        <div class="list__bottom bottom">
          <span class="bottom__line-red line-red"></span>
          <p class="bottom__text text-heading">Регионы</p>
          <div class="container__card">
            <div class="item" v-for="(regionCardProps, idx) in regionsCardsProps" :key="idx">
              <card-with-flag
                  v-bind="regionCardProps"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardWithFlag from "@/components/CardWithFlag/CardWithFlag.vue";

export default {
  name: 'RussianDistrictPageTemplate',
  components: {CardWithFlag},
  props: {
    bannerTitle: {
      type: String,
      required: true
    },
    topHeading: {
      type: String,
      required: true
    },
    topCardProps: {
      type: Object,
      required: true
    },
    regionsCardsProps: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
@import '@/styles/russiaDistrict.css';
</style>
