import React,{useState,createContext,useContext} from "react"
const UserContext = createContext();

function Hooks() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={user}>
      <h5>{`Hello ${user}!`}</h5>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h5>Component 2</h5>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h5>Component 3</h5>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h5>Component 4</h5>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h5>Component 5</h5>
      <h5>{`Hello ${user} again!`}</h5>
    </>
  );
}
export default Hooks