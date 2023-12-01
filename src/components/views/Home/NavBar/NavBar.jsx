import "./NavBar.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";

let isLogged=false;
const Navbar=()=>{
    const[isOpen,setOpen]=useState(false)
    const openLogin=()=>setOpen(true)
    const closeLogin=()=>setOpen(false)
    return(
        <>
            <div className="container-fluid d-flex justify-content-between navBar">
                <h1>Logo</h1>
                {!isLogged&&<div className="button-primary" onClick={openLogin}>Login</div>/*<div className="button-primary" onClick={openLogin(isLogged)}>Logout</div>*/}
                <Modal isOpen={isOpen} onClose={closeLogin}>
                    <h2>Modal Content</h2>
                    <p>Any content you want inside the modal.</p>
                </Modal>
            </div>
        </>
    )
}
/*const LoginModal = ({ isOpen, onClose, children }) => {
    return (
      <div className={`modal ${isOpen ? 'is-open' : ''}`}>
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          {children}
        </div>
      </div>
    );
  };*/
export default Navbar