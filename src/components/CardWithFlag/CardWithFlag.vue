<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CardWithFlag",
  props: {
    heading: {
      type: String,
      required: true
    },
    population: {
      type: Number,
      required: true
    },
    area: {
      type: Number,
      required: true
    },
    timeZone: {
      type: String,
      required: true
    },
    flagFileName: {
      type: String,
      required: true
    },
    flagDesc: {
      type: String,
      default: 'Флаг'
    }
  },
  computed: {
    formattedArea() {
      let unit = '';
      let areaToFormat = this.area;

      if (this.area >= 1000) {
        unit = 'тыс.'
        areaToFormat /= 1000;

        if (this.area >= 1000 ** 2) {
          unit = 'млн.'
          areaToFormat /= 1000;
        }
      }

      return areaToFormat.toLocaleString('ru-RU', {
        maximumFractionDigits: 3
      }) + ` ${unit} км²`
    },
    flagSrc() {
      return new URL(`/src/assets/${this.flagFileName}`, import.meta.url).href
    }
  }
})
</script>

<template>
  <div class="card">
    <img class="card__img border__img" :src="flagSrc" :alt="flagDesc"/>
    <div class="card__box">
      <p class="card__heading">{{ heading }}</p>
      <div>
        <p class="card__text">Население: {{ population.toLocaleString('ru-RU') }} чел.</p>
        <p class="card__text">Площадь: {{ formattedArea }}</p>
        <p class="card__text">Часовой пояс: {{ timeZone }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.border__img {
  border: #979696 1px solid;
}

.card {
  display: flex;
}

.card__box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card__heading {
  font-size: 36px;
  font-family: "Roboto Condensed", sans-serif;
  margin-bottom: 20px;
}

.card__text {
  font-size: 20px;
  font-family: Roboto, sans-serif;
  margin-bottom: 4px;
}

.card__img {
  margin-right: 24px;
  width: 337px;
  height: 225px;
}

@media screen and (width < 769px) {
  .card {
    flex-direction: column;
  }

  .card__heading {
    margin-bottom: 0;
  }
}


</style>