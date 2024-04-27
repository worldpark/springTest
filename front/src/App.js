import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";

function App() {

    const [list, setList] = useState([]);

    const getList = () => {

        axios({
            method: 'GET',
            url: 'list',
        }).then((response) => {
            setList(response.data);

        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(()=>{
        getList();
    }, []);

    return (
        <div>
            {
                list.map((content, index) => {
                    return (
                        <div key={index} className='card'>
                            <img src='https://placehold.co/300'/>
                            <div>
                                <h4>비싼 {content.title}</h4>
                                <p>{content.price}원</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default App;
