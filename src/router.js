import CenterFO from '@/components/pages/RussionDistricts/CenterFO.vue'

import FarEast from '@/components/pages/RussionDistricts/FarEast.vue'

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
import VolgaFederalDistrict from './components/pages/RussionDistricts/Privolj.vue'
import MiddleEast from './components/pages/MiddleEast.vue'
import NorthAfrica from './components/pages/NorthAfrica.vue'

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
			component: CenterFO
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
			component: FarEast
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
			component: VolgaFederalDistrict
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
			path: '/Volga',
			name: 'VolgaFederalDistrict',
			component: VolgaFederalDistrict
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
