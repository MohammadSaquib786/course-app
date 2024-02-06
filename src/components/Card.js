import React  from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';


const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  function clickHandler(props){
      //logic
      if(likedCourses.includes(course.id)){
        //Pahle se hi Liked hai..
        setLikedCourses( (prev) => prev.filter((cid) =>(cid !== course.id) ) );
        toast.warning("Like remove");
      }
      else{
        //Pahle se like nhi h ye course
        //insert karna h ye course liked course me
        if(likedCourses.length === 0) {
          setLikedCourses( [course.id]);
        }
        else{
          //non-empty  pahle se
          setLikedCourses( (prev) => [...prev, course.id]);
        }
        toast.success("Liked Successfully");
      }
  }
  return (
    <div className='w-[300px] bg-slate-700 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} alt=""/>
          <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 
          grid place-items-center'>
          <button onClick={clickHandler}>
             {
              likedCourses.includes(course.id) ?
              ( <FcLike fontSize="1.75rem"/>):
              ( <FcLikePlaceholder fontSize="1.75rem"/>)
             }
          </button>
        </div>
      </div>
      
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='text-white mt-2'>
          {
          course.description.length > 100 ? 
          (course.description.substr(0, 100) + "...")
           :(course.description)
        }
        </p>
      </div>
    </div>
  )
}

export default Card;
