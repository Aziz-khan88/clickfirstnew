import styles from "@/styles/components/video.module.scss";

const VideoPlayer = ({ video, videoUrl }) => {
    return (
        video ? (
            <div className={styles.bannerVideo}>
                <video width="100%" controls={false} autoPlay loop muted preload="none">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        ) : (
            // <video width="100%" controls={false} autoPlay loop preload="none">
            //     <source src={testVideo} type="video/mp4" />
            //     Your browser does not support the video tag.
            // </video>

            <div className={styles.iframeVideo}>
                <iframe
                    src={videoUrl} // Use the state variable
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                    allowFullScreen
                    title="video3"
                />
            </div>
        )
    );
};

export default VideoPlayer;
