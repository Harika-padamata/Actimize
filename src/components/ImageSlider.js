import React, { useState, useEffect } from "react";

function ImageSlider() {
// Create state variables for the index and image array
const [index, setIndex] = useState(0);
const images = ["https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg", "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-118143566.jpg", "https://www.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-260nw-668593321.jpg"];

// Use useEffect to increment the index and update the image every 5 seconds
useEffect(() => {
const intervalId = setInterval(() => {
setIndex(prevIndex => (prevIndex + 1) % images.length);
}, 5000);

return () => clearInterval(intervalId);
}, []);

// Render the current image
return (
<img src={images[index]}/>
);
}

export default ImageSlider;
