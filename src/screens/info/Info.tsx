import { BsLinkedin, BsGithub, BsPinMapFill } from 'react-icons/bs'

const Info = () => {
	return (
		<section
			className='w-full h-[100vh] flex flex-col items-center justify-center'
			id='info'
		>
			<article className='flex mb-24'>
				<div className='w-full flex flex-col gap-5'>
					<div>
						<h1 className='font-bold text-3xl'>React Front-End Developer</h1>
					</div>
					<p className='text-gray-500 text-lg relative w-[400px]'>
						Hi, I'm Bohdan Kozikov. A passionate Front-end React Developer based
						in Kamianske, Ukraine.
						<span className='absolute bottom-1.5'>
							<BsPinMapFill size={20} />
						</span>
					</p>
					<div className='flex gap-5'>
						<a
							href='https://www.linkedin.com/in/bohdan-kozikov-559887290'
							target='_blank'
						>
							<BsLinkedin size={30} color={'black'} />
						</a>
						<a href='https://github.com/badya9a' target='_blank'>
							<BsGithub size={30} color='black' />
						</a>
					</div>
				</div>
				<div
					className='h-[200px] w-[300px]'
					style={{
						backgroundImage: `url(/images/photo.jpg)`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						borderRadius: '50%',
					}}
				></div>
			</article>
			<article className='flex items-center justify-center'>
				<p className='text-black text-lg'>Tech Stack</p>
				<span className='w-[3px] h-[40px] bg-gray-600 mr-20 ml-4'>.</span>
				<div className='flex gap-10 items-center'>
					<img src='/images/html.png' width='50px' />
					<img src='/images/css.png' width='50px' />
					<img src='/images/javascript.png' width='50px' />
					<img src='/images/react.png' width='50px' />
					<img src='/images/tailwind.png' width='50px' />
					<img src='/images/sass.png' width='50px' />
				</div>
			</article>
		</section>
	)
}
export default Info
