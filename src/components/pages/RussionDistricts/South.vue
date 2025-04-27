<template>
  <div class="main">
    <div class="banner">
      <h1 class="banner__heading">Южный федеральный округ</h1>
    </div>
    <div class="list">
      <div class="wrapper">
        <div class="list__top top">
          <span class="top__line-red line-red"></span>
          <p class="top__text text-heading">ЦЕНТР ЮГА</p>
          <div class="top__card card">
            <img class="card__img__top border__img" src="@/assets/rostov_flag.png" alt="Флаг города Ростов-на-Дону"/>
            <div class="card__box">
              <p class="card__heading">Ростов-на-Дону</p>
              <div>
                <p class="card__text">Население: 1 125 000 чел.</p>
                <p class="card__text">Площадь: 354 км²</p>
                <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
              </div>
            </div>
          </div>
        </div>
        <div class="list__bottom bottom">
          <span class="bottom__line-red line-red"></span>
          <p class="bottom__text text-heading">Регионы</p>
          <div class="container__card">
            <div class="item">
              <img class="card__img border__img" src="@/assets/astrakhan_flag.png" alt="Флаг Астраханской области"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Астраханская область</p>
                <div>
                  <p class="card__text">Население: 999 000 чел.</p>
                  <p class="card__text">Площадь: 49 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/volgograd_flag.png" alt="Флаг Волгоградской области"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Волгоградская область</p>
                <div>
                  <p class="card__text">Население: 2 473 000 чел.</p>
                  <p class="card__text">Площадь: 112.9 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/krasnodar_flag.png" alt="Флаг Краснодарского края"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Краснодарский край</p>
                <div>
                  <p class="card__text">Население: 5 679 000 чел.</p>
                  <p class="card__text">Площадь: 75.5 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/rostov_flag.png" alt="Флаг Ростовской области"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Ростовская область</p>
                <div>
                  <p class="card__text">Население: 4 202 000 чел.</p>
                  <p class="card__text">Площадь: 100.8 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/adigea_flag.png" alt="Флаг Республики Адыгея"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Республика Адыгея</p>
                <div>
                  <p class="card__text">Население: 464 000 чел.</p>
                  <p class="card__text">Площадь: 7.8 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/kalmykia_flag.png" alt="Флаг Республики Калмыкия"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Республика Калмыкия</p>
                <div>
                  <p class="card__text">Население: 270 000 чел.</p>
                  <p class="card__text">Площадь: 74.7 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/crimea_flag.png" alt="Флаг Республики Крым"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Республика Крым</p>
                <div>
                  <p class="card__text">Население: 1 911 000 чел.</p>
                  <p class="card__text">Площадь: 26.9 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/sevastopol_flag.png" alt="Флаг города Севастополь"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">г. Севастополь</p>
                <div>
                  <p class="card__text">Население: 512 000 чел.</p>
                  <p class="card__text">Площадь: 864 км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SouthernFederalDistrict'
}
</script>

<style scoped>
@import '@/styles/russiaDistrict.css';
</style>