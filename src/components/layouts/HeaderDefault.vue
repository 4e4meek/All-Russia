<template>
	<div>
		<div class="header">
			<div class="item item_1">
				<button class="header__btn" @click="showSideBar = !showSideBar">
					<div class="menu-icon" :class="{ open: showSideBar }">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</button>
			</div>
			<div class="wrapper">
				<div class="menu__container">
					<div class="header__logo">
						<router-link to="/">
							<h1>ALLRUSSIA</h1>
						</router-link>
					</div>
					<div class="vertical__line"></div>
					<div
						v-for="navItem in navMenuItems"
						:key="navItem.title"
						class="header__items"
						@click="toggleDropDown(navItem.id)"
					>
						<h3>{{ navItem.title }}</h3>
						<Transition>
							<UiDropDown class="" :options="navItem.options" v-if="dropDown === navItem.id" />
						</Transition>
					</div>
					<div class="vertical__line"></div>
					<div class="language-select">
						<img src="../../assets/globus.svg" alt="Language" />
						<select v-model="selectedLanguage" @change="handleLanguageChange">
							<option v-for="item in LanguageItems" :key="item.id" :value="item.title">
								{{ item.title }}
							</option>
						</select>
					</div>
					<ToogleTheme />
				</div>
			</div>
		</div>

		<div class="divider"></div>

		<HeaderHelp />
		<Transition>
			<SideBar v-if="showSideBar" @on-close.stop="showSideBar = false" />
		</Transition>
	</div>
</template>

<script setup>
import HeaderHelp from '@/components/layouts/headerHelp.vue'
import SideBar from '@/components/layouts/sideBar.vue'
import UiDropDown from '@/components/Ui/UiDropDown.vue'
import ToogleTheme from '../Ui/ToogleTheme.vue'

import { ref } from 'vue'

const showSideBar = ref(false)
const selectedLanguage = ref('RUS')
const LanguageItems = [
	{ id: 1, title: 'RUS' },
	{ id: 2, title: 'AR' }
]
const navMenuItems = [
	{
		id: 1,
		title: 'ВСЯРОССИЯ',
		options: [
			{ label: 'О ПОРТАЛЕ', link: '/about' },
			{ label: 'ПАРТНЕРЫ', link: '/partner' },
			{ label: 'КОНТАКТЫ', link: '/contact' },
			{ label: 'ПРОЕКТЫ', link: '/project' }
		]
	},
	{
		id: 2,
		title: 'РФ',
		options: [
			{ label: 'ДАЛЬНЕВОСТОЧНЫЙ', link: '/Far-east' },
			{ label: 'ПРИВОЛЖСКИЙ', link: '/Volga' },
			{ label: 'ЦЕНТРАЛЬНЫЙ', link: '/CenterFO' },
			{ label: 'СЕВЕРО-ЗАПАДНЫЙ', link: '/NorthWest' },
			{ label: 'УРАЛЬСКИЙ', link: '/Ural' },
			{ label: 'СИБИРСКИЙ', link: '/Siberia' },
			{ label: 'СЕВЕРО-КАВКАЗСКИЙ', link: '/Caucasus' },
			{ label: 'ЮЖНЫЙ', link: '/South' }
		]
	},
	{
		id: 3,
		title: 'СНГ',
		options: [
			{ label: 'ВОСТОЧНАЯ ЕВРОПА', link: '/EastEurope' },
			{ label: 'СРЕДНЯЯ АЗИЯ', link: '/CentralAsia' }
		]
	},
	{
		id: 4,
		title: 'АРАБСКИЙ МИР',
		options: [
			{ label: 'СЕВЕРНАЯ АФРИКА', link: '/NorthAfrica' },
			{ label: 'БЛИЖНИЙ ВОСТОК', link: '/MiddleEast' }
		]
	},
	{
		id: 5,
		title: 'ШКОЛА РУССКОГО ЯЗЫКА РКИ+'
	}
]

const dropDown = ref(null)

const toggleDropDown = (id) => {
	dropDown.value = dropDown.value === id ? null : id
}

const handleLanguageChange = () => {
	console.log(`Selected Language: ${selectedLanguage.value}`)
}
</script>

<style scoped lang="scss">
.header {
	display: flex;
	align-items: center;
	font-family: 'Roboto Condensed';
	font-weight: bold;
	background-color: #222222;
	color: #ffffff;
	height: 70px;
	position: fixed;
	width: 100%;
	z-index: 10;
}

.menu__container {
	width: 1440px;
	margin: auto;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}

.vertical__line {
	border: 2px solid white;
	height: 40px;
}

.menu-icon > span {
	display: block;
	width: 35px;
	margin-bottom: 5px;
	border: 2px solid white;
	transition: all 0.3s ease-in-out;
}

.menu-icon > span:last-child {
	margin-bottom: 0;
}

.menu-icon.open span:nth-child(1) {
	transform: rotate(45deg) translate(5px, 5px);
}

.menu-icon.open span:nth-child(2) {
	opacity: 0;
}

.menu-icon.open span:nth-child(3) {
	transform: rotate(-45deg) translate(7px, -8px);
}

.header__logo {
	cursor: pointer;
}

.header__items {
	cursor: pointer;
	position: relative;
}

.header__list {
	display: flex;
	align-items: center;
	margin: 0 auto;
	list-style: none;
	padding: 0;
}

.divider {
	height: 71px; /* Толщина линии */
	background-color: #ffffff; /* Цвет линии */
}

.header__btn {
	margin-left: 40px;
	border: none;
	cursor: pointer;
	background-color: transparent;
	padding: 0;
}

.image-button img {
	width: 50px;
	height: auto;
	display: block;
}

.content {
	transition: transform 0.3s ease-out;
}
.language-select {
	display: flex;
	align-items: center;
	gap: 10px;
}

.language-select img {
	width: 24px;
	height: 24px;
}

.language-select select {
	background: #222222;
	color: white;
	border: none;
	border-radius: 4px;
	padding: 5px 10px;
}

@media (max-width: 768px) {
	.header {
		height: 70px;
		padding: 10px;
		width: 100%;

		.menu__container {
			width: 100%;
			font-size: 16px;
		}

		.header__logo {
			font-size: 30px;
			justify-content: center;
		}

		.vertical__line {
			display: none;
		}

		.menu-icon > span {
			width: 30px;
			border: 2px solid white;
		}

		.header__btn {
			display: block;
			position: fixed;
			top: 25px;
			left: 20px;
			margin: 0;
		}

		.header__items {
			display: none;
		}

		.language-select {
			gap: 5px;
			display: flex;
			position: fixed;
			top: 19px;
			right: 20px;

			img {
				display:none;
			}

			select {
				padding: 5px;
			}
		}
	}
}

/* Адаптация под планшеты */
@media (min-width: 769px) and (max-width: 1024px) {
	.header {
		.menu__container {
			width: 100%;
			justify-content: space-between;
			padding: 0 20px;
		}

		.header__logo {
			font-size: 20px;
		}

		.header__items {
			font-size: 16px;
		}
	}
}
</style>
