import video_placeholder from "./assets/video_placeholder.png"
import "./Home.css";
import {Col, Image, Row} from "react-bootstrap";

export function About() {
    return (
        <Row className="about">
            <Col lg={5} className="m-lg-5 m-md-1">
                <p>The Wanderers are an infamous band of intergalactic space voyagers known for their legendary
                    travels. That was - until their disappearance in August.</p>
            </Col>
            <Col lg="auto" md={1}>
                <Image src={video_placeholder} alt="video placeholder" fluid/>
            </Col>
        </Row>
    )
}