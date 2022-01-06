
import {MdDeleteSweep} from 'react-icons/md';

const Note = ({id,text,date} ) =>{
    return(
         <div className="note">
             <span>{text}</span>
                 <div className="note-footer">
                   <small>{date}</small>
                    
                      <MdDeleteSweep className='delete-icon' size='1.3em' />
                      
              
                  </div>
           </div>
         );
}
export default Note;