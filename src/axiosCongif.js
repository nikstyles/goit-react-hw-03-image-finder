// export const axiosCongif = {
//   API_KEY: '29165811-427dfac32fdd04976ea5245cc',
//   url: 'https://pixabay.com/api/',
//   options: '&image_type=photo&orientation=horizontal&per_page=12',
// };

import axios from 'axios';

async function FetchImages(nameImage, page) {
  const URL = 'https://pixabay.com/api/';
  const BASE_KEY = '29165811-427dfac32fdd04976ea5245cc';
  const options = new URLSearchParams({
    key: BASE_KEY,
    q: nameImage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page,
  });

  return await axios.get(`${URL}?${options}`);
}

export default FetchImages;
