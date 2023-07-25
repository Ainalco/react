import '../index';
const todoTitle="Hello World";
const todoDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
const date=new Date();
const curentYear=date.getFullYear();
const dateName=date.getDate();
const dateMonth=date.getMonth();
const headingStyle={
  backgroundColor:"purple",
  color:"white",
  textAlign:"center",
  padding:"15px",
  fontSize:"16px"

}
function Stylerule(){
    return <div>
    <h1 style={headingStyle}>To do App</h1>
    <h3 className='secondheadingStyle'>{todoTitle}</h3>
    <p className='paragraphStyle'>{todoDescription}</p>
    <p style={{
    backgroundColor:"yellow",
    color:"white",
    textAlign:"center",
    padding:"15px",
    fontSize:"16px"
  
  }}>{dateName+'/'+dateMonth+'/'+curentYear}</p>
  </div>
  }

  export default Stylerule;
