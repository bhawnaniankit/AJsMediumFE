import { Link } from "react-router-dom"
import { IoIosAdd } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { centralBlogsAtom, filteredBlogsAtom } from "../store/atoms/blogs";
import { useRecoilValue, useSetRecoilState } from "recoil";
// import { useDebounce } from "../hooks/useDebouncer";
import React, { useEffect, useRef } from "react";

const AppBar = () => {
  console.log("appbar");
  const navigate = useNavigate();
  const setFilteredBlogs = useSetRecoilState(filteredBlogsAtom);
  const allBlogs = useRecoilValue(centralBlogsAtom);
  function logoutHandler() {
    localStorage.removeItem("token");
    navigate("/signin")
  }
  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    // const searchFilter=useDebounce<string>(e.target.value);
    const searchFilter = e.target.value;
    console.log(searchFilter);

    // useEffect(()=>{
    setFilteredBlogs(allBlogs.filter((blog) => (blog.title.includes(searchFilter) || blog.content.includes(searchFilter))));
    // },[searchFilter])
  }
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  useEffect(() => {
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key == "/" && e.ctrlKey) {
        e.preventDefault()
        inputRef.current.focus();
      }
    })
    return () => {
      window.removeEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key == "/" && e.ctrlKey) {
          e.preventDefault()
          inputRef.current.focus();
        }
      })
    }
  }, [])
  return (
    <div className=" sticky top-0 bg-white border-b px-4 py-2 md:px-12 flex items-center justify-between">
      <div className=" items-center flex gap-6">
        <div className=" text-lg font-bold md:text-2xl">{"<InkSpire"}</div>
        <input ref={inputRef} onChange={onChangeHandler} className="hidden md:inline-block bg-gray-100 rounded-full py-1  px-4" type="text" placeholder="Search" />
      </div>
      <div className=" text-xl flex items-center gap-5">
        <Link className=" hidden md:block" to={"/write"}> <IoIosAdd></IoIosAdd></Link>
        <div onClick={logoutHandler} className=" cursor-pointer text-sm md:text-2xl">
          <IoIosLogOut></IoIosLogOut>
        </div>
      </div>
    </div>
  )
}

export default AppBar
