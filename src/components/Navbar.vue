<template>
	<nav id="nav" :data-hidden="hidden">
		<input type="checkbox" hidden id="nav-switch" />
		<div class="ctnr ctnr-flexible">
			<div id="nav-logo">
				<a href="https://skl8d0.csb.app">TPKCH</a>
			</div>

			<div id="nav-menu">
				<div class="nav-item" v-for="(i, k) in model.menu" :key="k">
					<a href="#">{{ i.name }}</a>

					<div class="subnav">
						<router-link class="subnav-item" v-for="(j, k) in i.list" :key="k" :to="j.href">
							{{ j.text }}
						</router-link>
					</div>
				</div>
			</div>
			<label for="nav-switch" class="icon material-icons-round" data-icon="menu"></label>
		</div>
	</nav>
</template>


<script>
import { ref, onMounted } from 'vue';
import * as model from '@/models/Navbar.json';

export default {
	name: 'Navbar',
	setup() {
		let ofst = window.pageYOffset;
		const hidden = ref(!1);

		onMounted(() =>
			window.addEventListener('scroll', () => {
				hidden.value = ofst < window.pageYOffset;
				ofst = window.pageYOffset;
			})
		);

		return { model, hidden };
	},
};
</script>

<style lang="less" scoped>
#nav {
	display: flex;
	width: 100%;
	position: relative;
	left: 0;
	top: 0;
	background-color: var(--minus-background);
	box-shadow: 0 -1.25rem 2.5rem #000;
	line-height: 1;
	z-index: 999;
	transition: all 0.25s;
	padding: 0 10%;

	&[data-hidden='true'] {
		transform: translateY(-100%);
	}

	.ctnr {
		width: 100%;
		justify-content: space-between;
		align-items: center;
		max-width: 100%;
		#nav-logo > a {
			color: #fafafa;
		}
		#nav-menu {
			display: flex;
			justify-content: flex-end;
			gap: 10px;
			.nav-item {
				position: relative;
				& > a {
					display: block;
					font-size: 1.2rem;
					margin-left: 8px;
					border-radius: 4px;
					padding: 10px 18px;
					transform: scale(1);
					color: #fafafa;
					transition: 0.2s linear;
					font-weight: 600;
					&:hover {
						transform: scale(1.1);
						background-color: #fafafa;
						color: #000;
						letter-spacing: 1px;
					}
				}

				.subnav {
					position: absolute;
					z-index: 999;
					top: 120%;
					left: 10px;
					background: rgba(255, 255, 255, 0.8);
					box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
					display: none;
					&::before {
						content: '';
						position: absolute;
						left: 0;
						bottom: 0px;
						width: 100%;
						height: 2px;
						background-color: #1C0D03;
					}
					.subnav-item {
						display: block;
						padding: 0.8rem 1rem;
						font-size: 1.2rem;
						color: #333;
						border-bottom: 1px solid rgba(255, 255, 255, 0.7);
						font-weight: 600;
						&:hover {
							color: #372EB2;
						}
					}
				}
				&:hover .subnav {
					display: block;
				}
			}
		}
	}

	&-logo {
		font-size: 2.5rem;

		span {
			color: var(--orange);
		}
	}

	&-menu {
		display: flex;
		a {
		}
	}

	&-item {
		display: block;
		padding: 1rem;
	}

	label {
		display: none;
		font-size: 3rem;
		color: #fafafa;
		cursor: pointer;
	}
}

@media screen and (max-width: 768px) {
	#nav {
		.ctnr {
			padding: 1.2rem 0;
			#nav-menu {
				position: absolute;
				top: 0;
				left: -100%;
				width: 40%;
				height: 100vh;
				background-color: var(--major-background);
				flex-direction: column;
				justify-content: center;
				transition: all 0.3s;
				.nav-item {
					& > a {
						color: #323232;
						&:hover {
							transform: scale(1.1);
							background-color: var(--minus-background);
							color: var(--minus-text-color);
							letter-spacing: 1px;
						}
					}
				}
			}
			label {
				display: block;
			}
		}
		#nav-switch:checked + .ctnr #nav-menu {
			left: 0%;
		}
	}
}
</style>