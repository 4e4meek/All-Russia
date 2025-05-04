<template>
	<div class="main">
		<div class="banner">
			<h1 class="banner__heading">Северо-Западный федеральный округ</h1>
		</div>
		<div class="list">
			<div class="wrapper">
				<div class="list__top top">
					<span class="top__line-red line-red"></span>
					<p class="top__text text-heading">Центр Северо-Запада</p>
					<div class="top__card card">
						<img class="card__img__top border__img" src="@/assets/Saint_Petersburg.png" alt="Флаг Санкт-Петербурга"/>
						<div class="card__box">
							<p class="card__heading">Санкт-Петербург</p>
							<div>
								<p class="card__text">Население: 5 384 000 чел.</p>
								<p class="card__text">Площадь: 1.4 тыс. км²</p>
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
							<img class="card__img border__img" src="@/assets/arkhangelsk_flag.png" alt="Флаг Архангельской области"/>
							<div class="item__card">
								<p class="card__heading card__heading__item">Архангельская область</p>
								<div>
									<p class="card__text">Население: 1 116 000 чел.</p>
									<p class="card__text">Площадь: 589 тыс. км²</p>
									<p class="card__text">Часовой пояс: MSK+1 (UTC+4)</p>
								</div>
							</div>
						</div>
						<div class="item">
							<img class="card__img border__img" src="@/assets/kaliningrad_flag.png" alt="Флаг Калининградской области"/>
							<div class="item__card">
								<p class="card__heading card__heading__item">Калининградская область</p>
								<div>
									<p class="card__text">Население: 1 008 000 чел.</p>
									<p class="card__text">Площадь: 15.1 тыс. км²</p>
									<p class="card__text">Часовой пояс: MSK-1 (UTC+2)</p>
								</div>
							</div>
						</div>
						<div class="item">
							<img class="card__img border__img" src="@/assets/karelia_flag.png" alt="Флаг Республики Карелия"/>
							<div class="item__card">
								<p class="card__heading card__heading__item">Республика Карелия</p>
								<div>
									<p class="card__text">Население: 579 000 чел.</p>
									<p class="card__text">Площадь: 172.4 тыс. км²</p>
									<p class="card__text">Часовой пояс: MSK (UTC+3)</p>
								</div>
							</div>
						</div>
						<div class="item">
							<img class="card__img border__img" src="@/assets/murmansk_flag.png" alt="Флаг Мурманской области"/>
							<div class="item__card">
								<p class="card__heading card__heading__item">Мурманская область</p>
								<div>
									<p class="card__text">Население: 717 000 чел.</p>
									<p class="card__text">Площадь: 144.9 тыс. км²</p>
									<p class="card__text">Часовой пояс: MSK (UTC+3)</p>
								</div>
							</div>
						</div>
						<div class="item">
							<img class="card__img border__img" src="@/assets/novgorod_flag.png" alt="Флаг Новгородской области"/>
							<div class="item__card">
								<p class="card__heading card__heading__item">Новгородская область</p>
								<div>
									<p class="card__text">Население: 602 000 чел.</p>
									<p class="card__text">Площадь: 54.5 тыс. км²</p>
									<p class="card__text">Часовой пояс: MSK (UTC+3)</p>
								</div>
							</div>
						</div>
						<div class="item">
							<img class="card__img border__img" src="@/assets/pskov_flag.png" alt="Флаг Псковской области"/>
							<div class="item__card">
								<p class="card__heading card__heading__item">Псковская область</p>
								<div>
									<p class="card__text">Население: 626 000 чел.</p>
									<p class="card__text">Площадь: 55.3 тыс. км²</p>
									<p class="card__text">Часовой пояс: MSK (UTC+3)</p>
								</div>
							</div>
						</div>
						<div class="item">
							<img class="card__img border__img" src="@/assets/vologda_flag.png" alt="Флаг Вологодской области"/>
							<div class="item__card">
								<p class="card__heading card__heading__item">Вологодская область</p>
								<div>
									<p class="card__text">Население: 1 155 000 чел.</p>
									<p class="card__text">Площадь: 145.7 тыс. км²</p>
									<p class="card__text">Часовой пояс: MSK (UTC+3)</p>
								</div>
							</div>
						</div>
						<div class="item">
							<img class="card__img border__img" src="@/assets/leningrad_flag.png" alt="Флаг Ленинградской области"/>
							<div class="item__card">
								<p class="card__heading card__heading__item">Ленинградская область</p>
								<div>
									<p class="card__text">Население: 1 921 000 чел.</p>
									<p class="card__text">Площадь: 83.9 тыс. км²</p>
									<p class="card__text">Часовой пояс: MSK (UTC+3)</p>
								</div>
							</div>
						</div>
						<div class="item">
							<img class="card__img border__img" src="@/assets/komi_flag.png" alt="Флаг Республики Коми"/>
							<div class="item__card">
								<p class="card__heading card__heading__item">Республика Коми</p>
								<div>
									<p class="card__text">Население: 807 000 чел.</p>
									<p class="card__text">Площадь: 416.8 тыс. км²</p>
									<p class="card__text">Часовой пояс: MSK+1 (UTC+4)</p>
								</div>
							</div>
						</div>
						<div class="item">
							<img class="card__img border__img" src="@/assets/nw_flag.png" alt="Флаг Ненецкого автономного округа"/>
							<div class="item__card">
								<p class="card__heading card__heading__item">Ненецкий автономный округ</p>
								<div>
									<p class="card__text">Население: 44 000 чел.</p>
									<p class="card__text">Площадь: 176.7 тыс. км²</p>
									<p class="card__text">Часовой пояс: MSK+1 (UTC+4)</p>
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
	name: 'NorthWest'
}
</script>

<style scoped>
@import '@/styles/russiaDistrict.css';
</style>
