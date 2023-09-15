
import { useState } from 'react'
import './App.css'
// import { Toast } from 'react-hot-toast'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import Cards from './Componnents/Cards/Cards'
import Index from './Componnents/RightSiteComponnent/Index'

function App() {


  // add too Select button  

  const [selectCard, setSelectCard] = useState([])


  const handleSelectButton = (card) => {

    // 
    const isExistTitle = selectCard.find(item => item.title == card.title);

    if(isExistTitle){
    //  Toast.error(Error);

    toast("Enroll Completed !");
      // return alert('enroll completed');
    } else{

      setSelectCard([...selectCard, card]);

    }

  };
  // console.log(selectCard);


  return (
    <div className=' w-[98%] mx-auto '>
      <h1 className='text-center text-3xl font-bold mt-4 '>Course Registration</h1>

      <div className='flex gap-6 '>
        <div className='w-[78%] '>
          <Cards handleSelectButton={handleSelectButton}></Cards>

        </div>
        <div className='w-[20%] '>
          <Index selectCard={selectCard}></Index>
        </div>
      
      </div>

{/* toast   */}
      <ToastContainer />

    </div>
  )
}

export default App