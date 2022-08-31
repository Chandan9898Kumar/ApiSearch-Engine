import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const MyFunCom = () => {
    const [inputVal, setInputVal] = useState('')
    const [data, setData] = useState([])
    const [searchData, setSearchData] = useState([])
    const [load, SetLoad] = useState(false)
    const navigate=useNavigate()
    useEffect(() => {
        MyApiData()
    }, [])

    const MyApiData = async () => {
        await fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((myData) => {
                setData(myData)
            })
            .catch((err) => {
                console.log(err)
            })
        SetLoad(true)
    }

    const MyInputChange = (e) => {
        setInputVal(e.target.value)
        if (e.target.value === '') {
            return
        }
        const MyfilterData = data.filter((item) => item.username.toLowerCase().includes(e.target.value)).map((ress) => ress.username)
        setSearchData(MyfilterData)
      
    }
    return (
        <>

        <div style={{display:'d-flex',
        }}>
        <button
        onClick={()=> navigate("/class")}
        >Go To Next Page</button>

        <div style={{marginLeft:"20px"
        }}>  
        <button
        onClick={()=> navigate(-1)}
        >Go To Back</button>
        </div>

        </div>
                           <h1>Functional component</h1>
            {!load ? <h1>Please wait while your data is being fetched ...</h1> :
                <div style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: "50px"
                }}>

                    Search Name : <input
                        type="text"
                        value={inputVal}
                        onChange={MyInputChange}

                    />

                    {
                        inputVal ?
                            <ul>
                                {searchData.length === 0 ? 'No Result Found' : searchData.map((el, index) => (
                                    <li key={index}>
                                        {el}
                                    </li>
                                ))
                                }
                            </ul>
                            :
                            <ul>
                                {data.map((el, index) => (
                                    <li key={index}>
                                        {el.username}

                                    </li>
                                ))}

                            </ul>
                    }

                </div>
            }


        </>
    )
}
export default MyFunCom;
