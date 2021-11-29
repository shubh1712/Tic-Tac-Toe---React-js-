import React , {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button, Container, Card,CardBody, Row,Col} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import React from "react"
import  "./index.css";
// import './App.css';
import Icon from "./Icon";
import { FaTicketAlt } from "react-icons/fa";

const tiktakArray =  new Array(9).fill("")

const App = () => {
  let [isCross , setIsCross ] = useState(true);
  let [winMessage , setWinMessage ] = useState("");

  const playAgain = () => {
    setIsCross(true)
    setWinMessage("")
    tiktakArray.fill("")
  }

  const findWinner= () => {
    if(tiktakArray[0]==tiktakArray[1] && tiktakArray[0]==tiktakArray[2] && tiktakArray[0]!=""){
      setWinMessage(tiktakArray[0] + " " +  "has won")
    }
    else if (tiktakArray[3]==tiktakArray[4] && tiktakArray[3]==tiktakArray[5] && tiktakArray[3]!=""){
      setWinMessage(tiktakArray[3] + " " +"has won ")
    }
    else if (tiktakArray[6]==tiktakArray[7] && tiktakArray[6]==tiktakArray[8] && tiktakArray[6]!=""){
      setWinMessage(tiktakArray[6] + " " + "has won ")
    }
    else if (tiktakArray[0]==tiktakArray[3] && tiktakArray[0]==tiktakArray[6] && tiktakArray[0]!=""){
      setWinMessage(tiktakArray[0] + " " + "has won") 
    }
    else if (tiktakArray[1]==tiktakArray[4] && tiktakArray[1]==tiktakArray[7] && tiktakArray[1]!=""){
      setWinMessage(tiktakArray[1] +  " "  + "has won") 
    }
    else if (tiktakArray[2]==tiktakArray[5] && tiktakArray[2]==tiktakArray[8] && tiktakArray[2]!=""){
      setWinMessage(tiktakArray[2] + " "  + "has won") 
    }
    else if (tiktakArray[0]==tiktakArray[4] && tiktakArray[0]==tiktakArray[8] && tiktakArray[0]!=""){
      setWinMessage(tiktakArray[0] + " " + "has won") 
    }
    else if (tiktakArray[2]==tiktakArray[4] && tiktakArray[2]==tiktakArray[6] && tiktakArray[2]!=""){
      setWinMessage(tiktakArray[2] + " " + "has won") 
    }

  }


  const changeItem =(index) =>  {
    if (winMessage){
      return toast ("Game is over " , {type :"success"})
    }
    if (tiktakArray[index]==""){
      tiktakArray[index] = isCross ?"cross" : "circle"
      setIsCross(!isCross)
    }
    else {
      return toast ("Hehehehe! this place is taken try other slot " , {type : "error"})
    }
    findWinner()
  }


  return (
     <Container className="p-5">


        <Row>


           <Col md= {6} className="offset-md-3">
               


               {
                //  to display winner 
                   winMessage ? (
                    <div>
                     <h1 className="text-center">  {winMessage}</h1>
                     <Button onClick= {playAgain}>
                        PLAYAGAIN
                     </Button>
                    </div>
                   ) : (
                    <h1>
                      { 
                        isCross ? "Cross' turn ": "Circle's turn"
                      }
                    </h1>

                   )

            
               }
            
              

               <div className="grid">
                  {tiktakArray.map((value,index)=>(

                      <Card onClick = {() => changeItem(index)}>


                         <CardBody>
                       
                              <Icon choice ={tiktakArray[index] }/>
  
                         </CardBody>


                      </Card>
                  ))}
               </div>


           </Col>


        </Row>


     </Container>
    
   );
}

export default App;