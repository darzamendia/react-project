import { useRef } from 'react';

import './slider.css';

const Slider = ({ children }) => {
	const sliderContentRef = useRef(null);
	const startX = useRef(null);
	const scrollLeft = useRef(null);

	const onHandleClickNext = () => {
		sliderContentRef.current.scrollLeft += sliderContentRef?.current?.children[0].offsetWidth;
	};

	const onHandleClickPrevious = () => {
		sliderContentRef.current.scrollLeft -= sliderContentRef?.current?.children[0].offsetWidth;
	};

	return (
		<div className='slider'>
			<button onClick={onHandleClickPrevious} type='button' className='previousBtn'>
				<span>&lt;</span>
			</button>
			<button onClick={onHandleClickNext} type='button' className='nextBtn'>
				<span>&gt;</span>
			</button>
			<div ref={sliderContentRef} className='sliderContent'>
				{children}
			</div>
		</div>
	);
};

export default Slider;
