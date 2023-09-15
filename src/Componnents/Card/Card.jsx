// import { Toaster } from 'react-hot-toast';
import Frame from '../../assets/Frame.png'
import dollarSing1 from '../../assets/dollarSing1.png'

import PropTypes from 'prop-types';

const Card = ({ card , handleSelectButton  }) => {
    const { image, title, description, price, credit } = card;
    return (
        <div className="">

            <div className="card w-full h-[440px] bg-[#FFF] shadow-xl rounded-lg ">
                <figure className="px-1">
                    <img src={image} alt="" className="rounded-md  w-[280px]  mx-auto h-48 pt-2 "/>
                </figure>
                <div className="card-body items-center ">
                    <h2 className="card-title text-start font-bold text-xl ml-2 mt-4  ">{title}</h2>
                    <p className=" text-start  font-normal text-sm  ml-4 mt-4 mb-4 "> {description}</p>

                    <div className=" flex justify-between  mx-4 mb-4 ">
                        <div className=' flex gap-2 '>
                            <img src={dollarSing1} alt="" />
                            <p className=' text-sm font-medium '> Price : {price} </p>
                        </div>
                        <div className=' flex gap-2 '>
                            <img className='w-6 h-6 ' src={Frame} alt="" />
                            <p className=' text-sm font-medium '> Credit : {credit}hr</p>
                        </div>
                    </div>
                    <div className="card-actions text-center ">
                        <button onClick={()=> handleSelectButton(card)} className="btn btn-primary w-[90%] mt-1 p-2 rounded-md border-[#2F80ED] bg-[#2F80ED] font-semibold text-xl text-white ">Select</button>

                        {/* <Toaster position='top-right'></Toaster> */}
                    </div>
                </div>
            </div>

          

        </div>
    );
};

Card.propTypes = {
    card : PropTypes.object,
    handleSelectButton:PropTypes.func
}

export default Card;