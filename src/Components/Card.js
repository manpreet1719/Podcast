import micpic from '../assests/mic.jpg'
import profile from '../assests/profile.jpg'
import { useNavigate } from 'react-router-dom';
const Card = (item) => {
    console.log(item.data);
    const navigate = useNavigate();
    const handleCardClick = (value) => {
        navigate(`/description?id=${value.id}`);

    }
    return (
        <div onClick={()=> handleCardClick(item.data)}>
            <div class="container text-center d-flex  justify-content-center">
                <div className='mt-5'>
                    <div class="card" style={{ width: '195px', borderRadius: '5px' }}>
                        <img src={profile} class="card-img-top img-fluid img-thumbnail" alt="..." />
                    </div>
                    <div class="card-body pt-3" style={{ width: '195px', textAlign: 'left' }}>
                        <h5 class="card-title pb-3">Manpreet Kamboj</h5>
                        <p class="card-title" >i am a software devleoper</p>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default Card;