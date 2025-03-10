<template>
	<div class="main">
		<div class="banner">
			<h1 class="banner__headding">Северо-Западный федеральный округ</h1>
		</div>
		<div class="list">
			<div class="wrapper">
				<div class="list__top top">
					<span class="top__line-red line-red"></span>
					<p class="top__text text-headdind">САНКТ-ПЕТЕРБУРГ</p>
					<div class="top__card card">
						<img class="card__img" src="../../assets/Saint_Petersburg.png" alt="" />
						<div class="card__box">
							<p class="card__headding">Санкт-Петербург</p>
							<p class="card__text text-population">Население: 5 384 342 человек</p>
							<p class="card__text text-square">Площадь: 1,439 тыс. км²</p>
							<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
						</div>
					</div>
				</div>
				<div class="list__bottom bottom">
					<span class="bottom__line-red line-red"></span>
					<p class="bottom__text text-headdind">Регионы</p>
					<div class="container__card">
						<div class="item item_1">
							<img src="../../assets/arkhangelsk_flag.png" alt="" />
							<div class="item__card">
								<p class="card__headding">Архангельская область</p>
								<p class="card__text text-population">Население: 1 116 091 чел.</p>
								<p class="card__text text-square">Площадь: 589 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: MSK+1 (UTC+4)</p>
							</div>
						</div>
						<div class="item item_2">
							<img src="../../assets/kaliningrad_flag.png" alt="" />
							<div class="item__card">
								<p class="card__headding">Калининградская область</p>
								<p class="card__text text-population">Население: 1 008 403 чел.</p>
								<p class="card__text text-square">Площадь: 15.1 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: MSK-1 (UTC+2)</p>
							</div>
						</div>
						<div class="item item_3">
							<img src="../../assets/karelia_flag.png" alt="" />
							<div class="item__card">
								<p class="card__headding">Республика Карелия</p>
								<p class="card__text text-population">Население: 579 183 чел.</p>
								<p class="card__text text-square">Площадь: 172.4 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item_4">
							<img src="../../assets/murmansk_flag.png" alt="" />
							<div class="item__card">
								<p class="card__headding">Мурманская область</p>
								<p class="card__text text-population">Население: 716 970 чел.</p>
								<p class="card__text text-square">Площадь: 144.9 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item_5">
							<img src="../../assets/novgorod_flag.png" alt="" />
							<div class="item__card">
								<p class="card__headding">Новгородская область</p>
								<p class="card__text text-population">Население: 602 134 чел.</p>
								<p class="card__text text-square">Площадь: 54.5 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item_6">
							<img src="../../assets/pskov_flag.png" alt="" />
							<div class="item__card">
								<p class="card__headding">Псковская область</p>
								<p class="card__text text-population">Население: 625 572 чел.</p>
								<p class="card__text text-square">Площадь: 55.3 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item_7">
							<img src="../../assets/vologda_flag.png" alt="" />
							<div class="item__card">
								<p class="card__headding">Вологодская область</p>
								<p class="card__text text-population">Население: 1 154 987 чел.</p>
								<p class="card__text text-square">Площадь: 145.7 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item_8">
							<img src="../../assets/leningrad_flag.png" alt="" />
							<div class="item__card">
								<p class="card__headding">Ленинградская область</p>
								<p class="card__text text-population">Население: 1 921 319 чел.</p>
								<p class="card__text text-square">Площадь: 83.9 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item_9">
							<img src="../../assets/komi_flag.png" alt="" />
							<div class="item__card">
								<p class="card__headding">Республика Коми</p>
								<p class="card__text text-population">Население: 806 809 чел.</p>
								<p class="card__text text-square">Площадь: 416.8 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: MSK+1 (UTC+4)</p>
							</div>
						</div>
						<div class="item item_10">
							<img src="../../assets/nw_flag.png" alt="" />
							<div class="item__card">
								<p class="card__headding">Ненецкий автономный округ</p>
								<p class="card__text text-population">Население: 43 997 чел.</p>
								<p class="card__text text-square">Площадь: 176.7 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: MSK+1 (UTC+4)</p>
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
	name: 'NorthWest'
}
</script>

<style scoped>
.container__card {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(5, 225px);
	grid-column-gap: 90px;
	grid-row-gap: 60px;
}
.item {
	display: flex;
	justify-content: space-between;
}

.main {
	flex-direction: column;
	margin: 0;
}

p {
	margin: 0;
}

.wrapper {
	max-width: 1440px;
	margin: 0 auto;
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
	font-size: 24px;
	text-transform: uppercase;
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
	margin-left: 25px;
	justify-content: space-between;
}

.card__headding {
	margin-bottom: 57px;
	font-size: 36px;
}

.card__text {
	line-height: 2;
	font-size: 20px;
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
