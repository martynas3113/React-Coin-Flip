import React, { Component } from 'react'
import Image from '../imagShow/image'
import './flipper.css'
class Flipper extends Component {
    
    constructor(props){
        super(props)
        this.state={games:0, heads:0, tails:0, img:''}
        this.generate = this.generate.bind(this);
        
    }

    generate(){
        let random = Math.floor(Math.random()*2);
        this.setState((curState)=>{
            if(random === 0 ){
                return {games: curState.games+1, heads: curState.heads+1, img: random}
            }
            return {games: curState.games+1, tails:curState.tails+1, img: random}
        });
    }

    render(){
        return(
            <div className="flip-container">
                <h1 className="flip-title">Lets flip a coin!</h1>
                <Image img={this.state.img} />
                <div>
                <button className="flip-btn" onClick={this.generate}>Flip Me!</button>
                <p className="flip-count">Out of {this.state.games} games, there have been {this.state.heads} heads and {this.state.tails} tails</p>
                </div>
            </div>
        );
    };
}

export default Flipper;