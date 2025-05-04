<template>
	<div class="container">
		<!-- Блок главной статьи -->
		<div class="main__news">

			<div class="main__news-title">
				<div class="main__news-header">
					<div class="horizontal-line"></div>
					<div class="red-rectangle"></div>
					<h3>Важное</h3>
				</div>

 				<img
 					src="../../assets/comunicacion%20politica%20(1)%201.png"
 					alt="IMAGE"
				/>

				<div class="main__news-article">
					<h2>{{ main_article?.title || 'Загрузка...' }}</h2>
					<p>{{ main_article?.subtitle || 'Загрузка...' }}</p>
					<div class="vertical-line"></div>
				</div>
			</div>

			<div class="main__news-img">
 				<img
 					src="../../assets/comunicacion%20politica%20(1)%201.png"
 					alt="IMAGE"
 				/>
 			</div>
 			
			<div class="main__news-similar">
 				<h2>Похожие новости</h2>
 				<ul>
 					<li v-for="article in same_as_article" :key="article.id">
 						<span class="dot"></span>
 						{{ article?.title || 'Загрузка...' }}
 					</li>
 				</ul>
			</div>
		</div>

		<!-- Блок последних новостей -->
		<div class="last__news">
			<div class="horizontal-line"></div>
			<div class="red-rectangle"></div>
			<h3>Последние новости</h3>

			<div class="last__news-img">
				<img
					src="../../assets/284320788be7027b8bea3f687155b7fb%201.png"
					alt="asd"
				/>
			</div>

			<h2 class="last__news-title">
				{{ latest_news[0]?.title || 'Загрузка...' }}
			</h2>
			<p>
				{{ latest_news[0] ? getTimeAgo(latest_news[0].updated) : 'Загрузка...' }}
			</p>

			<!-- Отображение последних новостей -->
			<div v-for="item in latest_news" :key="item.id" class="news-item">
				<div class="max-width-[345px] h-[0px] border border-[#aaaaaa] mb-2 mt-2"></div>
				<p class="item_2-list">{{ item?.title || 'Загрузка...'  }}</p>
			</div>
		</div>
	
		<!-- Отображение похожих статей -->
		<div class="similar__news">
			<div class="horizontal-line"></div>
			
			<div class="similar__news-article">
			<div class="similar__news-item">
				<div class="item-block">
					<img :src="`../../assets/${1}.png`" alt="" class="mb-4" />
					<p class="dsa">{{ same_as_article[0]?.subtitle || 'Загрузка...' }}</p>
				</div>
			</div>
			<div class="similar__news-item">
				<div class="item-block">
					<img :src="`../../assets/${2}.png`" alt="" class="mb-4" />
					<p class="dsa">{{ same_as_article[1]?.subtitle || 'Загрузка...' }}</p>
				</div>
			</div>
			<div class="similar__news-item">
				<div class="item-block">
					<img :src="`../../assets/${3}.png`" alt="" class="mb-4" />
					<p class="dsa">{{ same_as_article[2]?.subtitle || 'Загрузка...' }}</p>
				</div>
			</div>
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
	margin-top: 70px;
	padding: 0 20px 0 20px;
	max-width: 1480px;
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: 500px 360px;
	grid-row-gap: 32px;
	grid-column-gap: 20px;
	justify-content: center;
}


h3 {
	font-family: "Roboto Condensed";
	font-weight: 450;
	font-size: 20px;
	margin: 5px 0 10px 0;
}
h2 {
	font-family: "Roboto Condensed";
	font-size: 20px;
	max-width: 345px;
}
p {
	font-size: 16px;
	max-width: 345px;
}

.red-rectangle {
	width: 88px;
	height: 8px;
	background-color: #aa0000;
}
.horizontal-line {
	height: 1px;
	width: 100%;
	background-color: #AAAAAA;;
	margin: 0 auto;
}
.vertical-line {
	height: 1px;
	max-width: 140px;
	background-color: #AAAAAA;
	margin: 0 0 20px 0;
}

/* Блок главной статьи */
.main__news {
	grid-row: 1/2;
	display: grid;
	grid-template-columns: 2fr 3.9fr;
	grid-template-rows: 180px auto;
	grid-column-gap: 20px;
	justify-content: center;
}
.main__news-title > img {
	display: none;
}

.main__news-article > h3 {
	display: none;
}
.main__news-article > p {
	margin: 15px 0 30px 0;
}
.main__news-img {
	justify-content: flex-end;
}
.{
	display: none;
}

.dot {
  height: 15px;
  width: 15px;
  background-color: #AA0000;
  border-radius: 50%;
  display: inline-block;
}

.main__news-similar > ul > li {
	display: grid;
	grid-template-columns: 20px auto;
	font-size: 16px;
	align-items: center;
	margin: 15px 0 15px 15px;
}
/* Конец блока главной статьи */

/* Блок последних новостей */
.last__news {
	display: flex;
	flex-direction: column;
	max-width: 345px;
	grid-row: 1/3;
}

.last__news > p {
	font-weight: bold;
	margin-top: 0;
	margin-bottom: 12px;
	color: #aa0000;
	font-size: 12px;
}
/* Конец блока последних новостей */

/* Блок похожих новостей */
.similar__news {
	grid-row: 2/3;
	display: flex;
	flex-direction: column;
}

.similar__news-article {
	display: flex;
	justify-content: center;
	gap: 20px;
	margin: 20px 0 20px 0;
}
/* Конец блока похожих новостей */

@media (768px < width < 1200px) {
	.main__news {
	display: flex;
	flex-direction: column;
	}

	.main__news-img {
		display: none;
	}
}

@media screen and (width < 769px) {
	.container {
		display: flex;
		flex-direction: column;
		margin-top: 20px;
	}
	h3 {
		font-family: "Roboto Condensed";
		text-transform: uppercase;
		font-size: 22px;
		font-weight: 400;
		line-height: 150%;
	}
	h2 {
		max-width: 100%;
	}
	p {
		max-width: 100%;
	}


	.main__news {
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
	}
	.main__news-title > img {
		display: block;
	}
	.main__news-img {
		display: none;
	}

	.last__news {
		max-width: 100%;
	}

	.main__news-similar,
	.vertical-line,
	.similar__news {
		display: none;
	}

}
</style>
