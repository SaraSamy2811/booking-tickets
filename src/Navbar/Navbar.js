
import React ,{useState}from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar = () => {
//     const [lang, setLang] = useState("en-US");
//  const changeLang = () => {
//         setLang(lang == "en-US" ? "ar-SA" : "en-US");
//     };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-full h-20">
    <a className="navbar-brand" href="#">Galaxy Cinema</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
             
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
        </li>
       
        <NavDropdown title="Available movies" id="basic-nav-dropdown">
              <NavDropdown.Item href="/booking-summary-action">Action Movies</NavDropdown.Item>
              <NavDropdown.Item href="/booking-summary-horror">Horror movies</NavDropdown.Item>
              <NavDropdown.Item href="/booking-summary-comedy">Comedy Movies</NavDropdown.Item>
            </NavDropdown>

        <li className="nav-item">
          <a className="nav-link" href="/registration"> Join Us</a>
        </li>
      
      </ul>
  
      <form className="d-flex ms-5" role="search"  >
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
                {/* <button className="btn btn-success float-end ms-5 " onClick={changeLang}>
                {lang == "en-US" ? "English" : "Arabic"}
            </button> */}
    </div>
  </nav>
  )
}

export default Navbar










// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function BasicExample() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;