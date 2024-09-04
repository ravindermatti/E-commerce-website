import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import SearchItem from "./SearchItem";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = ({ setdata ,cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [serachTerm, setSearchterm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${serachTerm}`);
  };

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setdata(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setdata(element);
  };

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-cart
          </Link>
          <form onSubmit={handleSubmit} className="search">
            <input
              type="text"
              placeholder="Search Products"
              value={serachTerm}
              onChange={(e) => setSearchterm(e.target.value)}
            />
          </form>
          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              {" "}
              <FaCartArrowDown style={{fontSize:'1.5rem'}}/>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>

        {
          (location.pathname == '/' && (
            <div className="nav-bar-wrapper">
              <div className="ietms">Filter by {"->"}</div>
              <div onClick={() => setdata(items)} className="ietms">
                No Filter
              </div>
              <div
                onClick={() => filterByCategory("mobiles")}
                className="ietms"
              >
                Mobiles
              </div>
              <div
                onClick={() => filterByCategory("laptops")}
                className="ietms"
              >
                Laptops
              </div>
              <div
                onClick={() => filterByCategory("tablets")}
                className="ietms"
              >
                Tablets
              </div>
              <div onClick={() => filterByPrice(29999)} className="items">
                {">="}49999
              </div>
              <div onClick={() => filterByPrice(49999)} className="items">
                {">="}69999
              </div>
              <div onClick={() => filterByPrice(69999)} className="items">
                {">="}29999
              </div>
              <div onClick={() => filterByPrice(89999)} className="items">
                {">="}89999
              </div>
            </div>
          ))
        }
      </header>
    </>
  );
};

export default Navbar;
