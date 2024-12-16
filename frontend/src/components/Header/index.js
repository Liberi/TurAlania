import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { LinkBlock, MobileNav } from './components';
import MainButton from '../MainButton';
import MainLogo from '../MainLogo';
import { StandardUserIcon } from '../../assets/svg';
import RootStore from '../../store';
import './styles.css';

const { settingsStore, userStore } = RootStore;

const Header = ({ navigate, initTheme = 'light', className = '' }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { theme } = settingsStore;
	const { id, avatarUrl } = userStore.data || {};
	const isLoggedIn = !!id;

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

	const handleLogout = () => {
		userStore.logout();
		navigate('/');
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

				<Link className={'siteNameContainer'} to={'/'}>
					<MainLogo
						visibleByDefault={true}
						className={'headerLogo'}
					/>
					<h1 className={'headerTitle'}>ТУР-АЛАНИЯ</h1>
				</Link>

				<nav className={'headerNav desktopNav'}>
					<LinkBlock onClick={() => alert('Клик!')} />
				</nav>

				{isLoggedIn ? (
					<div className={'profileImageContainer'}>
						<LazyLoadImage
							src={!avatarUrl ? StandardUserIcon : avatarUrl}
							placeholderSrc={StandardUserIcon}
							effect={'blur'}
							alt={'Profile'}
							className={'profileImage'}
						/>
						<p
							className={`profileLogout ${initTheme}`}
							onClick={handleLogout}
						>
							Выйти
						</p>
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
						onClick={() => navigate('/login')}
					/>
				)}
			</div>
			<MobileNav isMenuOpen={isMenuOpen} theme={theme} />
		</section>
	);
};

export default observer(Header);
