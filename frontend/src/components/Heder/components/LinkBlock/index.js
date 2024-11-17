import React from 'react';
import './styles.css';

const LinkBlock = () => (
	<>
		<a href={'/routes'}>
			Популярные маршруты
		</a>
		<a href={'/favorites'}>
			Избранное
		</a>
		<a href={'/bookings'}>
			Бронирования
		</a>
		<a href={'/search'}>
			Поиск
		</a>
	</>

	/* <>
        <Link to='/routes' onClick={onClick}>
            Популярные маршруты
        </Link>
        <Link to='/favorites' onClick={onClick}>
            Избранное
        </Link>
        <Link to='/bookings' onClick={onClick}>
            Бронирования
        </Link>
        <Link to='/search' onClick={onClick}>
            Поиск
        </Link>
    </> */
);

export default LinkBlock;
