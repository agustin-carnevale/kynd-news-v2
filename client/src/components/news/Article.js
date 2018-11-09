import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../../actions';

 

class Article extends Component{
   
    componentDidMount(){
        this.props.fetchArticle(this.props.match.params.id);
    }

    renderArticle(){
        if (this.props.article !=null)
            return(
                <div className="article">
                    <h2>{this.props.article.title}</h2>
                    <p>{this.props.article.body}</p>
                </div>
            );
    }

    render(){
        return (
            <div>
                {this.renderArticle()}
                <Link to="/">Go Back</Link>
            </div>
        );
    }
}   

function mstp({article}){
    return {article};
}
  
export default connect(mstp,actions)(Article);

