import React, {useState} from 'react'
import { auth, db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import './Dialog.css';

function Dialog({ field, value, onClose }) {

    const [newValue, setNewValue] = useState("");
    const navigate = useNavigate();

    const handleChange = e => {
        setNewValue(e.target.value);

    }

    const submitChange = async e => {
        e.preventDefault();
        console.log(auth.currentUser);
        if (auth) {
            const ref = db.collection('users').doc(auth.currentUser?.uid);
            return db.runTransaction((transaction) => {
                // This code may get re-run multiple times if there are conflicts.
                 return transaction.get(ref).then((doc) => {
                    if (!doc.exists) {
                        throw "Document does not exist!";
                    }
            
                    // Add one person to the city population.
                    // Note: this could be done without a transaction
                    //       by updating the population using FieldValue.increment()
                    
                    transaction.update(ref, { [field]: newValue });
                });
            }).then(() => {
                alert("Updated succeeded");
                window.location.reload(false);
            }).catch((error) => {
                console.log("Transaction failed: ", error);
            });
            

        } else {
            console.log("Not authorized");
            return false;
        }
    }

  return (
      <div className='dialog'>
          <div className='dialog_header'>
            <div className='dialog_title'>
                Edit your {field}
              </div>
              <button className='dialog_close_button' onClick={onClose}>x</button>
          </div>      
          <form onSubmit={submitChange}>
            <p>Changes made to your {field} here, will be shown anywhere your profile is used.</p>
              <input type="text" placeholder={value} onChange={handleChange} value={newValue} />
              <button className='dialog_submit_button'>Submit</button>
          </form>
        </div>
  )
}

export default Dialog