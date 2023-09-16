
import PropTypes from 'prop-types';
// import { Toaster } from 'react-hot-toast';

const Index = ({ selectCard, remeiningHour, totalCedit }) => {


    return (
        <div className="w-[full] mt-10 bg-[#FFF] shadow-xl rounded-lg  ">
            <div>
                <h3 className=' font-bold ml-1 border-b-2 pb-4  text-lg text-[#2F80ED]'> Credit Hour Remeining {remeiningHour}hr </h3>
                {/* <hr className='' /> */}
                <div className='w-[80%] h-1  text-slate-500  '></div>

                <h1 className=" text-xl font-bold m-3 ">Course Name </h1>
                <div className=''>
                    <ol className=' list-decimal ml-4 '>
                        {

                            selectCard.map((card, indx) => (
                                <li key={indx} className='ml-2 font-normal text-md mt-2 ' >{card.title}</li>
                            ))


                        }
                    </ol>

                </div>
                <h1 className=' font-semibold ml-2 text-lg mt-4 border-t-2 pt-4 pb-4 '> Total Credit Hour : {totalCedit} </h1>
            </div>
            {/* <Toaster position='top-right'></Toaster> */}
        </div>
    );
};


Index.propTypes = {
    selectCard: PropTypes.object,
    remeiningHour: PropTypes.number,
    totalCedit: PropTypes.number

}

export default Index; 