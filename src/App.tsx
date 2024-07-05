import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import Signin from './pages/Signin'
import { Blog } from './pages/Blog'
import Blogs from './pages/Blogs'
import AddBlog from './pages/AddBlog'
import AppBar from './components/AppBar'
import { useEffect, useRef } from 'react'

function App() {
  const inputRef=useRef() as React.MutableRefObject<HTMLInputElement>;
  useEffect(()=>{
    window.addEventListener("keydown",(e:KeyboardEvent)=>{
      if(e.key=="/" && e.ctrlKey){
        e.preventDefault()
        inputRef.current.focus();
      }
    })
    return ()=>{
      window.removeEventListener("keydown",(e:KeyboardEvent)=>{
        if(e.key=="/" && e.ctrlKey){
          e.preventDefault()
          inputRef.current.focus();
        }
      })
    }
  },[])
  return (
    <>
      <BrowserRouter>
        <AppBar ref={inputRef} />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/write" element={<AddBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App