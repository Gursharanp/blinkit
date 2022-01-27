import React from 'react';

export default function Header() {
    return (

        <div className='headbar'>
            <div className='icon'>
                <img src="https://blinkit.com/images/header/blinkit_logo-3898547.png" />
            </div>
            <div className='address'>
                    <div className='aicon'></div>
                    <div className='atext'>
                        <div className='addhead'> delivery in 15 minutes</div>
                        <div className='addfoot'> Sector 18D,Sector18, Chandhigarh </div>
                    </div>
            </div>
            <div className='search'>
                    
                <input type="search"  placeholder='Search for products'/>
                <div className='sicon'> <i className="fa fa-search"></i></div>
                
            </div>
            <div className='category'>
                 categories
            </div>
            <div className='login'>
                   login
            </div>
            <div className='my-cart'>
                <button>
                <i className="fa fa-shopping-cart"></i>
                    my Cart
                </button>
            </div>

        </div>


    )

}
