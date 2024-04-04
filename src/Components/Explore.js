import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/Explore.css'
import Card from './Card';
import carddata from '../Data/CardsData.js'


const Explore = () => {
    return (
        <div className='explore-container'>
            <div className="container" >
                <div className='d-flex  justify-content-center'>
                    <div className="input-group w-50 mb-3 custom-input" style={{ marginTop: '7rem' }}>
                        <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary custom-button " type="button" id="button-addon2">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
                <div class="container text-center">
                    <div class="row justify-content-center">

                        {
                            carddata.map((item) => (
                                <div className="col" key={item.id}>
                                    <Card data={item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Explore;
