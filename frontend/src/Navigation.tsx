import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

export function Navigation() {
    return (
        <Container fluid>
            <Row className="align-items-center">
                <Col lg={3} md={4}>
                    <h1><Link to="/">WANDERERS</Link></h1>
                </Col>
                <Col>
                    <Link to="/buy">BUY NOW!</Link>
                </Col>
                <Col>
                    /
                </Col>
                <Col>
                    <Link to="/#about">About</Link>
                </Col>
                <Col>
                    /
                </Col>
                <Col>
                    <Link to="/#roadmap">Roadmap</Link>
                </Col>
                <Col>
                    /
                </Col>
                <Col>
                    <Link to="/#team">Team</Link>
                </Col>
                <Col>
                    /
                </Col>
                <Col>
                    <Link to="/#social">Social</Link>
                </Col>
            </Row>
        </Container>
    )
}