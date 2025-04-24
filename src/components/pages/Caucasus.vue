<template>
	<div class="main">
		<div class="banner">
			<h1 class="banner__headding">Северо-Кавказский федеральный округ</h1>
		</div>
		<div class="list">
			<div class="wrapper">
				<div class="list__top top">
					<span class="top__line-red line-red"></span>
					<p class="top__text text-headdind">СТОЛИЦА РОССИЙСКОЙ ФЕДЕРАЦИИ</p>
					<div class="top__card card">
						<img class="card__img" src="@/assets/moscow_flag%201.png" alt="" />
						<div class="card__box">
							<p class="card__headding">Москва</p>
							<p class="card__text text-population">Население: 12 330 126 человек</p>
							<p class="card__text text-square">Площадь: 2,561 тыс.км²</p>
							<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
						</div>
					</div>
				</div>
				<div class="list__bottom bottom">
					<span class="bottom__line-red line-red"></span>
					<p class="bottom__text text-headdind">Регионы</p>
					<div class="container__card">
						<div class="item item_1">
							<img src="../../assets/dagestan.png" alt="" />
							<div class="item__card">
								<p class="card__headding">Дагестан</p>
								<p class="card__text text-population">Население: 3 232 224 чел.</p>
								<p class="card__text text-square">Площадь: 50 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item_2">
							<img src="../../assets/tula_flag%201.png" alt="" />
							<div class="item__card">
								<p class="card__headding">Ингушетия</p>
								<p class="card__text text-population">Население: 3123 тыс. чел.</p>
								<p class="card__text text-square">Площадь: 527 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item_3">
							<img src="../../assets/kabrdino.png" alt="" />
							<div class="item__card">
								<p class="card__headding">Кабардино-Балкария</p>
								<p class="card__text text-population">Население: 905 тыс. чел.</p>
								<p class="card__text text-square">Площадь: 12.470 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item_4">
							<img src="../../assets/karach.png" alt="" />
							<div class="item__card">
								<p class="card__headding">Карачаево-Черкессия</p>
								<p class="card__text text-population">Население: 468 тыс. чел.</p>
								<p class="card__text text-square">Площадь: 14 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item_5">
							<img src="../../assets/osetia.png" alt="" />
							<div class="item__card">
								<p class="card__headding">Северная Осетия</p>
								<p class="card__text text-population">Население: 679 тыс. чел</p>
								<p class="card__text text-square">Площадь: 7987 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item_6">
							<img src="../../assets/chechnya.png" alt="" />
							<div class="item__card">
								<p class="card__headding">Чечня</p>
								<p class="card__text text-population">Население: 1 552 866 чел.</p>
								<p class="card__text text-square">Площадь: 16 171 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item_7">
							<img src="../../assets/stavropol.png" alt="" />
							<div class="item__card">
								<p class="card__headding">Ставрополь</p>
								<p class="card__text text-population">Население: 2 886 108 чел.</p>
								<p class="card__text text-square">Площадь: 66 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
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
	name: 'CaucasusFederalDistrict'
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

img {
	width: 337px;
	height: 225px;
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
