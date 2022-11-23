import { useEffect, useState } from 'react'

export default function Proyectos() {
	const [proyectos, setProyectos] = useState([])

	useEffect(async () => {
		const response = await fetch('api/proyectos')
		const { data } = await response.json()
		setProyectos(data)
	})

	return (
		<>
			<section id='project'>
				<h2 className='main__title text__center'>Proyectos</h2>
				<div className='flex__container container'>
					{proyectos.map((pro) => {
						return (
							<div className='card flex__1 card__container' style={{ backgroundImage: `url("${pro.image}")` }} key={pro.id}>
								<div className='text__center flex__container card__description'>
									<div className='card__info'>
										<h5 className='sub__title'>
											{pro.icon} {pro.icon_title}
										</h5>
										<h3>
											<strong>{pro.title}</strong>
										</h3>
										<p>{pro.description}</p>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</section>

			<style jsx>{`
				.card__container {
					max-width: 90%;
					min-width: 90%;
					margin: 1.5rem auto;
					background-repeat: no-repeat;
					background-size: cover;
					color: #fff;
					position: relative;
					padding: 30px;
					margin: 1.5rem auto;
				}

				.card__container::before {
					content: '';
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
					left: 0;
					background-color: rgba(0, 0, 0, 0.7);
				}

				.card__description {
					z-index: 100;
				}

				.card__description h5 {
					font-size: 1.2rem;
				}

				.card__info {
					padding: 0 0 20px;
				}

				.card__info h3 {
					font-size: 1.8rem;
				}

				#project {
					scroll-margin-top: 100px;
				}
			`}</style>
		</>
	)
}
