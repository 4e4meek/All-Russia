
<script>
import axios from 'axios'

export default {
	name: 'mainCulture',
	data() {
		return {
			articles: [], // Храним статьи из API
			loading: true,
			error: null,
			apiUrlNews: 'https://allrussia.info/api/data_news_culture_history'
		}
	},
	async mounted() {
		await this.fetchMainCulture()
	},
	methods: {
		async fetchMainCulture() {
			try {
				const response = await axios.get(this.apiUrlNews)
				this.articles = response.data // Предполагается, что это массив статей
				this.loading = false
			} catch (e) {
				console.error('Error fetching articles:', e)
				this.error = 'Failed to load data'
				this.loading = false
			}
		}
	}
}

</script>

<template>
	<div>
		<div class="wrapper">
			<div class="horizontal-line"></div>
			<div class="red-rectangle"></div>
			<h3>КУЛЬТУРА И ИСТОРИЯ</h3>


			<!-- Сообщение о загрузке -->
			<div v-if="loading">Загрузка...</div>
			<!-- Сообщение об ошибке -->
			<div v-if="error">{{ error }}</div>

			<!-- Отображение статей -->
			<div v-if="!loading && !error" class="container">
				<div v-for="article in articles" :key="article.id" class="item">
					<img :src="article.url" alt="Article image" />
					<h3 class="title">{{ article.title }}</h3>
					<p class="subtitle">{{ article.subtitle }}</p>
					<p class="subtitle">{{ article.updated }}</p>

				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.wrapper {
	max-width: 1480px;
	margin-bottom: 90px;
	padding: 0 20px 0 20px;
}

.container {
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 357px;
}

.horizontal-line {
	height: 1px;
	width: 1440px;
	border-top: 1px solid;
	margin: 0 auto;
}

.red-rectangle {
	width: 88px;
	height: 8px;
	background-color: #aa0000;
	margin-bottom: 10px;
}

h3 {
	font-size: 36px;
	margin: 6px 0 16px 5px;     
	font-weight: normal;
}

.item > p {
	font-family: 'Roboto Condensed';
	font-size: 20px;
	font-weight: bold;
	margin-top: 16px;
}

@media screen and (width < 769px) {
	.horizontal-line {
		width: 100%;
	}
	h3 {
		margin: 6px 0 16px;
	}
	.wrapper {
		padding: 10px 20px 5px 20px;
		margin-bottom: 40px;
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
	h3 {
		font-family: "Roboto Condensed";
		text-transform: uppercase;
		font-size: 24px;
		font-weight: 400;
		line-height: 150%;
	}
	.title {
		font-size: 18px;
		font-weight: bold;
	}
	.item > p {
		font-size: 18px;
		font-weight: normal;
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
}
</style>
