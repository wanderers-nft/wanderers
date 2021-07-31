import video_placeholder from "./assets/video_placeholder.png"
import "./About.css";
import {Col, Image, Row} from "react-bootstrap";

export function About() {
    return (
        <Row className="about">
            <Col xxl={3} lg={4} md={8} className="m-lg-5 m-md-1">
                <p>The Wanderers are an infamous band of intergalactic space voyagers known for their legendary
                    travels. That was - until their disappearance in August.</p>
            </Col>
            <Col xxl="auto" lg="auto" md="auto">
                <Image src={video_placeholder} alt="video placeholder" fluid/>
            </Col>
        </Row>
    )
}