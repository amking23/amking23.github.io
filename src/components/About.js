import React, { Component } from 'react';
import me from '../me.png';
import { Tween, Timeline, SplitWords, SplitLetters, Controls } from "react-gsap";

class About extends Component {

    render() {
        let marginBottom = {
            marginBottom: '20px',
        }

        const TweenComponent = () => (
            <Tween from={{ x: '100px', rotation: -360 }}>
                <h1 className="title">Hi, I'm Anne Marie</h1>
            </Tween>
            // <Tween from={{ x: '300px', rotation: -360 }}>
            //     <SplitWords>
            //         <div style={{ display: 'inline-block', fontSize: '40px' }}>
            //             <h1 className="title">Hi, I'm Anne Marie</h1>
            //         </div>
            //     </SplitWords>
            // </Tween>
        );

        // TweenMax.to(".me", 2, { left: 600 })

        return (
            <div className="page">
                <div className='about-me-paragraph'>
                    <TweenComponent />
                    <p>
                        Fullstack Software Engineer<br />
                        JavaScript | React | EmberJS (among other things)<br />
                        Work Hard, Have Fun, Stay Positive<br />
                        Chicago, IL<br />
                        I just like to make things :)<br />
                    </p>
                </div>
                <img src={me} className='me' style={marginBottom} alt='logo' />
            </div>
        );
    }
}

export default About;