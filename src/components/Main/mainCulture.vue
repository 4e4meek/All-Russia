
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
					<p>{{ article.subtitle }}</p>
					<p>{{ article.updated }}</p>

				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.wrapper {
	margin-bottom: 90px;
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
	font-size: 24px;
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
	.wrapper {
		margin-bottom: 40px;
		padding: 10px;
	}
	.container {
		display: flex;
	}
	.item:not(:first-child) {
		display: none;
	}
}
</style>
