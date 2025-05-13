import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center" id="row1">
          <Col size={12} sm={6}>
            <div className="name">Divyank Kushwaha</div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end" id="row2">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/divyank-kushwaha-26221a259/"><img src={navIcon1} alt="" /></a>
              <a href="https://www.facebook.com/divyank.kushwaha.75/"><img src={navIcon2} alt="" /></a>
              <a href="http://instagram.com/divyank.guruji/"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright &copy; 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
