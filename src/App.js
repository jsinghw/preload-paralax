import React, { Component } from 'react';
import './App.css';
import img1 from './assets/img/img1.jpeg'
import img2 from './assets/img/img2.jpeg'
import img3 from './assets/img/img3.png'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageIsReady: false,
            pictures: [img1, img2, img3]
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
                <div className="App">
                    <div>Here are 3 images</div>
                    <img src={img1} alt="flower heart" />
                    <img src={img2} alt="man stares into void"/>
                    <img src={img3} alt="man walks the streets of cyberpunk city"/>
                </div>
            );
        }
    }
}

export default App;
