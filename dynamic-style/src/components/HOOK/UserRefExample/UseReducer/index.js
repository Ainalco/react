import React,{useState} from 'react'

const booksData=[
    {id:1,name:"Rakim"},
    {id:2,name:"Piash"},
    {id:3,name:"Polash"}
];

const Modal=()=>{

}

const UseReducer = () => {
    const [books,setBooks]=useState(booksData);
    const [isModalOpen, setIsModalOpen]=useState(false);
    const [modalText, setModalText]=useState('');
    const [bookName,setBookName]=useState('');
    const handleSubmit=(event)=>{
        event.preventDefault(); 
        setBooks((prevState)=>{
            const newBook={id: new Date().getTime().toString,name:bookName}
            return [...prevState, newBook]
        })   
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
       
        
      {books.map((book)=>{
        const {id,name}=book;
        return <li key={id}>{name}</li>
      })}
    </div>
  )
}

export default UseReducer
