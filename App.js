import {useState} from 'react'
import  dataReview  from './DataReview'

function App() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        if (count <= 0) {
            setCount(0); 
        } else {
            setCount(count - 1);
        }
    }

    const randomId = () => {
        const random = Math.floor(Math.random() * dataReview.length)
        setCount(random);
    }
    return (
        <div className="text-center bg-gray-200 h-screen ">
            <h1 className="pt-7 font-bold text-4xl pb-3">Our Reviews</h1>
            <div className="flex justify-center"> 
                <div className="w-20 h-1 bg-blue-400"></div>
            </div>
            
            <div className="m-10 bg-white p-5 ml-10 mr-10 shadow-lg rounded text-gray-500">
                <div className="flex justify-center">
                    <img src={dataReview[count].img} alt="" className="w-40 h-40 object-cover rounded-full"/>
                </div>
                
                <h2 className="font-bold pt-2">{dataReview[count].name}</h2>
                <h3 className="text-blue-400">{dataReview[count].job}</h3>
                <p>{dataReview[count].desc}</p>

                <div>
                    <button className="text-blue-300 ml-5 outline-none" onClick={decreaseCount}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button>
                    <button className="text-blue-300 ml-5 outline-none" onClick={increaseCount} ><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>
                </div>
                    <button className="bg-blue-100 mt-2 px-3 py-1 rounded" onClick={randomId}>Suprise me</button>
            </div>
            
        </div>
    )
}

export default App
