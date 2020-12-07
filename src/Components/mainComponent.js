import React, {Component} from 'react';
import Header from './header';
import { Switch, Route, Redirect, withRouter, BrowserRouter as Router} from 'react-router-dom';
import Home from './home';
import Footer from './footer';
import About from  './aboutUs';
import Contact from './contact';
import  { connect } from 'react-redux';
import BikeDetails  from './bikeDetails';
import { postComment, fetchBikes, fetchComments } from '../redux/ActionCreators';




const mapStateToProps = state => {
  return {
    bikes: state.bikes,
    comments:  state.comments
  }
}

const mapDispatchToProps = dispatch => ({

    postComment: (bikeId, author, comment) => dispatch(postComment(bikeId, author, comment)),
     fetchBikes: () => { dispatch(fetchBikes())},
     fetchComments: () => {dispatch(fetchComments())}
  });


class Main extends Component {
    constructor(props){
      super(props);
    }

    componentDidMount(){
      this.props.fetchBikes();
      this.props.fetchComments();
  }

  render() {



      const  BikewithId = ({match}) => {
        return(
        <BikeDetails  bike={this.props.bikes.bikes.filter((bike) => bike.id === parseInt(match.params.bikeId, 10))[0]}
        comments={this.props.comments.comments.filter((comment) => comment.bikeId === parseInt(match.params.bikeId, 10))}
         addComment={this.props.addComment}
         isLoading={this.props.bikes.isLoading}
         errMess={this.props.bikes.errMess}
           postComment={this.props.postComment}/>

      );
      }



  return (
      console.log(this.props.comments.comments.filter((comment) => comment.bikeId === parseInt(0, 10))),
      <div>
        <Header />

      <Switch>
        <Route  path='/home' component={() =><Home bikes={this.props.bikes.bikes} bikesLoading={this.props.bikes.isLoading} bikesErrMess={this.props.bikes.errMess}/>} />
        <Route path='/bikedetails/:bikeId' component = {BikewithId} />
        <Route path='/aboutus' component= {About} />
        <Route path='/contactus' component= {Contact} />

      </Switch>
        <Footer  />

        </div>



      );
    }
  }


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)) ;
