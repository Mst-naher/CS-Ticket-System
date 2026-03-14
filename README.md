# React Project - Customer Support Zone

- ![project-app-pic](./public/images/img1.jpg) 
- ![project-app-pic](./public/images/img2.jpg) 


##  Answers

 - What is JSX, and why is it used?

  *JSX(JavaScript XML) is a syntax extention for JavaScript in React that lets us write HTML like code inside JavaScript Example:*
  ```
  javaScript:
  const element = <h1>Hello, world</h1>
  ```
  *This code is late compiled in regular javaScript*
   - Why JSX is used:
     1. Makes UI code easier to read and write.
     2. Allows HTML structure inside JavaScript.
     3. Helps React describe UI components clearly.
     4. Improves developer productivity.
     Exlample inside a component:
     ```
     javaScript
     function App(){
      return(
        <div>
        <h1>Welcome</h1>
        <p>This is a React app</p>
        </div>
      )
     }
     ```
 - What is the difference between State and Props?

| Feature | Props | State  |
|--------|--------|-------|
| Meaning  | Data passed from parent component | Data managed inside a component
| Mutability | Read-only (cannot be changed)| Mutable (can change)
|Controlled by| Parent compnent | The component itself|
|Purpose | Pass data to child components | Manage dynamic data|

#### props example
```
javascript
function Greeting(props){
  return(
    <h1>Hello {props.name}</h1>;
  )
  <Greeting name="john" />
}
```
#### state example
```
javaScript

const [counts, setCounts] = useState(0);

```
State changes cause the component to re-render.

 - What is the useState hook, and how does it work?

 *useState is a React Hook that lets functional component manage state*
 #### Syntax:
 ```
 javaScript
 const [state, setState] = useState(initialValue);
 ```
 #### example:
 ```
 javaScript:
 import {useState} from "react";

 function Counter(){
  const [count, setCount] = useState(0);

  return(
    <div>
    <p>{count}</p>
    <button onClick={()=>setCount(count + 1)}>Increase</button>
    </div>
  );
 }
 ```
    #### How it works
    1. useState(0) sets the initial value to 0
    2. count stores the current value
    3. setCount() updates the value
    4. When state changes, React re-renders the component

- How can you share state between components in React?

 *The most common way is Lifting State Up*

  1. Lift State Up(Most common)
   
   *Move the shared state to the closest common parent*
   #### Example:

   ```
   javaScript

   function Parent() {
    const [count, setCount] = useState(0);

    return (
      <>
      <ChildA count ={count} />
      <ChildB setCount ={setCount} />
      </>

    );
   }
   ```

    1. Parents owns the state
    2. Children receive the  props

2. Context API (for global state)

*Used when many components need the same data*

#### Exampel: 

```
javaScript

const ThemeContext = React.createContext()
```

3. State Management Libraries

*Used in large applications*
  1. Redux
  2. Zustand
  3. Recoil


- How is event handling done in React?

*React handles events using camelCase event names and functions*

#### Example:

```
javaScript

function Button(){

  function handleClick(){
    alert("Button clicked")
  }

  return <button onClick={handleClick}></button>
}
```

#### Event with parameters

```
javaScript

<button onClick={()=> handleClick("Jhon")}>
Click
</button>
```
