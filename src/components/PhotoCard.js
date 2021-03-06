// import 'bootstrap/dist/css/bootstrap.min.css' 
// import Carousel from 'react-bootstrap/Carousel'
import Carousel from 'react-bootstrap/Carousel'
import react, {useState,useEffect} from "react"
import axios from 'axios'
function PhotoCard({photo, listingPhotos, setListingPhotos, listing}){
    const [images,setImages] = useState([])
    // console.log("LOWER", photo)
    const [index, setIndex] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null)
    const [newFile, setNewFile] = useState(null)
    const [addImage, setAddImage] = useState(null)

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

    console.log(listingPhotos)
    function fileSelectedHandler (e){
        console.log(e.target.files[0].name)
        setSelectedFile(e.target.files[0].name)
        // setNewFile(e.target.files[0].name)
    }

    function fileUploadHandler(e){
        // const fd = new FormData();
        // fd.append('image',selectedFile, selectedFile.name)
        // setListingPhotos([...listingPhotos,selectedFile])
        // axios.post('')
        setNewFile(selectedFile)
    }
    console.log(listing.photos)
    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2){
               // console.log(reader.result)
                // setAddImage(reader.result)
                setListingPhotos([...listingPhotos,reader.result])
                // this.setState({setAddImage:reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])

        fetch(`http://localhost:3000/listings/${listing.id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                photos: [...listingPhotos, reader.result]
            
            }),
        })
        .then(response => response.json())
        .then(res => {
        console.log(res.photos);
        })
    }

    

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
    <div>
        <input  type = "file" onChange= {(e) => imageHandler(e)}
        />
        {/* <button onClick={() => this.fileInput.click()}>Add Photo</button> */}
        <button onClick = {(e) => fileUploadHandler(e)}>Upload</button>
    </div>

    {/* <img src= {addImage} /> */}
    </>
)
}

export default PhotoCard