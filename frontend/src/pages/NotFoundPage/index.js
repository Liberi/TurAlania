import React from 'react';
import { Footer, Header } from '../../components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NotFoundImage, NotFoundImageLow } from '../../assets/img';
import './styles.css';

const NotFoundPage = () => {
	return (
		<>
			<Header initTheme={'light'} />
			<div className={'authorizationFormContainer'}>
				<LazyLoadImage
					src={NotFoundImage}
					placeholderSrc={NotFoundImageLow}
					alt={'NotFoundImage'}
					wrapperClassName={'notFoundImageWrapper'}
					className={'notFoundImage shadowBlock'}
				/>
				<h1 className={'shadowText'}>404 - Страница не найдена</h1>
			</div>
			<Footer />
		</>
	);
};

export default NotFoundPage;
