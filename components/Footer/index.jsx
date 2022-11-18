import SocialIcon from '../socialIcon'

export default function Footer() {
	return (
		<>
			<footer>
				<div className='container'>
					<h3>Puedes contactarme en cualquiera de mis redes sociales</h3>
					<SocialIcon />
					<div className='footer-info'>
						<p>Portfolio WEB | Luis Alberto Arana Montaño</p>
					</div>
				</div>
			</footer>
			<style jsx>{`
				footer {
					background-color: var(--secondColor);
					color: #fff;
					text-align: center;
				}

				.container {
					background-color: rgba(0, 0, 0, 0.1);
					padding: 20px 0;
				}
				.container h3 {
					padding-bottom: 10px;
				}

				.footer-info {
					margin-top: 10px;
				}

				.footer-info p {
					margin: 0;
					padding: 0;
				}
			`}</style>
		</>
	)
}
