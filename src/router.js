import PoliticPage from '@/components/pages/PoliticPage.vue'
import ProjectPage from '@/components/pages/ProjectPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ArticlePolitic from './components/Article/ArticlePolitic.vue'
import MoscowScreen from './components/MoscowScreen.vue'
import AboutPortal from './components/pages/AboutPortal.vue'
import Contact from './components/pages/ContactPage.vue'
import Home from './components/pages/HomePage.vue'
import PartnerPage from './components/pages/PartnerPage.vue'

import CentralAsia from './components/pages/CentralAsia.vue'
import EastEurope from './components/pages/EastEurope.vue'
import MiddleEast from './components/pages/MiddleEast.vue'
import NorthAfrica from './components/pages/NorthAfrica.vue'
import PageTemplate from "@/components/pages/RussianDistrictPageTemplate.vue";

// По хорошему можно перенести на бэк, зачем такую однотипную инфу хранить на фронте
import farEastPageCardsProps from '@/mocks/farEastPageCardsProps.json';
import volgaFederalDistrictCardsProps  from '@/mocks/volgaFederalDistrictCardsProps.json';
import centerFOCardsProps  from '@/mocks/centerFOCardsProps.json';
import northWestPageCardsProps  from '@/mocks/northWestPageCardsProps.json';
import uralPageCardsProps  from '@/mocks/uralPageCardsProps.json';
import siberiaPageCardsProps  from '@/mocks/siberiaPageCardsProps.json';
import caucasusPageCardsProps  from '@/mocks/caucasusPageCardsProps.json';
import southPageCardsProps  from '@/mocks/southPageCardsProps.json';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/article',
			name: 'ArticlePolitic',
			component: ArticlePolitic
		},
		{
			path: '/about',
			name: 'AboutPortal',
			component: AboutPortal
		},

		{
			path: '/contact',
			name: 'Contact',
			component: Contact
		},

		{
			path: '/moscow',
			name: 'MoscowScreen',
			component: MoscowScreen
		},
		{
			path: '/partner',
			name: 'PartnerPage',
			component: PartnerPage
		},
		{
			path: '/CenterFO',
			name: 'CenterPage',
			component: PageTemplate,
			props: {
				bannerTitle: 'Центральный федеральный округ',
				topHeading: 'Столица Российской Федерации',
				...centerFOCardsProps
			}
		},
		{
			path: '/project',
			name: 'ProjectPage',
			component: ProjectPage
		},
		{
			path: '/politic',
			name: 'PoliticPage',
			component: PoliticPage
		},
		{
			path: '/Far-east',
			name: 'FarEast',
			component: PageTemplate,
			props: {
				bannerTitle: 'Дальневосточный федеральный округ',
				topHeading: 'Центр Дальнего Востока',
				...farEastPageCardsProps
			}
		},
		{
			path: '/Caucasus',
			name: 'CaucasusFederalDistrict',
			component: PageTemplate,
			props: {
				bannerTitle: 'Северо-Кавказский федеральный округ',
				topHeading: 'Центр Северного Кавказа',
				...caucasusPageCardsProps
			}
		},
		{
			path: '/NorthWest',
			name: 'NorthWest',
			component: PageTemplate,
			props: {
				bannerTitle: 'Северо-Западный федеральный округ',
				topHeading: 'Центр Северо-Запада',
				...northWestPageCardsProps
			}
		},
		{
			path: '/Siberia',
			name: 'SiberianFederalDistrict',
			component: PageTemplate,
			props: {
				bannerTitle: 'Сибирский федеральный округ',
				topHeading: 'Центр Сибири',
				...siberiaPageCardsProps
			}
		},
		{
			path: '/South',
			name: 'SouthernFederalDistrict',
			component: PageTemplate,
			props: {
				bannerTitle: 'Южный федеральный округ',
				topHeading: 'Центр Юга',
				...southPageCardsProps
			}
		},
		{
			path: '/Ural',
			name: 'UralFederalDistrict',
			component: PageTemplate,
			props: {
				bannerTitle: 'Уральский федеральный округ',
				topHeading: 'Центр Урала',
				...uralPageCardsProps
			}
		},
		{
			path: '/Volga',
			name: 'VolgaFederalDistrict',
			component: PageTemplate,
			props: {
				bannerTitle: 'Центр Приволжья',
				topHeading: 'Приволжский федеральный округ',
				...volgaFederalDistrictCardsProps
			}
		},
		{
			path: '/EastEurope',
			name: 'EastEurope',
			component: EastEurope
		},
		{
			path: '/CentralAsia',
			name: 'CentralAsia',
			component: CentralAsia
		},
		{
			path: '/MiddleEast',
			name: 'MiddleEast',
			component: MiddleEast
		},
		{
			path: '/NorthAfrica',
			name: 'NorthAfrica',
			component: NorthAfrica
		}
	]
})

export default router
