import "./App.css";
import { Text } from "./components/polymorphic/Text";
// import { CustomButton } from "./components/Html/Button";
// import { Toast } from "./components/templateliterals/Toast";
// import { RandomNumber } from "./components/restriction/RandomNumber";
// import { List } from "./components/generics/List";
// import Private from "./components/auth/Private";
// import Profile from "./components/auth/Profile";
// import { Counter } from "./components/class/Counter";
// import DomRef from "./components/ref/DomRef";
// import { MutableRef } from "./components/ref/MutableRef";
// import Box from "./components/context/Box";
// import Counter from "./components/state/Counter";
// import Button from "./components/Button";
// import Container from "./components/Container";
// import LoggedIn from "./components/state/LoggedIn";
// import Input from "./components/Input";
// import Greet from "./components/Greet";
// import Person from "./components/Person";
// import PersonLlist from "./components/PersonLlist";
// import Status from "./components/Status";
// import Heading from "./components/Heading";
// import Oscar from "./components/Oscar";
// import { ThemeContextProvider } from "./components/context/ThemeContext";
// import { UserContextProvider } from "./components/context/UserContext";
// import User from "./components/context/User";

function App() {
  //   const personName = {
  //     first: "Bruce",
  //     last: "Wayne",
  //   };

  //   const personList = [
  //     {
  //       first: "Bruce",
  //       last: "Wayne",
  //     },
  //     {
  //       first: "Clark",
  //       last: "Kent",
  //     },
  //     {
  //       first: "Princess",
  //       last: "Diana",
  //     },
  //   ];

  return (
    <div className="App">
      {/* <Greet name="Baji" messageCount={10} isLoggedIn={false}/>
      <Person name={personName} />
      <PersonLlist names={personList}/> */}
      {/* <Status status="loading" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Decaprio</Heading>
      </Oscar>
      <Greet name="Baji"  isLoggedIn={true}/> */}
      {/* <Button handleClick={(event,id) => console.log("Button Clicked",event,id)}/>
      <Input value="" handleChange={(event)=>console.log(event)}/> */}
      {/* <Container style={{ border: "1px solid black", padding: "1rem"}}/> */}
      {/* <LoggedIn/> */}
      {/* <Counter/> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User/>
      </UserContextProvider> */}
      {/* <DomRef/> */}
      {/* <Counter message="this is class component props"/> */}
      {/* <Private isLoggedIn={true} component={Profile}/> */}

      {/* <List
        items={["Batman", "SuperMan", "WonderWomen"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      {/* <List
        items={[
          {
            firstName: "Baji",
            lastName: "Shaik",
          },
          {
            firstName: "Baji",
            lastName: "Shaik",
          },
          {
            firstName: "Baji",
            lastName: "Shaik",
          },
        ]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <RandomNumber value={10} isPositive/> */}
      {/* <Toast position="center"/> */}
      {/* <CustomButton variant="primary" onClick={() => console.log("clicked")}>
        Primary Button
      </CustomButton> */}
      <Text as="h2" size="lg">Heading</Text>
      <Text as="p" size="md">Paragraph</Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondary">Label</Text>
    </div>
  );
}

export default App;
