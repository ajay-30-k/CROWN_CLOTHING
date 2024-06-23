import React from 'react'
import CollectionItem from '../../collection-item/Collection-item'
import'./Category.scss'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom';
import { selectCollection } from '../../redux/shop/ShopSelector'
const Category = ({collection}) => {
    console.log('Category component - collection:', collection);
    if (!collection) {
        return <div className='collection-page'>Loading...</div>;
      }
    const{title,items}=collection
    console.log(collection)
  return (
    <div className='collection-page'>
           <h2 className='title'>{title}</h2>
           <div className="items">
            {
                items.map(item=><CollectionItem key={item.id}item={item}/>)
            }
           </div>
    </div>
  )
}
const CategoryWrapper = (props) => {
    const { categoryId } = useParams();
    return <ConnectedCategory {...props} categoryId={categoryId} />;
  };
const mapStateToProps = (state, ownProps) => {
    const { categoryId } = ownProps;
    return {
      collection: selectCollection(categoryId)(state)
    };
};
const ConnectedCategory = connect(mapStateToProps)(Category);
export default CategoryWrapper;