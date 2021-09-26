import React from 'react';
import './Company.css'
const Company = (props) => {
    const {img,name,owner,headquarters,founded,revenue} = props.company;
    return (
        <div className="company-style">
          <img className="image-style" src={img} alt="" />
          <h3>Name: {name}</h3>
          <h4>Owner: {owner}</h4>
          <h4>Established: {founded}</h4>
          <h4>Revenue: ${revenue}</h4>
          <h4>Headquarters: {headquarters}</h4>
          <button
          onClick={() =>props.handleCartAdd(props.company)}
           className="btn-style fas fa-plus-square"
           > add to card</button>
          <br />
        
         
        </div>
    );
};

export default Company;