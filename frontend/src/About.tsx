import video_placeholder from "./assets/video_placeholder.png"
import "./Home.css";

export function About() {
    return (
        <div className="about">
            <div className="aboutTextBlock">
                <p>The Wanderers are an infamous band of intergalactic space voyagers known for their legendary
                    travels. That was - until their disappearance on August 15, 2021. </p>
            </div>
            <div>
                <img src={video_placeholder} alt="video" className="aboutImage"/>
            </div>
        </div>
    )
}