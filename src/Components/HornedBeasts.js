import React from 'react'
class HornedBeasts extends React.Component {
    render(){
        return(
            <>
           <h2>{this.props.animalTitle}</h2>
           <p>{this.props.animalDescription}</p>
           <img src = {this.props.animalImage} alt={this.props.animalTitle} title={this.props.animalTitle} />
           
           </>
        )
    }
}

export default HornedBeasts;
