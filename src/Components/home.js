import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Url}  from '../shared/Url';

class Home extends Component {


    render(){
      if (this.props.bikesLoading) {
            return(

                    <div>....Loading</div>
            );
        }
        else if (this.props.bikesErrMess) {
            return(
                    <h4>{this.props.bikesErrMess}</h4>
            );
        }


  return(
    <div className="container">
        <div className="row">
    {
      this.props.bikes.map((bike, index) => {

      return(
            <div className=" col-md-5 m-1"  key={index}>
                <RenderCard item={bike}  index={index}/>

            </div>



    );
  })
}
</div>
</div>
);
}
}

function  RenderCard({item, index}) {




    return(
      <div>
       <Card>
           <Link to={`/bikedetails/${item.id}`} >
           <CardImg  src={Url + item.image} alt={item.name} />
           <CardBody>
                 <CardTitle>{item.name}</CardTitle>
                  <CardSubtitle>{item.price}</CardSubtitle>
                 <CardText>{item.description.substring(0, 30) +  '...'}</CardText>

           </CardBody>
             </Link >
       </Card>
       </div>

      );
}


export default Home;
