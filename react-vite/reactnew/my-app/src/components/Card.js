const todoTitle="Hello World";
const todoDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
const date=new Date();
const curentYear=date.getFullYear();
const dateName=date.getDate();
const dateMonth=date.getMonth();

function Card(){
  return <div className='card'>  
  <h3 className='cardTitle'>{todoTitle}</h3>
  <p className='cardDesc'>{todoDescription}</p>
  <p className='cardFooter'>{dateName+'/'+dateMonth+'/'+curentYear}</p>
</div>
}


export default Card;