import {About} from "./About";
import {Col, Container, Row} from "react-bootstrap";

export function Home() {
    return (
        <Container fluid>
            <About/>
            <Row>
                <Col>
                    <h1>
                        Roadmap
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>
                        Buy now
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>
                        Team
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1>
                        Social media
                    </h1>
                </Col>
            </Row>
        </Container>
    )
}