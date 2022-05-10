
import  ItemCount from "./ItemCount";
 
 export default function ItemListContainer ({greeting}) {
    return (
      // const [cont, setCont] = useState(0)
      // const [fecha, setFecha]= useState("-")
      // function contar(){
      //   setCont(cont + 1)
      //   setFecha(Date())
      // }

      <div className="itemListContainer">
          <h1 className="itemListContainer_title">{greeting}</h1>

          < ItemCount initial={1} stock={7} onAdd={()=>console.log("Agregado al pedido")}/>
      </div>
    );
  };
  
 
  