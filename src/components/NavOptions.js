import React from 'react';
import NavCard from "./NavCard.js";
import "../styles/NavOptions.css";

const NavOptions = ({d}) => {
  return (
      <div className="navOptions" style={{'display': d?'flex':'none'}}>
        {d&&d.map((item) => (
            <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
            />
        ))}
      </div>
  )
}

export default NavOptions