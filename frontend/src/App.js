import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './navigation';


function App() {
	return (
		<BrowserRouter>
			<Navigation />
		</BrowserRouter>
	);
}

export default App;

// const Footer = lazy(() => import('./components/Footer'));
{
	/* <div className={'App'}>
	<Header initTheme={'dark'} />
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
</div> */
}
