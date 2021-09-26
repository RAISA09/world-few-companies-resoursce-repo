import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Company from '../Company/Company';
import './Companies.css'

const Companies = () => {
  // useState setup
   const [companies,setCompanies] = useState([]);
   const[cart, setCart] = useState([]);
  
  //  data load
   useEffect(() => {
     fetch('./companies.json')
     .then(res => res.json())
     .then(data => setCompanies(data))
   }, [])

  //  handla card
   const handleCartAdd = (company) => {
       const cartAdd = [...cart, company];
       setCart(cartAdd);
   }
    return (
        <div className="companies-container">
        <div className="company-container">
        {
           companies.map(company => <Company 
           key={company.name}
            company={company}
            handleCartAdd={handleCartAdd}
            ></Company>)
        }
        </div>
        <div className="total-container">
              <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Companies;