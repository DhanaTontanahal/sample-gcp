import React, { useState } from "react";

const SampleApiComponent = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [response, setResponse] = useState("");

  // Fetch message from the GET endpoint
  const fetchMessage = async () => {
    try {
      const res = await fetch(
        "https://sample-api-855220130399.us-central1.run.app/"
      );
      const data = await res.text(); // The response is plain text
      setMessage(data);
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  };

  // Send data to the POST endpoint
  const sendData = async () => {
    try {
      const res = await fetch(
        "https://sample-api-855220130399.us-central1.run.app/data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, age }),
        }
      );

      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Sample API Consumer</h1>

      {/* Fetch Message Section */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={fetchMessage}
          style={{ padding: "10px", cursor: "pointer" }}
        >
          Fetch Message
        </button>
        {message && (
          <p>
            <strong>Response:</strong> {message}
          </p>
        )}
      </div>

      {/* Send Data Section */}
      <div>
        <h2>Send Data</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", marginRight: "10px" }}
        />
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={{ padding: "10px", marginRight: "10px" }}
        />
        <button
          onClick={sendData}
          style={{ padding: "10px", cursor: "pointer" }}
        >
          Send Data
        </button>
        {response && (
          <p>
            <strong>Response:</strong> {response}
          </p>
        )}
      </div>
    </div>
  );
};

export default SampleApiComponent;
