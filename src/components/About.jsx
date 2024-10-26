import React from 'react'
import BannerImage from '../assets/banneryeni.jpg';
import '../styles/About.css'


export const About = () => {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${BannerImage})` }}>
            </div>
            <div className='aboutBottom'>
                <h1>Hakkımızda</h1>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem sunt nihil voluptatum voluptatem adipisci possimus quasi veritatis placeat expedita, quis laudantium eveniet, earum obcaecati aperiam! Perferendis a distinctio nam possimus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis hic necessitatibus fugiat nemo! Eaque facere ad quam est accusantium. Fugiat libero quos perspiciatis labore quod a, recusandae neque dolores fugit!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus repudiandae adipisci laudantium soluta possimus sit eveniet iure ducimus, amet qui rem atque cupiditate reprehenderit animi nam alias ab quisquam totam.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rerum dolore culpa consequuntur iure architecto animi, aut perferendis sequi, asperiores omnis minima, vitae perspiciatis deleniti enim voluptate nobis eaque repellendus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste, delectus cupiditate deserunt consequatur aut praesentium! Illum nulla, aliquid cumque magni eius aspernatur dolor cupiditate sequi blanditiis exercitationem earum error!</p>

            </div>
        </div>
    )
}
