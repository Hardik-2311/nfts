import React from 'react';
import "./topFold.css";
import Button from '../../Common/button';

const Topfold = () => {
    return (
        <div className='TopFold absolute-center'>
            <div className='tf-left'>
                <div className='tf-Heading'>
                    Discover,Collect, & Sell <span className='Header-gradient'>Extraordinary</span>NFT's
                </div>
                <div className='tf-description'>cbeWPGSUDCEWuawuEBJCKWalsxnawpejkdbvc cpwebk;jacskdbjzc cepiwpiuq[fuwecjweouc[h2J{/* U43 */}</div>
                <div className='tf-left-buttons'>
                    <Button btnType="PRIMARY" btnText="Explore" />
                    <Button btnType="SECONDARY" btnText="Create" />
                </div>
                <div className='tf-left-info'>
                    <div className='tf-info-element absolute-center'>
                        <div className='tf-count'>300K+</div>
                        <div className='tf-label'>Collections</div>
                    </div>
                    <div className='tf-info-element absolute-center'>
                        <div className='tf-count'>40K+</div>
                        <div className='tf-label'>Artists</div>
                    </div>
                    <div className='tf-info-element absolute-center'>
                        <div className='tf-count'>563K+</div>
                        <div className='tf-label'>Communities</div>
                    </div>
                </div>

            </div>
            <div className='tf-right'>
                
            </div>
        </div>
    )
}

export default Topfold