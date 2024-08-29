import './App.css';
import React,{useState} from 'react';



function Content(){
    const [countA,setCountA]=useState(0);
    const [countB,setCountB]=useState(0);
    const [countC,setCountC]=useState(0);
    return(
        <div className='content'>
            <h1>Student Mangagement</h1>
            <div className='cards'>
                <div className='card ' onClick={()=>setCountA(countA+1)} id='c1'>
                    <div className='row'>
                        
                    <div className='user-prof col-6'>
                        <i className='fa fa-user'></i>
                    </div>
                    <div className='def col-6'>
                        <h5>{countA}</h5>
                        <p>Regular Student</p>
                    </div>
                    </div>
                </div>
                <div className='card 'onClick={()=>setCountB(countB+1)} id='c2'>
                    <div className='row'>
                        
                    <div className='user-prof col-6'>
                        <i className='fa fa-user'></i>
                    </div>
                    <div className='def col-6'>
                        <h5>{countB}</h5>
                        <p>Remedial Student</p>
                    </div>
                    </div>
                </div>
                <div className='card 'onClick={()=>setCountC(countC+1)} id='c3'>
                    <div className='row'>
                        
                    <div className='user-prof col-6'>
                        <i className='fa fa-user'></i>
                    </div>
                    <div className='def col-6'>
                        <h5>{countC}</h5>
                        <p>In Paid Club</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;