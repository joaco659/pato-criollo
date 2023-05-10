
const PromotionModal = (props) => {
	const togglePromotionModal = () => {
		const button = document.querySelector('.promo-btn')
		const modal = document.querySelector('.promo')

		button.classList.toggle('hidden')
		modal.classList.toggle('hidden')
	}

	return (
	<>
		<button onClick={togglePromotionModal} className="promo-btn fixed z-10 py-3 px-10 animate-shine bg-orange-400 hover:cursor-pointer">
			<i className="fa-solid fa-gift text-2xl animate-wiggle"></i>
		</button>

		<div className="promo hidden fixed z-30 w-full">
			<i onClick={togglePromotionModal} className="fa-solid fa-xmark bg-red-400 text-center w-full py-2 cursor-pointer text-3xl hover:bg-red-400 hover:text-white hover:bg-[rgb(230,113,113)] transition-colors"></i>
			<a href={props.url} target="_blank">
				<img className="w-full h-full" src={props.src} alt="Promocion Especial" />
			</a>
		</div>
	</>
	)
}

export default PromotionModal