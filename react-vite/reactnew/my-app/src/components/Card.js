const date=new Date();
const curentYear=date.getFullYear();
const dateName=date.getDate();
const dateMonth=date.getMonth();

//distructureing way
//for array use third bracket and object use second brackt
// const name=["dog","cat"];
// name[0];
// name[1];
// const [dog,cat]=name;

function Card(props){
  const {titleTxt,descText}=props;
   return <div className='card'>  
  <h3 className='cardTitle'>{titleTxt}</h3>
  <p className='cardDesc'>{descText}</p>
  <p className='cardFooter'>{dateName+'/'+dateMonth+'/'+curentYear}</p>
</div>
}


export default Card;