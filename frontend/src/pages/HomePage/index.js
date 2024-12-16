import React, { Suspense } from 'react';
import {
	ScrollSlider,
	Footer,
	Header,
	TourCard,
	SectionHeading,
	GallerySection,
} from '../../components';
// import TourCardSkeleton from '../../components/TourCard/skeleton';
import GallerySectionSkeleton from '../../components/GallerySection/skeleton';
import ReactPlayer from 'react-player';
import { TourForm } from './components';
import PopularNowBlockSkeleton from './components/PopularNowBlock/skeleton';
import { observer } from 'mobx-react-lite';
import store from '../../store';
import './styles.css';

import { _PopularTourCards } from './mockData/_PopularTourCards';
import { _RecommendedPlacesSliders } from './mockData/_RecommendedPlacesSliders';

const PopularNowBlock = React.lazy(
	() => import('./components/PopularNowBlock'),
);

const HomePage = ({ navigate }) => {
	const { settingsStore } = store;

	return (
		<>
			<Header initTheme={'dark'} navigate={navigate} />
			<section className={'sectionGreetings'}>
				<div
					className={`video-container ${settingsStore.isPipMode ? 'pip-mode' : ''}`}
				>
					<ReactPlayer
						url={'/MainVideo.mp4'}
						playing={true}
						loop={true}
						muted={true}
						width={'100%'}
						height={'100%'}
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							objectFit: 'cover',
						}}
						onEnablePIP={() => settingsStore.setIsPipMode(true)}
						onDisablePIP={() => settingsStore.setIsPipMode(false)}
					/>
					<div className={'text-overlay'}>
						<h1 className={'shadowText'}>
							{`Откройте для себя Осетию:
								Ваш идеальный тур начинается здесь!`}
						</h1>
						<h3
							className={'shadowText'}
						>{`Добро пожаловать! Исследуйте уникальную культуру и живописные пейзажи Осетии с нашими разнообразными турами.
						Найдите идеальный маршрут, насладитесь местной кухней и создайте незабываемые воспоминания.
						Начните свое путешествие сегодня!`}</h3>
					</div>
				</div>
				<TourForm />
			</section>
			<section className={'sectionPopularNow'}>
				<div className={'popularNowDescriptions'}>
					<h2>Исследуйте популярные места</h2>
					<h3>
						Мы предлагаем разнообразные туры, которые подойдут как
						для искателей приключений, так и для любителей
						спокойного отдыха.
					</h3>
				</div>
				<Suspense fallback={<PopularNowBlockSkeleton />}>
					<PopularNowBlock />
				</Suspense>
				<div className={'popularTourCardsWarper'}>
					{_PopularTourCards.map(item => (
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
					))}
					{/* {Array(4)
						.fill()
						.map((_, index) => (
							<TourCardSkeleton key={index} />
						))} */}
				</div>
			</section>
			<ScrollSlider
				data={_RecommendedPlacesSliders}
				classNameHeader={'recommendedPlacesHeder'}
				classNameSlider={'recommendedPlacesSlider'}
			>
				<SectionHeading
					title={'Рекомендуемые места'}
					description={
						'Откройте для себя самые живописные уголки Осетии! Наши рекомендуемые места подарят вам незабываемые впечатления и позволят насладиться красотой региона.'
					}
					className={'mT80'}
				/>
			</ScrollSlider>
			<Suspense
				fallback={
					<GallerySectionSkeleton className={'gallerySection mT80'} />
				}
			>
				<GallerySection
					className={'gallerySection mT80'}
					navigate={navigate}
				/>
			</Suspense>

			<Footer className={'homePageFooter'} />
		</>
	);
};

export default observer(HomePage);

/* // Функция для загрузки данных
const fetchPopularNowData = async () => {
	const response = await fetch('/api/popular-now');
	return response.json();
};

const PopularNowBlockWrapper = () => {
	const { data, isLoading, error } = useQuery(
		'popularNowData',
		fetchPopularNowData,
	);

	const PopularNowBlock = React.lazy(() => import('./PopularNowBlock'));

	if (isLoading) {
		return <PopularNowBlockSkeleton />;
	}

	if (error) {
		return <div>Ошибка загрузки</div>;
	}

	return (
		<Suspense fallback={<PopularNowBlockSkeleton />}>
			<PopularNowBlock data={data} />
		</Suspense>
	);
}; */
