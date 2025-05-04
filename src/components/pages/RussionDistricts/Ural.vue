<template>
  <div class="main">
    <div class="banner">
      <h1 class="banner__heading">Уральский федеральный округ</h1>
    </div>
    <div class="list">
      <div class="wrapper">
        <div class="list__top top">
          <span class="top__line-red line-red"></span>
          <p class="top__text text-heading">ЦЕНТР УРАЛА</p>
          <div class="top__card card">
            <img class="card__img__top border__img" src="@/assets/ekaterinburg_flag.png" alt="Флаг Екатеринбурга"/>
            <div class="card__box">
              <p class="card__heading">Екатеринбург</p>
              <div>
                <p class="card__text">Население: 1 536 183 чел.</p>
                <p class="card__text">Площадь: 1111 км²</p>
                <p class="card__text">Часовой пояс: YEKT (UTC+5)</p>
              </div>
            </div>
          </div>
        </div>
        <div class="list__bottom bottom">
          <span class="bottom__line-red line-red"></span>
          <p class="bottom__text text-heading">Регионы</p>
          <div class="container__card">
            <div class="item">
              <img class="card__img border__img" src="@/assets/kurgan_flag.png" alt="Флаг Курганской области"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Курганская область</p>
                <div>
                  <p class="card__text">Население: 829 000 чел.</p>
                  <p class="card__text">Площадь: 71.5 тыс. км²</p>
                  <p class="card__text">Часовой пояс: YEKT (UTC+5)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/sverdlovsk_flag.png" alt="Флаг Свердловской области">
              <div class="item__card">
                <p class="card__heading card__heading__item">Свердловская область</p>
                <div>
                  <p class="card__text">Население: 4 316 000 чел.</p>
                  <p class="card__text">Площадь: 194.3 тыс. км²</p>
                  <p class="card__text">Часовой пояс: YEKT (UTC+5)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/tyumen_flag.png" alt="Флаг Тюменской области"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Тюменская область</p>
                <div>
                  <p class="card__text">Население: 3 753 000 чел.</p>
                  <p class="card__text">Площадь: 1 435 тыс. км²</p>
                  <p class="card__text">Часовой пояс: YEKT (UTC+5)</p>
                </div>

              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/khanty_flag.png" alt="Флаг ХМАО"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Ханты-Мансийский АО</p>
                <div>
                  <p class="card__text">Население: 1 674 000 чел.</p>
                  <p class="card__text">Площадь: 534.8 тыс. км²</p>
                  <p class="card__text">Часовой пояс: YEKT (UTC+5)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/yamalo_flag.png" alt="Флаг ЯНАО"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Ямало-Ненецкий АО</p>
                <div>
                  <p class="card__text">Население: 547 000 чел.</p>
                  <p class="card__text">Площадь: 750.3 тыс. км²</p>
                  <p class="card__text">Часовой пояс: YEKT (UTC+5)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/chelyabinsk_flag.png" alt="Флаг Челябинской области"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Челябинская область</p>
                <div>
                  <p class="card__text">Население: 3 485 000 чел.</p>
                  <p class="card__text">Площадь: 88.5 тыс. км²</p>
                  <p class="card__text">Часовой пояс: YEKT (UTC+5)</p>
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
  name: 'UralFederalDistrict'
}
</script>

<style scoped>
@import '@/styles/russiaDistrict.css';
.container__card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 225px);
  grid-column-gap: 90px;
  grid-row-gap: 60px;
}
</style>