import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Compass, MainLogoPng } from '../../assets/img';
import { VkLogo, TgLogo, InstLogo } from '../../assets/svg';
import './styles.css';

const Footer = ({ containerStyle, className = '' }) => {
	return (
		<footer className={`footer ${className}`} style={containerStyle}>
			<div className={'blocksContainer'}>
				<div className={'block'}>
					<LazyLoadImage
						className={'icon'}
						src={MainLogoPng}
						alt={'Logo'}
						effect={'blur'}
					/>
					<div>
						<h3 className={'title'}>Находим счастье в горах! Уже 25 лет)</h3>
						<p className={'description'}>ТУРКЛУБ АЛАНИЯ</p>
					</div>
				</div>
				<div className={'block'}>
					<h3 className={'title'}>Теги</h3>
					<ul className={'description'}>
						<li>#ТУРклуб-Алания</li>
						<li>#ТУРы-Алания</li>
						<li>#ТУРисты-Алания</li>
						<li>#ТУРпоходы-Алания</li>
						<li>#ТУРэксурсии-Алания</li>
					</ul>
				</div>
				<div className={'block'}>
					<h3 className={'title'}>Страницы</h3>
					<ul className={'description'}>
						<li>
							<a href={'/'}>Главная</a>
						</li>
						<li>
							<a href={'/profile'}>Профиль</a>
						</li>
						<li>
							<a href={'/gallery'}>Галерея</a>
						</li>
						<li>
							<a href={'/search'}>Поиск</a>
						</li>{' '}
					</ul>
				</div>
				<div className={'block'}>
					<h3 className={'title'}>Контакты</h3>
					<ul className={'description'}>
						<li>Адрес: г. Владикавказ</li>
						<li>Телефон: +7 (918) 836 59 08</li>
						<li>Почта: tur-alania@mail.ru</li>
					</ul>
				</div>
			</div>
			<LazyLoadImage
				src={Compass}
				alt={'Compass'}
				effect={'blur'}
				className={'compass'}
			/>
			<div className={'bottom'}>
				<p className={'copyright'}>
					© 2024-2025 разработано - @Lib_int
				</p>
				<div className={'social'}>
					<a href={'#'} className={'socialLink'}>
						<LazyLoadImage
							src={VkLogo}
							alt={'VK'}
							effect={'blur'}
							className={'socialIcon'}
						/>
					</a>
					<a href={'#'} className={'socialLink'}>
						<LazyLoadImage
							src={TgLogo}
							alt={'Telegram'}
							effect={'blur'}
							className={'socialIcon'}
						/>
					</a>
					<a href={'#'} className={'socialLink'}>
						<LazyLoadImage
							src={InstLogo}
							alt={'Instagram'}
							effect={'blur'}
							className={'socialIcon'}
						/>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;