import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import api from "../api/APIHandler";
import menuMock from '../mocks/menu.mock';
import HelmetComponent from './Helmet';

import {StyledMenu, StyledPageContainer, StyledPageContent} from '../Styles/Layout'

const Layout = ({children}) => {


    const [menuOpen, setMenuOpen] = useState(false)

    const [menuStatus, setMenuStatus] = useState("loading")
    const [menuItems, setMenuItems] = useState([])

    const initDatas = async () => {
        let params = {
            "content_type": "category",
            "access_token": "xG0UPgdg5xb2CB8vN6s1pcBLmlqpnuREmNU6e4fsmCc"
        }
        await api.get('entries', params)
        .then(res => {
            if (res.status === 200 && res.data.items.length > 0) {
                let items = []
                res.data.items.forEach(item =>items.push({title: item.fields.name, slug: item.fields.slug}))
                setMenuItems(items)
                setMenuStatus("ok")
            }
            else {
                let items = []
                menuMock.items.forEach(item =>items.push({title: item.fields.name, slug: item.fields.slug}))
                setMenuItems(items)
                setMenuStatus("error")
            }
        })
    }

    
    useEffect(() => {
        initDatas()
      }, [])



  return (
      <StyledPageContainer>
            <HelmetComponent/>
            <StyledMenu>
            <Link to="/"><h1>Betsy Castleman Damez</h1></Link>
            <div class={`menu-icon ${menuOpen && 'cross'}`} onClick={() => setMenuOpen(menuOpen => !menuOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={menuOpen && 'open'}>
                {menuItems.map((item, key) => {
                    return <li key={key} style={{order: item.order}}><Link to={`/gallery/${item.slug}`}>{item.title}</Link></li>
                })}
                <li>
                    <Link to="/page/biography">Biography</Link> 
                </li>
                <li>
                    <Link to="/contact">Contact</Link> 
                </li>
            </ul>
        </StyledMenu>
        <StyledPageContent>
            {children}
        </StyledPageContent>
      </StyledPageContainer>
  )
}

export default Layout