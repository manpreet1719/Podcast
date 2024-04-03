import '../styles/Body.css'
import micpic from '../assests/micpic1.jpg'
import { ReactComponent as MicIcon } from '../assests/podcast-svgrepo-com.svg'
import VideoContainer from './VideoContainer'
const Body = () => {
  return (
    <div className="container">
      <div className="row " style={{ marginTop: '7rem' }}>
        <div className="col-sm ">
          <div class="d-flex  justify-content-center flex-column" >
            <div class="text-left mb-auto p-2">
              <h1>PodMatch Automatically Matches Ideal Podcast Hosts And Guests For Interviews</h1>
            </div>
            <div class="text-left p-2">
              <p>Imagine Your Favorite Online Dating App, But Instead Of Using It For Finding Dates, You're Booking Podcast Interviews. We Use The Same(ish) Technology For Automated Matching!</p>
            </div>
            <div class="text-center d-flex justify-content-center p-2">
              <div className="card-body  d-flex align-items-center justify-content-center flex-column bg-light" style={{ width: '150px', height: '150px', marginRight:'5px'  , borderRadius: '15px' }}>
                <MicIcon className="svg-icon" /> {/* Use the imported SVG icon */}
                <h5 className="card-title">Interviews</h5>
              </div>
              <div className="card-body  d-flex align-items-center justify-content-center flex-column bg-light" style={{ width: '150px', height: '150px' , marginRight:'5px' ,  borderRadius: '15px'}}>
                <MicIcon className="svg-icon" /> {/* Use the imported SVG icon */}
                <h5 className="card-title">Interviews</h5>
              </div>
              <div className="card-body  d-flex align-items-center justify-content-center flex-column bg-light" style={{ width: '150px', height: '150px' , borderRadius: '5px' }}>
                <MicIcon className="svg-icon" /> {/* Use the imported SVG icon */}
                <h5 className="card-title">Interviews</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 col-sm ">
          <img src={micpic} alt='mic-ic' />
        </div>
      </div>
      <hr className="w-100 bg-secondary mt-3" />
      <VideoContainer/>
    </div>
  );
}
export default Body;