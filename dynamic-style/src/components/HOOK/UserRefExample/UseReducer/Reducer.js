export const reducer =(state,action)=>{

    if(action.type==='Add'){
     const allBooks=[...state.books, action.payload];
     return {
         ...state, books: allBooks,
         isModalOpen:true,
         modalText: "Book is Added"
     }
    }
    if(action.type==='Remove'){
     const filteredBooks=[...state.books].filter(book=>book.id !== action.payload);
     return {
         ...state, books: filteredBooks,
         isModalOpen:true,
         modalText: "Book is Removed"
     }
    }
     return state;
 }