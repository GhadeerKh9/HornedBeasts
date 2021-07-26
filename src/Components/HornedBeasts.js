import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            favorite : 0
        }

    }

    incrementOfFavorite = () => {
        this.setState({
            favorite: this.state.favorite + 1
        })
    }

    render(){
        return(
            <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img onClick = {this.incrementOfFavorite} variant="top" src={this.props.image_url} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
      Description : {this.state.description}
      
    </Card.Text>
    <Card.Text>
                        Favourite Times : {this.state.favorite}
     </Card.Text>

    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
           
           </div>
        )
    }
}

export default HornedBeasts;


/* <h2>{this.props.animalTitle}</h2>
           <p>{this.props.animalDescription}</p>
           <img src = {this.props.animalImage} alt={this.props.animalTitle} title={this.props.animalTitle} /> */