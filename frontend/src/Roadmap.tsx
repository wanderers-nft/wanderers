import {Col, Container, Row} from "react-bootstrap";
import "./Roadmap.css"

export function Roadmap() {
    return (
        <Row className="m-lg-5 m-md-1 py-5">
            <Col xl={3}>
                <Container fluid className="roadmap-banner">
                    <Row className="mb-3">
                        <Col>
                            <h1>Our roadmap.</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>*Roadmap items are subject to change as we adapt the project and receive feedback from
                                the
                                community.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Col>
            <Col>
                <Container className="roadmap-inner">
                    <Row>
                        <Col>
                            <h1>1</h1>
                            <p>
                                The Hub gets revealed. This is a members-only area where we will reveal new content for
                                Wanderers.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>2</h1>
                            <p>
                                We reveal the lore behind the Wanderers. Where they come from and what it all means for
                                your unique Wanderer.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>3</h1>
                            <p>
                                It’s time to reveal what the Wanderers look like - we will create animated avatars so
                                you can see your pilots.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>4</h1>
                            <p>
                                No Wanderer is complete without their own personal spaceship. We will begin working on
                                3D generative ships for your Wanderer to use across the metaverse and beyond.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}