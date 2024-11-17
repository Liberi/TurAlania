import React from 'react';
import LinkBlock from '../LinkBlock';
import './styles.css';

const MobileNav = ({ isMenuOpen, variant, setVariant }) => {
	const toggleTheme = () => {
		setVariant(prev => (prev === 'light' ? 'dark' : 'light'));
	};

	return (
		<nav className={`mobileNav ${isMenuOpen ? 'open' : ''} ${variant}`}>
			{isMenuOpen && (
				<>
					<LinkBlock />
					<div className={'mobileNavSetting'}>
						<button
							className={`theme-toggle-button ${variant}`}
							onClick={toggleTheme}
						>
							<span className={`theme-toggle-icon ${variant}`}>
								{variant === 'dark' ? '🌙' : '☀️'}
							</span>
						</button>
					</div>
				</>
			)}
		</nav>
	);
};

export default MobileNav;
