import React, {useState} from 'react';
import axios from 'axios';

function Slides({slides}) {

    const [currentSlide, setSlide] = useState(0)

    const download_slides = async () => {
        try {
            const response = await axios.get('/download');
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    }


    return (
        <div className='App-App'>
            <div id="navigation" className="text-center">
                <button
                    data-testid="button-restart"
                    className={currentSlide === 0 ? "small outlined" : "small"}
                    disabled={currentSlide === 0}
                    onClick={() => setSlide(0)}
                >
                    Restart
                </button>
                <button
                    data-testid="button-prev"
                    className={currentSlide === 0 ? "small outlined" : "small"}
                    disabled={currentSlide === 0}
                    onClick={() => setSlide(currentSlide - 1)}
                >
                    Previous
                </button>
                <button
                    data-testid="button-next"
                    className={currentSlide === slides.length - 1 ? "small outlined" : "small"}
                    disabled={currentSlide === slides.length - 1}
                    onClick={() => setSlide(currentSlide + 1)}
                >
                    Next
                </button>
            </div>
            <div className='main'>
                <div id="slide" className="parent">
                    <div className='float-child'>
                        <div>
                            <h1 data-testid="title">{slides[currentSlide].title}</h1>
                            <p data-testid="text">{slides[currentSlide].text}</p>
                        </div>
                    </div>
                    <div className='float-child'>
                        <img src={slides[currentSlide].image} alt="Image" />
                    </div>
                </div>
            </div>

            <div className='download'>
                <button className='try-again-button'>
                    Generate Another
                </button>
                <button className='download-button' onClick={download_slides} >
                    Download
                </button>
            </div>
        </div>
    );

}

export default Slides;
