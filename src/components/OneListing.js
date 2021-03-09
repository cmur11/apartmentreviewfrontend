import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import react, {useState,useEffect,Component} from "react"
import Review from "./Review"
import EmailForm from "./EmailForm"
import PhotoCard from "./PhotoCard"
import Modal from 'react-modal';
import { Card, Icon, Image, Button,Rating } from 'semantic-ui-react'
// import Carousel from 'react-bootstrap/Carousel'
import Slider from "react-slick";
import { Carousel } from "react-bootstrap";
import { CarouselItem } from "react-bootstrap";



function OneListing({user}){
    const {id} = useParams()
    // const {listing} = useParams()
    // console.log(listing)
    const [listing, setListing] = useState(null)
    const [listingPhotos, setListingPhotos] = useState([])
    // const [reviews, setReviews] = useState([])
    const [saved, setSaved] = useState(false)
    const [applied, setApplied] = useState(false)
    const [textBox, setTextBox] = useState(false)
    const [addPhoto,setAddPhoto] = useState(false)

    
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

                //     return (<Carousel.Item>  <img
                //         className="d-block w-100"
                //     src={photo}
                //   />  </Carousel.Item>)
  
    }

    // return listingPhotos.map((photo) => {
    
    //     return <PhotoCard photo = {photo} listing = {listing} listingPhotos = {listingPhotos} setListingPhotos = {setListingPhotos}/>
    // })


    function helper(listing){
        let imageArr = JSON.parse(listing.photos)
        
        console.log("LISY", listing);
        // Logic could cause issues keep an eye on it based on whenState iss et for listing and findinglisting
        let findListing = listing.applied_listings.find(listingJoin => listingJoin.listing_id === listing.id)

        let findSaved = listing.saved_listings.find(savedListing => savedListing.listing_id === listing.id)

        console.log("FOUND LIST", findListing);
        console.log("save list", findSaved)

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

    
    function handleSave(e){
       
        
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
        //console.log(user)
        if(applied === true ){
            alert( "You've already applied to this listing!")
        }else {
            setTextBox(true)
            setApplied(true)
            // setSaved(false)
            fetch('http://localhost:3000/applied_listings', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    listing_id: listing.id,
                    user_id: 1,
                    
                }),
            })
            .then(response => response.json())
            .then(newAppliedListing => {
                console.log(newAppliedListing);
            })
        }
        // setTextBox(true)
    }
    
    function handleAlreadySaved(){
        console.log('hi')
    }
    
    // Handling of Upload Photo Below
    console.log(listingPhotos)
    const imageHandler = (e) => {
        const reader = new FileReader();
        // debugger
        reader.onload = () => {
            if (reader.readyState === 2){
                // console.log("RESULTS", results);
                setListingPhotos([...listingPhotos,reader.result])
                // setListingPhotos([...listingPhotos, results])
                
                // updatedImage = reader.result
                
                //    setListingPhotos([...listingPhotos,reader.result])
                // setNewFile([...listingPhotos,reader.result])
                
                // setState({photos: newPhotoArray}, someCallbackFunction)
                
                // console.log(listingPhotos)
                // console.log(reader.result)
                
            }
        }
        
        const results = reader.readAsDataURL(e.target.files[0])
        // console.log("RESULTS", results);
      
        // console.log([...listingPhotos, results])

     
        
            // console.log(listingPhotos)
    }



    useEffect(() => {
        console.log("LISTING", listing);
        console.log("LISTINGPhotos", listingPhotos);
        if (listing) {
            console.log("PHOTOS", listingPhotos);

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
    console.log(res.photos);
    })
        }

    }, [listingPhotos])


   



    if (listing) {
       
        return( 
           
    <>
    <div>
      {/* <Carousel>  */}
    
        {getPhotos()}
       
        {/* </Carousel>   */}
    </div>
    <button onClick = {(e) => setAddPhoto(true)}>Add Your Own Photo?</button>
    <br></br>
    {addPhoto ? <input  type = "file" onChange= {(e) => imageHandler(e)}/>  : null}
    {/* <div>
         <input  type = "file" onChange= {(e) => imageHandler(e)}/>
    </div> */}
    
    <Card style={{padding: "20px"}}>
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
                    {/* <button>{saved ? "Already Saved" : "Save Listing"}</button> */}
                </div>
      
       
                <br></br>
                <div className = "applyToListing" onClick = {(e) => {handleApply()}}>
                <Button animated='vertical'>
                <Button.Content visible>{applied ? "Broker contacted" : "Apply to Listing"}</Button.Content>
                  <Button.Content hidden>
                    <Icon name='mail' />
                </Button.Content>
                    {/* <button>{applied ? "Broker contacted" : "Apply to Listing"}</button> */}
                    </Button>
                    {/* <button onClick = {(e) => {handleApply()}}>Apply To Listing</button> */}
                </div>
    
                {textBox ? 
                <div className = "renderApplyBox">
                
                <EmailForm listing = {listing} setTextBox = {setTextBox} /> 
                </div> 
                : null }
       
       </Card>
       {/* <div>

    <input  type = "file" onChange= {(e) => imageHandler(e)}/>
    </div> */}
        <div>
           {reviewForListing}
        </div>
        {/* <div>
            <EmailForm listing = {listing} />
        </div> */}
        </>
        )
    } else {
        return <div>Loading</div>
    }
}

export default OneListing;