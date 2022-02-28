import mapboxgl from 'mapbox-gl'
import { useRouter } from 'next/router'
import React,{useEffect,useState} from 'react'
import tw from 'tailwind-styled-components'
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";
function Confirm() {
    const router=useRouter()
    const {dropofflan,dropofflon,name}=router.query
 const [origin,setOrigin]=useState([])
    useEffect(() => {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
              console.log('poisition',position)
              setOrigin([position.coords.longitude,position.coords.latitude])
         var map = new mapboxgl.Map({
             accessToken: 'pk.eyJ1IjoiZHplbWVudSIsImEiOiJja3lteHlicHAyY3IyMnZwMGJjczlkcWJvIn0.DptAsDX-6_E2EzBXS5RhXw',
            container: "map",
            style: "mapbox://styles/mapbox/outdoors-v11",
            center: [position.coords.longitude, position.coords.latitude],
            zoom: 13,
           
            
         });
         const marker1 = new mapboxgl.Marker({
             color:'orange',
             scale:2
         })
.setLngLat(origin
)
.addTo(map);

       
          })}},[])
         
  return (
      <Wrapper>    <MapDiv  id='map'></MapDiv>
      <LocationDiv>   <Div>From your current location</Div>    <Div>to {name}</Div>
</LocationDiv>
<ul>
    <li>taxi 1</li>
    <li>taxi 2</li>
    <li>taxi 3</li>
    <li>taxi 4</li>
    <li>taxi 4</li>


</ul>
<Button>Make Order</Button>
      </Wrapper>
  )
}

export default Confirm
const MapDiv=tw.div`
	 flex justify-center items-center basis-4/6`
const Wrapper=tw.div`
flex flex-col space-between w-screen h-screen`
const Div=tw.div`
text-center text-black text-xl shadow-2xl  rounded-lg`
const LocationDiv=tw.div`
flex flex-col justify-between`

const Button = tw.button`
rounded-lg bg-green-500 text-white h-12 w-screen mr-5
`;
