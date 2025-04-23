<template>
	<div class="main">
		<div class="banner">
			<h1 class="banner__headding">Ближний Восток</h1>
		</div>
		<div class="list">
			<div class="wrapper">
				<div class="list__top top">
					<span class="top__line-red line-red"></span>
					<p class="top__text text-headdind">КРУПНЕЙШАЯ СТРАНА</p>
					<div class="top__card card">
						<img class="card__img" src=" " alt="Флаг Саудовской Аравии" />
						<div class="card__box">
							<p class="card__headding">Саудовская Аравия</p>
							<p class="card__text text-population">Население: 36,9 млн. человек</p>
							<p class="card__text text-square">Площадь: 2,15 млн.км²</p>
							<p class="card__text text-time">Часовой пояс: UTC+3</p>
						</div>
					</div>
				</div>
				<div class="list__bottom bottom">
					<span class="bottom__line-red line-red"></span>
					<p class="bottom__text text-headdind">Страны</p>
					<div class="container__card">
						<div class="item item_1">
							<img class="card__img" src=" " alt="Флаг Турции" />
							<div class="item__card">
								<p class="card__headding">Турция</p>
								<p class="card__text text-population">Население: 85,3 млн. чел.</p>
								<p class="card__text text-square">Площадь: 783,5 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: UTC+3</p>
							</div>
						</div>
						<div class="item item_2">
							<img class="card__img" src=" " alt="Флаг Ирана" />
							<div class="item__card">
								<p class="card__headding">Иран</p>
								<p class="card__text text-population">Население: 88,6 млн. чел.</p>
								<p class="card__text text-square">Площадь: 1,65 млн. кв. км</p>
								<p class="card__text text-time">Часовой пояс: UTC+3:30</p>
							</div>
						</div>
						<div class="item item_3">
							<img class="card__img" src=" " alt="Флаг Израиля" />
							<div class="item__card">
								<p class="card__headding">Израиль</p>
								<p class="card__text text-population">Население: 9,4 млн. чел.</p>
								<p class="card__text text-square">Площадь: 22,1 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: UTC+2</p>
							</div>
						</div>
						<div class="item item_4">
							<img class="card__img" src=" " alt="Флаг ОАЭ" />
							<div class="item__card">
								<p class="card__headding">ОАЭ</p>
								<p class="card__text text-population">Население: 9,9 млн. чел.</p>
								<p class="card__text text-square">Площадь: 83,6 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: UTC+4</p>
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
	name: 'MiddleEast'
}
</script>

<style scoped>
.container__card {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 90px;
	grid-row-gap: 60px;
}
.item {
	display: flex;
	gap: 25px;
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

.card__img {
	height: 231px;
	width: auto;
}

.card__headding {
	margin-bottom: 57px;
	font-size: 36px;
}

.card__text {
	line-height: 2;
	font-size: 20px;
	white-space: nowrap;
}

.bottom {
	margin-bottom: 80px;
}

@media screen and (width < 1400px) {
	.container__card {
		grid-template-columns: repeat(3, 1fr);
	}

	.top__card {
		justify-content: center;
	}

	.banner__headding {
		font-size: 60px;
	}

	.item {
		flex-direction: column;
	}

	.card__headding {
		margin-bottom: 0;
	}
}

@media screen and (width < 1000px) {
	.banner__headding {
		font-size: 45px;
	}
}

@media screen and (width < 1200px) {
	.container__card {
		grid-template-columns: 1fr 1fr;
	}
}

@media screen and (width < 769px) {
	.card__img {
		width: 100%;
		height: 338px;
	}

	.main {
		padding: 10px;
	}
	.container__card {
		grid-column-gap: 0;
		grid-row-gap: 30px;
		display: flex;
		flex-direction: column;
	}
	.card {
		flex-direction: column;
	}
}
</style>