import React from 'react';
import "./topFold.css";
import Button from '../../Common/button';

const Topfold = () => {
    return (
        <div className='TopFold absolute-center'>
            <div className='tf-left'>
                <div className='tf-Heading'> 
                    Discover,Collect, &Sell <span className='Header-gradient'>Extraordinary</span> NFT's
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
                <div className='tf-r-bg'></div>
                <div className='tf-diamond'>
                    <div className='tf-r-diamond-element absolute-center'>
                        <img className='tf-diamond-image' alt='diamond-banner' src='https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9vcGVuc2VhdXNlcmRhdGEuY29tL2ZpbGVzL2MzYTMxMmM1MzUxNDY0MmU4MDQxYzY1ZTEwYjQwYTUyLmdpZg=='></img>
                    </div>
                    <div className='tf-r-diamond-element absolute-center'>
                        <img className='tf-diamond-image' alt='diamond-banner' src='https://i.seadn.io/gcs/files/543630193cf32ac09c0356e767d2891e.gif?auto=format&dpr=1&w=256'></img>
                    </div>
                    <div className='tf-r-diamond-element absolute-center'>
                        <img className='tf-diamond-image' alt='diamond-banner' src='https://i.seadn.io/gcs/files/f77f0f2cc27dd427c69c68e81bfb0b97.gif?auto=format&dpr=1&w=1920'></img>
                    </div>
                    <div className='tf-r-diamond-element absolute-center'>
                        <img className='tf-diamond-image' alt='diamond-banner' src='https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvYmFmeWJlaWRhNmp5M2Y0eHZrdXJodWpoa3lpcWUyc2F4bm54aG1scHMyZ3k3aGx0aHVnc2pmNmZkcHE='></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topfold