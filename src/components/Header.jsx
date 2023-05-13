

const Header = () => {
	const showBurger = () => {
		const burger = document.querySelector('.burger')
		const burgerBtn = document.querySelector('.burgerBtn')
		burger.classList.toggle("hidden")
		burgerBtn.classList.toggle("fa-bars")
		burgerBtn.classList.toggle("fa-xmark")
	}
	
	return (
		<header className="flex w-full items-center fixed top-0 justify-between h-24 z-50 bg-secondary">
			<img className="w-20 h-20 ml-4" src="src/assets/logo1.png" alt="Pato Criollo Logo" title="Pato Criollo" load="lazy" />
			<h1 className="text-2xl font-medium">Pato Criollo</h1>
			<nav>
				<button className="bg-transparent border-none mx-4">
					<i onClick={showBurger} className="burgerBtn fa-solid fa-bars text-4xl [transition:font-size] duration-100 cursor-pointer"></i>
				</button>
				<ul className="burger w-full text-center hidden absolute top-24 right-0 p-8 m-0 bg-[#ED8806] shadow-xl">
					{[
						[1, 'Productos', '#productos'],
						[2, 'Sucursal', '#sucursal'],
						[3, 'Contacto', '#contacto']
					].map(([key, titulo, url]) => (
						<li className="text-black [list-style:none] my-2" key={key}><a className="text-[1.3rem] transition-all duration-75 hover:underline" href={url}>{titulo}</a></li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header