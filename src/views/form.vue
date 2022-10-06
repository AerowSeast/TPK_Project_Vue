<template>
	<main>
		<section class="contact">
			<div class="row">
				<div class="image">
					<img src="@/assets/img/church.png" alt="太平境馬雅各紀念教會" />
				</div>

				<form action="" class="form">
					<h1 class="form_title">聯絡我們</h1>
					<div class="inputBox">
						<div class="column">
							<label>姓名</label>
							<input type="text" />
						</div>
						<div class="column">
							<label>聯絡信箱</label>
							<input type="email" />
						</div>
					</div>
					<div class="inputBox">
						<div class="column">
							<label>聯絡地址</label>
							<input type="text" />
						</div>
						<div class="column">
							<label>連絡電話</label>
							<input type="tel" />
						</div>
					</div>
					<div class="inputBox">
						<div class="column">
							<label>聯絡人士</label>
							<input type="text" />
						</div>
						<div class="column">
							<label>待新增</label>
							<input type="email" />
						</div>
					</div>
					<div class="radio">
						<label>性別：</label>
						<div class="column"><input name="Gender" type="radio" /> 男性 <input name="Gender" type="radio" /> 女性</div>
					</div>
					<textarea placeholder="問題與訊息" name="" id="" cols="30" rows="5"></textarea>
					<input type="submit" class="btn" value="送出請求" />
				</form>
			</div>
		</section>
	</main>
</template>


<style lang="less" scoped>
main {
	width: 100%;
	min-height: calc(100vh - 86px - 147px);
	.contact {
		height: 100%;
		margin-top: 6rem;
		padding: 1rem 9%;
		.row {
			display: flex;
			justify-content: center;
			align-items: center;
			.image {
				width: 50%;
				height: 65vh;
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
			.form {
				position: relative;
				box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
				padding: 1rem;
				width: 50%;
				height: 65vh;
				overflow: hidden;
				background-color: rgba(0, 0, 0, 0.7);
				color: #fafafa;
				.form_title {
					font-size: 2rem;
				}
				.inputBox {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
					grid-gap: 1rem;
					.column {
						display: flex;
						flex-direction: column;
						label {
							font-size: 1.2rem;
							padding: 0.5rem 0;
						}
						input {
							padding: 0.5rem 0.8rem;
							border: none;
							border-radius: 0.2rem;
							outline: none;
							font-size: 1.5rem;
							box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.3);
						}
					}
				}
				.radio {
					display: flex;
					flex-flow: row wrap;
					justify-content: flex-start;
					gap: 10px;
					margin-top: 0.6rem;
				}
				textarea {
					border-radius: 0.2rem;
					border: none;
					outline: none;
					resize: none;
					width: 100%;
					font-size: 1.2rem;
					color: #333;
					margin-top: 8px;
					padding: 0.5rem 1rem;
					box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.3);
				}
				input[type='submit'] {
					position: relative;
					color: #fafafa;
					font-size: 1.4rem;
					padding: 0.6rem 1.4rem;
					border-radius: 0.5rem;
					border: none;
					display: block;
					margin: 0.3rem auto 0 auto;
					letter-spacing: 0.1em;
					transition: all 2s;
					cursor: pointer;
					letter-spacing: 0.1em;
					transition: all 0.5s;
					background-color: #444;
					font-weight: 600;
					&:hover {
						letter-spacing: 0.25em;
						background-color: #fafafa;
						box-shadow: 0 0 15px #fafafa;
						color: #323232;
					}
					&::before {
						content: '';
						position: absolute;
						inset: 2px;
						background-color: #27282c;
					}
				}
			}
		}
	}
}

@media screen and (max-width: 768px) {
	main {
		padding: 0;
		margin-bottom: 8rem;
		.contact {
			width: 100vw;
			padding: 0;
			.row {
				flex-direction: column;
				.image {
					width: 100%;
					img {
						width: 100%;
					}
				}
				.form {
					padding: 0.8rem 0.2rem;
					width: 100%;
					height: 100%;
					h1 {
						text-align: center;
						font-size: 2.2rem;
					}
					.inputBox {
						grid-gap: 0;
					}
				}
			}
		}
	}
	footer {
		position: fixed;
		left: 0;
		bottom: 0;
	}
}
</style>