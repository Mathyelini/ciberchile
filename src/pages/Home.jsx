import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to My Modern Site</h2>
      <div className="card-container">
        <Card title="Feature 1" description="Description of feature 1" />
        <Card title="Feature 2" description="Description of feature 2" />
        <Card title="Feature 3" description="Description of feature 3" />
      </div>
    </div>
  );
};

export default Home;
