// import 'bootstrap/dist/css/bootstrap.min.css' 

import Carousel from 'react-bootstrap/Carousel'
import react, {useState,useEffect} from "react"
import axios from 'axios'
function PhotoCard({photo, listingPhotos, setListingPhotos, listing}){
    // const [images,setImages] = useState([])
    // // console.log("LOWER", photo)
    // const [index, setIndex] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null)
    // const [newFile, setNewFile] = useState(null)
    // const [addImage, setAddImage] = useState(null)

    // console.log(newFile)

 

    // console.log(listingPhotos)
    // function fileSelectedHandler (e){
    //     console.log(e.target.files[0].name)
    //     setSelectedFile(e.target.files[0].name)
    //     // setNewFile(e.target.files[0].name)
    // }

    // let updatedImage;
    // console.log(listingPhotos)
    // const imageHandler = (e) => {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         if (reader.readyState === 2){

    //             // setListingPhotos([...listingPhotos,reader.result])
    //             // updatedImage = reader.result
                
    //             // setListingPhotos([...listingPhotos,reader.result])
    //             // setNewFile([...listingPhotos,reader.result])


    //             //  console.log(listingPhotos)
    //             //  console.log(typeof(reader.result))
    //             fetch(`http://localhost:3000/listings/${listing.id}`, {
    //                 method: 'PATCH', 
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify({
    //                     photos:  listingPhotos
    //                     // [...listingPhotos,reader.result]
                    
    //                 }),
    //             })
    //             .then(response => response.json())
    //             .then(res => {
    //             console.log(res.photos);
    //             })
           

    //         }
    //     }
    //    const results = reader.readAsDataURL(e.target.files[0])
    //    console.log(updatedImage)
    //     console.log([...listingPhotos,results])
       

     
        
    //         // console.log(listingPhotos)
    // }
    
    
    

    return(

    <>
    <div>
    {/* <Carousel> 
     <Carousel.Item>  */}
        <img src={photo} />
        {/* </Carousel.Item> 
        </Carousel>  */}
    </div>
{/* </Carousel> */}
    <div>
        {/* <input  type = "file" onChange= {(e) => imageHandler(e)} */}
        {/* /> */}
        {/* <button onClick={() => this.fileInput.click()}>Add Photo</button> */}
        {/* <button onClick = {(e) => fileUploadHandler(e)}>Upload</button> */}
    </div>

    {/* <img src= {addImage} /> */}
    </>
)
}

export default PhotoCard