<template>
	<div class="main">
		<div class="banner">
			<h1 class="banner__headding">Южный федеральный округ</h1>
		</div>
		<div class="list">
			<div class="wrapper">
				<div class="list__top top">
					<span class="top__line-red line-red"></span>
					<p class="top__text text-headdind">ЦЕНТР ЮГА</p>
					<div class="top__card card">
						<img class="card__img" src="../../assets/Rostov_Oblast.png" alt="" />
						<div class="card__box">
							<p class="card__headding">Ростов-на-Дону</p>
                <p class="card__text">Население: 1 125 000 чел.</p>
                <p class="card__text">Площадь: 354 км²</p>
                <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
						</div>
					</div>
				</div>
				<div class="list__bottom bottom">
					<span class="bottom__line-red line-red"></span>
					<p class="bottom__text text-headdind">Регионы</p>
					<div class="container__card">
						<div class="item item_1">
							<img src="../../assets/Astrakhan_Oblast.png" alt="" />
							<div class="item__card">
								<p class="card__headding card__headding__item">Астраханская область</p>
                <div>
                  <p class="card__text">Население: 999 000 чел.</p>
                  <p class="card__text">Площадь: 49 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
							</div>
						</div>
						<div class="item item_2">
							<img src="../../assets/Volgograd_Oblast.png" alt="" />
							<div class="item__card">
								<p class="card__headding card__headding__item">Волгоградская область</p>
                <div>
                  <p class="card__text">Население: 2 473 000 чел.</p>
                  <p class="card__text">Площадь: 112.9 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
							</div>
						</div>
						<div class="item item_3">
							<img src="../../assets/Krasnodar_Krai.png" alt="" />
							<div class="item__card">
								<p class="card__headding card__headding__item">Краснодарский край</p>
                <div>
                  <p class="card__text">Население: 5 679 000 чел.</p>
                  <p class="card__text">Площадь: 75.5 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
							</div>
						</div>
						<div class="item item_4">
							<img src="../../assets/Rostov_Oblast.png" alt="" />
							<div class="item__card">
								<p class="card__headding card__headding__item">Ростовская область</p>
                <div>
                  <p class="card__text">Население: 4 202 000 чел.</p>
                  <p class="card__text">Площадь: 100.8 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
							</div>
						</div>
						<div class="item item_5">
							<img src="../../assets/Adygea.png" alt="" />
							<div class="item__card">
								<p class="card__headding card__headding__item">Республика Адыгея</p>
                <div>
                  <p class="card__text">Население: 464 000 чел.</p>
                  <p class="card__text">Площадь: 7.8 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
							</div>
						</div>
						<div class="item item_6">
							<img src="../../assets/Kalmykia.png" alt="" />
							<div class="item__card">
								<p class="card__headding card__headding__item">Республика Калмыкия</p>
                <div>
                  <p class="card__text">Население: 270 000 чел.</p>
                  <p class="card__text">Площадь: 74.7 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
							</div>
						</div>
						<div class="item item_7">
							<img src="../../assets/Crimea.png" alt="" />
							<div class="item__card">
								<p class="card__headding card__headding__item">Республика Крым</p>
                <div>
                  <p class="card__text">Население: 1 911 000 чел.</p>
                  <p class="card__text">Площадь: 26.9 тыс. км²</p>
                  <p class="card__text">Часовой пояс: MSK (UTC+3)</p>
                </div>
							</div>
						</div>
						<div class="item item_8">
							<img src="../../assets/Sevastopol.png" alt="" />
							<div class="item__card">
								<p class="card__headding card__headding__item">г. Севастополь</p>
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
.container__card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 225px);
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

.text-headdind {
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

.card__headding {
  margin-bottom: 87px;
  font-size: 36px;
  font-family: "Roboto Condensed", sans-serif;
}

.card__headding__item {
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
