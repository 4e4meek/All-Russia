<script>
import axios from 'axios'

export default {
	name: 'mainEconomic',
	data() {
		return {
			items: []
		}
	},
	mounted() {
		this.fetchEconomicData()
	},
	methods: {
		async fetchEconomicData() {
			try {
				const response = await axios.get('http://localhost:5000/api/data_news_economics')
				this.items = response.data
			} catch (error) {
				console.error('Ошибка при загрузке данных по экономике:', error)
			}
		},
		getImageUrl(url) {
			try {
				return url || 'default-image-path.jpg'
			} catch (error) {
				console.error("erm what the sigma:", error)
			}
			
		}
	}
}
</script>

<template>
	<div class="wrapper">
		<div class="horizontal-line"></div>
		<div class="red-rectangle"></div>
		<h3>ЭКОНОМИКА</h3>

		<div class="container">
			<div v-for="item in items" :key="item.id" class="item">
				<img :src="getImageUrl(item.url)" :alt="item.title" />
				<div class="asd">
					<p class="item_1-txt">{{ item.title }}</p>
					<p>{{ item.subtitle }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.wrapper {
	max-width: 1480px;
	margin-bottom: 32px;
	padding: 0 20px 0 20px;
}
.container {
	margin: 0 auto;
	display: flex;
	gap: 20px;
	align-items: center;
	justify-content: space-between;
}

.item {
	display: grid;
	grid-template-columns: 1fr 1fr;
}

.item > img {
	order: 2;
}

.item:not(:nth-last-child(-n+2)) {
	display: none;
}

h3 {
	font-weight: normal;
	font-size: 36px;
	margin: 6px 0px 16px 5px;
}

p {
	font-size: 16px;
}

.item_1-txt {
	font-family: 'Roboto Condensed';
	font-weight: bold;
	font-size: 20px;
	line-height: 26px;
	margin-bottom: 20px;
	margin-top: 0;
}

.horizontal-line {
	height: 1px;
	width: 100%;
	background-color: #000;
	margin: 0 auto;
}

.red-rectangle {
	width: 88px; /* ширина прямоугольника */
	height: 8px; /* высота прямоугольника */
	background-color: #aa0000; /* цвет фона прямоугольника */
	margin-bottom: 10px;
}

@media (width < 768px) {
	.wrapper {
		margin-bottom: 20px;
		padding: 10px 20px 5px 20px;
		width: 100%;
	}
	.container {
		padding: 10px;
		width: 100%;
		display: grid;
		grid-template-columns: 100vw 100vw 100vw;
		grid-template-rows: auto;
		scroll-snap-type: x mandatory;
		overflow-x: scroll;
	}
	.item_1-txt{
		margin-bottom: 5px;
		font-size: 18px;
	}
	p{
		font-size: 18px;
	}
	h3 {
		font-family: "Roboto Condensed";
		text-transform: uppercase;
		font-size: 24px;
		font-weight: 400;
		line-height: 150%;
		margin-left: 0;
	}
	.item {
		display: none;
	}
	.item:nth-child(-n+3) {
		display: flex;
		flex-direction: column;
		width: 90%;
		padding-left: 20px;
		padding-right: 20px;
		scroll-snap-align: start;
	}

	.asd,
	.item_1-txt {
		max-width: 100vw;
	}
	.horizontal-line,
	{
		width: 100%;
	}
}
</style>
