import Cizgi from "./components/Cizgi"
import Header from "./components/Header"
import { contacts } from "./data"
import "bootstrap/dist/css/bootstrap.css"


const App = () => {
  return (
    <div className=" row justify-content-center gap-2">
      <h1 className="text-danger text-center mt-5 border-bottom display-1">Zamana Tatlı Bir Yolculuk</h1>
    {
      contacts.map((item)=>{
        const {id,name,imgUrl,phone,email}=item
        return(
         
        <>
          <Cizgi id={id} name={name} imgUrl={imgUrl} phone={phone} email={email}/>
        </>
         
        )
      })
    }

     
    </div>
  )
}

export default App