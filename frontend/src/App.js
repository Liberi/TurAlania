// import logo from './logo.svg';
import { MainLogoPng } from './assets/img';
import './App.css';
import { MainButton, Header } from './components';
import { lazy, Suspense } from 'react';

const Footer = lazy(() => import('./components/Footer'));

function App() {
	return (
		<div className={'App'}>
			<Header initVariant={'dark'} />
			{/*  или 'light' */}
			<section className={'App-header'}>
				<img src={MainLogoPng} className={'App-logo'} alt={'logo'} />
				<p>
					Начало разработки сайта <code>ТУР-Алания</code> скоро здесь
					будет много всего)
				</p>
				<a
					className={'App-link'}
					href={'https://reactjs.org'}
					target={'_blank'}
					rel={'noopener noreferrer'}
				>
					Смотреть макет
				</a>
				<MainButton
					text={'Смотреть еще'}
					onClick={() => alert('Клик!')}
					variant={'primary'}
					disabled={false}
					containerStyle={{ marginTop: '20px' }}
				/>
			</section>
			<Suspense fallback={<div>Загрузка...</div>}>
				<Footer />
			</Suspense>
		</div>
	);
}

export default App;
