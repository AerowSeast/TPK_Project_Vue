<template>
	<!-- <article id="intro" class="ctnr ctnr-flexible">
		<div class="flexbox">
			<h1>太平境馬雅各紀念教會</h1>
			<p>{{ sent.saying }}（{{ sent.source }}）</p>
		</div>
	</article> -->
	<!-- 聚會時間 -->
	<Slideshow :show="slide" />
	<section class="Meeting_time">
		<h1 id="party_title">聚會時間地點</h1>
		<article id="party-time">
			<div class="times">
				<h2>聚會標題</h2>
				<h3>時間 --> 19:30</h3>
				<h3>地點 -> 太平境教會教堂</h3>
			</div>
			<div class="times">
				<h2>課程活動</h2>
				<h3>時間 -> 19:30</h3>
				<h3>地點 -> 太平境教會教堂</h3>
			</div>
			<div class="times">
				<h2>聚會標題</h2>
				<h3>時間 -> 19:30</h3>
				<h3>地點 -> 太平境教會教堂</h3>
			</div>
			<div class="times">
				<h2>課程活動</h2>
				<h3>時間 -> 19:30</h3>
				<h3>地點 -> 太平境教會教堂</h3>
			</div>
			<div class="times">
				<h2>聚會標題</h2>
				<h3>時間 -> 19:30</h3>
				<h3>地點 -> 太平境教會教堂</h3>
			</div>
			<div class="times">
				<h2>課程活動</h2>
				<h3>時間 -> 19:30</h3>
				<h3>地點 -> 太平境教會教堂</h3>
			</div>
		</article>
	</section>
	<!-- 最新消息 -->
	<section class="container">
		<div class="news">
			<!-- 標題Title 與 more -->
			<div class="title">
				<h2>最新消息</h2>
				<a class="more" href="https://skl8d0.csb.app/news">更多消息>></a>
			</div>

			<!-- 導覽行 -->
			<ul class="sm_nav">
				<li>
					<a href="#">全部</a>
				</li>
				<li>
					<a href="#">教會事務</a>
				</li>
				<li>
					<a href="#">禮拜資訊</a>
				</li>
			</ul>
			<!-- 列表List -->
			<div class="list_rows">
				<div class="list_row">
					<div class="ceil"></div>
					<div class="list_cnt">
						<a href="#"> 目前國內疫情趨緩，部分防疫規定自 4 月 29 日起鬆綁 </a>
					</div>
					<div class="list_date">
						<span>08/21</span>
					</div>
				</div>
				<div class="list_row">
					<div class="ceil"></div>
					<div class="list_cnt">
						<a href="#"> 週六禮拜－得利與得救 </a>
					</div>
					<div class="list_date">
						<span>08/21</span>
					</div>
				</div>
				<div class="list_row">
					<div class="ceil"></div>
					<div class="list_cnt">
						<a href="#"> 教會將於 2022 年成立「太平境馬雅各學院」之系列課程 </a>
					</div>
					<div class="list_date">
						<span>08/21</span>
					</div>
				</div>
			</div>
			<!-- 公告指示燈 -->
			<div class="new_lamp">
				<div class="today_new">
					<div class="point" id="p_orange"></div>
					<h3>今日消息</h3>
				</div>
				<div class="today_new">
					<div class="point" id="p_blue"></div>
					<h3>一般消息</h3>
				</div>
			</div>
		</div>
		<div class="activity">
			<h2>近期活動</h2>
			<div class="card">
				<div class="date">12/25</div>
				<div class="info">聖誕節</div>
			</div>
		</div>
	</section>
</template>

<script>
import img from '@/assets/img/church.png';
import ancmt from '@/models/data/ancmt.json';
import bible from '@/models/data/bible.json';
import slide from '@/models/data/slide.json';
import Slideshow from '@/components/Slideshow.vue';

export default {
	name: 'Home',
	components: { Slideshow },
	setup() {
		const sent = bible[Math.floor(Math.random() * (bible.length - 0)) + 0];

		(async root => {
			const rsp = await fetch(img);
			const res = await rsp.blob();
			const url = URL.createObjectURL(res);

			root.style.setProperty('--intro-background', `url('${url}')`);
		})(document.documentElement);

		return { sent, ancmt, slide };
	},
};
</script>

<style lang="less" scoped>
#events {
	.card {
		width: 100%;
		display: grid;
		grid-template-areas: 'date info';
		grid-template-columns: 20% auto;
		margin-bottom: 0.5rem;
		transition: box-shadow 0.5s;

		&:hover {
			box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
		}
	}

	.date {
		grid-area: date;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #324b64;
		font-size: 1.5rem;
		color: #fafafa;
		padding: 1rem;
	}

	.info {
		grid-area: info;
		display: flex;
		align-items: center;
		padding: 1rem;
	}
}

.label {
	display: inline-block;
	background-color: #fa4b4b;
	font-weight: bold;
	color: #fafafa;
	border-radius: 0.25rem;
	margin-right: 0.5rem;
	padding: 0 0.25rem;
}

