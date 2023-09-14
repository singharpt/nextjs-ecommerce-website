import React from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Link from "next/link";

function Header() {
  return (
    <div className="header">
      <Link href="/" style={{ textDecoration: "none" }}>
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        {/* <SearchIcon className="searchIcon" /> */}
      </div>

      <div className="header_nav">
        <Link href="/login" style={{ textDecoration: "none" }}>
          <div className="header_option">
            <span className="header_optionLine1">Hello</span>
            <span className="header_optionLine2">Sign In</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLine1">Returns</span>
          <span className="header_optionLine2">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLine1">Your</span>
          <span className="header_optionLine2">Prime</span>
        </div>

        <Link href="/checkout" style={{ textDecoration: "none" }}>
          <div className="header_ShoppingCartIcon">
            {/* <AddShoppingCartIcon /> */}
            <span className="header_optionLine2 header_shoppingCartCount">
              {0}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
