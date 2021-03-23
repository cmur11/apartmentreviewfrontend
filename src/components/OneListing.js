
import { useParams } from "react-router-dom"
import  {useState,useEffect} from "react"
import Review from "./Review"
import EmailForm from "./EmailForm"
import PhotoCard from "./PhotoCard"
import { Card, Icon,  Button, Container } from 'semantic-ui-react'
import ImageSlider from "./ImageSlider"



function OneListing({user}){
    const {id} = useParams()
    // const {listing} = useParams()
    // console.log(listing)
    const [listing, setListing] = useState(null)
    const [listingPhotos, setListingPhotos] = useState([])
    // const [query, setQuery] = useState("");
    const [saved, setSaved] = useState(false)
    const [applied, setApplied] = useState(false)
    const [textBox, setTextBox] = useState(false)
    const [addPhoto,setAddPhoto] = useState(false)
    // const [image,setImage] = useState({})
    // const [video,SetVideo] = useState({})

    
// let imageArr = JSON.parse(listing.photos)

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    
    function getPhotos(){
        
     return listingPhotos.map((photo) => {
      
     return <PhotoCard photo = {photo} listing = {listing} listingPhotos = {listingPhotos} setListingPhotos = {setListingPhotos}/>
    })

  
    }

// console.log(user.id)

    function helper(listing){
        let imageArr = (listing.photos)
        
        
        // console.log("LISY", listing);
        // Logic could cause issues keep an eye on it based on whenState iss et for listing and findinglisting
        let findListing = listing.applied_listings.find(listingJoin => listingJoin.listing_id === listing.id)

        let findSaved = listing.saved_listings.find(savedListing => savedListing.listing_id === listing.id)

        // console.log("FOUND LIST", findListing);
        // console.log("save list", findSaved)

        setListing(listing)
        setListingPhotos(imageArr)
        setApplied(!!findListing)
        setSaved(!!findSaved)
    }

 
    useEffect(()=> {
        fetch(`http://localhost:3000/listings/${id}`)
        .then(res => res.json())
        .then((listing) => {helper(listing)})
        
    }, [])
    
    let reviewForListing 
    
        if (listing) {
            reviewForListing = <Review listing = {listing} setListing = {setListing} key ={listing.id} user = {user} />
        }

    console.log(user.id)
    function handleSave(e){
       
        console.log('hi')
        if (saved === true){
            alert("You've already saved this listing!")
        } else{
            setSaved(true)
            fetch('http://localhost:3000/saved_listings', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    listing_id: listing.id,
                    user_id: user.id,
                    price: listing.price,
                    
                }),
            })
            .then(response => response.json())
            .then(newSavedListing => {
                console.log(newSavedListing);
            })
            
            fetch(`http://localhost:3000/listings/${listing.id}`, {
                method: 'PATCH', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    saved: true
                
                }),
            })
            .then(response => response.json())
            .then(res => {
            console.log(res);
            })

        }
        
        
    }
  
    
    function handleApply(e){
   
        if(applied === true ){
            alert( "You've already applied to this listing!")
        }else {
            setTextBox(true)
            setApplied(true)
            
            fetch('http://localhost:3000/applied_listings', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    listing_id: listing.id,
                    user_id: user.id,
                    
                }),
            })
            .then(response => response.json())
            .then(newAppliedListing => {
                console.log(newAppliedListing);
            })
        }
       
    }
    
    function handleAlreadySaved(){
        console.log('hi')
    }
    
  
    const imageHandler = (e) => {
        const reader = new FileReader();
        const results = reader.readAsDataURL(e.target.files[0])
      
        
        reader.onload = () => {
            if (reader.readyState === 2){
                // console.log("RESULTS", results);
                setListingPhotos([...listingPhotos,reader.result])
               
                console.log(reader.result)
                
            }
        }
        
   
    }



    useEffect(() => {
       
        if (listing) {
            // console.log("PHOTOS", listingPhotos);

            fetch(`http://localhost:3000/listings/${listing.id}`, {
        method: 'PATCH', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            photos:  listingPhotos
            // [...listingPhotos,reader.result]
        
        }),
    })
    .then(response => response.json())
    .then(res => {
    console.log(res);
    })
        }

    }, [listingPhotos])


   
    function getAverage(){

        let findListing = listing.reviews.find(listingJoin => listingJoin.listing_id === listing.id)
           if (!!findListing){
            const arrayOfReviews = listing.reviews.map((review) => review.rating )
           let average = (arrayOfReviews.reduce((a, b) => a + b, 0) / arrayOfReviews.length)
                return Math.round(average * 100)/100
           }else{
               let average = "No ratings provided"
               return average
           }
    
    }
        
 
