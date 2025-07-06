 function Form({ form, setForm, onSubmit }) {
  return (
     <div >
    
    <div className="bg-gradient-to-r from-blue-500 to-green-500  p-6 rounded-2xl shadow-md w-full max-w-md mb-6">
      <h2 className="text-xl font-bold text-white mb-4">Enter Business Info</h2>
      <input className="input" placeholder="Business Name"
        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <input className="input mt-3" placeholder="Location"
        value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
      <button className="btn mt-4 w-full" onClick={onSubmit}>Submit</button>
    </div>
    </div>
  );
}
export default Form
