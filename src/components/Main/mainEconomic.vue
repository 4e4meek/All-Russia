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
	<div class="wrapper" style="margin-bottom: 32px">
		<div class="horizontal-line"></div>
		<div class="red-rectangle"></div>
		<h3>ЭКОНОМИКА</h3>

		<div class="container">
			<div v-for="item in items" :key="item.id" class="item">
				<div class="asd">
					<p class="item_1-txt">{{ item.title }}</p>
					<p>{{ item.subtitle }}</p>
				</div>
				<img :src="getImageUrl(item.url)" :alt="item.title" />
			</div>
		</div>
	</div>
</template>

<style scoped>
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
	background-color: #000;
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
}

@media (width < 768px) {
	.container {
		display: grid;
		grid-template-columns: 100vw 100vw 100vw 100vw;
		padding: 10px;
		scroll-snap-type: x mandatory;
		overflow-x: scroll;
	}
	.item {
		scroll-snap-align: start;
	}
	
	.horizontal-line {
		width: 100%;
	}
	.wrapper {
		padding: 10px;
		margin-bottom: 20px;
		width: 100%;
	}
}
</style>
