import React from 'react';
import { Footer, Header } from '../../components';
import ReactPlayer from 'react-player';
import './styles.css';
import { TourForm } from './components';
import { observer } from 'mobx-react-lite';
import store from '../../store';

// eslint-disable-next-line no-unused-vars
const HomePage = ({ navigate }) => {
	const { settingsStore } = store;

	return (
		<>
			<Header initTheme={'dark'} />
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
			<Footer />
		</>
	);
};

export default observer(HomePage);
