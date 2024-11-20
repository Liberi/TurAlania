import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { observer } from 'mobx-react-lite';
import { MainLogoPng, UserPhoto } from '../../assets/img';
import RootStore from '../../stores';
import { LinkBlock, MobileNav } from './components';
import MainButton from '../MainButton';
import './styles.css';

const { settingsStore } = RootStore;

const Header = ({ initTheme = 'light', className }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { theme } = settingsStore;

	// ! FIXME: Вынести в хранилище пользователя
	const isLoggedIn = false;

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<section className={className}>
			<div
				className={`
					headerBlock ${isScrolled || isMenuOpen ? 'scrolled' : ''}
					${isMenuOpen ? theme : initTheme}
				`}
			>
				<button
					className={`burgerButton ${isMenuOpen ? 'open' : ''}`}
					onClick={toggleMenu}
				>
					<span className={'burgerLine'} />
					<span className={'burgerLine'} />
					<span className={'burgerLine'} />
				</button>

				<a className={'siteNameContainer'} href={'/main'}>
					<LazyLoadImage
						src={MainLogoPng}
						alt={'Logo'}
						className={'headerLogo'}
					/>
					<h1 className={'headerTitle'}>ТУР-АЛАНИЯ</h1>
				</a>

				<nav className={'headerNav desktopNav'}>
					<LinkBlock onClick={() => alert('Клик!')} />
				</nav>

				{isLoggedIn ? (
					<div className={'profileImageContainer'}>
						<LazyLoadImage
							src={UserPhoto}
							alt={'Profile'}
							className={'profileImage'}
						/>
					</div>
				) : (
					<MainButton
						text={'Войти'}
						className={'loginButton'}
						variant={
							(isMenuOpen ? theme : initTheme) === 'light'
								? 'primary'
								: 'primaryLight'
						}
						onClick={() => alert('Клик!')}
					/>
				)}
			</div>
			<MobileNav isMenuOpen={isMenuOpen} theme={theme} />
		</section>
	);
};

export default observer(Header);
