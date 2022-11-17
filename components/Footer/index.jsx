import Linkedin from '@/components/Icons/linkedin'
import Twitter from '@/components/Icons/Twitter'
import Whatsapp from '@/components/Icons/Whatsapp'
import Github from '@/components/Icons/Github'

export default function Footer() {
	return (
		<>
			<footer>
				<div className='container'>
					<h3>Puedes contactarme en cualquiera de mis redes sociales</h3>
					<div className='flex__container social-icons'>
						<a href='https://www.linkedin.com/in/luichidev/' className='flex__1' target='_blank' rel='noopener' aria-label='Linkedin'>
							<Linkedin />
						</a>
						<a href='https://api.whatsapp.com/send?phone=+34663411621' className='flex__1' target='_blank' rel='noopener' aria-label='whatsapp'>
							<Whatsapp />
						</a>
						<a href='https://twitter.com/@luichidev' className='flex__1' target='_blank' rel='noopener' aria-label='Twitter'>
							<Twitter />
						</a>
						<a href='https://github.com/luichidev' className='flex__1' target='_blank' rel='noopener' aria-label='Github'>
							<Github />
						</a>
					</div>
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

				.social-icons {
					max-width: 50%;
					margin: 0 auto;
				}

				.social-icons a {
					margin: 5px;
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
