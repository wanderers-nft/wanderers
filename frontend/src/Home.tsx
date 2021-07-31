import {About} from "./About";
import {Col, Container, Row} from "react-bootstrap";
import {Roadmap} from "./Roadmap";
import {Team} from "./Team";

export function Home() {
    return (
        <Container fluid="xxl">
            <section id="about"/>
            <About/>
            <section id="roadmap"/>
            <Roadmap/>
            <section id="team"/>
            <Team/>
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