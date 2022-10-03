
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import "./home.css"
import Lottie from 'react-lottie';
import data from '../../order_done.json.json'

function OrderComplete() {
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: data,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
            {
                loading ? <div className="loader"><HashLoader
                    color="#47a42a"
                    size={100}
                /></div> : <><div> <Lottie options={defaultOptions}
                    height={400}
                    width={400}
                /></div>
                    <h1 className='order_done'>ORDER SUCCESSFULL...</h1></>
            }

        </>
    )
}

export default OrderComplete;