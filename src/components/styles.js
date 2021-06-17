import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4 rem;
  background: transparent;
  border: 0.05rem solid
    ${(props) => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  color: ${(props) => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: var(--mainBlue);
    background: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  }
  &:focus {
    outline: none;
  }
`;

export const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    text-transform: capitalize;
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
  }
`;

export const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
  }
  .card-footer {
    border-top: transparent;
    transition: all 0.5s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(220, 220, 220);
    }
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container {
    position: relative;
    overflow: hidden;
    &:hover .card-img-top {
      transform: scale(1.2);
    }
    &:hover .cart-btn {
      transform: translate(0, 0);
    }
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    border: none;
    background: var(--lightBlue);
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  #modal {
    background: var(--mainWhite);
  }
`;
