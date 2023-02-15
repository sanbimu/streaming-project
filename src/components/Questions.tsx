import React from 'react';

const Questions  = () => {
    return ( 
        <div id = "QuestionBox" className="bg-beige bg-opacity-75 w-11/12 h-4/5 mx-auto mt-24 flex flex-col justify-left"> 
            <h1 className = "color-dark-grey font-circe font-light mx-16 mt-14 mb-10 text-4xl">Wave Music Streaming FAQ</h1>
                <h4 className = "color-dark-grey font-ubuntu font-bold text-xl mx-16 mt-2 mb-2">What is Wave?</h4>
                    <p className = "color-dark-grey font-circe font-light text-base mx-16 leading-relaxed">Wave is a music streaming service that lets you listen to your favorite songs and discover new music from all over the world. 
                       With Wave, you can access a huge library of songs, create playlists, and discover new artists and genres.</p>
                <h4 className = "color-dark-grey font-ubuntu font-bold text-xl mx-16 mt-2 mb-2">How much does Wave cost?</h4>
                    <p className = "color-dark-grey font-circe font-light text-base mx-16 leading-relaxed">To access Wave you will need a subscription that is available at €9.99 per month.</p>
                <h4 className = "color-dark-grey font-ubuntu font-bold text-xl mx-16 mt-2 mb-2">How do I sign up for Wave?</h4>
                    <p className = "color-dark-grey font-circe font-light text-base mx-16 leading-relaxed">To sign up for Wave, simply visit our website and click the "Subscribe" button. 
                        Create a new account using your email address, pay for our subscription and you're good to go!</p>
                <h4 className = "color-dark-grey font-ubuntu font-bold text-xl mx-16 mt-2 mb-2">What devices can I use to listen to Wave?</h4>
                    <p className = "color-dark-grey font-circe font-light text-base mx-16 leading-relaxed">Wave is available on a wide range of devices, including desktop and laptop computers, smartphones, and tablets.</p>
                <h4 className = "color-dark-grey font-ubuntu font-bold text-xl mx-16 mt-2 mb-2">How do I search for and play music on Wave?</h4>
                    <p className = "color-dark-grey font-circe font-light text-base mx-16">To search for music on Wave, simply type in the name of the song, artist, or album you're looking for in the search bar. 
                        You can browse the results and select the song or album you want to play.</p>
        </div>
     );
}
 
export default Questions;