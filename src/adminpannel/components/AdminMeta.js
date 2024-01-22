import React from 'react'
import {Helmet} from "react-helmet";
export const AdminMeta = (props) => {
  return (
    <Helmet>
    <meta charSet="utf-8" />
    <title>{props.title}</title>   
    </Helmet>
  )
}
