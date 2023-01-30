import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setResult(res.data.data[0].url);
  };

  return (
    <div className="app-main">
      <h1>Generate an Image using Open AI API</h1>
      <input
        className="app-input"
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type something to generate an image"
      />
      <button className="btn-search" onClick={generateImage}>Generate Image</button>
      {result.length > 0 ? (
        <img src={result} alt={prompt} className="result-image" />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
