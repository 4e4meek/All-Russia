<script>
import axios from 'axios'

export default {
	name: 'PoliticPage',
	data() {
		return {
			mainContent: null,
			newsItems: [],
			apiUrlMain: 'https://allrussia.info/api/main-content', // Replace with your actual API URL for main content
			apiUrlNews: 'https://allrussia.info/api/data_news_politics' // Replace with your actual API URL for news
		}
	},
	mounted() {
		this.fetchMainContent()
		this.fetchNewsItems()
	},
	methods: {
		async fetchMainContent() {
			try {
				const response = await axios.get(this.apiUrlMain)
				this.mainContent = response.data
			} catch (e) {
				console.error('Error fetching main content:', e)
			}
		},
		async fetchNewsItems() {
			try {
				const response = await axios.get(this.apiUrlNews)
				this.newsItems = response.data // Assuming the API returns an array of news items
			} catch (e) {
				console.error('Error fetching news items:', e)
			}
		}
	}
}
</script>

<template>
	<div class="wrapper">
		<div class="horizontal-line"></div>
		<div class="red-rectangle"></div>
		<h3>ПОЛИТИКА</h3>
		<div class="wrapper_main">
			<div class="item item_main_1">

				<img :src="mainContent?.url" alt="Main content image" />

			</div>
			<div class="item item_main_2">
				<h2 class="main_title">{{ mainContent?.title }}</h2>
				<p class="main_subtitle">{{ mainContent?.updated }}</p>
				<p class="main_subtitle-1">{{ mainContent?.subtitle }}</p>
			</div>
		</div>

		<div class="container">

			<div v-for="item in newsItems" :key="item.id" class="item">
				<img :src="item.url" alt="News image" />
				<h2 class="container_title">{{ item.title }}</h2>
				<p class="container_subtitle">{{ item.updated }}</p>

			</div>
		</div>
		<div class="horizontal-line"></div>
		<div class="red-rectangle"></div>
		<h3>ПОСЛЕДНИЕ НОВОСТИ</h3>

		<div class="news_container">

			<div v-for="item in newsItems" :key="item.id" class="items">
				<img :src="item.url" alt="News image" />
				<h2 class="container_title">{{ item.title }}</h2>
				<p class="main_subtitle">{{ item.updated }}</p>

			</div>
		</div>
	</div>
</template>

<style scoped>
.wrapper {
	margin-top: 80px;
	max-width: 1440px;
}

.container {
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(4, 345px);
	grid-template-rows: 340px;
	grid-column-gap: 20px;
}
.wrapper_main {
	display: flex;
	justify-content: space-between;
	margin-bottom: 24px;
}

.news_container {
	display: grid;
	grid-template-columns: 1000px;
	grid-template-rows: repeat(7, 400px);
	margin-top: 10px;
}

h3 {
	font-size: 40px;
	font-weight: normal;
	margin-top: 16px;
	margin-bottom: 24px;
}

.horizontal-line {
	height: 0.3px;
	opacity: 0.4;
	width: 100%;
	border-top: 1px solid;
	margin: 50px;
}

.red-rectangle {
	width: 88px; /* ширина прямоугольника */
	height: 8px; /* высота прямоугольника */
	background-color: #aa0000; /* цвет фона прямоугольника */
	margin: 0px;
	margin-top: -50px;
}
.main_title {
	font-family: 'Roboto Condensed';
	font-weight: bold;
	font-size: 30px;
	margin: 0 0 2px 0;
}
.main_subtitle {
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	margin-bottom: 40px;
}
.main_subtitle-1 {
	font-size: 18px;
	font-family: 'Roboto', sans-serif;
}
.item_main_1 {
	margin-right: 20px;
}
.container_title {
	font-family: 'Roboto Condensed';
	font-weight: bold;
	font-size: 20px;
	margin-top: 8px;
}
.container_subtitle {
	font-size: 14px;
}

.items {
	display: flex;
	gap: 20px; /* Отступ между изображением и текстовым блоком */
	margin-bottom: 20px; /* Отступ между элементами */
	align-items: flex-start; /* Выравнивание содержимого по верхнему краю */
}

.item-content {
	display: block; /* Убираем flex для размещения элементов друг под другом */
}

.main_title {
	font-size: 30px;
	color: #333;
	margin: 0 0 10px 0; /* Отступ снизу */
	line-height: 1.4;
	font-weight: bold;
}

.main_subtitle {
	font-size: 14px;
	color: #777;
	margin: 0 0 10px 0; /* Отступ снизу */
}

.container_title {
	font-size: 16px;
	color: #555;
	margin: 0;
	line-height: 1.5;
}


</style>
