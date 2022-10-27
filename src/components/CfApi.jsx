import "../App.css";
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';



function CF() {


    const [cf, setcf] = useState([]);


    useEffect(() => {
        fetch(` https://codeforces.com/api/user.info?handles=legendary09`)

            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then(({ result: info }) => {
                const Data = info;
                setcf(Data)
            })
            .catch((err) => {
                console.log(err.message);
            });


    }, [])
    console.log(cf)
    return (

        <div id="cf" className=" bg-[#0f1421]">
            <div className=" justify-center mt-20 mb-36 flex cf-image-div ">
                <img className="brightness-[0.8] rounded-lg w-[10%] h-[5%] " src="https://repository-images.githubusercontent.com/390296311/0f6c1240-462e-47ff-870d-e2d0ebb181f1"></img>
                <p className="ml-10 mt-3 text-slate-200 font-alb text-6xl ">Codeforces Stats</p>
            </div>

            <div className="mx-auto hover:scale-105 duration-200 dark:text-white cf-info-div w-[60%] ">
                <div className="flex shadow-xl hover:shadow-black/80 hover:shadow-2xl shadow-black/60 info-card mb-20 rounded-2xl mx-10 first:dark:bg-[#1f2937] pt-10 pb-10 mt-20">
                    <div className="profile-img-div">
                        <img className="ml-6 h-[22rem] rounded-lg" src={cf[0]?.titlePhoto}></img>
                    </div>
                    <div className="info-div">
                        <ul className="ml-8 ">
                            <li className="text-5xl font-alb mb-2">{cf[0]?.handle}</li>
                            <li className="text-2xl font-alb mb-10" >{cf[0]?.rank}</li>
                            <li className="text-xl mb-4">friends of :    <span className="ml-2 text-blue-500  text-xl ">{cf[0]?.friendOfCount}</span></li>
                            <li className="text-xl mb-4">current rank :<span className="ml-4 text-blue-500  text-xl ">{cf[0]?.rank}</span></li>
                            <li className="text-xl mb-4">current rating :<span className="ml-4 text-blue-500  text-xl ">{cf[0]?.rating}</span></li>
                            <li className="text-xl mb-4">max rank :<span className="ml-4 text-blue-500  text-xl ">{cf[0]?.maxRank}</span></li>
                            <li className="text-xl mb-16">max rating :<span className="ml-4 text-blue-500  text-xl ">{cf[0]?.maxRating}</span></li>

                        </ul>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default CF;
