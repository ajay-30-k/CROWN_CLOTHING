import React from 'react'
import './CollectionOverview.scss'
import { selectCollections} from "../redux/shop/ShopSelector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Previewcollcomp from '../preview-collection/Previewcoll.comp';
const CollectionOverview = ({collections}) => {
  return (
    <div
    className='collections-overview'>

{collections.map(({id,...othercolectioprop}) => (
        <Previewcollcomp key={id} {...othercolectioprop} />
      ))}
    </div>
  )
}
const mapstatetoprops=createStructuredSelector({
    collections:selectCollections
  })
export default connect(mapstatetoprops)(CollectionOverview)