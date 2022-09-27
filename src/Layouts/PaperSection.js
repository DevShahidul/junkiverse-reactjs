import React from 'react';
import paperGreen from '../assets/images/PaperGreen.png';
import paperGreen2 from '../assets/images/PaperGreen2.png';
import paperTwo from '../assets/images/PaperTwo.png';

const PaperSection = () => {
    return (
        <div className="pt-24 pb-30 md:pb-60 lg:pb-80 px-16 bg-paper-section">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 xl:gap-16">
                <div className="flex items-center justify-center">
                    <img src={paperGreen} alt="Paper" />
                </div>
                <div className="flex items-center justify-center">
                    <img src={paperGreen2} alt="Paper" />
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 xl:gap-16">
                <div className="flex items-center justify-center mt-3">
                    <img src={paperTwo} alt="Paper" />
                </div>
                <div className="flex items-center justify-center mt-3">
                    <img src={paperTwo} alt="Paper" />
                </div>
                <div className="flex items-center justify-center mt-3">
                    <img src={paperTwo} alt="Paper" />
                </div>
                <div className="flex items-center justify-center mt-3">
                    <img src={paperTwo} alt="Paper" />
                </div>
            </div>
        </div>
    )
}

export default PaperSection;