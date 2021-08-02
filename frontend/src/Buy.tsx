import {Col, Container, Row} from "react-bootstrap";
import "./Buy.css"

export function Buy() {
    return(
        <Container fluid="xxl">
            <Row>
                <Col className="buy-now-banner">
                    <h1>Mint now!</h1>
                </Col>

            </Row>
        </Container>
    )
}