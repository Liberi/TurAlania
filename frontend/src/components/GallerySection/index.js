/* eslint-disable indent */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
	LazyLoadImage,
	trackWindowScroll,
} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import SectionHeading from '../SectionHeading';
import MainButton from '../MainButton';
import store from '../../store';
import './styles.css';
import Skeleton from 'react-loading-skeleton';
import { getApiUrlFromPath } from '../../utils';
import ImageModal from '../ImageModal';
import LoadingDots from '../LoadingDots';
import { NotFoundImageLow } from '../../assets/img';

const GallerySection = ({
	isSection = true,
	className = '',
	navigate,
	offset = 0,
	limit = 8,
	scrollPosition,
}) => {
	const [selectedImage, setSelectedImage] = useState(null);
	const { imagesStore } = store;
	const data = useMemo(() => imagesStore?.data || [], [imagesStore?.data]);

	useEffect(() => {
		imagesStore.loadImages(limit, offset);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [limit, offset]);

	const ImageItem = (image, index) => {
		const src = getApiUrlFromPath(
			`fileStorage/images/original/${image.name}`,
		);
		const placeholderSrc = image?.small
			? getApiUrlFromPath(`fileStorage/images/small/${image.small}`)
			: null;

		const imageData = {
			src,
			placeholderSrc,
		};

		return useMemo(
			() => (
				<LazyLoadImage
					key={index}
					src={src}
					placeholderSrc={placeholderSrc}
					scrollPosition={scrollPosition}
					effect={'blur'}
					alt={image.title}
					className={'galleryImage successLoad'}
					onClick={() => setSelectedImage(imageData)}
					onError={e => {
						e.target.src = NotFoundImageLow;
					}}
				/>
			),
			// eslint-disable-next-line react-hooks/exhaustive-deps
			[image],
		);
	};

	const GalleryImages = useCallback(() => {
		if (data.length < 8) {
			return (
				<>
					{Array(8)
						.fill()
						.map((_, index) => (
							<Skeleton
								key={index}
								className={'galleryImage'}
								height={360}
							/>
						))}
				</>
			);
		}

		return data.slice(0, isSection ? 8 : data.length).map(ImageItem);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return (
		<section className={'gallerySection ' + className}>
			<div className={'galleryHeader'}>
				<SectionHeading
					title={'Наша галерея'}
					description={
						'Посмотрите наши незабываемые туры по живописным уголкам Осетии и вдохновитесь приключениями! Создаем яркие воспоминания для каждого клиента.'
					}
				/>
				{isSection && (
					<MainButton
						className={'galleryButton'}
						text={'Посмотреть галерею'}
						onClick={() => navigate('/gallery')}
					/>
				)}
			</div>
			<div className={'galleryImages'}>
				<GalleryImages />
			</div>
			{imagesStore.hasMore && !isSection && <LoadingDots size={8} />}
			{selectedImage && (
				<ImageModal
					image={selectedImage}
					onClose={() => setSelectedImage(null)}
				/>
			)}
		</section>
	);
};
export default trackWindowScroll(observer(GallerySection));
