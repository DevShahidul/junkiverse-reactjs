import React from 'react';
import paperGreen from '../assets/images/PaperGreen.png';
import paperGreen2 from '../assets/images/PaperGreen2.png';
import paperTwo from '../assets/images/PaperTwo.png';

const PaperSection = () => {
  return (
    <div className="py-24 px-16 bg-paper-section">
        <div className="flex items-center justify-center space-x-16">
            <div className="flex items-center justify-center">
                <img src={paperGreen} alt="Paper" />
            </div>
            <div className="flex items-center justify-center">
                <img src={paperGreen2} alt="Paper" />
            </div>
        </div>
        <div className="flex items-center justify-center space-x-16">
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