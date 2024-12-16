import { useEffect, useState } from 'react';

const useContainerPadding = ref => {
	const [containerPadding, setContainerPadding] = useState(0);

	useEffect(() => {
		const resizeObserver = new ResizeObserver(entries => {
			for (let entry of entries) {
				setContainerPadding(entry.contentRect.height);
			}
		});

		if (ref.current) {
			resizeObserver.observe(ref.current);
		}

		return () => {
			resizeObserver.disconnect();
		};
	}, [ref]);

	return containerPadding;
};

export default useContainerPadding;