import React, { useRef, useEffect } from 'react';
import TourCard from '../TourCard';
import SliderNavigation from '../SliderNavigation';
import './styles.css';
import ShowMoreButton from '../ShowMoreButton';

const ScrollSlider = ({
	data,
	onShowMore,
	children,
	className = '',
	classNameHeader,
	classNameSlider,
}) => {
	const scrollRef = useRef(null);

	const handleScroll = direction => {
		const container = scrollRef.current;
		const scrollAmount = container.offsetWidth;

		container.scrollBy({
			left: direction === 'next' ? scrollAmount : -scrollAmount,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		const scroll = scrollRef.current;

		const handleWheel = e => {
			e.preventDefault();
			scroll.scrollLeft += e.deltaY;
		};

		scroll.addEventListener('wheel', handleWheel, { passive: false });

		return () => {
			scroll.removeEventListener('wheel', handleWheel);
		};
	}, []);

	return (
		<div className={'scrollContainer ' + className}>
			<div className={'scrollHeader ' + classNameHeader}>
				{children}
				<SliderNavigation
					onPrevClick={() => handleScroll('prev')}
					onNextClick={() => handleScroll('next')}
				/>
			</div>
			<div className={'scrollContainer'} ref={scrollRef}>
				<div className={'scrollContent ' + classNameSlider}>
					{data.map((item, index) => (
						<div key={index} className={'scrollItem'}>
							<TourCard
								key={item.id}
								image={{
									name: item.image,
									small: item.image.replace(
										/(\.[^.]+)$/,
										'_Small$1',
									),
								}}
								title={item.title}
								date={item.date}
								length={item.length}
								difficulty={item.difficulty}
								rating={item.rating}
								reviewCount={item.reviewCount}
								price={item.price}
							/>
						</div>
					))}
					<div className={'safeBtnContainer'}>
						<ShowMoreButton onClick={onShowMore} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScrollSlider;
