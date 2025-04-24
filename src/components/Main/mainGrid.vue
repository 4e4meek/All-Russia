<template>
	<div class="container">
		<!-- Блок главной статьи -->
		<div class="item item_1">
			<div class="item_1-header">
				<div class="horizontal-line"></div>
				<div class="red-rectangle"></div>
				<h3 class="item-title">Важное</h3>
			</div>
			<div class="item_1-one">
				<img
					class="item_1-shadow"
					src="../../assets/comunicacion%20politica%20(1)%201.png"
					alt="123"
				/>
				<h3 class="item_1-title">
					{{ main_article.title }}
				</h3>
				<p class="item_1-subtitle">//{{ main_article.subtitle }}</p>
				<div class="vertical-line"></div>
				<p class="item_1-text">Похожие новости</p>
				<ul class="item_1-list">
					<li v-for="article in same_as_article" :key="article.id">
						{{ article.title }}
					</li>
				</ul>
			</div>
			<div class="item_1-two">
				<img
					class="item_1-img"
					src="../../assets/comunicacion%20politica%20(1)%201.png"
					alt="123"
				/>
			</div>
		</div>

		<!-- Блок последних новостей -->
		<div class="item item_2">
			<div class="horizontal-line"></div>
			<div class="red-rectangle"></div>
			<h3 class="item-title">Последние новости</h3>
			<img
				class="item_2-img"
				src="../../assets/284320788be7027b8bea3f687155b7fb%201.png"
				alt="asd"
			/>
			<div v-html="html" class="scroll-text font-sizestyle"></div>
			<p class="asd font-bold">
				{{ latest_news[0] ? getTimeAgo(latest_news[0].updated) : 'Загрузка...' }}
			</p>

			<!-- Отображение последних новостей -->
			<div v-for="item in latest_news" :key="item.id" class="news-item">
				<div class="max-width-[345px] h-[0px] border border-[#aaaaaa] mb-2 mt-2"></div>
				<p class="item_2-list">{{ item.title }}</p>
			</div>
		</div>

		<!-- хожих статей -->
		<div class="item item_3">
			<div class="item-block">
				<img :src="`../../assets/${1}.png`" alt="" class="mb-4" />
				<p class="dsa">{{ same_as_article[0]?.subtitle || 'Загрузка...' }}</p>
			</div>
		</div>

		<div class="item item_4">
			<div class="item-block">
				<img :src="`../../assets/${2}.png`" alt="" class="mb-4" />
				<p class="dsa">{{ same_as_article[1]?.subtitle || 'Загрузка...' }}</p>
			</div>
		</div>

		<div class="item item_5">
			<div class="item-block">
				<img :src="`../../assets/${3}.png`" alt="" class="mb-4" />
				<p class="dsa">{{ same_as_article[2]?.subtitle || 'Загрузка...' }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'mainGrid',
	data() {
		return {
			same_as_article: [],
			main_article: {},
			latest_news: [],
			html: ''
		}
	},
	mounted() {
		this.fetchMainArticle()
		this.fetchLatestNews()
	},
	methods: {
		async fetchMainArticle() {
			try {
				const response = await axios.get('https://allrussia.info/api/data_main_page')
				this.main_article = response.data.main_article[0]
				this.same_as_article = response.data.same_as_main.slice(0, 3)
				console.log('Same as article:', this.same_as_article)
			} catch (error) {
				console.error('Error fetching main article:', error)
			}
		},
		async fetchLatestNews() {
			try {
				const categories = [
					'politics',
					'economics',
					'science_education',
					'culture_history',
					'sport',
					'tourism'
				]

				const requests = categories.map((category) =>
					axios.get(`https://allrussia.info/api/data_news_${category}`)
				)

				const responses = await Promise.all(requests)
				this.latest_news = responses
					.map((res) => res.data)
					.flat()
					.sort((a, b) => new Date(b.updated) - new Date(a.updated)) // Сортировка по дате
					.slice(0, 4)
				this.html = this.latest_news[0]?.subtitle || 'Загрузка...'
				console.log('Latest news:', this.latest_news)
			} catch (error) {
				console.error('Error fetching latest news:', error)
			}
		},
		getTimeAgo(dateString) {
			const now = new Date()
			const date = new Date(dateString)
			const diffInSeconds = Math.floor((now - date) / 1000)

			if (diffInSeconds < 60) {
				return `${diffInSeconds} секунд назад`
			} else if (diffInSeconds < 3600) {
				const minutes = Math.floor(diffInSeconds / 60)
				return `${minutes} минут назад`
			} else if (diffInSeconds < 86400) {
				const hours = Math.floor(diffInSeconds / 3600)
				return `${hours} часов назад`
			} else {
				const days = Math.floor(diffInSeconds / 86400)
				return `${days} дней назад`
			}
		}
	}
}
</script>

