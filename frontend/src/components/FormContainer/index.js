import React, { useEffect, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FormImage } from '../../assets/img';
import { debounce } from '../../utils';
import MainLogo from '../MainLogo';
import './styles.css';

const ContainerForm = ({ title, welcomeText, className, children }) => {
	const visualBlockRef = useRef(null);

	// *NOTE: Параметры для анимации "Убегания" логотипа
	useEffect(() => {
		const debouncedMove = debounce(16);
		const element = visualBlockRef.current;

		const handleMouseMove = e => {
			debouncedMove(() => {
				if (!element) return;

				const rect = element.getBoundingClientRect();
				const x = ((e.clientX - rect.left) / element.offsetWidth) * 100;
				const y = ((e.clientY - rect.top) / element.offsetHeight) * 100;

				element.style.setProperty('--x', x);
				element.style.setProperty('--y', y);
			});
		};

		element.addEventListener('mousemove', handleMouseMove);
		return () => element.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<section className={`formContainer ${className || ''}`}>
			<div className={'formVisualBlock'} ref={visualBlockRef}>
				<LazyLoadImage
					src={FormImage}
					alt={'Декоративное изображение'}
					effect={'blur'}
					className={'figureLog'}
				/>
			</div>
			<section className={'form'}>
				<div className={'siteNameBlock'} to={'/'}>
					<MainLogo className={'formLogo'} />
					<h1 className={'siteName'}>ТУР-АЛАНИЯ</h1>
				</div>
				<h3>{title}</h3>
				<p>{welcomeText}</p>
				{children}
			</section>
		</section>
	);
};

export default ContainerForm;
