
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
		max-width: 1480px;
		margin-bottom: 32px;
		padding: 0 20px 0 20px;
}

.container {
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	flex-flow: col wrap;
	align-items: flex-start;
	gap: 20px;
}

.item:first-child {
	height: 645px;
	max-width: 711px;
}
.item:nth-child(n+2) {
	height: 322px;
	max-width: 325px;
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
	font-weight: normal;
	font-size: 36px;
	margin: 6px 0px 16px 5px;
}

.title {
	font-family: 'Roboto Condensed';
	font-size: 20px;
	font-weight: bold;
}

.item:nth-child(n+6) {
	display: none;
}

@media screen and (width < 769px) {
	.horizontal-line {
		width: 100%;
	}
	.wrapper {
		padding: 10px 20px 5px 20px;
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
	.title {
		font-size: 18px;
	}
	p {
		font-size: 18px;
	}
	h3 {
		margin: 6px 0 16px;
		font-family: "Roboto Condensed";
		text-transform: uppercase;
		font-size: 24px;
		font-weight: 400;
		line-height: 150%;
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
	
	.item_2,
	.item_3,
	.item_4,
	.item_5 {
		display: none;
	}
	.title {
		margin-bottom: 5px;
		font-size: 18px;
	}
	.item > p {
		font-size: 18px;
	}
}
</style>
