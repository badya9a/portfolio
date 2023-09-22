const NavBar = () => {
	const scrollToElement = (elementId: string) => {
		const container = document.getElementById(elementId)
		container?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<nav>
			<div className='w-full flex justify-between fixed top-0 left-0 p-5'>
				<div>
					<h3 className='text-black font-bold text-xl'>Bohdan.dev</h3>
				</div>
				<div className='flex gap-5 text-lg text-black font-bold'>
					<a className='cursor-pointer' onClick={() => scrollToElement('info')}>
						Home
					</a>
					<a
						className='cursor-pointer'
						onClick={() => scrollToElement('about')}
					>
						About
					</a>
					<a
						className='cursor-pointer'
						onClick={() => scrollToElement('projects')}
					>
						Projects
					</a>
				</div>
			</div>
		</nav>
	)
}
export default NavBar
