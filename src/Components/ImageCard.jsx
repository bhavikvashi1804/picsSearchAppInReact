import React from 'react';

class ImageCard extends React.Component{

    constructor(props){
        super(props);
        this.imageRef=React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans);
    }

    setSpans=()=>{
        console.log(this.imageRef.current.clientHeight);
        //this is the only way to access the height
        //if you access the height in componentDidMount it gives you 0
        //even if in componentDidMount when you print this.imageRef then it gives some value of client height
    }
    
    render(){
        const {description,urls}=this.props.image;
        return(
            <div>
                <img src={urls.regular} alt={description} ref={this.imageRef}/>
            </div>
        );
    }
}

export default ImageCard;