import {Col, Container, Row} from "react-bootstrap";
import "./Roadmap.css"

export function Roadmap() {
    return (
        <Row className="m-lg-5 m-md-1 pt-3 pb-1">
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
                                <b>The Hub comes online</b>. This is a members-only area where we will reveal new
                                content for Wanderers token holders.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>2</h1>
                            <p>
                                We’re building a tool you can use to pull <b>high-res images</b> from your
                                Wanderer. <b>You can use these images in any way that you like</b> - profile pictures or
                                get them printed.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>3</h1>
                            <p>
                                We drop Phase 1 of the lore behind the Wanderers. Where they come from and what it all
                                means for your unique Wanderer. This will be part one of a <b>world building animated
                                series.</b>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>4</h1>
                            <p>
                                It’s time to reveal what the Wanderers look like - we will
                                create <b>animated avatars</b> so you can see your pilots. All current Wanderers token
                                holders will receive a discount on their avatars.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>5</h1>
                            <p>
                                No Wanderer is complete without their own <b>personal spaceship</b>. We will begin
                                working on <b>3D generative ships</b> for your Wanderers to use across the metaverse
                                and beyond.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}