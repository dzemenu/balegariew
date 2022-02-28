import tw from "tailwind-styled-components/dist/tailwind"
import {onAuthStateChanged,signInWithPopup} from 'firebase/auth'
import {auth,provider} from '../firebase'
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
export default function Home() {
  const router=useRouter()
  const [user,setUser]=useState(null)
 useEffect(()=>{
   return onAuthStateChanged(auth,user=>{
      if(user)
      {
        setUser({
          name:user.displayName,
          image:user.photoURL
        })
        router.push({pathname:'/search',query:{
          name:user.displayName,
          image:user.photoURL

        }})
      }
      else
      {
        setUser(null)
        router.push('/')
      }
    })
  },[])
  return (
    <Div>
      <Logo>BALEGARIEW</Logo>
      <Button onClick={()=>signInWithPopup(auth,provider)}>Sign in With Google</Button>
  </Div>
  )
}
const Div=tw.div`
bg-slate-500 h-screen w-screen flex flex-col justify-center items-center rounded-lg`
const Logo=tw.h1`
text-center text-white text-5xl shadow-2xl  rounded-lg`
const Button=tw.button` w-2/3 h-12  text-white rounded-lg shadow-2xl border-teal-600	mt-10 bg-black`