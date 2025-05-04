<template>
	<div class="main">
		<div class="banner">
			<h1 class="banner__heading">Северо-Кавказский федеральный округ</h1>
		</div>
		<div class="list">
			<div class="wrapper">
				<div class="list__top top">
					<span class="top__line-red line-red"></span>
					<p class="top__text text-heading">Центр Северного Кавказа</p>
					<div class="top__card card">
						<img class="card__img__top border__img" src="@/assets/pyatigorsk_flag.png" alt="Флаг Пятигорска"/>
						<div class="card__box">
							<p class="card__heading">Пятигорск</p>
							<div>
								<p class="card__text">Население: 150 000 чел.</p>
								<p class="card__text">Площадь: 97 км²</p>
								<p class="card__text">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
					</div>
				</div>
				<div class="list__bottom bottom">
					<span class="bottom__line-red line-red"></span>
					<p class="bottom__text text-heading">Регионы</p>
					<div class="container__card">
						<div class="item">
							<img class="card__img border__img" src="@/assets/dagestan.png" alt="Флаг Республики Дагестан"/>
							<div class="item__card">
								<p class="card__heading card__heading__item">Республика Дагестан</p>
								<div>
									<p class="card__text">Население: 3 232 000 чел.</p>
									<p class="card__text">Площадь: 50 тыс. км²</p>
									<p class="card__text">Часовой пояс: MSK (UTC+3)</p>
								</div>
							</div>
						</div>
						<div class="item">
							<img class="card__img border__img" src="@/assets/ingushetia_flag.png" alt="Флаг Республики Ингушетия"/>
							<div class="item__card">
								<p class="card__heading card__heading__item">Республика Ингушетия</p>
								<div>
									<p class="card__text">Население: 312 000 чел.</p>
									<p class="card__text">Площадь: 3.6 тыс. км²</p>
									<p class="card__text">Часовой пояс: MSK (UTC+3)</p>
								</div>
							</div>
						</div>
						<div class="item">
							<img class="card__img border__img" src="@/assets/kabrdino.png" alt="Флаг Кабардино-Балкарской Республики"/>
							<div class="item__card">
								<p class="card__heading card__heading__item">Кабардино-Балкарская Республика</p>
								<div>
									<p class="card__text">Население: 905 000 чел.</p>
									<p class="card__text">Площадь: 12.5 тыс. км²</p>
									<p class="card__text">Часовой пояс: MSK (UTC+3)</p>
								</div>
							</div>
						</div>
						<div class="item">
							<img class="card__img border__img" src="@/assets/karach.png" alt="Флаг Карачаево-Черкесской Республики"/>
							<div class="item__card">
								<p class="card__heading card__heading__item">Карачаево-Черкесская Республика</p>
								<div>
									<p class="card__text">Население: 468 000 чел.</p>
									<p class="card__text">Площадь: 14 тыс. км²</p>
									<p class="card__text">Часовой пояс: MSK (UTC+3)</p>
								</div>
							</div>
						</div>
						<div class="item">
							<img class="card__img border__img" src="@/assets/osetia.png" alt="Флаг Республики Северная Осетия - Алания"/>
							<div class="item__card">
								<p class="card__heading card__heading__item">Республика Северная Осетия - Алания</p>
								<div>
									<p class="card__text">Население: 679 000 чел.</p>
									<p class="card__text">Площадь: 8 тыс. км²</p>
									<p class="card__text">Часовой пояс: MSK (UTC+3)</p>
								</div>
							</div>
						</div>
						<div class="item">
							<img class="card__img border__img" src="@/assets/chechnya.png" alt="Флаг Чеченской Республики"/>
							<div class="item__card">
								<p class="card__heading card__heading__item">Чеченская Республика</p>
								<div>
									<p class="card__text">Население: 1 553 000 чел.</p>
									<p class="card__text">Площадь: 16.2 тыс. км²</p>
									<p class="card__text">Часовой пояс: MSK (UTC+3)</p>
								</div>
							</div>
						</div>
						<div class="item">
							<img class="card__img border__img" src="@/assets/stavropol.png" alt="Флаг Ставропольского края"/>
							<div class="item__card">
								<p class="card__heading card__heading__item">Ставропольский край</p>
								<div>
									<p class="card__text">Население: 2 886 000 чел.</p>
									<p class="card__text">Площадь: 66 тыс. км²</p>
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
	name: 'CaucasusFederalDistrict'
}
</script>

<style scoped>
@import '@/styles/russiaDistrict.css';
</style>
