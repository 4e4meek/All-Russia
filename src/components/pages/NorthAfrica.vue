<template>
	<div class="main">
		<div class="banner">
			<h1 class="banner__heading">Северная Африка</h1>
		</div>
		<div class="list">
			<div class="wrapper">
				<div class="list__top top">
					<span class="top__line-red line-red"></span>
					<p class="top__text text-heading">СТРАНЫ СЕВЕРНОЙ АФРИКИ</p>
					<div class="container__card">
						<div class="item item_1">
							<img class="card__img" src="@/assets/Flag_of_Algeria.svg" alt="Фотография флага" />
							<div class="item__card">
								<p class="card__heading">Алжирская Народная Демократическая Республика</p>
								<p class="card__text text-population">Население: 46 700 тыс. чел.</p>
								<p class="card__text text-square">Площадь: 2 381,741 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: CET (UTC+1)</p>
							</div>
						</div>
						<div class="item item_2">
							<img class="card__img" src="@/assets/Flag_of_Egypt.svg" alt="Фотография флага" />
							<div class="item__card">
								<p class="card__heading">Арабская Республика Египет</p>
								<p class="card__text text-population">Население: 106 221,67 тыс. чел.</p>
								<p class="card__text text-square">Площадь: 1 001,45 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: EET (UTC+2)</p>
							</div>
						</div>
						<div class="item item_3">
							<img class="card__img" src="@/assets/Flag_of_Libya.png" alt="Фотография флага" />
							<div class="item__card">
								<p class="card__heading">Государство Ливия</p>
								<p class="card__text text-population">Население: 7 361,263 тыс. чел.</p>
								<p class="card__text text-square">Площадь: 1 759,54 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: EET (UTC+2)</p>
							</div>
						</div>
						<div class="item item_4">
							<img class="card__img" src="@/assets/Flag_of_Mauritania.svg" alt="Фотография флага" />
							<div class="item__card">
								<p class="card__heading">Исламская Республика Мавритания</p>
								<p class="card__text text-population">Население: 4 328,04 тыс. чел.</p>
								<p class="card__text text-square">Площадь: 1 030,7 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: GMT (UTC+0)</p>
							</div>
						</div>
						<div class="item item_5">
							<img class="card__img" src="@/assets/Flag_of_Morocco.svg" alt="Фотография флага" />
							<div class="item__card">
								<p class="card__heading">Королевство Марокко</p>
								<p class="card__text text-population">Население: 36 828,33 тыс. чел.</p>
								<p class="card__text text-square">Площадь: 446 550 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: GMT (UTC+0)</p>
							</div>
						</div>
						<div class="item item_6">
							<img class="card__img" src="@/assets/Flag_of_Sudan.png" alt="Фотография флага" />
							<div class="item__card">
								<p class="card__heading">Республика Судан</p>
								<p class="card__text text-population">Население: 50 467,278 тыс. чел.</p>
								<p class="card__text text-square">Площадь: 1 886,068 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: EET (UTC+2)</p>
							</div>
						</div>
						<div class="item item_7">
							<img class="card__img" src="@/assets/Flag_of_the_Sahrawi_Arab_Democratic_Republic.png" alt="Фотография флага" />
							<div class="item__card">
								<p class="card__heading">Сахарская Арабская Демократическая Республика</p>
								<p class="card__text text-population">Население: 607,292 тыс. чел.</p>
								<p class="card__text text-square">Площадь: 266 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: GMT (UTC+0)</p>
							</div>
						</div>
						<div class="item item_8">
							<img class="card__img" src="@/assets/Flag_of_Tunisia.svg" alt="Фотография флага" />
							<div class="item__card">
								<p class="card__heading">Тунисская Республика</p>
								<p class="card__text text-population">Население: 11 708,37 тыс. чел.</p>
								<p class="card__text text-square">Площадь: 163,61 тыс. кв. км</p>
								<p class="card__text text-time">Часовой пояс: CET (UTC+1)</p>
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
	name: 'CentralAsia'
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

.banner__heading {
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

.text-heading {
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

.card__heading {
	font-size: 27px;
}

.item__card {
	display: grid;
	grid-template-rows: 125px 30px 30px 30px;
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

	.banner__heading {
		font-size: 60px;
	}

	.item {
		flex-direction: column;
	}

	.card__heading {
		margin-bottom: 0;
	}
}

@media screen and (width < 1000px) {
	.banner__heading {
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
		height: 100%;
	}

	.main {
		padding: 10px;
	}
	.item__card {
		display: flex;
		flex-direction: column;
		padding-bottom: 40px;
	}
	.container__card {
		display: flex;
		flex-direction: column;
	}
	.card {
		flex-direction: column;
	}
}
</style>