.item {
	display: table;
	margin-bottom: 0.25rem;
}

#tabs {
	margin-bottom: 0.5rem;

	label {
		display: inline-block;
		position: relative;
		padding: 0 0.5rem;
		margin-right: 0.5rem;
		cursor: pointer;

		&.active {
			font-weight: bold;
		}

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			background-color: #fac896;
			transform: skewX(-15deg);
			z-index: -1;
		}
	}
}

#intro {
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
	padding: 5rem 2rem;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: var(--intro-background);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-attachment: fixed;
		filter: contrast(1.5);
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

// 聚會時間表
.Meeting_time {
	#party_title {
		font-weight: 600;
		font-size: 2.2rem;
		text-align: center;
		margin: 1.2rem 0;
	}

	#party-time {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		grid-gap: 12px;
		justify-content: flex-start;
		color: #fff;
		margin-bottom: 10px;
		padding: 0 15%;

		.times {
			border-radius: 10px;
			border: 3px solid #fff;
			padding: 1.5rem 4rem;
			background-color: rgba(0, 0, 0, 0.7);
			font-weight: 400;
			box-shadow: rgba(0, 0, 0, 0.24) 0px 5px 8px;

			h2 {
				font-size: 1.5rem;
				position: relative;

				&::before {
					content: '';
					position: absolute;
					top: 8px;
					left: -12px;
					background-color: #fff;
					width: 2px;
					height: 55%;
				}
			}

			h3 {
				font-size: 1.2rem;
			}

			span {
				font-size: 1.2rem;
			}
		}
	}
}

// 最新消息
.container {
	width: 100%;
	background-color: #D7E8F0;
	padding: 1.2rem 15%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
	grid-gap: 5rem;
	margin: 2rem 0 8rem 0;

	// 最新消息 News
	.news {
		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			cursor: pointer;

			h2 {
				font-size: 2.2rem;
				margin-bottom: 15px;
			}

			.more {
				font-size: 1.2rem;
				transition: all 0.5s;
				text-decoration: none;
				color: #324b64;

				&:hover {
					color: #FF8066;
					letter-spacing: 1.5px;
				}
			}
		}

		.sm_nav {
			display: flex;
			flex-wrap: wrap;
			gap: 8px;
			list-style-type: none;

			li {
				a {
					text-decoration: none;
					background-color: #96929c;
					color: white;
					font-weight: 800;
					padding: 0.5rem 0.8rem;
					border-radius: 10px;
					box-shadow: 2px 1px 3px #96929c;

					&:hover {
						background-color: #4FFBDF;
						color: #4B4453;
					}
				}
			}
		}

		.list_rows {
			margin-top: 15px;

			.list_row {
				position: relative;
				display: flex;
				align-items: center;
				width: 100%;
				padding: 0.5rem;

				&::after {
					content: '';
					position: absolute;
					bottom: 0;
					width: 100%;
					height: 1px;
					background-color: rgba(0, 0, 0, 0.4);
				}

				.ceil {
					width: 10%;
					background-color: rgb(0, 51, 255);
					width: 5px;
					height: 5px;
					border-radius: 50%;
				}

				.list_cnt {
					width: 70%;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					margin-left: 0.5rem;

					a {
						text-decoration: none;
						color: #000;
						font-size: 1rem;
					}
				}

				.list_date {
					width: 20%;
					padding: 0 2rem;

					span {
						text-align: right;
					}
				}
			}
		}

		.new_lamp {
			width: 100%;
			display: flex;
			justify-content: flex-end;

			.today_new {
				display: flex;
				align-items: center;
				margin: 0.5rem 0.8rem 0 0;

				.point {
					width: 7px;
					height: 7px;
					margin-right: 0.3rem;
					border-radius: 50%;
				}

				#p_orange {
					background-color: #f57648;
				}

				#p_blue {
					background-color: rgb(0, 51, 255);
				}

				h3 {
					font-size: 1.2rem;
					position: relative;
					font-weight: 500;
				}
			}
		}
	}

	// 近期活動 activity
	.activity {
		h2 {
			font-size: 2.2rem;
			margin-bottom: 15px;
		}

		.card {
			display: flex;
			align-items: center;
			transition: all 0.8s;

			&:hover {
				box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
			}

			.date {
				background-color: #324b64;
				padding: 2rem 2rem;
				font-size: 1.2rem;
				color: #fafafa;
			}

			.info {
				background-color: #fff;
				padding: 2rem 3rem;
				width: 100%;
			}
		}
	}
}

@media screen and (max-width: 768px) {
	.Meeting_time {
		#party-time {
			padding: 0 1rem;
		}
	}

	.container {
		grid-gap: 2rem;

		.news {
			width: 100%;

			.sm_nav {
				li {
					a {
						padding: 0.3rem;
					}
				}
			}
		}

		.activity {
			width: 100%;
		}
	}
}
</style>