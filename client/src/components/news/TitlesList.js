import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../../actions';


class TitleList extends Component{

    render(){
        if(this.props.titles)
          return (
            <ul className="headlines-list">
              {this.props.titles.map((title,i) => {
                let path = `/article/${(i+1)}`;
                return (
                    <li key={i} className="headline" >
                        <Link to={path}><h3>{title}</h3></Link>
                    </li>); 
                })}
            </ul>);
      }
}   

function mstp({titles}){
    return {titles};
}
  
export default connect(mstp,actions)(TitleList);