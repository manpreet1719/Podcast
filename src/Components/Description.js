import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Description.css'
import profile from '../assests/profile.jpg'
const Description = () => {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const value = params.get('id');

    return (
        <div className='container' style={{ marginTop: '7rem' }}>
            <div class="container grid gap-3">
                <div className="row">
                    <div className="p-2 col-md-3">
                        <div className='card'>
                            <div className='p-3 d-flex flex-column align-items-center justify-content-center'>
                                <img src={profile} alt='image' style={{ width: '120px' }} />
                                <h5 class="card-title">Manpreet Kamboj</h5>
                                <p class="card-title" >i am a software devleoper</p>
                            </div>
                        </div>
                        <div className='tags mt-3'>
                            <div className='card'>
                                <div className='p-3 d-flex flex-column'>
                                    <h6>Tags</h6>
                                    <div className='d-flex flex-wrap'>
                                        <button type="button" class="btn btn-primary btn-sm m-2">Small button</button>
                                        <button type="button" class="btn btn-primary btn-sm m-2">Small button</button>
                                        <button type="button" class="btn btn-primary btn-sm m-2">Small button</button>
                                        <button type="button" class="btn btn-primary btn-sm m-2">Small button</button>
                                        <button type="button" class="btn btn-primary btn-sm m-2">Small button</button>
                                        <button type="button" class="btn btn-primary btn-sm m-2">Small button</button>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="p-2 col-md-9">
                        <div className='card'>
                            <div className='p-3 d-flex flex-column'>
                                <h6>About Manpreet</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <div className='links'>
                                    <h6>Links</h6>
                                    <div className='d-flex flex-wrap'>
                                        <button type="button" className="btn btn-primary m-2">Primary</button>
                                        <button type="button" className="btn btn-secondary m-2">Secondary</button>
                                        <button type="button" className="btn btn-success m-2">Success</button>

                                    </div>
                                </div>
                                <div className='d-flex flex-column justify-content-center'>
                                    <hr className="w-100 bg-secondary mt-3" />
                                <button type="button" className="btn btn-primary m-2">Book me</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Description;