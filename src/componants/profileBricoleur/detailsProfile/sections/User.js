import React, { useState, useEffect } from "react";
import axios from "axios";
import Review from "../../../Reviews/review"
import "./User.css"


const url = "https://mail.google.com/mail/u/0/#inbox?compose=new"
const User = () => {
  const [profileName, setProfileName] = useState("");
  const [profileCell, setProfileCell] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileEmail, setProfileEmail] = useState("");

  const profileData = async () => {
    try {
      {/*const res = await axios.get("https://localhost:8080/bricoleur");*/}
      const res = await axios.get("http://localhost:8080/bricoleur/1");
      setProfileCell(res.data.phone);
      setProfileEmail(res.data.email);
      setProfileImage(res.data.photo);
      setProfileName(
        `${res.data.firstName} ${res.data.lastName}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    profileData();
  }, []);


   const clickBtn = ()=>{
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  const clickSpan =()=>{
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  const GoMail = () =>{
    document.location.href=url
  }
    return (

    <div className="user" >
        <img className="user__avatar" src={profileImage} style={{ width: "100%" }} />
        <h1 className="user__name">{profileName}</h1>
        <p className="user__profession">Bricoleur Pro</p><br />

        <button style={{backgroundColor:"#D4643C",color:"white"}} className= "btn">Contacter via Mobile <i class="fa fa-phone-square" aria-hidden="true"></i>
</button>
        <br/>
        <br/>
        <button onClick={GoMail} style={{backgroundColor:"#D4643C",color:"white"}} className= "btn ">Contacter via email <i class="fa fa-paper-plane" aria-hidden="true"></i>
</button>
        <br/>
        <br/>
        <button style={{backgroundColor:"#D4643C",color:"white"}} onClick={clickBtn} id="myBtn" className= "btn "> Laisser un avis <i class="fa fa-star" aria-hidden="true"></i>
</button>
        <div id="myModal" className="modal">
            <div className="modal-content">
                   <span onClick={clickSpan} className="close"> &times;</span>
                    <br/>
                    <h2 style={{paddingLeft:"9px",fontSize:"25px",textAlign:"center"}} className="reviewTitl">Comment évalueriez-vous ce Bricoleur?</h2>
                    <p></p>
                    <p></p>
                    <p></p>
                    <Review className="ReviewModal" id="ReviewInModal" />
            </div>
        </div>
        <br />
    </div>
  
    
  )
}

export default User