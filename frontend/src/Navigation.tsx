import {HashLink as Link} from "react-router-hash-link";
import {Col, Container, Row} from "react-bootstrap";

export function Navigation() {
    return (
        <Container fluid="xxl" className="mb-3">
            <Row className="align-items-center">
                <Col lg={6} md={4}>
                    <h1><Link to="/">WANDERERS</Link></h1>
                </Col>
                <Col>
                    <Link to="/buy">Buy!</Link>
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