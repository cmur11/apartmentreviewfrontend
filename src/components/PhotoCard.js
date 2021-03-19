// import 'bootstrap/dist/css/bootstrap.min.css' 




function PhotoCard({photo, listingPhotos, setListingPhotos, listing}){
  

   
    return(

    <>
    <div>
        <img alt = {photo} src={photo} />
    </div>
    </>
)
}

export default PhotoCard