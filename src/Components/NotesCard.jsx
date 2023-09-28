import React, { useContext } from 'react'
import { NotesDataContext } from './Context/NotesContext';

function NotesCard({isProb}) {
    const { data, setData } = useContext(NotesDataContext);
    const delData=(index)=>{
        const newValData=[...data];
        newValData.splice(index,1);
        setData(newValData);
    }
    return (
        <>{
            isProb ? <>{
                data.map((e,i)=>{
                    return(
                        <div key={i} className='notesCardcomponent'>
                            <div className='card-head'>
                                <div>
                                    <h4>{e.title}</h4>
                                </div>
                                <div className='actionIcon'>
                                    <img src={e.editIcon} />
                                    <img src={e.deleteIcon} onClick={()=>{delData(i)}}/>
                                </div>
                            </div>
                            <div className='card-body'>
                                <p>{e.body}</p>
                            </div>
                            <div>
                                <p>{e.date}</p>
                            </div>
                        </div>
                    )
                })
            }</>:<div className= 'card-data-toggle'>
           {
                data.map((e,i)=>{
                    return(
                        <div key={i} className='notesCardcomponent'>
                            <div className='card-head'>
                                <div>
                                    <h4>{e.title}</h4>
                                </div>
                                <div className='actionIcon'>
                                    <img src={e.editIcon} />
                                    <img src={e.deleteIcon} onClick={()=>{delData(i)}}/>
                                </div>
                            </div>
                            <div className='card-body'>
                                <p>{e.body}</p>
                            </div>
                            <div>
                                <p>{e.date}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        }
        
        </>
    )
}

export default NotesCard