function AppliedListing(){
    const [appliedListings,setAppliedListings]
    useEffect(()=> {
        fetch('http://localhost:3000/applied_listings')
        .then(res => res.json())
        .then((listings) => setUser(users[0]))
       }, [])

}