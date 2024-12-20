import './App.css'
import Counter from './counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick(){
    alert('button clicked')
  }

  // function handleClick2(){
  //   alert('handle click2')
  // }
  const handleClick2 = () => {
    alert('handle click 222222222222')
  }

  const addToFive = (num) => {
    alert(num + 4);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>


      <Users></Users>
      <Team></Team>
      <Counter></Counter>



      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      {/* <button onClick={handleClick}>Click Me</button> */}
      <button onClick={() =>{alert('click 3')}}>Click 3</button>

      {/* <button onClick={addToFive(4)}>four</button> */}
      <button onClick={() => addToFive(5)}>four</button>
    </>
  )
}

export default App
