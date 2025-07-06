 function DisplayCard({ data, onRegenerate }) {
  return (
    <div>
     <div className="bg-gradient-to-r from-oran-500 to-green-500">

     
    
      <div className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-700 p-6 rounded-2xl shadow-md w-full max-w-md text-center">
        <h3 className="text-lg text-white font-bold mb-2">⭐ {data.rating} | {data.reviews} Reviews</h3>
        <p className="text-white italic mb-4">"{data.headline}"</p>
        <button className="btn" onClick={onRegenerate}>Regenerate SEO Headline</button>
      </div>
      </div>
    </div>
  );
}
export default DisplayCard