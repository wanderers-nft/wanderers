import {About} from "./About";
import {Col, Container, Row} from "react-bootstrap";

export function Home() {
    return (
        <Container fluid="xxl">
            <section id="about"/>
            <About/>
            <section id="roadmap"/>
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