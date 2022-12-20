import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Formacion() {
	const [formacion, setFormacion] = useState([])

	useEffect(async () => {
		const response = await fetch('api/formacion')
		const { data } = await response.json()
		setFormacion(data)
	}, [])

	return (
		<>
			<section id='studies'>
				<h2 className='main__title text__center'>Formación</h2>
				<div className='flex__container container'>
					{formacion.map((estudios) => {
						return (
							<div className='card card__formacion flex__1' key={estudios.id}>
								<div className='view'>
									<Image alt={estudios.title} src={estudios.image} placeholder='blur' width={500} height={331} />
								</div>
								<div className='card-header'>
									<h2 className='sub__title'>{estudios.title}</h2>
									<p className='text__center'>
										<span>{estudios.icon}</span>
										{estudios.sub_title}
									</p>
								</div>
								<div className='card-body'>
									<ul>
										{estudios.skill.map((ele, index) => {
											return <li key={index}>{ele}</li>
										})}
									</ul>
								</div>
								<div className='card-footer'></div>
							</div>
						)
					})}
				</div>
			</section>

			<style jsx>{`
				.card-header h2 {
					text-align: center;
					color: var(--mainColor);
					text-shadow: 0 0 0;
				}

				.card-header p {
					margin: 0;
					padding: 0;
				}

				.card-header p > span {
					margin-right: 0.5rem;
					font-size: 1.1rem;
				}

				.view img {
					width: 100%;
				}

				li {
					padding-inline-end: 16px;
					padding-block-end: 8px;
					color: #747373;
				}

				#studies {
					scroll-margin-top: 100px;
				}
			`}</style>
		</>
	)
}
