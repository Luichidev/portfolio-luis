import Linkedin from '@/components/Icons/linkedin'
import Twitter from '@/components/Icons/Twitter'
import Github from '@/components/Icons/Github'

export default function SocialIcon() {
	return (
		<>
			<div className='flex__container social-icons'>
				<a href='https://www.linkedin.com/in/luichidev/' target='_blank' rel='noopener' aria-label='Linkedin'>
					<Linkedin />
				</a>
				<a href='https://twitter.com/@luichidev' target='_blank' rel='noopener' aria-label='Twitter'>
					<Twitter />
				</a>
				<a href='https://github.com/luichidev' target='_blank' rel='noopener' aria-label='Github'>
					<Github />
				</a>
			</div>
			<style jsx>{`
				.social-icons {
					justify-content: center;
					gap: 8px;
				}

				.social-icons a {
					margin: 5px;
				}
			`}</style>
		</>
	)
}
