import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import { FaArrowCircleLeft } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import mapboxgl from "!mapbox-gl";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import {signOut} from 'firebase/auth'
import {auth} from '../firebase'
mapboxgl.accessToken =
  "pk.eyJ1IjoiZHplbWVudSIsImEiOiJja3lteHlicHAyY3IyMnZwMGJjczlkcWJvIn0.DptAsDX-6_E2EzBXS5RhXw";
const Search = () => {
  const [destination, setDestination] = useState([]);
  const[destinationName,setDestinationName]=useState('')
  const [origin, SetOrigin] = useState([]);
  const router=useRouter();
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        var map = new mapboxgl.Map({
          container: "map",

          style: "mapbox://styles/mapbox/outdoors-v11",

          center: [position.coords.longitude, position.coords.latitude],

          zoom: 13,
        });

        SetOrigin({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
        const geocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          countries: "et",
          mapboxgl: mapboxgl,
          placeholder: "Where To",
          marker: {
            color: "orange",
          },
        });
        geocoder.addTo(geolocater);
        geocoder.on("result", (e) => {
          var k=e.result.place_name.split(',')[0];
setDestinationName(k)     
     setDestination(e.result.center);
        });
      });
    }
  }, []);
 var userName=router.query!=undefined ?  router.query.name.split(' ')[0] :'';
  return (
    <MainDiv>
      <MainHeader>
        <Link href={{ pathname: "/" }}>
          <ArrowButton onClick={()=>signOut(auth)}>
            <FaArrowCircleLeft />
          </ArrowButton>
        </Link>
        <MainCustomerTitle>{userName.toUpperCase()}</MainCustomerTitle>
      </MainHeader>
      <MainMap id="map"></MainMap>
      <WhereMap>
        <div id="geolocater"></div>

        <Link href={{ pathname: "/confirm",query:{dropofflan:destination[0],dropofflon:destination[1],name:destinationName} }}>
          <Button>confirm</Button>
        </Link>
      </WhereMap>
    </MainDiv>
  );
};

export default Search;
const MainDiv = tw.div`
h-screen w-screen bg-slate-100 rounded-lg flex flex-col position-absolute`;
const MainHeader = tw.div` flex flex-row justify-between items-center h-16
h-20 bg-slate-100 pt-1 basis-1/6 rounded-lg`;
const MainMap = tw.div`
 bg-green-500 basis-3/6 flex shadow-xl rounded-lg  `;
const WhereMap = tw.div`
 bg-slate-100 basis-2/6 flex mt-10 ml-10 space-x-4`;
const ArrowButton = tw.button`
 position-relative h-20 w-20 pl-10  rounded-full  text-black shadow-2xl bg-slate-100
 `;
const MainCustomerTitle = tw.div`
 font-bold text-xl text-center pr-5`;
const Button = tw.button`
rounded-lg bg-green-500 text-white h-12 w-screen mr-5
`;