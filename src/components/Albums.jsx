import { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
// import Users from './Users';
// import Users from './components/Users';

function Albums() {
    const [albums, setAlbums] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const userId = searchParams.get('userId');

        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
            .then(data => setAlbums(data))
            .catch(error => console.error(error));
    }, [location]);

    return (
        <div className='main'>
            <h1>Albums of User</h1>
            <button onClick={() => navigate(-1)}>Go back to users</button>
            <ul className='albums-ul'>
                {albums.map(album => (
                    <li key={album.id}>
                        <span>{album.title}</span>
                        <Link to={`/photos?albumId=${album.id}`}>Photos</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Albums;