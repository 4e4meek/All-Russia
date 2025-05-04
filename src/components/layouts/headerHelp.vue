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
      apiUrl: 'https://api.exchangerate-api.com/v4/latest/RUB',
      loading: true,
      error: null,
      intervalId: null
    }
  },
  mounted() {
    this.fetchCurrencyRates()
    this.intervalId = setInterval(() => {
      this.fetchCurrencyRates()
    }, 60000)
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
  },
  methods: {
    async fetchCurrencyRates() {
      try {
        this.error = null
        const response = await axios.get(`${this.apiUrl}?t=${Date.now()}`) // Добавляем параметр для избежания кэширования
        const data = response.data

        // Проверка актуальности данных
        console.log('API Response:', data)

        this.updateCurrency('USD', data.rates.USD)
        this.updateCurrency('EUR', data.rates.EUR)
        this.updateCurrency('CNY', data.rates.CNY)
        this.updateCurrency('BYN', data.rates.BYN)

        this.loading = false
      } catch (e) {
        console.error('Ошибка получения курсов:', e)
        this.error = 'Ошибка обновления курсов'
        this.loading = false
      }
    },
    updateCurrency(name, newValue) {
      const currency = this.currencies.find((c) => c.name === name)
      if (currency) {
        const previousValue = currency.value
        const numericChange = previousValue !== null
            ? newValue - previousValue
            : 0

        // Сохраняем оригинальные значения
        currency.value = newValue
        currency.change = numericChange

        console.log(`Обновление ${name}:`, {
          previousValue,
          newValue,
          change: numericChange
        })
      }
    }
  },
  computed: {
    formattedCurrencies() {
      return this.currencies.map(currency => ({
        ...currency,
        formattedValue: currency.value !== null
            ? currency.value.toFixed(4)
            : '---',
        formattedChange: currency.change !== null
            ? `${currency.change >= 0 ? '+' : ''}${currency.change.toFixed(4)}`
            : ''
      }))
    }
  }
}
</script>

<template>
  <div class="header-currency">
    <div
        class="currency-container flex bg-[#222222] justify-center items-center gap-4 text-white text-sm md:text-xl font-bold py-2 px-4"
    >
      <template v-if="!loading && !error">
        <div
            v-for="currency in formattedCurrencies"
            :key="currency.name"
            class="currency-item flex items-center gap-2 px-3 py-1"
        >
          <span>{{ currency.name }}</span>
          <span class="value">{{ currency.formattedValue }}</span>
          <span
              v-if="currency.formattedChange"
              :class="{
              'change text-xs font-medium px-1 py-0.5 rounded': true,
              'positive bg-green-500/20 text-green-400': currency.change > 0,
              'negative bg-red-500/20 text-red-400': currency.change < 0,
              'neutral bg-gray-500/20': currency.change === 0
            }"
          >
            {{ currency.formattedChange }}
          </span>
        </div>
      </template>

      <div v-if="loading" class="loading-message text-gray-400">
        Загрузка курсов...
      </div>

      <div v-if="error" class="error-message text-red-500">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.currency-container {
  font-family: 'Roboto Condensed', sans-serif;
  flex-wrap: wrap;
  min-height: 50px;
}

.currency-item {
  min-width: 120px;
  justify-content: center;
}

.value {
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
}

.change.neutral {
  color: #888;
}

@media (max-width: 768px) {
  .currency-container {
    gap: 8px;
    padding: 8px;
    font-size: 13px;
  }

  .currency-item {
    min-width: auto;
    padding: 0 8px;
  }

  .change {
    font-size: 10px;
  }
}

@media (max-width: 480px) {
  .currency-item {
    flex: 1 1 45%;
    justify-content: flex-start;
  }
}
</style>