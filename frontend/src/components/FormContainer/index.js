import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FormImage, MainLogoPng } from '../../assets/img';
import './styles.css';

const ContainerForm = ({ title, welcomeText, className, children }) => {
	return (
		<section className={`formContainer ${className}`}>
			<div className={'formVisualBlock'}>
				<LazyLoadImage
					src={FormImage}
					alt={'Декоративное изображение'}
					className={'figureLog'}
				/>
			</div>
			<section className={'form'}>
				<div className={'siteNameBlock'} to={'/'}>
					<LazyLoadImage
						src={MainLogoPng}
						alt={'Logo'}
						className={'formLogo'}
					/>
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
