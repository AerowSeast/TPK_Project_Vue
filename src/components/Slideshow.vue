<template>
	<div class="slideshow">
		<div class="slides">
			<!-- radio -->
			<input type="radio" name="r" id="r1" checked />
			<input type="radio" name="r" id="r2" />
			<input type="radio" name="r" id="r3" />

			<!-- image -->
			<div ref="slide" class="slide" v-for="(i, k) in show" :key="k">
				<img :src="i" alt="" />
			</div>

			<!-- label navigation -->
			<div class="navigation">
				<label for="r1" class="btn"></label>
				<label for="r2" class="btn"></label>
				<label for="r3" class="btn"></label>
			</div>
			<!-- <div class="material-icons-round slideshow-btn slideshow-btn__prev"></div>
		<div class="material-icons-round slideshow-btn slideshow-btn__next"></div> -->
		</div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
	name: 'Slideshow',
	props: ['show'],

	setup() {
		const slide = ref(null);
		onMounted(() => (slide.value.style.display = 'block'));

		return { slide };
	},
};
</script>

<style lang="less" scoped>
.slideshow {
	position: relative;
	overflow: hidden;

	.slides {
		width: 300vw;
		display: flex;
		input[name='r'] {
			position: absolute;
			visibility: hidden;
		}

		.slide {
			transition: all 0.6s;
			width: 100%;
			img {
				width: 100vw;
				height: 100%;
			}
		}

		.navigation {
			position: absolute;
			left: 50%;
			bottom: 10px;
			transform: translateX(-50%);
			display: flex;
			gap: 10px;
			.btn {
				border: 3px solid #fafafa;
				border-radius: 50%;
				width: 25px;
				height: 25px;
				cursor: pointer;
				&:hover {
					background-color: #fafafa;
				}
			}
		}
		#r1:checked ~ .slide {
			margin-left: 0;
		}
		#r2:checked ~ .slide {
			margin-left: -100vw;
		}
		#r3:checked ~ .slide {
			margin-left: -200vw;
		}
	}
}
</style>