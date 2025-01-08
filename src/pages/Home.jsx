import React, { useEffect, useState } from 'react'
import menus from '../components/menus/menus';
import '../Styles/home.css'
import { Link } from 'react-router-dom';
import { men_shirts } from '../Data/Shirts';


function home() {
  const[name,setName]=useState("");
  const [surname,setSurname] = useState("");
  const [contact,setContact] = useState("");

  console.log(name);
  console.log(surname);
  console.log(contact);

  
  useEffect(() => {
    const fab = () =>{
      setName("a");
      setSurname('b');
      setContact('880808')
    }
    fab()
  
  }, [])
  
  return (
    <div className='home'>
      <Link className='logo'>LOGO</Link>
      <div className="right">
        <div className="menus">

        </div>
        <Link className='contact_button'>Contact Us</Link>
      </div>

      <div className="product">
        {
          men_shirts.map((item,indx) =>{
            return(
              <div className="card">
                <div className="image">
                  <img src={item.imageUrl} alt="" />
                  <div className="brand">{item.brand}</div>
                  <div className="name">{item.title}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default home
