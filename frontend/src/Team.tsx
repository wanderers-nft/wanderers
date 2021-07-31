import {Col, Container, Row} from "react-bootstrap";

export function Team() {
    return (
        <Row className="my-5 m-lg-5 m-md-1">
            <Col>
                <h1>Meet the team.</h1>
            </Col>
            <Col>
                <Container>
                    <Row>
                        <Col>
                            <p>1</p>
                        </Col>
                        <Col>
                            <p>2</p>
                        </Col>
                        <Col>
                            <p>3</p>
                        </Col>
                        <Col>
                            <p>4</p>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}