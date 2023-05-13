
const CarouselProduct = props => {
	return (
		<div className="flex flex-col justify-center h-full">
			<img src={props.src} alt="Producto" className="absolute w-full self-start h-full" />
			<h2 className="z-10 self-center text-center text-2xl max-w-full w-fit break-words m-4 bg-[#dadadaaa] p-1 rounded-2xl">{props.name}</h2>
			<button className="z-10 text-xl bg-terciary text-white w-fit self-center px-4 pb-1 text-center rounded-3xl hover:bg-[#D05609] hover:scale-110 transition-all active:scale-105">Ver mas</button>
		</div>
	)
}

export default CarouselProduct