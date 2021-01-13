import React, { Component } from 'react'
import './image.css'
class Image extends Component {
    constructor(props){
        super(props)
        
    }

    imgChange(){
        if(this.props.img === 0){
            return <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg" alt="Head"/> 
        }else if(this.props.img === 1){
        return <img src="http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=87e54349d0a319012cc1bb150a4d1ac3e7081756-1610483765-0-AcaW3V8dy0B3rdBEgT_cea-a3u8seWwD1vrbWxmA53-cfJh6u_x4Ungqx-0pt0lwAopHSE7zmin6WCjDke2SsMChFIAKCpREBjF1ZjAUvPlWLhEx1wjFkq2Dk-cbJmaTWa5ygHnb1okbmRLmwrW5c1TgZgCACqH3leoLQg-XWjSjciAbygPst8xkUfq2ehmrqfLk7B0WGZktF8qL8kguzyDcbMz5LiaaprLWnnfcm4uuf-sucdxJGbPOD9WkRCVRsv0JUYcrmJVAXcK0pu_XLzh6irTMDeEJDrTbyLx0b8Ho5Rn33-FV7O2Ps3QCVaw8EpMIb4-PB_xaS2AgjFIBa-M"alt="Tails"/>
        }
    }
    render(){

        return(
            <div className="img-wrap">
                {this.imgChange()}
            </div>
        )
    }
}

export default Image;