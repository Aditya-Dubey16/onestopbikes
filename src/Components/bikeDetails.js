import React, {Component} from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem, Col, Row, Button, Modal,  ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import {Link} from 'react-router-dom';
import  MyForm from './form';
import {Url}  from '../shared/Url';

class BikeDetails extends Component {



render() {


  if (this.props.isLoading) {
      return(
        <div className="container">
          <div className="row">
            ....Loading
          </div>
        </div>
      );
    }

    else if  (this.props.errMess) {
      return(
        <div className="container">
          <div className="row">
              <h4>{this.props.errMess}</h4>
          </div>
        </div>
      );
    }


    else if (this.props.bike !== null) {
    return (
        console.log(this.props.isLoading),

          <div className="container">
          <div className="row">
                 <Breadcrumb>
                    {console.log(this.props.bike)}
                     <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                     <BreadcrumbItem active>{this.props.bike.name}</BreadcrumbItem>

                 </Breadcrumb>
                 <div className="col-12">
                     <h3>{this.props.bike.name} </h3>
                     <hr />
                 </div>
             </div>
             <div className="row">
                <div className="col-12 col-md-7 m-1">
                    <RenderBike bike={this.props.bike} />
                </div>
                <div className="col-12 col-md-4 m-1">
                    <RenderComments  comments={this.props.comments} bikeId={this.props.bike.id} postComment={this.props.postComment}/>
                </div>

            </div>
            </div>
      );
  }
}

}
  function RenderBike({bike}) {
    if (bike !== null) {
          return (

              <div className='col-12 col-md-12 m-1'>

                <Card>
                <CardImg width="100%" src={Url + bike.image} alt={bike.name} />
                <CardBody>
                <CardTitle>{bike.name}</CardTitle>
                <CardText>{bike.description}</CardText>

                </CardBody>
               </Card>


              </div>
          )
      }
          return (<div></div>);
      }

    function  RenderComments({comments, bikeId, postComment}){
        if (comments == null) {
          return (<div></div>)
      };


          return (
              <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>

                <div>
              { comments.map((comment) => {
                return(

              <li key={comment.id}>
              <p>{comment.comment}</p>
              <p>-- {comment.author},
              &nbsp;
              {new Intl.DateTimeFormat('en-US',{
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                      }).format(new Date(Date.parse((comment.date))))}
              </p>
              </li>

            );
          })}
              </div>

              <CommentForm bikeId={bikeId} postComment={postComment}/>


              </div>


          );
      }

      class CommentForm extends Component {

        constructor(props){
          super(props);


          this.state={

             isModalOpen: false
          };

        this.toggleModal=this.toggleModal.bind(this)
          this.submit = this.submit.bind(this);
        }

        toggleNav()  {
          this.setState({
            isNavOpen: !this.state.isNavOpen
          });
        }

        toggleModal() {
          this.setState({
            isModalOpen: !this.state.isModalOpen
          });
        }


        submit(values) {
          this.props.postComment(this.props.bikeId, values.author, values.comment);

           console.log( values.author, values.comment);
          alert(JSON.stringify(values));


        }




        render(){
          return(
            <div>
            {console.log(this.props.addComment)}
            <div>
            <Button outline onClick={this.toggleModal}>Add Comments</Button>
            </div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Add Comment</ModalHeader>
                <ModalBody>

                <MyForm  onSubmit={this.submit} />

                </ModalBody>
            </Modal>
          </div>
          );
        }
      }




export default BikeDetails;
