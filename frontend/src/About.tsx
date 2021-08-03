// import video_placeholder from "./assets/video_placeholder.png"
import hero from "./assets/hero.gif";
import "./About.css";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export function About() {
    return (
        <>
            <Row className="about">
                <Col xxl={5} xl={4} lg={12} md={12} className="m-lg-5 m-md-1">
                    <Container fluid>
                        <Row>
                            <Col>
                                <p>The Wanderers are an infamous band of intergalactic space voyagers known for their
                                    legendary
                                    travels.</p>
                                <p>Until their sudden disappearance in August, 2021.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="hero-buy-now mt-5">
                                <Link to="/buy">
                                    <Button className="btn-minty" size="lg">Mint your Wanderer now!</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col xxl={6} xl={6} lg={12} md={12} className="mt-3 hero">
                    <Image src={hero} alt="video placeholder" fluid/>
                </Col>
            </Row>
            <Row className="about blackhole">
                <Col>
                    <Container className="wormhole-container">
                        <Row>
                            <Col>
                                <p>
                                    Every pilot knows traveling through a wormhole can move you through space and time,
                                    but the Wanderers also believed they have a connection to the multiverse and the
                                    metaverse.
                                </p>
                                <p>
                                    Each Wanderer is a unique looping animated galactic adventure from hundreds of
                                    possible attributes and rarities - including music. <b>There are over a quadrillion
                                    possible combinations and only 10,000 Wanderers will ever be created.</b>
                                </p>
                                <p>The Wanderers are stored as ERC-721 tokens on the Ethereum blockchain and hosted on
                                    IPFS.
                                </p>
                                <p className="smol">
                                    *42 Wanderers will be pre-minted by the team for promotional giveaways,
                                    airdrops, etc.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row className="about m-lg-5 m-md-1 align-items-center">
                <Col xxl={10} lg={10} md={12}>
                    <p><b>Get yours today!</b></p>
                </Col>
                <Col xxl="auto" lg={2} md="auto">
                    <Link to="/buy">
                        <Button className="btn-minty" size="lg">Get now</Button>
                    </Link>
                </Col>
            </Row>
        </>
    )
}