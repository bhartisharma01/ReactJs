import React from 'react';
function Cards(props){
   // console.log(props);
  return (
    <>
      <div className="cards">
        <div className="card">
          <img
            src={props.imgsrc}
            alt="netflix_img"
            className="series_cover"
          />
          <div className="info_box">
            <span classN
            ame="card_category">{props.webCategory}</span>
            <h3 className="card_title">{props.webTitle}</h3>
            <a href={props.link} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;