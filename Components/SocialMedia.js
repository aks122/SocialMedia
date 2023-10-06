import React from 'react'
import background from '../Assests/Rectangle 4.png'
import styled from 'styled-components'


const SocialMedia = () => {
  return (

  <StyledSignup>
        <div style={{display:"flex"}}>
            <div className="wrapper">
        <div className='container'>
                <div className='tuulio'>tuulio</div>
            </div>
            </div>
            <div style={{marginTop:"18%", marginLeft:"3%"}}>
                <div className='signup'>Leave the 
               </div>
               <div className='signup'> tech to us.</div>
                <div style={{display:"flex"}}>
                   

                  
                </div>

                    <div className='name'>
                        <button className='btn-sign'>Learn More</button>
                    </div>

                  
                </div>
            </div>
        </StyledSignup>
  )
}

export default SocialMedia
export const StyledSignup = styled.div`
.container{
    display: flex;
    /* justify-content: center; */
    align-items: center;
}
    .wrapper{
        background-image: url('${background}');
        background-size: cover; 
  background-repeat: no-repeat;
  background-position: center center;
  width: 65%;
  height: 100vh;
  color: #FFF;
font-family: Poppins;
font-size: 80px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.tuulio {
    padding: 30% 0 0 120px;
}
.signup{
    color: #000;
font-family: Poppins;
font-size: 50px;
font-style: normal;
line-height: normal;
letter-spacing: 5px;
}
.name{
    color: #000;
font-family: Poppins;
font-size: 18px;
font-style: normal;
margin-top: 30px;
font-weight: 400;
line-height: normal;
text-align: initial;
}
.name-input{
    margin-right: 20px;
    width: 125px;
    height: 35px;
    border-radius: 4px;
    border: 1px solid black;
}
.btn-sign{
    border-radius: 4px;
border: 1px solid #00BF63;
background: #00BF63;
width: 280px;
height: 35px;
color: #FFF;
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.email{
    width: 280px;
height: 30px;
border-radius: 4px;
border: 1px solid black;
}
.account{
    color: #00BF63;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-decoration-line: underline;
margin-right: 10px;
cursor: pointer;
}
`