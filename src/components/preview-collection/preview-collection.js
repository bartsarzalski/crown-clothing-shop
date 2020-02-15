import React from 'react';

import './preview-collection.scss';

const PreviewCollection = ({ title, items }) => (
<div className='peview-collection'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>       
        {items
            .filter((item, index) => index < 4)
            .map(item => (
                <div key={item.id}>{item.name}</div>
        ))} 
    </div>
</div>
);

export default PreviewCollection;