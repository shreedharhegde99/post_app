import React, { Fragment } from 'react';
import ReactDOM from "react-dom";
import './modal.css';

const portal = document.querySelector('#portal')
/* On the posts page, if the user clicks on the author’s name, show the author details page.
Author details can include: name, address, email, and phone */

function Author({author,open,close}) {
  let details = author[0]
  let address = details.address
  console.table(details.address);
  return (
		<Fragment>
			{open && (
        <div className="modal">
          <div className='authorDetail'>

					<div>Author:{details.name}</div>
					<div>Address:{`city:${address.city}`}</div>
					<div>{`street:${address.street}`}</div>
          <div>{`zipcode:${address.zipcode}`}</div>
          <div>{`Email:${details.email}`}</div>
          <div>{`Contact:${details.phone}`}</div>
          </div>
          <button className='closeBtn' onClick={()=>close()}>
            X
          </button>

				</div>
			)}
		</Fragment>
	);
}

function Modal(props) {
  // console.log(props.author);

  return (
    ReactDOM.createPortal(<Author {...props}/>,portal)
    )
  }
    
    
    export default  Modal
  

