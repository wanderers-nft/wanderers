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
                    <Row className="mb-3">
                        <Col>
                            <h1>1</h1>
                            <p>
                                We turn on <b>WanderFM</b> - a 24/7 live radio station on YouTube. WanderFM will have
                                the Wanderer's collection on a constant loop for your viewing pleasure.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <h1>2</h1>
                            <p>
                                <b>The Hub</b> comes online. This is a <b>members-only</b> area where we will reveal new
                                content for Wanderers token holders.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <h1>3</h1>
                            <p>
                                <b>The Gallery</b> is activated. We’re building a tool you can use to pull <b>high-res
                                images</b> from your Wanderer. <b>You can use these images in <b>any way</b> that you
                                like</b> - profile pictures or get them printed.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <h1>4</h1>
                            <p>
                                We drop Phase 1 of the lore behind the Wanderers. Where they come from and what it all
                                means for your unique Wanderer. This will be part one of a <b>world building animated
                                series.</b>
                            </p>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <h1>5</h1>
                            <p>
                                Pack your bags for <b>Planet Pass</b> - an <b>evolving universe</b> for all Wanderers.
                                Every Wanderer
                                will receive a Planet Pass and a <b>free home planet</b>. Every Time you visit a new
                                planet, get a new stamp in your Planet Pass. The universe is <b>alive</b> - meaning
                                there will be <b>Galactic Events</b>. Intergalactic space battles, anomalies, and mass
                                destruction are just some of the events that will affect the Wanderers universe.
                            </p>
                            <p>
                                Which Wanderer will visit the most systems and collect the most stamps in their Planet
                                Pass?
                            </p>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <h1>6</h1>
                            <p>
                                It’s time to reveal what the Wanderers look like - we will
                                create <b>animated avatars</b> so you can see your pilots. All current Wanderers token
                                holders will receive a discount on their avatars.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <h1>7</h1>
                            <p>
                                No Wanderer is complete without their own <b>personal spaceship</b>. We will begin
                                working on <b>3D generative ships</b> for your Wanderers to use across the metaverse
                                and beyond.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>8</h1>
                            <p>
                                More to be announced. <b>Trust the process.</b>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}