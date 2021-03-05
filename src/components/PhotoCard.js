// import 'bootstrap/dist/css/bootstrap.min.css' 
// import Carousel from 'react-bootstrap/Carousel'
import Carousel from 'react-bootstrap/Carousel'
import react, {useState,useEffect} from "react"
function PhotoCard({photo}){
    const [images,setImages] = useState([])
    console.log("LOWER", photo)
    const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };
    
    // console.log(photos)

    // let image 
    // getPhotos()
    // function getPhotos(){

    //     // if(photos){
    //     //     image = photos.map((photo) => {
    //     //         console.log(photo)
    //     //     })
    //     // }
    // }


//     useEffect(()=>  fetch("https://realtor-com-real-estate.p.rapidapi.com/for-rent?city=Manhattan&state_code=NY&limit=1&offset=0", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-key": "cb43fbbba3msh5d9f3ef2655454ep1dcff1jsn4248c3a7c32e",
//             "x-rapidapi-host": "realtor-com-real-estate.p.rapidapi.com"
//         }
//     })
//     .then(res => res.json())
//     .then(response => {
//         setImages(response.data.results[0].photos);
//     }), [])
// // debugger
//     console.log(images)
return(

    <>
    {/* <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo}
      alt="First slide"
    />
    
      </Carousel.Item>
</Carousel> */}

    <div>

        <img src={photo} />
    </div>
    </>
)
}

export default PhotoCard