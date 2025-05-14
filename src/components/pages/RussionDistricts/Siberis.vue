<template>
  <div class="main">
    <div class="banner">
      <h1 class="banner__heading">Сибирский федеральный округ</h1>
    </div>
    <div class="list">
      <div class="wrapper">
        <div class="list__top top">
          <span class="top__line-red line-red"></span>
          <p class="top__text text-heading">ЦЕНТР СИБИРИ</p>
          <div class="top__card card">
            <img class="card__img__top border__img" src="@/assets/novosibirsk_flag.png" alt="Флаг города Новосибирск"/>
            <div class="card__box">
              <p class="card__heading">Новосибирск</p>
              <div>
                <p class="card__text">Население: 1 620 000 чел.</p>
                <p class="card__text">Площадь: 502 км²</p>
                <p class="card__text">Часовой пояс: MSK+4 (UTC+7)</p>
              </div>
            </div>
          </div>
        </div>
        <div class="list__bottom bottom">
          <span class="bottom__line-red line-red"></span>
          <p class="bottom__text text-heading">Регионы</p>
          <div class="container__card">
            <div class="item">
              <img class="card__img border__img" src="@/assets/omsk_flag.png" alt="Флаг Омской области"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Омская область</p>
                <div>
                  <p class="card__text">Население: 1 935 000 чел.</p>
                  <p class="card__text">Площадь: 141.1 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK+3 (UTC+6)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/tomsk_flag.png" alt="Флаг Томской области"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Томская область</p>
                <div>
                  <p class="card__text">Население: 1 074 000 чел.</p>
                  <p class="card__text">Площадь: 316.9 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK+4 (UTC+7)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/krasnoyarsk_flag.png" alt="Флаг Красноярского края"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Красноярский край</p>
                <div>
                  <p class="card__text">Население: 2 876 000 чел.</p>
                  <p class="card__text">Площадь: 2 366 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK+4 (UTC+7)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/altai_flag.png" alt="Флаг Алтайского края"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Алтайский край</p>
                <div>
                  <p class="card__text">Население: 2 317 000 чел.</p>
                  <p class="card__text">Площадь: 168 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK+3 (UTC+6)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/kemerovo_flag.png" alt="Флаг Кемеровской области"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Кемеровская область</p>
                <div>
                  <p class="card__text">Население: 2 637 000 чел.</p>
                  <p class="card__text">Площадь: 95.5 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK+4 (UTC+7)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/irkutsk_flag.png" alt="Флаг Иркутской области"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Иркутская область</p>
                <div>
                  <p class="card__text">Население: 2 361 000 чел.</p>
                  <p class="card__text">Площадь: 774.8 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK+5 (UTC+8)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/altai_republic_flag.png" alt="Флаг Республики Алтай"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Республика Алтай</p>
                <div>
                  <p class="card__text">Население: 219 000 чел.</p>
                  <p class="card__text">Площадь: 92.9 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK+4 (UTC+7)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/buryatia_flag.png" alt="Флаг Республики Бурятия"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Республика Бурятия</p>
                <div>
                  <p class="card__text">Население: 981 000 чел.</p>
                  <p class="card__text">Площадь: 351.3 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK+5 (UTC+8)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/hakassia_flag.png" alt="Флаг Республики Хакасия"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Республика Хакасия</p>
                <div>
                  <p class="card__text">Население: 533 000 чел.</p>
                  <p class="card__text">Площадь: 61.6 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK+4 (UTC+7)</p>
                </div>
              </div>
            </div>
            <div class="item">
              <img class="card__img border__img" src="@/assets/zabaykalsky_flag.png" alt="Флаг Забайкальского края"/>
              <div class="item__card">
                <p class="card__heading card__heading__item">Забайкальский край</p>
                <div>
                  <p class="card__text">Население: 1 093 000 чел.</p>
                  <p class="card__text">Площадь: 431.9 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK+6 (UTC+9)</p>
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
  name: 'SiberianFederalDistrict'
}
</script>

<style scoped>
@import '@/styles/russiaDistrict.css';
</style>