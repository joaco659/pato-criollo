
import { Splide, SplideSlide } from '@splidejs/react-splide'
import CarouselProduct from '../components/CarouselProduct'
import '../styles/splide.min.css'

const Carousel = () => {
	const carouselProducts = [
		[1, "Albondigas"],
		[2, "Milanesas"],
		[3, "Hamburguesas"],
		[4, "Pollo"],
		[5, "Producto con nombre demasiado largo"]
	]

	return (
		<Splide aria-label="Productos destacados"
		className="mt-[6em] h-80 sm:h-96 md:h-[29rem] lg:h-[35rem]"
		tag="section"
		options={ { 
			type: 'loop',
			autoplay: true
		} }>
			{
				carouselProducts.map(([id, product]) => (
					<SplideSlide className="h-80 sm:h-96 md:h-[29rem] lg:h-[35rem]">
						<CarouselProduct src="src/assets/placeholder_img.png" name={product} id={id}></CarouselProduct>
					</SplideSlide>
				))
			}
		</Splide>
	)
}

export default Carousel