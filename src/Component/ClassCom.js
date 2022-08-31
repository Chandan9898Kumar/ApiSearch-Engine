import React from "react"
class MyClassCom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            load: false,
            inputVal: '',
            MyData: [],
            NewResult: []
        }

    }
    componentDidMount() {
        this.MyApiFetch()
    }
    MyApiFetch = async () => {
        await fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    MyData: data,
                    load: true
                })
            }).catch((err)=> {
                console.log(err)
            })
    }
    Mychanger = (e) => {
        const { MyData} = this.state
        this.setState({
            inputVal: e.target.value
        })
        if (e.target.value === '') {
            return
        }
       const Timer= setTimeout(()=> {
        const Results = MyData.filter((item) => item.name.toLowerCase().includes(e.target.value)).map((ress) => ress.name)
            this.setState({ NewResult: Results })
        },2000)
        return (()=> clearTimeout(Timer))
    }
    render() {
        const { load, inputVal, MyData, NewResult } = this.state

        return (
            <>
                <h1>My Class component </h1>

                Search Name  <input
                    type="text"
                    value={inputVal}
                    onChange={this.Mychanger}
                /><br />
                {

                    inputVal ?
                        <ul>
                            {NewResult.length === 0 ? 'No Result Found' : NewResult.map((el, index) => (
                                <li key={index}>
                                    {el}
                                </li>
                            ))
                            }
                        </ul>
                        :
                        <ul>
                            {MyData.map((el, index) => (
                                <li key={index}>
                                    {el.name}
                                </li>
                            ))}
                        </ul>

                }

            </>
        )
    }
}

export default MyClassCom