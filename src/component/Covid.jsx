import React , { useEffect , useState } from 'react'


// active: "590537"
// confirmed: "30182469"
// deaths: "394524"
// deltaconfirmed: "48618"
// deltadeaths: "1182"
// deltarecovered: "64524"
// lastupdatedtime: "25/06/2021 22:47:02"
// migratedother: "11849"
// recovered: "29185559"
// state: "Total"
// statecode: "TT"
// statenotes: ""


const Covid = () => {

    const [data , setData] = useState([]);

    const getCovidData = async ()=>{
        const res = await fetch("https://api.covid19india.org/data.json");
        const actualData = await res.json();
        setData(actualData.statewise[0]);
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>

            <div className="container mt-5" >
            <div className="row d-flex justify-content-around">
            <div className="card col-sm-3 m-2">
                <div className="card-body">
                    <h3 className="card-title">Country</h3>
                    <h1 className="card-title">INDIA</h1>
                </div>
            </div>
            <div className="card col-sm-3 m-2">
                <div className="card-body">
                    <h3 className="card-title">Active</h3>
                    <h1 className="card-title">{data.active}</h1>
                </div>
            </div>
            <div className="card col-sm-3 m-2">
                <div className="card-body">
                    <h3 className="card-title">Confirmed</h3>
                    <h1 className="card-title">{data.confirmed}</h1>
                </div>
            </div>
            <div className="card col-sm-3 m-2">
                <div className="card-body">
                    <h3 className="card-title">Deaths</h3>
                    <h1 className="card-title">{data.deaths}</h1>
                </div>
            </div>
            <div className="card col-sm-3 m-2">
                <div className="card-body">
                    <h3 className="card-title">Delta Confirmed</h3>
                    <h1 className="card-title">{data.deltaconfirmed}</h1>
                </div>
            </div>
            <div className="card col-sm-3 m-2">
                <div className="card-body">
                    <h3 className="card-title">Delta Deaths</h3>
                    <h1 className="card-title">{data.deltadeaths}</h1>
                </div>
            </div>
            <div className="card col-sm-3 m-2">
                <div className="card-body">
                    <h3 className="card-title">Delta ReCovered</h3>
                    <h1 className="card-title">{data.deltarecovered}</h1>
                </div>
            </div>
            <div className="card col-sm-3 m-2">
                <div className="card-body">
                    <h3 className="card-title">Delta ReCovered</h3>
                    <h1 className="card-title">{data.deltarecovered}</h1>
                </div>
            </div>
            <div className="card col-sm-3 m-2">
                <div className="card-body">
                    <h3 className="card-title">Total ReCovered</h3>
                    <h1 className="card-title">{data.recovered}</h1>
                </div>
            </div>
            <div className="card col-sm-3 m-2">
                <div className="card-body">
                    <h3 className="card-title">Last Updated</h3>
                    <h1 className="card-title">{data.lastupdatedtime}</h1>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Covid
