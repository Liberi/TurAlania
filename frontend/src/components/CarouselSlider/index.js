import React, { useRef } from 'react';
import Slider from 'react-slick';
import TourCard from '../TourCard';
import SliderNavigation from '../SliderNavigation';
import 'slick-carousel/slick/slick.css';
import './styles.css';

const CarouselSlider = ({ data, children, className = '', classNameHeader }) => {
	const sliderRef = useRef(null);

	const settings = {
		dots: false,
		infinite: false,
		arrows: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		swipeToSlide: true,
		easing: 'ease-in',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const handlePrev = () => {
		sliderRef.current?.slickPrev();
	};

	const handleNext = () => {
		sliderRef.current?.slickNext();
	};

	return (
		<div className={'carouselContainer ' + className}>
			<div className={'carouselHeader ' + classNameHeader}>
				{children}
				<SliderNavigation
					onPrevClick={handlePrev}
					onNextClick={handleNext}
				/>
			</div>
			<Slider ref={sliderRef} {...settings} className={'carouselSlider'}>
				{data.map((item, index) => (
					<div key={index} className={'carouselItem'}>
						<TourCard {...item} />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default CarouselSlider;
