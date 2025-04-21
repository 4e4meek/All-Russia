<script>
export default {
	name: 'mainSection'
}
</script>

<template>
	<div class="main__section">
		<div class="main__container">
			<div class="main__text">
				ALLRUSSIA
			</div>
			<div class="sub__text">
				Мы открываем Россию заново! Вместе с вами!
			</div>
		</div>
	</div>
</template>

<style scoped>
.main__section {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 685px;
	background-image: url('@/assets/main.png');
	background-size: cover;
	background-position: center;
}
.main__text{
	text-align: center;
	color: white;
	font-size: 180px;
	font-family: 'Roboto Condensed';
	font-weight: bold;
}
.sub__text{
	text-align: center;
	color: white;
	font-size: 36px;
	font-family: 'Roboto Condensed';
	font-weight: bold;
}
@media screen and (width < 769px) {
	.main__section{
		height: 20vw;
	}
	.main__text{
		font-size: 5vw;
	}
	.sub__text{
		font-size: 4vw;
	}
}
</style>
