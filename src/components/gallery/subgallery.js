import React,{useState} from 'react';
import './css/subgallery.css';

function SubGallery(props) {
  const [show, setShow] = useState("200px");
  const showOverlay = () => {
    setShow("0");
  }
  const hideOverlay = () => {
    setShow("200px");
  }
  return (
    <div className="subgallery-container" style={{ background: `url(${props.image})`, backgroundSize: "cover" ,backgroundPosition:'center'}} onMouseEnter={showOverlay} onMouseLeave={hideOverlay} >
      <div className="subgallery-overlay" style={{transform:`translateY(${show})`}} >{props.title}</div>
    </div>
  );
}

export default SubGallery;
