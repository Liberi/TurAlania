import React from 'react';
import './styles.css';

const SectionHeading = ({ title, description, className = '' }) => {
	return (
		<div className={'sectionHeading ' + className}>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
};

export default SectionHeading;