<style scoped>
.container {
	margin: 0 auto;
	margin-top: 80px;
	width: 1440px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: repeat(2, 400px);
	grid-row-gap: 32px;
	grid-column-gap: 20px;
}
.item_1 {
	display: flex;
	justify-content: space-between;
	grid-column: 1/4;
}
.item_2 {
	max-width: 300px;
	grid-column: 4/4;
	grid-row: 1/3;
}

.horizontal-line {
	height: 1px;
	width: 100%;
	background-color: #000;
	margin: 0 auto;
}

.vertical-line {
	height: 1px; /* Высота линии */
	width: 140px; /* Ширина линии */
	background-color: black; /* Цвет линии */
	opacity: 0.4;
}
.diviver {
	height: 1px;
	width: 100%;
	background-color: black;
}
.item_2-subtitle {
	font-family: 'Roboto Condensed';
	margin: 8px 0;
	font-size: 20px;
	font-weight: bold;
}
.item_2-list {
	font-family: 'Roboto';
	font-size: 16px;
	font-weight: normal;
}

.asd {
	margin-top: 0;
	margin-bottom: 12px;
	color: #aa0000;
	font-size: 12px;
}
.dsa {
	font-weight: 600;
	font-size: 18px;
}
.red-rectangle {
	width: 88px;
	height: 8px;
	background-color: #aa0000;
}
.item-title {
	margin: 0;
	font-weight: normal;
	width: 300px;
	font-size: 20px;
	padding: 0 10px 10px 10px;
}
.item_1-subtitle {
	padding: 0 10px 10px 10px;
	font-size: 16px;
}

.item_1-text {
	padding: 10px 10px 10px 10px;
	font-size: 20px;
	font-weight: 600;
}

.item_1-list {
	padding: 0 30px 30px 40px;
}

.item_1-header {
	display: none;
}

.item_1-shadow {
	display: none;
}

.item_2-img {
	max-width: 300px;
}

.scroll-text {
	height: 200px; /* Фиксированная высота */
	overflow-y: auto; /* Включаем вертикальный скролл */
	margin-bottom: 12px; /* Отступ снизу */
	padding-right: 8px; /* Чтобы текст не прилипал к скроллбару */

	/* Стилизация скроллбара (опционально) */
	scrollbar-width: thin;
	scrollbar-color: #a6a49e transparent;
}

scroll-text p {
	font-size: 100px;
}

.scroll-text::-webkit-scrollbar {
	width: 4px;
}

.scroll-text::-webkit-scrollbar-track {
	background: #f1f1f1;
}

.scroll-text::-webkit-scrollbar-thumb {
	background: #888;
}

.scroll-text::-webkit-scrollbar-thumb:hover {
	background: #555;
}

@media screen and (width < 769px) {
	.item_1 {
		display: grid;
		grid-column: 4/4;
		grid-row: 1/3;
		position: relative;
	}
	.item_1-header {
		display: block;
	}
	.item_2 {
		max-width: 100%;
		display: flex;
		flex-direction: column;
	}
	.vertical-line {
		display: none;
	}
	.horizontal-line {
		width: 100%;
	}
	.container {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 10px;
		margin-top: 0px;
		justify-content: center;
		align-items: center;
	}
	.item_1-text {
		display: none;
	}
	.item_1-list {
		display: none;
	}
	.item_1-one {
		display: flex;
		flex-direction: column;
	}
	.item_1-img {
		display: none;
	}
	.item_1-shadow {
		display: flex;
	}
	.item-title {
		padding: 0px;
		font-size: 25px;
		text-transform: uppercase;
	}
	.item_2-img {
		max-width: 100%;
	}
	.item_3,
	.item_4,
	.item_5 {
		display: none;
	}
}
</style>
