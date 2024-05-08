import "./App.css";
import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import HomeScreen from "./Components/HomeScreen";
import ProfileScreen from "./Components/ProfileScreen";
import ShopScreen from "./Components/ShopScreen";
import ErrorBoundary from "./Components/ErrorBoundary";
import PostList from "./Components/PostList";
import posts from "./data.json";
import ex3data from "./ex3.json";
import Example1 from "./Components/Example1";
import Example2 from "./Components/Example2";
import Example3 from "./Components/Example3";

function App() {
  const fetchData = async () => {
    try {
        const resp = await fetch(
            "https://webhook.site/dad4d1ab-87e7-4a12-ae0b-c1a86addbf80",
            {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true,
                },
                body: JSON.stringify({
                    key1: "myusername",
                    email: "mymail@gmail.com",
                    name: "Isaac",
                    lastname: "Doe",
                    age: 27,
                }),
            }
        );

        // Check if the response status is in the 200–299 range
        if (!resp.ok) {
            console.log(`HTTP error: ${resp.status}`);
            return;
        }

        // Check if the content type is application/json
        const contentType = resp.headers.get("Content-Type");
        if (!contentType || !contentType.includes("application/json")) {
            console.log(`Unexpected content type: ${contentType}`);
            return;
        }

        // Try to parse the response as JSON
        const data = await resp.json();
        console.log(data);
    } catch (error) {
        console.error("Error parsing JSON:", error);
    }
};

  return (
    <BrowserRouter>
      <>
        <p className="ex"><b>Exercise 1: React Router Error Boundary</b></p>
        <Navbar id="navBar" bg="primary" data-bs-theme="dark">
          <Container>
            <Nav className="me-auto">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/shop">Shop</NavLink>
            </Nav>
          </Container>
        </Navbar>

        <Container>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/shop" element={<ShopScreen />} />
            </Routes>
          </ErrorBoundary>
        </Container>
        <hr />
        <p className="ex"><b>Exercise 2: Display JSON Data in React JS</b></p>
        <PostList posts={posts} />
        <hr />
        <p className="ex"><b>Exercise 3: Display JSON Data and parse it</b></p>
        <Example1 socialMedias={ex3data.SocialMedias} />
        <Example2 skills={ex3data.Skills} />
        <Example3 experiences={ex3data.Experiences} />
        <p className="ex"><b>Exercise 4: Post JSON Data with React JS</b></p>
        <Button className="m-5 px-5" variant="primary" onClick={fetchData}>
          Fetch Data
        </Button>
      </>
    </BrowserRouter>
  );
}

export default App;