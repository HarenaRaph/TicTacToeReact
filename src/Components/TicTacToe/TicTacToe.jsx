import React, { useState, useRef } from "react"
import './TicTacToe.css'
import circle from  '../Assets/o.png'
import cross from '../Assets/x.png'

let data = ["","","","","","","","",""]
const TicTacToe = () => {

    let [count, setCount] = useState(0)
    let [lock, setLock] = useState(false)
    let titleRef = useRef(null)

    let box1 = useRef(null)
    let box2 = useRef(null)
    let box3 = useRef(null)
    let box4 = useRef(null)
    let box5 = useRef(null)
    let box6 = useRef(null)
    let box7 = useRef(null)
    let box8 = useRef(null)
    let box9 = useRef(null)

    let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

    const toggle = (e, num) => {
        if(lock){
            return 0
        }
            if (count%2 === 0){
                
                if(data[num]=== "" ){
                    e.target.innerHTML = `<img src ='${cross}'>`
                    data[num] = "x"
                    setCount(++count)
                }
                
            }
            else{
                
                if(data[num]=== "" ){
                    e.target.innerHTML = `<img src ='${circle}'>`
                    data[num] = "o"
                    setCount(++count)
                }
            }
       
        checkWin();
    }
    const checkWin = () => {
        let win = false
        for(let i = 0; i<=6; i+=3){
            if(data[i] === data[i+1] && data[i+1] === data[i+2] && data[i+2] !==""){
                won(data[i+2])
                win = true
            }
        }
        for(let i = 0; i<3; i++){
            if(data[i] === data[i+3] && data[i+3] === data[i+6] && data[i+6] !==""){
                won(data[i+6])
                win = true
            }
        }
        for(let i = 0; i<=6; i+=6){
            if((data[i] === data[i+4] && data[i+4] === data[i+8] && data[i+8] !=="")){
                won(data[i+8])
                win = true
            }else if (data[i] === data[i-2] && (data[i-2] === data[i-4] && data[i-4] !== "")){
                won(data[i-4])
                win = true
            }
        }
        console.log(win)
        let cnt = 0
        for(let i = 0; i<9 ; i++){
            if( data[i] === ""){
                cnt++
            }
        }
        if(cnt === 0 && win === false){
            titleRef.current.innerHTML = ' Draw '
        }
    }
    
    const won = (winner) => {

            setLock(true)
            if(winner === "x"){
                titleRef.current.innerHTML = `Congratulations! <img src ='${cross}'> wins.`
            }
            else{
                titleRef.current.innerHTML = `Congratulations! <img src ='${circle}'> wins.`
            }

        
    }
    
    const reset = () => {
        setLock(false)
        data = ["","","","","","","","",""]
        titleRef.current.innerHTML = 'Tic Tac Toe Game with <span> React</span>'
        box_array.map((e) =>{
            e.current.innerHTML = ""
            return 0
        })
    }
    return(
        <div className="container">
            <h1 className="title" ref={titleRef}>Tic Tac Toe Game with <span> React</span></h1>
            <div className="board">
                <div className="row1">
                    <div className="box" ref={box1} onClick={(e)=>{toggle(e, 0);}}></div>
                    <div className="box" ref={box2} onClick={(e)=>{toggle(e, 1)}}></div>
                    <div className="box" ref={box3} onClick={(e)=>{toggle(e, 2)}}></div>
                </div>
                <div className="row2">
                    <div className="box" ref={box4} onClick={(e)=>{toggle(e, 3)}}></div>
                    <div className="box" ref={box5} onClick={(e)=>{toggle(e, 4)}}></div>
                    <div className="box" ref={box6} onClick={(e)=>{toggle(e, 5)}}></div>
                </div>
                <div className="row3">
                    <div className="box" ref={box7} onClick={(e)=>{toggle(e, 6)}}></div>
                    <div className="box" ref={box8} onClick={(e)=>{toggle(e, 7)}}></div>
                    <div className="box" ref={box9} onClick={(e)=>{toggle(e, 8)}}></div>
                </div>
            </div>
            <button className="reset" onClick={reset}>RESET</button>
        </div>
    )
}

export default TicTacToe