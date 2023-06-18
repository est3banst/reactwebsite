import * as React from 'react';
import './gallery.css'
import { SlClose } from 'react-icons/sl'

import fbimg from './works/fb-img.jpg'
import placard from './works/fb-img2.jpg'
import placard2 from './works/fb-placard.jpg'
import yetanother from './works/placardlight.jpg'
import otherplac from './works/placardnegro.jpg'
import otherone from './works/placardslider.jpg'
import placbrown from './works/placard.jpg'
import whiteplac from './works/placard5p.jpg'
import placardmad from './works/placardmadera.jpg'

    const pictures = [
        {
            id:1,
            imgSrc: fbimg,
            title: 'Placard'
        },
        {
            id:2,
            imgSrc: placard,
            title: 'Placard dos colores'
        },
        {
            id:3,
            imgSrc: placard2,
            title:'Placard diseño',
        },
        {
            id:4,
            imgSrc: yetanother,
            title: 'Placard más luminaria'
        },
        {
            id:5,
            imgSrc: otherplac,
            title: 'Placard pintura personalizado',
        },
        {
            id:6,
            imgSrc: otherone,
            title: 'Placard corredizo',
        },
        {
            id:7,
            imgSrc: placbrown,
            title: 'Placard imitación madera',
        },
        {
            id:8,
            imgSrc: whiteplac,
            title: 'Placard blanco madera',
        },
        {
            id:9,
            imgSrc: placardmad,
            title: 'Placard blanco madera',
        }
    ];
export default function Gallery () {

    const[model, setModel] = React.useState(false);
    const [templateimgSrc, setTempImgSrc] = React.useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);    }

    return (
    
        <>
        <div className={model ? 'model open' : 'model'}>
            <img src={templateimgSrc} alt=''/>
            <SlClose onClick={()=> setModel(false )}/>
        </div>
        <div className="gallery">
                {pictures.map((item, index) => {
                    return (
                        <div className='pictures' key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt='placards' style={{ width: '100%' }} />
                        </div>
                    );
                })}
            </div>
            <div className='Lines'>
                <div className='First-line'></div>
                <div className='Second-line'></div>
                <div className='Third-line'></div>
    </div>
            </>
    )
        };

