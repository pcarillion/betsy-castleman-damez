import React from 'react'
import {Helmet} from "react-helmet";
import Favicon from '../static/favicon.svg'

const HelmetComponent = ({title}) => {
    const fullTitle = title ? title + ' | Betsy Castleman Damez' : 'Betsy Castleman Damez'
    const description = 'Betsy Castleman Damez website'
  return (
    <Helmet>
        <meta charSet="utf-8" />
        <title>{fullTitle}</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content={description} />
        <link rel="icon" href={Favicon}/>
    </Helmet>
  )
}

export default HelmetComponent