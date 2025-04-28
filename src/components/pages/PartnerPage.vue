<template>
  <div class="main">
    <div class="wrapper">
      <div class="partners">
        <span class="red-line"></span>
        <div class="partners__title">
          <p class="title__heading">Партнеры</p>
        </div>

        <div class="partners__list list">
          <div v-for="partner in partners" :key="partner.id" class="list__card card">
            <!-- Подставляем правильный путь для изображения с использованием шаблонных строк -->
            <img :src="`https://allrussia.info/api/public/${partner.url}`" class="card__img" alt="partner.title" />

            <p class="card__text">{{ partner.title }}</p>
          </div>
        </div>
      </div>
      <div class="navigate">
        <NavigateBar />
      </div>
    </div>
  </div>
</template>

<script>
import NavigateBar from '@/components/layouts/NavigateBar.vue';
import axios from 'axios';

export default {
  name: 'MainPage',
  components: {
    NavigateBar
  },
  data() {
    return {
      partners: []  // Сюда будем сохранять партнеров
    };
  },
  mounted() {
    // Загружаем партнеров при монтировании компонента
    axios.get('https://allrussia.info/api/data_news_politics')
      .then(response => {
        this.partners = response.data;  // Сохраняем данные в partners
        console.log(this.partners);  // Выводим данные для отладки
      })
      .catch(error => {
        console.error('Error fetching partners:', error);
      });
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
}

.partners {
  width: 1120px;
  margin-right: 32px;
}

.title__heading {
  font-family: 'Roboto Condensed';
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.list__card {
  text-align: center;
  align-content: center;
}

.card__text {
  font-size: 24px;
}
</style>
