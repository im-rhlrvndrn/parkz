import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// SCSS files
import './ListingDetails.scss';

const ListingDetails = ({ listingDetails }) => {
    let listingDetailsRef = useRef(null);

    useEffect(() => {
        gsap.to(listingDetailsRef, 0, { css: { visibility: 'visible' } });

        let animatedArray = [];

        if (listingDetailsRef) {
            listingDetailsRef.childNodes.forEach((node) => animatedArray.push(node));
        }
        let ctaBtn = animatedArray.pop();

        const tl = new gsap.timeline();
        tl.from(animatedArray, {
            duration: 0.4,
            stagger: 0.15,
            opacity: 0,
            y: '-30px',
            ease: 'power3.InOut',
            delay: 0,
        }).from(ctaBtn, 0.4, { opacity: 0, y: '67px', ease: 'power3.InOut' }, 1);
    }, [listingDetails.name]);
    return (
        <div className='listingDetails' ref={(el) => (listingDetailsRef = el)}>
            {listingDetails.img ? (
                <>
                    <img src={listingDetails.img} alt='' />
                    <div className='listingInfo'>
                        <h3>{listingDetails.name}</h3>
                        <p>{listingDetails.location}</p>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                        incidunt dolor eveniet voluptate sit unde obcaecati aspernatur veritatis
                        sapiente recusandae error nostrum consequuntur delectus amet ipsa at a,
                        veniam repellendus! Nihil quos, ipsam cumque sequi optio aperiam minus eaque
                        quidem eligendi fuga, ad iure quod nobis porro corrupti, exercitationem
                        enim. Deleniti reprehenderit impedit tempore! Aut sunt nesciunt expedita
                        vero delectus voluptate sapiente accusantium adipisci quis quae,
                        necessitatibus neque dolores ipsam illo eligendi libero beatae natus
                        excepturi deleniti praesentium labore et, ipsum provident fuga. At sunt quia
                        qui, nihil alias cum natus? Maxime aut sit aperiam beatae hic in dolor. Qui?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptas
                        autem tenetur iusto quam, ab numquam mollitia tempora. Expedita ab culpa
                        earum sint quia voluptate, rem aliquam consequatur modi enim. Non,
                        distinctio doloribus enim quam voluptatum neque dolorum officiis quibusdam!
                        Itaque accusantium ab dolores iste reiciendis ut nostrum tenetur odit!
                        Maxime illo eaque odio tenetur possimus esse minima necessitatibus voluptate
                        voluptas excepturi, quod ullam. Omnis odio sequi aut perferendis distinctio
                        perspiciatis ipsa possimus voluptatibus sunt blanditiis, a numquam facere
                        qui consequatur! Ipsum numquam, molestias et dicta veniam cum inventore
                        natus porro odit molestiae rem esse nam obcaecati eaque, iusto voluptatem
                        quo qui alias mollitia totam delectus maiores expedita? Voluptas fugiat
                        mollitia laudantium ipsa, porro doloremque distinctio dignissimos quaerat
                        saepe officia eius consectetur corporis corrupti facilis, cupiditate eveniet
                        a blanditiis. Cum eaque cumque sapiente ullam sint, dolorem culpa provident!
                        Ipsum maxime pariatur, laboriosam, ut dolores, amet dolor rem perspiciatis
                        natus unde quam nostrum ad neque! Ex voluptatem porro facere voluptatum. Ut
                        accusamus consequuntur cum cupiditate! Consequatur, illum enim? Deleniti
                        sapiente repellat velit illum sunt recusandae reiciendis doloribus facilis
                        unde temporibus eveniet suscipit, veniam accusantium natus repudiandae
                        corrupti inventore id ratione ut excepturi iste numquam quia ipsam corporis.
                        Ducimus vel distinctio eligendi!
                    </div>
                    <div className='cta'>
                        <button className='secondary'>Close</button>
                        <button>Book now</button>
                    </div>
                </>
            ) : (
                <div>Nothing selected</div>
            )}
        </div>
    );
};

export default ListingDetails;
