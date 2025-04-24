<template>
	<div class="main">
		<div class="banner">
			<h1 class="banner__headding">Уральский федеральный округ</h1>
		</div>
		<div class="list">
			<div class="wrapper">
				<div class="list__top top">
					<span class="top__line-red line-red"></span>
					<p class="top__text text-headdind">ЦЕНТР УРАЛА</p>
					<div class="top__card card">
						<img class="card__img" src="../../assets/Yekaterinburg.png" alt="Екатеринбург" />
						<div class="card__box">
							<p class="card__headding">Екатеринбург</p>
							<p class="card__text text-population">Население: 1 500 000 чел.</p>
							<p class="card__text text-square">Площадь: 468 км²</p>
							<p class="card__text text-time">Часовой пояс: YEKT (UTC+5)</p>
						</div>
					</div>
				</div>
				<div class="list__bottom bottom">
					<span class="bottom__line-red line-red"></span>
					<p class="bottom__text text-headdind">РЕГИОНЫ</p>
					<div class="container__card">
						<div class="item item_1">
							<img
								class="card__img"
								src="../../assets/Kurgan_Oblast.png"
								alt="Курганская область"
							/>
							<div class="item__card">
								<p class="card__headding">Курганская область</p>
								<p class="card__text text-population">Население: 829 000 чел.</p>
								<p class="card__text text-square">Площадь: 71.5 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: YEKT (UTC+5)</p>
							</div>
						</div>

						<div class="item item_2">
							<img
								class="card__img"
								src="../../assets/Sverdlovsk_Oblast.png"
								alt="Свердловская область"
							/>
							<div class="item__card">
								<p class="card__headding">Свердловская область</p>
								<p class="card__text text-population">Население: 4 316 000 чел.</p>
								<p class="card__text text-square">Площадь: 194.3 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: YEKT (UTC+5)</p>
							</div>
						</div>

						<div class="item item_3">
							<img class="card__img" src="../../assets/Tyumen_Oblast.png" alt="Тюменская область" />
							<div class="item__card">
								<p class="card__headding">Тюменская область</p>
								<p class="card__text text-population">Население: 3 753 000 чел.</p>
								<p class="card__text text-square">Площадь: 1 435 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: YEKT (UTC+5)</p>
							</div>
						</div>

						<div class="item item_4">
							<img class="card__img" src="../../assets/Hanti-Mansi.png" alt="Ханты-Мансийский АО" />
							<div class="item__card">
								<p class="card__headding">Ханты-Мансийский АО</p>
								<p class="card__text text-population">Население: 1 674 000 чел.</p>
								<p class="card__text text-square">Площадь: 534.8 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: YEKT (UTC+5)</p>
							</div>
						</div>

						<div class="item item_5">
							<img
								class="card__img"
								src="../../assets/Yamal-Nenets_Autonomous_District.png"
								alt="Ямало-Ненецкий АО"
							/>
							<div class="item__card">
								<p class="card__headding">Ямало-Ненецкий АО</p>
								<p class="card__text text-population">Население: 547 000 чел.</p>
								<p class="card__text text-square">Площадь: 750.3 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: YEKT (UTC+5)</p>
							</div>
						</div>

						<div class="item item_6">
							<img
								class="card__img"
								src="../../assets/Chelyabinsk_Oblast.png"
								alt="Челябинская область"
							/>
							<div class="item__card">
								<p class="card__headding">Челябинская область</p>
								<p class="card__text text-population">Население: 3 485 000 чел.</p>
								<p class="card__text text-square">Площадь: 88.5 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: YEKT (UTC+5)</p>
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
	border: none;
	outline: none;
	background-color: transparent;
	width: 338px;
	height: 226px;
	object-fit: cover;
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
		display: flex;
		gap: 25px;
		align-items: flex-start;
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
		height: 200px;
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
