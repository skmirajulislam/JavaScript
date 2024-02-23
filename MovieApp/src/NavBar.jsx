// import React from "react";
// import './styles.css';
// import styled from "styled-components"; // css module for js

// const Nav = styled.div`
//     height: 70px;
// 	background: linear-gradient(170deg, #1bc059, #0d47a1);
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	position: relative;

// `;

// const Title = styled.div`
//     font-size: 30px;
//     color: #fff;
//     font-weight: 600;
//     font-family: 'Times New Roman', Times, serif;
//     text-transform: uppercase;
//     margin-left: 20px ;
//     &:hover : {color: #0f0};
// `;


// const CartImg = styled.img`
//     height: 48px;
//     margin-right: 20px;
// `;

// const CartIconContainer = styled.div`
//     position: relative;
//     cursor: pointer;
// `;

// const CartCount = styled.div`
//     background: ${(props) => props.color};
//     border-radius: 50%;
//     padding: 4px 8px;
//     position: absolute;
//     right: 10px;
//     top: -5px;
//     font-size: 12px;
//     visibility: ${(props) => props.show ? 'visible' : 'hidden'};
// `;


// Dynamic styling using style components in javaScript.

// class Navbar extends React.Component {
//     render() {
//         return (
//             <>
//                 <Nav>
//                     <Title>MOVIE APP</Title>
//                     <CartIconContainer>
//                         <CartImg alt="Cart-Icon"
//                             src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
//                         />
//                         <CartCount color='yellow' show={true}>5</CartCount>
//                     </CartIconContainer>
//                 </Nav>
//             </>
//         )
//     }
// }


// export default Navbar;

import React from "react";
import styles from './nav.module.css'

function Navbar(props) {

  const { cartCount } = props;

  return (
    <>
      <div className={styles.nav}>

        <div className={styles.title}>MOVIE APP</div>

        <div className={styles.cartIconContainer}>
          <img className={styles.cartIcon}
            alt="Cart-Icon"
            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
          />
          <span className={styles.cartCount}>{cartCount}</span>
        </div>
      </div>

    </>
  )
}



export default Navbar;
