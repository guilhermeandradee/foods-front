import { useState, useEffect } from 'react'
import './Home.css'

import axios from "axios";
import { baseUrl } from './components/Main';

import Header from './components/Header'
import Main from './components/Main'

function Home() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async () => {
        try {
            const response = await axios.get(baseUrl + '/foods');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
        setIsLoading(false)
    }, []);

  return (
    <div className='main-inteiro'>
        <Header data={data} isLoading={isLoading} />
        <Main data={data} fetchData={fetchData} isLoading={isLoading} />
    </div>
  )
}

export default Home
