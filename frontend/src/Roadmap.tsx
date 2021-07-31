import {Col, Container, Row} from "react-bootstrap";

export function Roadmap() {
    return (
        <Row className="my-5 m-lg-5 m-md-1">
            <Col>
                <h1>Our roadmap.</h1>
            </Col>
            <Col>
                <Container>
                    <Row>
                        <Col>
                            <h1>1</h1>
                            <p>It's time to reveal what the Travelers look like. We will begin working on animated
                                avatars so you can see your pilots. </p>
                        </Col>
                        <Col>
                            <h1>2</h1>
                            <p>Physical merch. Let's see your Travelers printed out onto the real world!</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>3</h1>
                            <p>3D generative ships for your Traveler to use across the metaverse and beyond.</p>
                        </Col>
                        <Col>
                            <h1>4</h1>
                            <p>We will create an interactive space hub gallery to interact with and display your
                                Travelers.</p>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}