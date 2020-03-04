import React from 'react';
import {ButtonComponent} from './Button';
import {InputComponent} from '../Components/InputComponent';

const SampleCard = (props) => {
  const btnStyle = {
    color: "#ffffff",
    backgroundColor: "#fb641b",
    textTransform : 'none',
    margin: '5px',
    fontWeight:'bold'
  };
  const footerStyle = {
    borderTop: '1px solid #f0f0f0',
    background: '#fff',
    boxShadow: '0 -2px 10px 0 rgba(0,0,0,.1)',
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'flex-end'
  }
return(
       <div style={props.cardStyle}>
          {props.cardHeader ? <div style ={props.cardHeaderStyle}>Header</div> : null}
          {props.itemsList ? <div style = {{'padding' : 5}}>
              <img alt='' src = {props.Image} width={props.imageWidth} height={props.imageHeight}/>
                <i>{props.cardTitle}</i>
                <br/>
                <b>{'Rs' + props.price}</b>
            </div> : 
            props.loginCard ? 
            <div style={{display:'flex', flexDirection: 'column', marginTop:'25%'}}>
                <div style={{padding:20}}>
                <InputComponent size='small' type="text" label="email" onChange={props.handleUserNameChange} />
                </div>
                <div style={{padding:20}}>
                <InputComponent size='small' type="password" label="password" onChange={props.handlePasswordChange}/>
                </div>
                <div style={{padding:20}}>
                <ButtonComponent color="primary" variant="contained" name="Login" onClick={props.onLoginClick}/>
                </div>
           </div> : null}
          {props.itemsList ? 
          <div style = {footerStyle}><ButtonComponent name="Add To Cart" btnStyle={btnStyle} onClick = {props.addItemstoCart}/></div> : null}
         </div>
    )
}

export default SampleCard;