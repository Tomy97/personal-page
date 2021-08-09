import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './styles.css';
import { Get } from '../../services/HttpService';
import SpinnerLoader from "../../Components/LoaderSpinner";

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const [data, setData] = useState([
        {
            title: '',
            url: '',
        },
        {
            title: '',
            url: '',
        },
        {
            title: '',
            url: '',
        }
    ]);
    const [length, setLength] = useState(data.length);



    useEffect(() => {
        // A reemplazar cuando exista el endpoint
        Get("https://jsonplaceholder.typicode.com/photos")
            .then(res => {
                setData([...res]);
                setLength(data.length);
            })
            .catch(err => console.log(err));
    

    }, []);


    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);

    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };


     if (length <= 0) {
        return <SpinnerLoader />;
    } 


     else return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

            {data.map((item, index) => {
                return (
                    <div className={index === current ? 'slide-active' : 'slide'}
                        key={index}>
                        {index === current && (
                            <div>
                                <img src={item.url}
                                    alt={item.title}
                                    className="image" />
                                <h2 className="text"> {item.title}</h2>
                            </div>
                        )}
                    </div>
                )
            
            })
            }
        </section>
    )
}

export default Slider
