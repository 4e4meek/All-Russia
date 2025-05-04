import PoliticPage from '@/components/pages/PoliticPage.vue'
import ProjectPage from '@/components/pages/ProjectPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ArticlePolitic from './components/Article/ArticlePolitic.vue'
import MoscowScreen from './components/MoscowScreen.vue'
import AboutPortal from './components/pages/AboutPortal.vue'
import Contact from './components/pages/ContactPage.vue'
import Home from './components/pages/HomePage.vue'
import PartnerPage from './components/pages/PartnerPage.vue'

import CaucasusFederalDistrict from './components/pages/RussionDistricts/Caucasus.vue'
import CentralAsia from './components/pages/CentralAsia.vue'
import EastEurope from './components/pages/EastEurope.vue'
import NorthWest from './components/pages/RussionDistricts/NorthWest.vue'
import SiberianFederalDistrict from './components/pages/RussionDistricts/Siberis.vue'
import SouthernFederalDistrict from './components/pages/RussionDistricts/South.vue'
import UralFederalDistrict from './components/pages/RussionDistricts/Ural.vue'
import MiddleEast from './components/pages/MiddleEast.vue'
import NorthAfrica from './components/pages/NorthAfrica.vue'
import PageTemplate from "@/components/pages/RussionDistricts/RussianDistrictPageTemplate.vue";

// По хорошему можно перенести на бэк, зачем такую однотипную инфу хранить на фронте
import farEastPageCardsProps from '@/mocks/farEastPageCardsProps.json';
import volgaFederalDistrictCardsProps  from '@/mocks/volgaFederalDistrictCardsProps.json';
import centerFOCardsProps  from '@/mocks/centerFOCardsProps.json';

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
				topHeading: 'СТОЛИЦА РОССИЙСКОЙ ФЕДЕРАЦИИ',
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
			component: CaucasusFederalDistrict
		},
		{
			path: '/NorthWest',
			name: 'NorthWest',
			component: NorthWest
		},
		{
			path: '/Siberia',
			name: 'SiberianFederalDistrict',
			component: SiberianFederalDistrict
		},
		{
			path: '/South',
			name: 'SouthernFederalDistrict',
			component: SouthernFederalDistrict
		},
		{
			path: '/Ural',
			name: 'UralFederalDistrict',
			component: UralFederalDistrict
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
