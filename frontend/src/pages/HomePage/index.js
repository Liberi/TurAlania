import React, { Suspense } from 'react';
import { Footer, Header, TourCard } from '../../components';
import ReactPlayer from 'react-player';
import { TourForm } from './components';
import PopularNowBlockSkeleton from './components/PopularNowBlock/skeleton';
import { observer } from 'mobx-react-lite';
import store from '../../store';
import './styles.css';

import coniferousForest from '../../assets/img/mockImg/coniferous-forest.png';
import tseyskyGlacier from '../../assets/img/mockImg/tseysky-glacier.png';
import tseiRepeater from '../../assets/img/mockImg/tsei-repeater.png';
import tseyskoyeGorge from '../../assets/img/mockImg/tseyskoye-gorge.jpg';

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
						playing={false}
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
					{_mockDataPopularTourCards.map(data => (
						<TourCard
							key={data.id}
							image={data.image}
							title={data.title}
							date={data.date}
							length={data.length}
							difficulty={data.difficulty}
							rating={data.rating}
							reviewCount={data.reviewCount}
							price={data.price}
						/>
					))}
				</div>
			</section>
			<Footer />
		</>
	);
};

export default observer(HomePage);

const _mockDataPopularTourCards = [
	{
		id: 1,
		image: tseyskyGlacier,
		title: 'Поход к подножью Цейского ледника',
		date: '13 октября',
		length: '4 км',
		difficulty: 'Выше средней сложности',
		rating: 4,
		reviewCount: 124,
		price: 3500,
	},
	{
		id: 2,
		image: tseiRepeater,
		title: 'Поход в Цей через хвойный лес к ретранслятору',
		date: '3 ноября',
		length: '8 км',
		difficulty: 'Средняя сложность',
		rating: 5,
		reviewCount: 89,
		price: 2800,
	},
	{
		id: 3,
		image: coniferousForest,
		title: 'Поход по хвойному лесу осеннего Цейского ущелья',
		date: '4 ноября',
		length: '5 км',
		difficulty: 'Легкая сложность',
		rating: 4.7,
		reviewCount: 156,
		price: 3200,
	},
	{
		id: 4,
		image: tseyskoyeGorge,
		title: 'Цейское ущелье',
		date: '12 декабря',
		length: '6 км',
		difficulty: 'Средняя сложность',
		rating: 4.8,
		reviewCount: 124,
		price: 3500,
	},
]; /* // Функция для загрузки данных
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
