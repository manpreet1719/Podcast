import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand as={Link} to="/">Podcast.com</Navbar.Brand> {/* Use Link instead of anchor tag */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/explore">Explore</Nav.Link> {/* Use Link instead of anchor tag */}
                        <Nav.Link href="#pricing">Pricing</Nav.Link> {/* This will still cause a full-page refresh */}
                        {/* Add more Nav.Link components as needed */}
                    </Nav>
                    <Nav className="ml-auto"> {/* Use ml-auto class to align to the right */}
                        <Nav.Link href="#login">Login</Nav.Link> {/* This will still cause a full-page refresh */}
                        {/* Add more Nav.Link components as needed */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Header;