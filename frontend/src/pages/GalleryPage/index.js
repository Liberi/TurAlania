import React, { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Footer, GallerySection, Header } from '../../components';
import store from '../../store';
import './styles.css';

const GalleryPage = ({ navigate }) => {
	const { imagesStore } = store;
	const [page, setPage] = useState(1);
	const ITEMS_PER_PAGE = 8;

	const handleScroll = useCallback(() => {
		if (
			!imagesStore.hasMore ||
			window.innerHeight + window.scrollY <
				document.documentElement.scrollHeight - 400
		)
			return;

		console.log(`👾 > handleScroll > setPage`);
		setPage(prev => prev + 1);
	}, [imagesStore.hasMore]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [handleScroll]);

	return (
		<>
			<Header navigate={navigate} />
			<GallerySection
				className={'galleryPage'}
				isSection={false}
				limit={ITEMS_PER_PAGE}
				offset={(page - 1) * ITEMS_PER_PAGE}
			/>
			<Footer />
		</>
	);
};

export default observer(GalleryPage);
