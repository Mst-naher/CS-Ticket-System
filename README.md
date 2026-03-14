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
 - How can you share state between components in React?
 - How is event handling done in React?
