import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';
import MainButton from '../MainButton';

const ImageModal = ({ image, onClose }) => {
	if (!image) return null;
	const { src, placeholderSrc } = image;

	return (
		<div className={'imageModalOverlay'} onClick={onClose}>
			<div
				className={'imageModalContent'}
				onClick={e => e.stopPropagation()}
			>
				<MainButton
					text={'✖'}
					className={'btnModalClose'}
					onClick={onClose}
					variant={'secondary'}
				/>
				<LazyLoadImage
					src={src}
					placeholderSrc={placeholderSrc}
					effect={'blur'}
					alt={image.title}
					className={'imageModalImage'}
					wrapperClassName={'imageModalWrapper'}
				/>
				<p className={'imageModalTitle'}>{image.title}</p>
			</div>
		</div>
	);
};

export default ImageModal;