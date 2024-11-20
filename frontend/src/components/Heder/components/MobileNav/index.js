import React from 'react';
import LinkBlock from '../LinkBlock';
import { DayNightIcon } from '../../../../assets/svg';
import RootStore from '../../../../stores';
import './styles.css';

const { settingsStore } = RootStore;

const MobileNav = ({ isMenuOpen, theme }) => {

	const toggleTheme = () => {
		settingsStore.setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<nav className={`mobileNav ${isMenuOpen ? 'open' : ''} ${theme}`}>
			{isMenuOpen && (
				<>
					<LinkBlock onClick={() => alert('Клик!')} />
					<div className={'mobileNavSetting'}>
						<button
							className={`theme-toggle-button ${theme}`}
							onClick={toggleTheme}
						>
							<DayNightIcon />
						</button>
					</div>
				</>
			)}
		</nav>
	);
};

export default MobileNav;
