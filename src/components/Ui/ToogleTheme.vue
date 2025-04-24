<template>
	<div class="mode">
		<label class="toggle-switch">
			<input type="checkbox" :checked="theme === 'dark'" @change="toggleTheme" />
			<span class="slider"></span>
		</label>
		<span class="toggle-text">Dark Mode</span>
	</div>
</template>

<script>
import { useThemeStore } from '@/stores/ThemeStore'
import { onMounted } from 'vue'

export default {
	name: 'ThemeToggle',
	setup() {
		const themeStore = useThemeStore()

		themeStore.setTheme(themeStore.theme)

		onMounted(() => {
			// При монтировании, добавляем класс только если тема уже установлена
			document.body.classList.add('theme-transition')
		})

		return {
			theme: themeStore.theme,
			toggleTheme: themeStore.toggleTheme
		}
	},
	watch: {
		theme(newTheme) {
			// Следим за изменением темы и добавляем/удаляем класс для transition
			if (newTheme) {
				document.body.classList.add('theme-transition')
			} else {
				document.body.classList.remove('theme-transition')
			}
		}
	}
}
</script>

<style>
.mode {
	display: flex;
	align-items: center;
}
.toggle-switch {
	position: relative;
	display: inline-block;
	width: 30px;
	height: 15px;
}

.toggle-switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	transition: 0.4s;
	border-radius: 15px;
}

.slider:before {
	position: absolute;
	content: '';
	height: 11px;
	width: 11px;
	left: 2px;
	bottom: 2px;
	background-color: white;
	transition: 0.4s;
	border-radius: 50%;
}

input:checked + .slider {
	background-color: #2196f3;
}

input:checked + .slider:before {
	transform: translateX(15px);
}
.toggle-text {
	font-size: 16px;
}

@media (max-width: 768px) {
	.mode {
			display: grid;
			grid-template-columns: 25px 20px;
			position: fixed;
			top: 17px;
			gap: 0;
			right: 60px;
	}

	.toggle-text {
		display: none;
		position: relative;
		top: 10px;
		font-size: 16px;
	}

	.slider {
		width: 60%;
		height: 250%;
	}

	.slider:before {
		height: 35%;
		width: 80%;
		align-items: center;
	}

	input:checked + .slider:before {
		transform: translateY(-20px);
	}
}
</style>
