import NavBar from '../../components/navbar/NavBar'
import About from '../about/About'
import Info from '../info/Info'
import Projects from '../projects/Projects'

const Home = () => {
	return (
		<div>
			<NavBar />
			<Info />
			<About />
			<Projects />
		</div>
	)
}
export default Home
