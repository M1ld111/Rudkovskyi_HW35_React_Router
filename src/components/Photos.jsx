import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Photos() {
  const [photos, setPhotos] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const albumId = searchParams.get('albumId');
    
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error(error));
  }, [location]);

  return (
    <div className='main'>
      <h1>Photos</h1>
      <button onClick={() => navigate(-1)}>Go back to user`s albums</button>
      <ul className='photos-ul'>
        {photos.map(photo => (
          <li key={photo.id}>
            <span>{photo.title}</span>
            <img src={photo.thumbnailUrl} alt={photo.title} height={'100px'} width={'100px'} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Photos;