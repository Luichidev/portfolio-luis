import { useRef, useState } from 'react'

export default function Navbar() {
	const LINK_SECTION = {
		home: true,
		project: false,
		studies: false
	}
	const [active, setActive] = useState(LINK_SECTION)
	const [showMenu, setShowMenu] = useState(false)

	const handleOpenMenu = () => setShowMenu(!showMenu)

	const handleClickNav = (section) => {
		const links = {
			home: 'home' === section.id,
			project: 'project' === section.id,
			studies: 'studies' === section.id
		}
		setActive(links)
		setShowMenu(false)
	}
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
					<ul className={showMenu ? 'show flex__4' : 'flex__4'}>
						<li className={active.home ? 'active' : ''} onClick={() => handleClickNav(home)}>
							<a href='#home'>Inicio</a>
						</li>
						<li className={active.project ? 'active' : ''} onClick={() => handleClickNav(project)}>
							<a href='#project'>Proyectos</a>
						</li>
						<li className={active.studies ? 'active' : ''} onClick={() => handleClickNav(studies)}>
							<a href='#studies'>Formación</a>
						</li>
					</ul>
				</div>
			</nav>
			<style jsx>{`
				.show {
					height: 210px;
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
					padding: 15px;
					color: #fff;
					text-decoration: none;
				}

				ul > li:hover,
				.select {
					background-color: var(--mainColor);
					border-radius: 5px;
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
						display: block;
						width: 100%;
						height: 100%;
					}

					#burger-icon {
						display: none;
					}
				}
			`}</style>
		</>
	)
}
