
import PropTypes from 'prop-types';
// import { Toaster } from 'react-hot-toast';

const Index = ({ selectCard , remeiningHour , totalCedit }) => {


    return (
        <div className="  w-[full] mt-8 bg-[#FFF] shadow-xl  ">
            <div>
                <h3> Credit Hour Remeining {remeiningHour} hr </h3>
                <h1 className=" text-xl font-bold  m-4 ">Course Name </h1>
                <div className=''>
                    <ol>
                        {

                           selectCard.map((card, indx) => (
                            <li key={indx} className='ml-2 font-normal' >{card.title}</li>
                        ))
                    

                        }
                    </ol>
                    
                </div>
                <h1> Total Credit Hour : {totalCedit} </h1>
            </div>
            {/* <Toaster position='top-right'></Toaster> */}
        </div>
    );
};


Index.propTypes = {
    selectCard: PropTypes.object,
    remeiningHour : PropTypes.number,
    totalCedit : PropTypes.number

}

export default Index; 