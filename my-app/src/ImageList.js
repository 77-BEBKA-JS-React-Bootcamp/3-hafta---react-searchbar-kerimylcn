import React from "react";



const ImageList = (props) => {
    const images = props.images.map((image)=>{
        return <img src={image.urls.regular}/>
    })
    return <div className="images">{images}</div>
    
}

export default ImageList;