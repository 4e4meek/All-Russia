
<script>
import axios from 'axios'

export default {
  name: 'mainTeach',
  data() {
    return {
      articles: [], // Храним все статьи в одном массиве
      loading: true,
      error: null,
      apiUrlNews: 'https://allrussia.info/api/data_news_science_education'
    }
  },
  async mounted() {
    await this.fetchMainTeach()
  },
  methods: {
    async fetchMainTeach() {
      try {
        const response = await axios.get(this.apiUrlNews)
        this.articles = response.data // Предполагается, что это массив статей
      } catch (e) {
        console.error('Error fetching articles:', e)
        this.error = 'Не удалось загрузить данные'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>


<template>
	<div class="wrapper">
		<div class="horizontal-line"></div>
		<div class="red-rectangle"></div>
		<h3>НАУКА И ОБРАЗОВАНИЕ</h3>


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
</template>

<style scoped>
.wrapper {
	margin-bottom: 60px;
}

.container {
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: repeat(2, 340px);
	grid-row-gap: 32px;
	grid-column-gap: 20px;
}

.item_1 {
	grid-column: 1/3;
	grid-row: 1/3;
}

.item_1-img {
	width: 100%;
}

.horizontal-line {
	height: 1px;
	opacity: 0.4;
	width: 100%;
	background-color: #000;
	margin: 0 auto;
}

.red-rectangle {
	width: 88px;
	height: 8px;
	background-color: #aa0000;
	margin-bottom: 10px;
}

h3 {
	margin-top: 16px;
	margin-bottom: 32px;
	font-size: 24px;
	font-weight: normal;
}

.title {
	font-family: 'Roboto Condensed';
	font-size: 20px;
	font-weight: bold;
}

.title:first-child {
	margin-top: 16px;
	margin-bottom: 20px;
}

@media screen and (width < 769px) {
	.horizontal-line {
		width: 100%;
	}
	.wrapper {
		padding: 10px;
		margin-bottom: 20px;
	}
	.container {
		padding: 10px;
		width: 100%;
		display: grid;
		grid-template-columns: 100vw 100vw 100vw 100vw;
		scroll-snap-type: x mandatory;
		overflow-x: scroll;
	}

	.item {
		scroll-snap-align: start;
	}
	
	.item_2,
	.item_3,
	.item_4,
	.item_5 {
		display: none;
	}
	.title {
		margin-bottom: 5px;
		font-size: 16px;
	}
	p {
		font-size: 16px;
	}
}
</style>
