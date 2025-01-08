import React, { useEffect, useState } from 'react'
import { menus } from './Menu'
import {Link} from 'react-router-dom'
const Header = () => {

 

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [mobile, setMobile] = useState('')

  console.log(name)
  console.log(surname)
  console.log(mobile)


  useEffect(() => {
    const fun = () => {
      setName("Premila")
      setSurname('Bhusawale')
      setMobile(12233444)
    }
    fun()
  }, [])


  return (
    <div className='header'>
      <Link className="logo">LOGO</Link>
      <div className="right">
      <div className="menus">
        {
          menus.map((item,index) => <Link to={item.path}>{item.name}</Link>)
        }
      </div>
      <Link className="contact_button">Contact Us</Link>
      </div>
    </div>
  )
}

export default Header
