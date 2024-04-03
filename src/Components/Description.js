import { useLocation } from 'react-router-dom';
const Description  =  () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const value = params.get('id');

    // Now you can use the value in your component
    console.log('Value received:', value);
    return (
          <h1>Description</h1>
    );
}

export default Description;