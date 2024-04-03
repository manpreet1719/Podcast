import '../styles/VideoContainer.css'
const VideoContainer = () => {
    const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4"; // Default video link

    return (
        <div className="container ">
            <div className="row">
                <div className="col-sm ">
                    <div class="d-flex  justify-content-center flex-column" >
                        <div class="text-center mb-auto p-2">
                            <h1>PodMatch Has Generated 81,847 Interviews
                                Among Our 10,478 Members</h1>
                            <h1>Interviews
                                Among Our 10,478 Members</h1>
                        </div>
                        <div class="text-center p-2">
                            <p>Imagine Your Favorite Online Dating App, But Instead Of Using It For Finding Dates, You're Booking Podcast Interviews. We Use The Same(ish) Technology For Automated Matching!</p>
                        </div>
                    </div>
                </div>
                <div >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', opacity: 1 }}>
                        <video controls width="640" height="360">
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoContainer;