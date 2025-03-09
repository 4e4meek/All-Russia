<template>
  <div class="main">
    <div class="banner">
      <h1 class="banner__heading">Приволжский федеральный округ</h1>
    </div>
    <div class="list">
      <div class="wrapper">
        <div class="list__top top">
          <span class="top__line-red line-red"></span>
          <p class="top__text text-heading">Центр Приволжья</p>
          <div class="top__card card">
            <img class="card__img__top border__img" src="@/assets/nizhny_novgorod_flag.png"
                 alt="Флаг Нижнего Новгорода"/>
            <div class="card__box">
              <p class="card__heading">Нижний Новгород</p>
              <p class="card__text">Население: 1 250 000 чел.</p>
              <p class="card__text">Площадь: 410 км²</p>
              <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
            </div>
          </div>
        </div>
        <div class="list__bottom bottom">
          <span class="bottom__line-red line-red"></span>
          <p class="bottom__text text-heading">Регионы</p>
          <div class="container__card">
            <div class="item">
              <img class="card__img border__img" src="@/assets/bachkorstan_flag.png" alt="Флаг Башкортостана"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Башкортостан</p>
                <div>
                  <p class="card__text">Население: 4 000 000 чел.</p>
                  <p class="card__text">Площадь: 142.9 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK+2 (UTC+5)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/perms_flag.png" alt="Флаг Пермского края"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Пермский край</p>
                <div>
                  <p class="card__text">Население: 2 500 000 чел.</p>
                  <p class="card__text">Площадь: 160.2 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK+2 (UTC+5)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/saratov_obl_flag.png" alt="Флаг Саратовской области"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Саратовская область</p>
                <div>
                  <p class="card__text">Население: 3 100 000 чел.</p>
                  <p class="card__text">Площадь: 53.5 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK+1 (UTC+4)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/ulyanovsk_flag.png" alt="Флаг Ульяновской области"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Ульяновская область</p>
                <div>
                  <p class="card__text">Население: 1 290 000 чел.</p>
                  <p class="card__text">Площадь: 37.4 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/samara_flag.png" alt="Самарская область"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Самарская область</p>
                <div>
                  <p class="card__text">Население: 3 200 000 чел.</p>
                  <p class="card__text">Площадь: 53.5 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/kazan_flag.png" alt="Татарстан"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Татарстан</p>
                <div>
                  <p class="card__text">Население: 3 850 000 чел.</p>
                  <p class="card__text">Площадь: 68.0 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/penza_flag.png" alt="Пензенская область"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Пензенская область</p>
                <div>
                  <p class="card__text">Население: 1 360 000 чел.</p>
                  <p class="card__text">Площадь: 43.0 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/orenburg_flag.png" alt="Оренбургская область"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Оренбургская область</p>
                <div>
                  <p class="card__text">Население: 2 160 000 чел.</p>
                  <p class="card__text">Площадь: 124.6 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/mari_el_flag.png" alt="Республика Марий Эл"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Республика Марий Эл</p>
                <div>
                  <p class="card__text">Население: 700 000 чел.</p>
                  <p class="card__text">Площадь: 23.0 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/mordovia_flag.png" alt="Республика Мордовия"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Республика Мордовия</p>
                <div>
                  <p class="card__text">Население: 805 000 чел.</p>
                  <p class="card__text">Площадь: 25.5 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/udmurtia_flag.png" alt="Удмуртская Республика"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Удмуртская Республика</p>
                <div>
                  <p class="card__text">Население: 1 520 000 чел.</p>
                  <p class="card__text">Площадь: 42.1 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/kirov_flag.png" alt="Кировская область"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Кировская область</p>
                <div>
                  <p class="card__text">Население: 1 280 000 чел.</p>
                  <p class="card__text">Площадь: 120.8 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/cheboksary_flag.png" alt="Чувашская Республика"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Чувашская Республика</p>
                <div>
                  <p class="card__text">Население: 1 200 000 чел.</p>
                  <p class="card__text">Площадь: 18.3 тыс. км²</p>
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
  name: 'VolgaFederalDistrict'
}
</script>

<style scoped>
.container__card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(7, 225px);
  grid-column-gap: 90px;
  grid-row-gap: 60px;
}

.item {
  display: flex;
  width: 650px;
}

.item__card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.card__img {
  margin-right: 24px;
  width: 337px;
  height: 225px;
}

.main {
  flex-direction: column;
  margin: 0;
}

.wrapper {
  max-width: 1440px;
  margin: 0 auto;
}

.border__img {
  border: #979696 1px solid;
}

/* banner */
.banner {
  background-image: url('@/assets/shapka.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner__headding {
  font-size: 80px;
  font-weight: bold;
  color: #ffffff;
}

/* list */
.list {
  margin-top: 10px;
}

.list__top {
  border-top: 1px solid #aaaaaa;
}

.line-red {
  display: block;
  height: 13px;
  width: 80px;
  background-color: #aa0000;
}

.text-heading {
  margin-bottom: 30px;
  margin-top: 24px;
  font-size: 36px;
  font-family: 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
}

.card__img__top {
  width: 375px;
  height: 250px;
}

.list__bottom {
  border-top: 1px solid #aaaaaa;
  margin-top: 80px;
}

.bottom__list-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* card */
.card {
  display: flex;
  margin-top: 32px;
}

.card__box {
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  justify-content: space-between;
}

.card__heading {
  margin-bottom: 87px;
  font-size: 36px;
  font-family: "Roboto Condensed", sans-serif;
}

.card__heading__item {
  margin-bottom: 20px;
}

.card__text {
  font-size: 20px;
  font-family: Roboto, sans-serif;
  margin-bottom: 4px;
}

.bottom {
  margin-bottom: 80px;
}

/* //////////////////// */

/* media request */

@media screen and (width < 1400px) {
  .bottom__list-cards {
    justify-content: center;
  }

  .top__card {
    justify-content: center;
  }

  .banner__headding {
    font-size: 60px;
  }
}

@media screen and (width < 1000px) {
  .banner__headding {
    font-size: 45px;
  }
}

@media screen and (width < 769px) {
  .main {
    padding: 10px;
  }

  .container__card {
    grid-column-gap: 0;
    grid-row-gap: 30px;
    display: flex;
    flex-direction: column;
  }

  .item {
    flex-direction: column;
  }

  .card {
    flex-direction: column;
  }

  .card__headding {
    margin-bottom: 0;
  }
}
</style>
