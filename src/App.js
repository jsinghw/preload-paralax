import React, { Component } from 'react';
import './App.css';
import { Parallax } from 'react-parallax'
import img1 from './assets/img/img1.jpg'
import img2 from './assets/img/img2.jpg'
import img3 from './assets/img/img3.jpg'
import img4 from './assets/img/img4.jpg'
import img5 from './assets/img/img5.png'



const inlineStyle = {
    background: '#fff',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)'
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageIsReady: false,
            pictures: [img1, img2, img3, img4, img5]
        }
    }
    componentDidMount() {
        this.state.pictures.forEach((picture) => {
            const img = new Image();
            img.src = picture.fileName;
        });
        this.setState({ imageIsReady: true })
    }


    render(){
        const { imageIsReady } = this.state;
        const { pictures } = this.state

        if (!imageIsReady) {
            return <div>Loading image...</div>; // or just return null if you want nothing to be rendered.
        }else{
            return (
                <div>
                    <Parallax bgImage={ img1 } strength={ -700 }>
                        <div style={{ height: 500 }}>
                            <div style={inlineStyle}>
                                Some simple text
                            </div>
                        </div>
                    </Parallax>
                    <Parallax bgImage={ img2 } strength={ 500 } blur={{ min: -1, max: 2}}>
                        <div style={{ height: 700 }}>
                            <div style={inlineStyle}>
                                Dynamic Blur
                            </div>
                        </div>
                    </Parallax>
                    <Parallax bgImage={ img3 } strength={ 700 }>
                        <div style={{ height: 700 }}>
                            <div style={inlineStyle}>
                                Some simple text
                            </div>
                        </div>
                    </Parallax>
                    <Parallax bgImage={ img4 } strength={ 700 } renderLayer={percentage => (
                        <div style={{
                            position: 'absolute',
                            width: 100,
                            height: 100,
                            borderRadius: '50%',
                            background: `rgba(255,123,23,${percentage * 1})`,
                            left: '50%',
                            top: '50%',
                            transform: `translate(-50%, -50%) scale(${percentage * 5})`
                        }}>
                        </div>
                    )}>
                        <div style={{ height: 700 }}>
                            <div style={inlineStyle}>
                                Some simple text
                            </div>
                        </div>
                    </Parallax>
                    <div style={{ height: '100vh'}}>
                    </div>
                </div>
            );
        }
    }
}

export default App;
