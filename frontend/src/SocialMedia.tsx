import {Col, Image, Row} from "react-bootstrap";
import "./SocialMedia.css";
import social_discord from "./assets/social-discord.png";
import social_twitter from "./assets/social-twitter.png";


export function SocialMedia() {
    return (
        <Row className="my-5 m-lg-5 m-md-1 pt-5">
            <Col xl={6}>
                <h1>Wander with us.</h1>
            </Col>
            <Col xl={3} lg={4} md={4} sm={5} xs={6}>
                <a href="https://discord.gg/8XaURCgFfq">
                    <Image src={social_discord} className="social"/>
                </a>
            </Col>
            <Col xl={3} lg={4} md={4} sm={5} xs={6}>
                <a href="https://twitter.com/wanderers_nft">
                    <Image src={social_twitter} className="social"/>
                </a>
            </Col>
        </Row>
    )
}