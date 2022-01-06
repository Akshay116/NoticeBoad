
import {MdDeleteSweep} from 'react-icons/md';

const Note = ( ) =>{
    return(
         <div className="note">
             <span>Hello Notecard </span>
                 <div className="note-footer">
                   <small>date13/12/12</small>
                    <div className='delete-btn'>
                      <MdDeleteSweep />
                      </div>
              
                  </div>
           </div>
         );
}
export default Note;