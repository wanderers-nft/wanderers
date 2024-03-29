// import video_placeholder from "./assets/video_placeholder.png"
import hero_mp4 from "./assets/hero.mp4";
import hero_webm from "./assets/hero.webm";

import "./About.css";
import {Button, Col, Container, Row} from "react-bootstrap";

export function About() {
    return (
        <Container fluid className="blackhole">
            <Row className="about">
                <Col xxl={6} xl={6} lg={12} md={12} className="m-lg-4 m-md-1">
                    <Container fluid>
                        <Row>
                            <Col>
                                <p><b>The Wanderers</b> are an infamous band of intergalactic space voyagers known for
                                    their legendary travels.
                                </p>
                                <p>
                                    Until their <b>mysterious disappearance</b> - and <b>last known
                                    transmission</b> [8888] - on August 15, 2021.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col xxl={5} xl={5} lg={12} md={12} className="mt-3 hero">
                    <video width="480" height="480" muted autoPlay loop playsInline className="hero-video">
                        <source src={hero_mp4} type="video/mp4"/>
                        <source src={hero_webm} type="video/webm"/>
                        Your browser does not support videos.
                    </video>
                </Col>
            </Row>
            <Row className="about-secondary mt-2">
                <Col>
                    <Container className="blackhole-container">
                        <Row>
                            <Col>
                                <p className="pb-1">
                                    Each Wanderer is a unique looping animated galactic adventure from hundreds of
                                    possible attributes and rarities - including music. <b>There are over a quadrillion
                                    possible combinations.</b>
                                </p>
                                <p>The Wanderers are stored as ERC-721 tokens on the Ethereum blockchain and hosted on
                                    IPFS. <b>There are only 8,888 Wanderers in existence.</b>
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
            <Row className="about m-lg-4 m-md-1 align-items-center">
                <Col xxl={8} lg={8} md={9}>
                    <p><b>Sold out! Check out Wanderers on the secondary market.</b></p>
                </Col>
                <Col xxl="auto" lg={4} md="auto" className="hero-buy-now">
                    <a href="https://opensea.io/collection/the-wanderers">
                        <Button className="btn-minty" size="lg">Buy on OpenSea</Button>
                    </a>
                    {/*<Button className="btn-minty" size="lg" disabled>Soon™</Button>*/}
                </Col>
            </Row>
        </Container>
    )
}