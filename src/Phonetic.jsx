import React from "react";
import "./css/Phonetic.scss"; 
import Sound from "./media/sound.png";

export default class Phonetic extends React.Component {

    state = {
        play: false
    }
    audio = new Audio()
      
    componentDidMount() {
        this.audio.addEventListener('ended', () => this.setState({ play: false }));
    }
        
    componentWillUnmount() {
        this.audio.removeEventListener('ended', () => this.setState({ play: false }));  
    }
      
    togglePlay = () => {

        this.setState({ play: !this.state.play }, () => {
            this.state.play ? this.audio.play() : this.audio.play();
        });
    }
      
    render() {
        this.audio = new Audio(this.props.phonetic.audio)
        return (
            <div className="Phonetic">
                <input
                    type="image"
                    alt="Sound"
                    src={Sound}
                    className="sound"
                    onClick={this.togglePlay}
                 />
                <span className="text">
                    /{this.props.phonetic.text}/
                </span>
            </div>
        );
    }
}
  


