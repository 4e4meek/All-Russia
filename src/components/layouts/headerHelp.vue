<script>
import axios from 'axios'
export default {
	name: 'HeaderHelp',
	data() {
		return {
			currencies: [
				{ name: 'USD', value: null, change: null },
				{ name: 'EUR', value: null, change: null },
				{ name: 'CNY', value: null, change: null },
				{ name: 'BYN', value: null, change: null }
			],
			apiUrl: 'https://api.exchangerate-api.com/v4/latest/RUB'
		}
	},
	mounted() {
		this.fetchCurrencyRates()
		setInterval(this.fetchCurrencyRates, 200000)
	},
	methods: {
		async fetchCurrencyRates() {
			try {
				const response = await axios.get(this.apiUrl)
				const data = response.data

				this.updateCurrency('USD', data.rates.USD)
				this.updateCurrency('EUR', data.rates.EUR)
				this.updateCurrency('CNY', data.rates.CNY)
				this.updateCurrency('BYN', data.rates.BYN)
			} catch (e) {
				console.log(e)
			}
		},
		updateCurrency(name, newValue) {
			const currency = this.currencies.find((c) => c.name === name)
			if (currency) {
				const previousValue = currency.value
				currency.value = newValue.toFixed(2)
				currency.change = previousValue !== null ? newValue - previousValue : 0
			}
		}
	},
	computed: {
		formattedCurrencies() {
			return this.currencies.map((currency) => ({
				...currency,
				formattedChange:
					currency.value !== null
						? `${currency.change > 0 ? '+' : ''}${currency.change.toFixed(4)}`
						: ''
			}))
		}
	}
}
</script>

<template>
	<div
		class="currency-container flex bg-[#222222] justify-center items-center gap-10 text-white text-xl font-bold h-[50px]"
	>
		<div v-for="currency in formattedCurrencies" :key="currency.name" class="currency-mr-2">
			{{ currency.name }}
			<span class="value-mr-2">{{ currency.value }}</span>
			<span
				:class="{ change: true, positive: currency.change >= 0, negative: currency.change < 0 }"
			>
				{{ currency.formattedChange }}
			</span>
		</div>
	</div>
</template>

<style scoped>
.currency-container {
	font-family: 'Roboto Condensed';
}

.positive {
	color: green;
}

.negative {
	color: red;
}

@media (max-width: 768px) {
	.currency-container {
		display: grid;
		grid-template-columns: auto auto;
		width: 100%;
		height: 100%;
		justify-content: space-around;
		text-align: center;
		gap: 0px;
	}

	.currency-mr-2 {
		justify-content: center;
		font-size: 16px;
		margin: 0 auto;
	}
}
</style>
