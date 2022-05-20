import React, { useState, useEffect } from 'react'
import { db } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import Diaglog from './Dialog';
import './Profile.css';

function Profile() {
  const [{ user }, dispatch] = useStateValue();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [showNameDialog, setShowNameDialog] = useState(false);
  const [showAddressDialog, setShowAddressDialog] = useState(false);

  useEffect(() => {
    db.collection('users')
            .doc(user?.uid).get().then(doc => {
              if (doc.exists) {
                setName(doc.data().name);
                setAddress(doc.data().address);
                }
            })
}, [user])

  const changeName = () => {
    setShowNameDialog(true);
  }

  const changeAddress = () => {
    setShowAddressDialog(true);
  }

  return (
    <div className='profile'>
      <h1 className='profile_title'>Your Profile</h1>
      <div className='profile_container'>
        <span className='profile_content_title'>Your Name: </span>
        <span className='profile_content'>{name}</span>
        <button onClick={changeName}>Edit</button>
      </div>
      <div className='profile_container'>
        <span className='profile_content_title'>Your Address: </span>
        <span className='profile_content'>{address}</span>
        <button onClick={changeAddress}>Edit</button>
      </div>

      {showNameDialog && <Diaglog
                            field='name' value={name} onClose={e=>setShowNameDialog(false)} />}
      {showAddressDialog && <Diaglog
                            field='address' value={address} onClose={e=>setShowAddressDialog(false)}/>}

    </div>
  )
}

export default Profile