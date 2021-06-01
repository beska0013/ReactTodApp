import React,{useEffect}  from "react";
import MyApp  from "./my-app/MyApp";
import Context from "./contxt/contxt";
// import AddMyAppItems from "./AddMyAppItems/AddMyAppItems";
import Loader from "./loader/loader";
import Modal from "./Modal/modal";

const AddMyAppItems = React.lazy(() => import('./AddMyAppItems/AddMyAppItems'))


function App() {

  const [items,setItems] = React.useState([])
  const [loading, setLoading] = React.useState(true)



useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(items => {
            setTimeout(() =>{
                setItems(items)
                setLoading(false)
            },5000)

        })
},[])

function  toggleItems(id){
        setItems(
        items.map( item => {
            if(item.id === id){
                item.completed = !item.completed
            }
            return item
        }))
    }

function removeItem(id){
      setItems(items.filter(item => item.id !== id))
}

function addItem(title){
      setItems(items.concat([
          {
              id:Date.now(),
              title,
              completed: false
          }
      ]))
}
  return (
     <Context.Provider value={{removeItem}}>
      <div  className='wrapper' >
          {loading ?(''):( <Modal />)}
        <h1> Beso React App</h1>
            <React.Suspense fallback={''}>
          {loading ?(<Loader/>):(<AddMyAppItems onCreate={addItem}/>)}
            </React.Suspense>
          {items.length ?
              ( <MyApp items={items} onToggle = {toggleItems} /> ) :
              (loading ? null :   <p>No Items!</p>)}


      </div>
     </Context.Provider>

  )}

export default App;
