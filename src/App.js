import { useState } from "react";
import Form from "./components/Form";
import DisplayCard from "./components/DisplayCard";

const BACKEND_URL = "https://business-backend-ljnu.onrender.com";

 function App() {
  const [form, setForm] = useState({ name: "", location: "" });
  const [data, setData] = useState(null);

  const fetchBusinessData = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/business-data`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching business data:", error);
    }
  };

  const regenerateHeadline = async () => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/regenerate-headline?name=${form.name}&location=${form.location}`
      );
      const result = await response.json();
      setData(prev => ({ ...prev, headline: result.headline }));
    } catch (error) {
      console.error("Error regenerating headline:", error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-6">
    <div className=" bg-gradient-to-r from-orange-500 to-pink-500 p-6 min-h-screen   flex flex-col items-center">
      <Form form={form} setForm={setForm} onSubmit={fetchBusinessData} />
      {data && <DisplayCard data={data} onRegenerate={regenerateHeadline} />}
    </div>
    </div>
  );
}



export default App;
