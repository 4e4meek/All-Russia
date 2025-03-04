<script setup>
import facebookIconRU from '@/assets/facebookiconRU.svg'
import facebookIconAR from '@/assets/facebookiconAR.svg'
import telegramIcon from '@/assets/telegramicon.svg'
import youtubeIcon from '@/assets/youtubeicon.svg'
import livejournalIcon from '@/assets/livejournalicon.svg'
</script>

<template>
	<ul class="social-icons">
		<li class="icon-item">
			<img :src="youtubeIcon" alt="YouTube" />
		</li>
		<li class="icon-item">
			<img :src="telegramIcon" alt="Telegram" />
		</li>
		<li class="icon-item">
			<img :src="facebookIconRU" alt="Facebook" />
		</li>
		<li class="icon-item">
			<img :src="facebookIconAR" alt="Facebook" />
		</li>
		<li class="icon-item">
			<img :src="livejournalIcon" alt="LiveJournal" />
		</li>
	</ul>
	<p class="toggle-text">*признана экстремистской организацией на территории РФ</p>
</template>

<style scoped>
.toggle-text {
	display: inline;
	font-size: 11px;
	position: relative;
	top: -10px;
	text-align: center;
}

.social-icons {
	color: white;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
.icon-item {
	margin: 10px;
}
</style>
