import { useState } from 'react'
import { Link } from 'react-scroll/modules'

export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false)

	const handleOpenMenu = () => setShowMenu(!showMenu)

	return (
		<>
			<nav>
				<div className='flex__container container'>
					<div className='logo flex__2'>
						<img src='/assets/img/logoluis.png' alt='Logo porfolio Luis' />
					</div>
					<div id='burger-icon' onClick={handleOpenMenu}>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<ul className={'flex__4 ' + (showMenu ? 'show' : '')}>
						<li>
							<Link className='link' activeClass='active' to='home' spy={true} smooth={true} offset={0} duration={500} onClick={handleOpenMenu}>
								Inicio
							</Link>
						</li>
						<li>
							<Link className='link' activeClass='active' to='project' spy={true} smooth={true} offset={-60} duration={500} onClick={handleOpenMenu}>
								Proyectos
							</Link>
						</li>
						<li>
							<Link className='link' activeClass='active' to='studies' spy={true} smooth={true} offset={-60} duration={500} onClick={handleOpenMenu}>
								Formación
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<style jsx>{`
				.show {
					height: 160px;
				}

				.logo img {
					width: 40%;
				}

				nav {
					width: 100%;
					padding: 10px;
					background-color: inherit;
				}

				span {
					cursor: pointer;
					display: block;
					border: 2px solid #00a551;
					border-radius: 3px;
					width: 23px;
					height: 23px;
				}

				ul {
					height: 0;
					overflow: hidden;
					left: 0;
					list-style: none;
					margin: 0;
					padding: 0;
					position: absolute;
					top: 50px;
					text-align: center;
					transition: height 0.3s linear;
					width: 100%;
					background-color: var(--secondColor);
				}

				ul > li {
					display: block;
					color: #fff;
					text-decoration: none;
				}

				#burger-icon {
					width: 2rem;
					height: 2rem;
				}

				#burger-icon div {
					width: 2rem;
					height: 0.3rem;
					background-color: #fff;
					margin: 7px 0 0;
				}

				@media screen and (min-width: 480px) {
					ul {
						top: 70px;
					}
					.logo img {
						width: 30%;
					}
				}

				@media screen and (min-width: 768px) {
					ul {
						top: 95px;
					}
				}

				@media screen and (min-width: 1024px) {
					nav {
						padding: 10px;
						margin-top: 0;
					}

					span {
						display: none;
					}

					ul {
						display: flex;
						height: auto;
						position: static;
						width: auto;
					}

					ul > li {
						width: 200px;
						margin-right: 10px;
					}

					ul > li > a {
						width: 100%;
					}

					#burger-icon {
						display: none;
					}
				}
			`}</style>
		</>
	)
}
