import video_placeholder from "./assets/video_placeholder.png"
import "./About.css";
import {Button, Col, Container, Image, Row} from "react-bootstrap";

export function About() {
    return (
        <>
            <Row className="about">
                <Col xxl={3} lg={5} md={8} className="m-lg-5 m-md-1">
                    <p>The Wanderers are an infamous band of intergalactic space voyagers known for their legendary
                        travels.</p>
                    <p>That was... until their sudden disappearance in August 2021.</p>
                </Col>
                <Col xxl="auto" lg={6} md="auto">
                    <Image src={video_placeholder} alt="video placeholder" fluid/>
                </Col>
            </Row>
            <Row className="about blackhole">
                <Col>
                    <Container className="wormholeContainer">
                        <Row>
                            <Col className="mb-5">
                                <p>Rumor has it that the Wanderers were exploring the connection between wormholes and
                                    the multiverse. It
                                    is believed if you warp into a wormhole, you will become fractionated throughout the
                                    multi- and
                                    meta-verse. And now, it is time for you to make the leap. Are you up for the task?
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>
                                    Wanderers is an animated collection of generative NFT collectibles on the
                                    Ethereum blockchain. Each unique NFT represents a split in the multiverse and a
                                    parallel
                                    Wanderer.
                                </p>
                            </Col>
                            <Col>
                                <p>Each Wanderer has up to 14 different attributes - each with multiple rarities. This
                                    means there are over 1 trillion possible combinations.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row className="about m-lg-5 m-md-1 align-items-center">
                <Col xxl={3} lg={10} md={12}>
                    <p><b>Only 10,000 Wanderers will ever exist. Reserve yours today!</b></p>
                </Col>
                <Col xxl="auto" lg={2} md="auto">
                    <Button className="btn-minty" size="lg">Buy now</Button>
                </Col>
            </Row>
        </>
    )
}