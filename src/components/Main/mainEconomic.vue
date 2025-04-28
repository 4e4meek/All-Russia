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
				const response = await axios.get('https://allrussia.info/api/data_news_economics')
				this.items = response.data
			} catch (error) {
				console.error('Ошибка при загрузке данных по экономике:', error)
			}
		},
		getImageUrl(url) {
			return url || 'default-image-path.jpg' // Укажите путь по умолчанию
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
				<img src="../../assets/about1.png" alt="item.title" class="article-image" />
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
	margin-bottom: 32px;
}
.container {
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.item_1,
.item_2 {
	display: flex;
	justify-content: space-between;
}

h3 {
	font-weight: normal;
	font-size: 20px;
	margin-top: 16px;
	margin-bottom: 24px;
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
	border-top: 1px solid;
	margin: 0 auto;
}

.red-rectangle {
	width: 88px; /* ширина прямоугольника */
	height: 8px; /* высота прямоугольника */
	background-color: #aa0000; /* цвет фона прямоугольника */
	margin-bottom: 10px;
}

.asd {
	max-width: 223px;
	padding-right: 20px;
}

h3 {
	font-size: 24px;
	margin: 6px 0px 16px 0px;
}

@media (width < 768px) {
	.wrapper {
		margin-bottom: 20px;
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
	.wrapper {
		padding: 10px;
		margin-bottom: 20px;
		width: 100%;
	}
}
</style>
