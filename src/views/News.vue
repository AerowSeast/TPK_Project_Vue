<template>
	<div class="toggle">
		<ion-icon name="menu-outline"></ion-icon>
	</div>
	<!-- 各項細目表 List -->
	<main>
		<article>
			<div class="title">
				<h1><span>News</span> 教會消息</h1>
				<span>太平境馬雅各紀念教會</span>
			</div>
			<section class="container">
				<div class="box">
					<!-- content title -->
					<div class="content">
						<a href="#">目前國內疫情趨緩，從4/29開始部份防疫規定鬆綁</a>
						<span id="time">2021-08-01</span>
					</div>
					<div class="bottom">
						<a href="#">分類</a>
						<p>點閱數：700次</p>
					</div>
				</div>
				<div class="box">
					<!-- content title -->
					<div class="content">
						<a href="#">週六禮拜－得利與得救</a>
						<time>2021-03-06</time>
					</div>
					<div class="bottom">
						<a href="#">分類</a>
						<p>點閱數：700次</p>
					</div>
				</div>
				<div class="box">
					<!-- content title -->
					<div class="content">
						<a href="#">目前國內疫情趨緩，從4/29開始部份防疫規定鬆綁</a>
						<time>2021-08-01</time>
					</div>
					<div class="bottom">
						<a href="#">分類</a>
						<p>點閱數：700次</p>
					</div>
				</div>
				<div class="box">
					<!-- content title -->
					<div class="content">
						<a href="#">教會將於 2022 年成立「太平境馬雅各學院」之系列課程</a>
						<time>2021-08-01</time>
					</div>
					<div class="bottom">
						<a href="#">分類</a>
						<p>點閱數：700次</p>
					</div>
				</div>
				<div class="box">
					<!-- content title -->
					<div class="content">
						<a href="#">目前國內疫情趨緩，從4/29開始部份防疫規定鬆綁</a>
						<time>2021-08-01</time>
					</div>
					<div class="bottom">
						<a href="#">分類</a>
						<p>點閱數：700次</p>
					</div>
				</div>
			</section>
		</article>
	</main>
</template>


<style lang="less" scoped>
main {
	width: 100%;
	min-height: calc(100vh - 147px - 86px);
	margin: 6rem 0;
	background-color: #f6f6f6;
	article {
		padding: 1rem 9%;
		.title {
			h1 {
				font-size: 2em;
				color: #242424;
				margin-bottom: 8px;
				span {
					font-size: 1.5rem;
					background-color: #333;
					color: #fff;
					padding: 0 0.5rem;
					border-radius: 5px;
				}
			}
			span {
				color: #808080;
				font-size: 1.4rem;
				padding-left: 16px;
			}
		}
		.container {
			display: flex;
			flex-flow: column wrap;
			gap: 15px;
			.box {
				background-color: #fff;
				border-radius: 0.5rem;
				box-shadow: 3px 3px 8px #cccbcb;
				.content {
					display: flex;
					justify-content: space-between;
					padding: 0.8rem 1.5rem;
					a {
						color: #0e0e0e;
						font-size: 1.3rem;
						color: #324b64;
						letter-spacing: 3px;
						transition: all 0.8s;
						font-weight: 600;
						&:hover {
							color: #0661c2;
						}
					}
				}
				.bottom {
					display: flex;
					justify-content: space-between;
					padding: 0.5rem 1.5rem;
					a {
						text-decoration: none;
						border: 1px solid #333;
						border-radius: 0.3rem;
						padding: 0.1rem 0.8rem;
						color: #747272;
					}
					p {
						color: #a09f9f;
					}
				}
			}
		}
	}
}

@media screen and (max-width: 768px) {
	main {
		article {
			.title {
				h1 {
					font-size: 1.5em;
				}
			}
			.container {
				.content {
					flex-flow: column wrap;
				}
			}
		}
	}
}
</style>