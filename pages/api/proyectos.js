export default function handler(req, res) {
	res.status(200).json({
		data: [
			{
				id: 1,
				icon: '🖥️',
				icon_title: 'Web Design',
				title: 'Cafetería Dolç Café',
				image: '/assets/img/cafe.jpg',
				description: 'Diseño, publicación y desarrollo de la página web para esta cafetería, instalación de plugins y aprovechando al máximo el potencial de WORDPRESS.'
			},
			{
				id: 2,
				icon: '🖥️',
				icon_title: 'Web Design',
				title: 'Pizzería ÑamÑam',
				image: '/assets/img/pizzeria.jpg',
				description: 'Diseño, publicación, mantenimiento y desarrollo de este proyecto con tecnología NEXTJS.'
			},
			{
				id: 3,
				icon: '🖱️',
				icon_title: 'Development & Debugging',
				title: 'Barco de Alquiler',
				image: '/assets/img/boat.png',
				description: 'Debugging de la web al añadir nuevas funcionalidades a la página web, como nuevos barco de https://www.booking-manager.com/, utilizando PHP 7 y ZURB Foundation 6.3.1. Nuevos puertos y nuevas funcionalidades en las reservas de barcos.'
			},
			{
				id: 4,
				icon: '🖱️',
				icon_title: 'Development & Debugging',
				title: 'Onboard Yacht Services',
				image: '/assets/img/obys.jpg',
				description: 'Se añadió a la WEB www.barcodealquiler.com todos los servicios de onboardyachtservices al manager, utilizando PHP 7, PDO y ZURB Foundation 6.3.1. Se añadió nuevas funcionalidades en el backoffice'
			},
			{
				id: 5,
				icon: '🖱️',
				icon_title: 'Development & Debugging',
				title: 'CRM Metro-Electrónica',
				image: '/assets/img/metro.jpg',
				description: 'Se implemento todos los servicios y funcionalidades para que este proyecto administre y organice la empresa, desde facturación, reparaciones y control de stocks. Se creo desde cero el CRM.'
			},
			{
				id: 6,
				icon: '🖱️',
				icon_title: 'Development & Debugging',
				title: 'Sistema de Monitorización y Alertas',
				image: '/assets/img/simona.jpg',
				description: 'SIMONA es una sistema de monitorización y alertas, he desarrollado todo el backoffice del sistema y parte del backEnd.'
			},
			{
				id: 7,
				icon: '🖱️',
				icon_title: 'Development & Debugging',
				title: 'Multiestetica.com',
				image: '/assets/img/multiestetica.webp',
				description: 'Migración completa del proyecto multiestetica.com tajmeeli.com y el dashboard de los médicos hecho en cpon Twig, symfony, sass a Vue3 con composition API.'
			}
		]
	})
}
