import React from 'react';

const LandingPage = () => {

    const videoId = 'Q1Xl1HHL1io'; // Replace with your actual YouTube video ID
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    return (
        <div className="max-w-md mx-auto p-4 sm:p-6 md:p-8">
            <br />
            <h2 className="text-2xl font-bold mb-4 text-center">Heritage Of Estartit</h2>
            <br />
            <div className="mb-4">
                <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="block relative">
                    <img
                        src={thumbnailUrl}
                        alt="Video thumbnail"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-16 h-16 text-white opacity-75" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                    </div>
                </a>
            </div>
            <br />
            <p className="text-base leading-relaxed">
                The ancestral towers of Montgrí watch over us. The sea, in the background, speaks to us and refreshes our thoughts after the arduous climb up the walls of history.
                And despite everything, the salinity of the Estartit reaches us from the heights, awakening our desire for crystal clear waters and fine sand.
            </p>
            <br />
            <p>Enjoy your stay! 🏖️😄</p>
        </div>
    );
};

export default LandingPage;