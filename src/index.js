import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import AuthService from './service/auth_service';
import CardRepository from './service/card_repository';

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
//FileInput변수에 return으로 url이 들어온다.
const FileInput = props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App 
      authService={authService} 
      FileInput={FileInput} 
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
