import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ViewDetails from "./components/ViewDetails";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showDetails, setShowDetails] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState("");

  const toggleDetails = (user) => {
    setSelectedUser(user);
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    setError("");
    setLoading(true);
    axios
      .get("https://backend-three-kohl.vercel.app/api/users")
      .then((response) => setData(response.data))
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  // if(loading)
  // return(
  //   <div className='font-bold text-2xl'>loading...</div>
  // )
  // if(error)
  //  return(
  //      <div className='font-bold text-2xl text-red-700'>Something went wrong</div>
  //   )
  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="p-4 bg-blue-500 text-black rounded-md shadow-md">
            <p className="font-bold text-2xl">Loading...</p>
          </div>
        </div>
      ) : error ? (
        <div className="text-red-700 bg-red-100 p-4 rounded-md border border-red-300">
          <p className="font-bold text-lg">Oops! Something went wrong</p>
          <p className="text-sm mt-2">
            We apologize for the inconvenience. Please try again later.
          </p>
        </div>
      ) : (
        <div>
          <h1 className="font-bold text-xl bg-gray-900 text-white rounded-xl p-3">
            User Data
          </h1>
          <div className="flex flex-wrap">
            {data.map((user) => (
              <div key={user.id} className="w-1/4 p-4">
                <div className="bg-gray-300 shadow-md p-4 rounded-md">
                  <h3 className="text-xl font-semibold">
                    <strong>Name:</strong>
                    {user.name}
                  </h3>
                  <h4 className="text-gray-700">
                    <strong>Email:</strong>
                    {user.email}
                  </h4>
                  <p className="text-gray-700">
                    <strong>Phone:</strong>
                    {user.phone}
                  </p>
                  <button
                    onClick={() => toggleDetails(user)}
                    className="py-2 px-4 bg-gray-950 text-white mt-2 rounded-lg"
                  >
                    View Details
                  </button>

                  {showDetails && selectedUser === user && (
                    <ViewDetails user={user} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
