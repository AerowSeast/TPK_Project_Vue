<template>
	<div class="header">
		<h1 class="ctnr flexbox">{{ data.subject }}</h1>
	</div>
	<main class="ctnr">
		<p>{{ data.summary }}</p>
		<div v-for="i in data.members" :key="i">
			<h3>{{ i.heading }}</h3>
			<p v-html="markdown.toHTML(i.content)"></p>
		</div>
	</main>
</template>

<script>
import { markdown } from 'markdown';
import { useRoute } from 'vue-router';
import { ref, watch, onMounted } from 'vue';
import img from '@/assets/img/church.png';

export default {
	name: 'Home',
	setup() {
		const route = useRoute();
		const data = ref({});
		const open = async () => {
			const name = route.params.name;

			if (!name) return;
			data.value = await import(`@/models/${name}.json`);
		};

		onMounted(open);
		watch(() => route.params.name, open);

		document.documentElement.style.setProperty('--intro-background', `url('${img}')`);

		return { data, markdown };
	}
};
</script>

<style lang="less" scoped>
.header {
	height: 75vh;
	position: relative;
	background-image: var(--intro-background);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-attachment: fixed;

	display: flex;
	justify-content: center;
	align-items: center;

	& .ctnr {
		padding-top: 5rem;
	}
}

#header {
	width: 100%;
	padding: 5rem 2rem;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background-color: #191919;
		opacity: 0.5;
		z-index: -1;
	}

	& .flexbox {
		max-width: 50rem;
		background-color: rgba(0, 0, 0, 0.75);
		border-radius: 1rem;
		color: var(--minus-text-color);
		text-align: center;
		padding: 2rem;
	}
}
</style>