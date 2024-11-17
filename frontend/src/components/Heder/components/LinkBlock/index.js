import React from 'react';
import './styles.css';

const LinkBlock = onClick => (
	<>
		<a href={'/routes'} onClick={onClick}>
			Популярные маршруты
		</a>
		<a href={'/favorites'} onClick={onClick}>
			Избранное
		</a>
		<a href={'/bookings'} onClick={onClick}>
			Бронирования
		</a>
		<a href={'/search'} onClick={onClick}>
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
