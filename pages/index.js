import Footer from '@/components/Footer'
import Formacion from '@/components/formacion'
import Header from '@/components/Header'
import Proyectos from '@/components/proyectos'
import Home from './home/index'
export default function index() {
	return (
		<>
			<Header />
			<main>
				<Home />
				<Proyectos />
				<Formacion />
				<Footer />
			</main>
		</>
	)
}
