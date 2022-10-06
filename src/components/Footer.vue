<template>
	<footer id="footer">
		<div class="ctnr ctnr-flexible">
			<div v-for="(v, i) in model.menu" :key="i" class="flexbox">
				<i class="material-icons-round icon icon-circular" :data-icon="v.icon"></i>
				<h5>{{ v.name }}</h5>
				<p>
					<a v-for="(val, idx) in v.list" :key="idx" :href="val.href">{{ val.text }}</a>
				</p>
			</div>
		</div>
	</footer>
</template>

<script>
import * as model from '@/models/Footer.json';

export default {
	name: 'Footer',
	setup() {
		return { model };
	},
};
</script>

<style lang="less" scoped>
#footer {
	position: relative;
	background-image: linear-gradient(to bottom, transparent 5rem, var(--minus-background) 5rem);
	padding-top: 5rem;
	color: var(--minus-text-color);

	&::before {
		content: '';
		width: 100%;
		height: 5rem;
		position: absolute;
		top: 0;
		background-image: linear-gradient(to right bottom, transparent 49.5%, var(--minus-background) 50.5%);
		z-index: -1;
	}

	.ctnr{
		display:flex;
		gap:1rem;
		.flexbox {
			position: relative;
			margin-left: 2.5rem;
			padding: 0 1rem;

			i {
				position: absolute;
				right: 100%;
			}

			h5 {
				line-height: 2.5rem;
			}

			a {
				display: table;
			}
		}
	}
	

}

@media screen and (max-width:768px){
	footer{
		.ctnr{
			flex-direction:column;
		}
	}
}
</style>