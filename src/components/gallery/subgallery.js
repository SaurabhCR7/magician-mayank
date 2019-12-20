import React,{useState} from 'react';
import './css/subgallery.css';

function SubGallery(props) {
  const [show, setShow] = useState("70px");
  const showOverlay = () => {
    setShow("0");
  }
  const hideOverlay = () => {
    setShow("70px");
  }
  return (
    <div className="subgallery-container" style={{ background: `url(${props.image})`, backgroundSize: "cover" }} onMouseEnter={showOverlay} onMouseLeave={hideOverlay} >
      <div className="subgallery-overlay" style={{transform:`translateY(${show})`}} >{props.title}</div>
    </div>
  );
}

export default SubGallery;
