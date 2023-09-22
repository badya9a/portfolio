import { BsPinMapFill } from 'react-icons/bs'

const About = () => {
	return (
		<section className='flex items-center justify-center gap-16 w-full h-[100vh]'>
			<div>
				<img
					src='/images/about-img.jpg'
					className='w-[400px] h-[300px] rounded-xl'
				/>
			</div>
			<div className='w-[400px] flex flex-col gap-3'>
				<span className='uppercase text-blue-700 font-bold'>about me</span>
				<h3 className='relative text-xl font-bold'>
					A dedicated Front-end Developer based in Kamianske, Ukraine{' '}
					<span className='absolute left-[49%] bottom-2'>
						<BsPinMapFill size={20} />
					</span>
				</h3>
				<p className='text-gray-500 text-sm'>
					As a Junior Front-End Developer, I possess an impressive arsenal of
					skills in HTML, CSS, JavaScript, React, Redux, Next.js, Tailwind,
					MaterialUI and SCSS. I excel in maintaining responsive websites that
					offer a smooth user experience. My expertise lies in crafting dynamic,
					engaging interface through writing clean and optimized code and
					utilizing cutting-edge development tools and techniques. I am also a
					team player who thrives in collaborating with cross-functional teams
					to produce outstanding web applications.
				</p>
			</div>
		</section>
	)
}
export default About
