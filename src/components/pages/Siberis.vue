<template>
	<div class="main">
		<div class="banner">
			<h1 class="banner__headding">Сибирский федеральный округ</h1>
		</div>
		<div class="list">
			<div class="wrapper">
				<div class="list__top top">
					<span class="top__line-red line-red"></span>
					<p class="top__text text-headdind">ЦЕНТР СИБИРИ</p>
					<div class="top__card card">
						<img class="card__img" src="../../assets/Novosibirsk.png" alt="Новосибирск" />
						<div class="card__box">
							<p class="card__headding">Новосибирск</p>
							<p class="card__text text-population">Население: 1 620 000 чел.</p>
							<p class="card__text text-square">Площадь: 502 км²</p>
							<p class="card__text text-time">Часовой пояс: MSK+4 (UTC+7)</p>
						</div>
					</div>
				</div>
				<div class="list__bottom bottom">
					<span class="bottom__line-red line-red"></span>
					<p class="bottom__text text-headdind">РЕГИОНЫ</p>
					<div class="container__card">
						<div class="item item_1">
							<img class="card__img" src="../../assets/Omsk_Oblast.png" alt="Омская область" />
							<div class="item__card">
								<p class="card__headding">Омская область</p>
								<p class="card__text text-population">Население: 1 935 000 чел.</p>
								<p class="card__text text-square">Площадь: 141.1 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK+3 (UTC+6)</p>
							</div>
						</div>

						<div class="item item_2">
							<img class="card__img" src="../../assets/Tomsk_Oblast.png" alt="Томская область" />
							<div class="item__card">
								<p class="card__headding">Томская область</p>
								<p class="card__text text-population">Население: 1 074 000 чел.</p>
								<p class="card__text text-square">Площадь: 316.9 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK+4 (UTC+7)</p>
							</div>
						</div>

						<div class="item item_3">
							<img
								class="card__img"
								src="../../assets/Krasnoyarsk_Krai.png"
								alt="Красноярский край"
							/>
							<div class="item__card">
								<p class="card__headding">Красноярский край</p>
								<p class="card__text text-population">Население: 2 876 000 чел.</p>
								<p class="card__text text-square">Площадь: 2 366 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK+4 (UTC+7)</p>
							</div>
						</div>

						<div class="item item_4">
							<img class="card__img" src="../../assets/Altai_Krai.png" alt="Алтайский край" />
							<div class="item__card">
								<p class="card__headding">Алтайский край</p>
								<p class="card__text text-population">Население: 2 317 000 чел.</p>
								<p class="card__text text-square">Площадь: 168 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK+3 (UTC+6)</p>
							</div>
						</div>

						<div class="item item_5">
							<img
								class="card__img"
								src="../../assets/Kemerovo_Oblast.png"
								alt="Кемеровская область"
							/>
							<div class="item__card">
								<p class="card__headding">Кемеровская область</p>
								<p class="card__text text-population">Население: 2 637 000 чел.</p>
								<p class="card__text text-square">Площадь: 95.5 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK+4 (UTC+7)</p>
							</div>
						</div>

						<div class="item item_6">
							<img
								class="card__img"
								src="../../assets/Irkutsk_Oblast.png"
								alt="Иркутская область"
							/>
							<div class="item__card">
								<p class="card__headding">Иркутская область</p>
								<p class="card__text text-population">Население: 2 361 000 чел.</p>
								<p class="card__text text-square">Площадь: 774.8 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK+5 (UTC+8)</p>
							</div>
						</div>

						<div class="item item_7">
							<img class="card__img" src="../../assets/Altai_Republic.png" alt="Республика Алтай" />
							<div class="item__card">
								<p class="card__headding">Республика Алтай</p>
								<p class="card__text text-population">Население: 219 000 чел.</p>
								<p class="card__text text-square">Площадь: 92.9 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK+4 (UTC+7)</p>
							</div>
						</div>

						<div class="item item_8">
							<img class="card__img" src="../../assets/Buryatia.png" alt="Республика Бурятия" />
							<div class="item__card">
								<p class="card__headding">Республика Бурятия</p>
								<p class="card__text text-population">Население: 981 000 чел.</p>
								<p class="card__text text-square">Площадь: 351.3 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK+5 (UTC+8)</p>
							</div>
						</div>

						<div class="item item_9">
							<img class="card__img" src="../../assets/Khakassia.png" alt="Республика Хакасия" />
							<div class="item__card">
								<p class="card__headding">Республика Хакасия</p>
								<p class="card__text text-population">Население: 533 000 чел.</p>
								<p class="card__text text-square">Площадь: 61.6 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK+4 (UTC+7)</p>
							</div>
						</div>

						<div class="item item_10">
							<img
								class="card__img"
								src="../../assets/Zabaykalsky_Krai.png"
								alt="Забайкальский край"
							/>
							<div class="item__card">
								<p class="card__headding">Забайкальский край</p>
								<p class="card__text text-population">Население: 1 093 000 чел.</p>
								<p class="card__text text-square">Площадь: 431.9 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK+6 (UTC+9)</p>
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
