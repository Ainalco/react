import React,{useState,useReducer} from 'react'
import { reducer } from './Reducer';
const booksData=[
    {id:1,name:"Rakim"},
    {id:2,name:"Piash"},
    {id:3,name:"Polash"}
];

const Modal=({modalText})=>{
    return <p>{modalText}</p>
}


const UseReducer = () => {
    // const [books,setBooks]=useState(booksData);
    // const [isModalOpen, setIsModalOpen]=useState(false);
    // const [modalText, setModalText]=useState('');
    // const [bookName, setBookName]=useState('');
    
    const [bookState,dispatch]=useReducer(reducer,{
        books:booksData,
        isModalOpen:false,
        modalText:""
    });
    const [bookName, setBookName]=useState("");
    

    const handleSubmit=(event)=>{
        event.preventDefault(); 
        const newBook={id: new Date().getTime().toString,name:bookName}
        dispatch({type:"Add",payload:newBook});
    setBookName("");
        // setBooks((prevState)=>{
        //     const newBook={id: new Date().getTime().toString,name:bookName}
        //     return [...prevState, newBook]
        // });
        // setIsModalOpen(true); 
        // setModalText("Book is Added"); 
    };
    const removeBook =(id)=>{
        dispatch({type:"Remove",payload:id});
        
    }
  return (
    <div>
      <h3>Book List</h3>
      <form onSubmit={handleSubmit}>
            <div className='form-field'>
               <input type='text' id='userName' value={bookName} onChange={(e)=>
                {
                    setBookName(e.target.value);
                }}/>
            </div>
            <button type='submit'>Add Book</button>                       
        </form>
       {/* {isModalOpen && <Modal modalText={modalText}/>} */}
       {bookState.isModalOpen && <Modal modalText={bookState.modalText}/>}

      {bookState.books.map((book)=>{
        const {id,name}=book;
        return <li key={id}>{name} <button onClick={()=>{removeBook(id)}}>Remove</button></li>
      })}
    </div>
  )
}

export default UseReducer
