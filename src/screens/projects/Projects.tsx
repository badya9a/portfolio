import { BsBoxArrowUpRight, BsGithub } from 'react-icons/bs'

const Projects = () => {
	return (
		<section className='w-full flex flex-col' id='projects'>
			<div className='flex flex-col items-center'>
				<h3 className='text-blue-700 font-bold text-xl'>Portfolio</h3>
				<p className='text-black font-bold text-2xl'>
					Each project is a unique piece of development
				</p>
			</div>
			<div className='flex flex-col items-center gap-20 py-16'>
				<div className='flex justify-center gap-10'>
					<div>
						<img
							src='/images/cinema-project.png'
							className='w-[500px] h-[300px] rounded-xl'
						/>
					</div>
					<div className='flex flex-col items-center justify-center w-[400px] text-center'>
						<h4 className='font-bold mb-4 text-lg uppercase'>Online cinema</h4>
						<p className='text-gray-500'>
							An online cinema website is an online platform that allows users
							to watch movies, search by categories and rate movies
						</p>
						<div className='flex flex-wrap gap-4 my-6 '>
							<span className='font-bold'>Next.js</span>
							<span className='font-bold'>Redux</span>
							<span className='font-bold'>SCSS</span>
							<span className='font-bold'>Tailwind</span>
						</div>
						<div className='flex gap-8'>
							<a
								target='_blank'
								href='https://github.com/badya9a/cinema.tv'
								className='cursor-pointer flex gap-1 items-center'
							>
								<p>Code</p>
								<BsGithub size={25} />
							</a>
							<a
								target='_blank'
								href='https://cinema-tv-kappa.vercel.app'
								className='cursor-pointer flex gap-1 items-center'
							>
								<p>Live Demo</p>
								<BsBoxArrowUpRight size={25} />
							</a>
						</div>
					</div>
				</div>
				<div className='flex justify-center gap-10'>
					<div className='flex flex-col items-center justify-center w-[400px]'>
						<h4 className='font-bold mb-4 text-lg uppercase'>Car Rental</h4>
						<p className='text-gray-500 text-center'>
							A car rental website is an online platform that allows users to
							rent cars for personal or business use. The website provides an
							interface for searching and reserving cars
						</p>
						<div className='flex flex-wrap gap-4 my-6 '>
							<span className='font-bold'>React</span>
							<span className='font-bold'>Redux</span>
							<span className='font-bold'>MaterialUI</span>
						</div>
						<div className='flex gap-8'>
							<a
								target='_blank'
								href='https://github.com/badya9a/carrental'
								className='cursor-pointer flex gap-1 items-center'
							>
								<p>Code</p>
								<BsGithub size={25} />
							</a>
							<a
								target='_blank'
								href='carrental-qovav170w-badya9a.vercel.app'
								className='cursor-pointer flex gap-1 items-center'
							>
								<p>Live Demo</p>
								<BsBoxArrowUpRight size={25} />
							</a>
						</div>
					</div>
					<div>
						<img
							src='/images/carrental-project.png'
							className='w-[500px] h-[300px] rounded-xl'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Projects
