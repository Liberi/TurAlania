import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MainLogoPng, UserPhoto } from '../../assets/img';
import MainButton from '../MainButton';
import { LinkBlock, MobileNav } from './components';
import './styles.css';

const Header = ({ initVariant = 'light' }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	// ! Перенести в глобальный контекст
	const [variant, setVariant] = useState(initVariant);

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
		<section>
			<div
				className={`
					headerBlock ${isScrolled || isMenuOpen ? 'scrolled' : ''}
					${variant}
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
					<LinkBlock />
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
							variant === 'light' ? 'primary' : 'primaryLight'
						}
						onClick={() => alert('Клик!')}
					/>
				)}
			</div>
			<MobileNav
				isMenuOpen={isMenuOpen}
				variant={variant}
				setVariant={setVariant}
			/>
		</section>
	);
};

export default Header;
