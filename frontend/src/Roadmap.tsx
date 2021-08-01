import {Col, Container, Row} from "react-bootstrap";
import "./Roadmap.css"

export function Roadmap() {
    return (
        <Row className="my-5 m-lg-5 m-md-1">
            <Col xl={3}>
                <h1>Our roadmap.</h1>
            </Col>
            <Col>
                <Container className="roadmap-inner">
                    <Row>
                        <Col>
                            <h1>1</h1>
                            <p>It's time to reveal what the Wanderers look like. We will begin working on animated
                                avatars so you can see your pilots.</p>
                        </Col>
                        <Col>
                            <h1>2</h1>
                            <p>No Wanderer is complete without their own personal spaceship. We will begin working on 3D
                                generative ships for your Wanderer to use across the metaverse and beyond.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>3</h1>
                            <p>Physical merch. Let's see your Wanderers printed out onto the real world!</p>

                        </Col>
                        <Col>
                            <h1>4</h1>
                            <p>We will create <b>THE HUB</b> - an interactive space station gallery to interact with for
                                all Wanderers.</p>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}