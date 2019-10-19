import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

const IMAGES =
[{
        src: require('/home/hadi/central/src/modules/catalog/gulabjamun.jpg'),
        thumbnail: require('/home/hadi/central/src/modules/catalog/gulabjamun_tn.jpg'),
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "Gulab Jamun"
},
{
        src: require('/home/hadi/central/src/modules/catalog/rasgulla.jpg'),
        thumbnail: require('/home/hadi/central/src/modules/catalog/rasgulla_tn.jpg'),
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Bengali Sweet", title: "Bengali Sweet"}],
        caption: "Rasgulla"
},

{
        src: require('/home/hadi/central/src/modules/catalog/agrapetha.jpg'),
        thumbnail: require('/home/hadi/central/src/modules/catalog/agrapetha_thumb.jpg'),
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]

render(
        <Gallery images={IMAGES}/>,
        document.getElementById('example-0')
);