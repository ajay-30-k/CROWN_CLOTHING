import React from 'react'
import "./menu-item.scss"
import { useNavigate} from 'react-router-dom';
import { animations } from '../directory-menu/DirectoryAnimation';
import { motion } from 'framer-motion';
const Menuitem = ({title,imageurl,size,linkurl}) => {
  const navigate=useNavigate()
    console.log("imageurl:",imageurl);
  return (
    <motion.div 
    className={`${size} menu-item`}
    style={{ backgroundImage: `url(${imageurl})` }}
    initial="hidden"
    animate="visible"
    variants={animations}
    transition={{ duration: 5 }}
    
    
    
     onClick={()=>navigate(linkurl)}>
      <div className='background-image' style={{backgroundImage:`url(${imageurl})`}}/> 
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">shop now</span>
    </div>
  </motion.div>
  )
}

export default Menuitem