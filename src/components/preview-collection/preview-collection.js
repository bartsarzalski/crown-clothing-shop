import React from 'react';

import './preview-collection.scss';
import CollectionItem from '../collection-item/collection-item';

const PreviewCollection = ({ title, items }) => (
<div className='peview-collection'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>       
        {items
            .filter((item, index) => index < 4)
            //.map(item => (
            //    <CollectionItem key={item.id}>{item.name}</CollectionItem>
            .map(({ id, ...otherItemProps }) => (
                <CollectionItem key={id} {...otherItemProps} />
        ))} 
    </div>
</div>
);

export default PreviewCollection;