// Testing Cloudinary
//   function  handleChange  (e){
//         e.persist()
//        setImage(() => {
//             return {
//                 [e.target.name]: e.target.files[0]
//             }
//         })
//     }

//    function handleSubmit (e) {
//         e.preventDefault()
//         const form = new FormData()
//         form.append("image", setImage.image)
//         // form.append("video", setVideo.video)
//         fetch(`http://localhost:3000/listings/${listing.id}`, {
//             method: "PATCH",
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 photos: [...listingPhotos,form]
//         }),})
//         .then(response => response.json())
//         .then(res => {
//         console.log(res);
//         })
//         setListingPhotos([...listingPhotos,form])
//     }






    if (listing) {
       
        return( 
           
    <>
     <div className = 'img-slider'>
     <ImageSlider listingPhotos={listingPhotos} /> 
    </div>

  

   
    <br></br>
    <Button animated='vertical'>

        <Button.Content onClick = {(e) => setAddPhoto(true)}hidden>Upload</Button.Content>
                <Button.Content visible>
                <Icon name='photo' />
                </Button.Content>
    </Button>
    <br></br>
    <br></br>
    {addPhoto ? <input  type = "file" name = "file" onChange= {(e) => imageHandler(e)}/>  : null}
 
    <Container textAlign='center'>
    <Card >
                <Card.Header>Price ${listing.price} <br></br>
                            {listing.neighborhood}
                </Card.Header>
                <Card.Meta>
                 <span className='address'>{listing.address}, {listing.city}, {listing.state}, {listing.zip_code}</span>
                </Card.Meta>

                <Card.Description>
                <p>Bedrooms:{listing.bedrooms}</p>
                <p>Bathrooms:{listing.bedrooms}</p>
                <p>Sqft:{listing.sqft}</p>
                </Card.Description>
              
            
        
                <div className = "saveforLaterButton"onClick = {(e) => {handleSave(e)}}>  
                <Button animated='vertical'>
                <Button.Content hidden>{saved ? "Saved" : "Save"}</Button.Content>
                <Button.Content visible>
                <Icon name='save' />
                </Button.Content>
                </Button>
                   
                </div>
      
       
                <br></br>
                <div className = "applyToListing" onClick = {(e) => {handleApply()}}>
                <Button animated='vertical'>
                <Button.Content visible>{applied ? "Broker contacted" : "Apply to Listing"}</Button.Content>
                  <Button.Content hidden>
                    <Icon name='mail' />
                </Button.Content>
                  
                    </Button>
                   
                </div>
    
                {textBox ? 
                <div className = "renderApplyBox">
                
                <EmailForm listing = {listing} setTextBox = {setTextBox} /> 
                </div> 
                : null }
         <Card.Content extra>
      <a>
        <Icon name='star' />
        {listing.reviews ? getAverage() : "No Ratings"}
      </a>
    </Card.Content>

                
       
       </Card>
       </Container>
   
        <div>
           {reviewForListing}
        </div>
      
        </>
        )
    } else {
        return <div>Loading</div>
    }
}

export default OneListing;