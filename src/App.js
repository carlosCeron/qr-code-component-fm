import './App.css';
import qrImage from './assets/images/image-qr-code.png';

function App() {
  return (
    <div className="Qr-container">
      <img src={qrImage} className="Qr-image" alt="qr-code-component" />
      <p className='Qr-title'>Improve your front-end skills by building projects</p>
      <p className='Qr-subtitle'>Scan the QR code to visit Frontend Mentor and take your  coding skills to the next level</p>
    </div>
  );
}

export default App;
