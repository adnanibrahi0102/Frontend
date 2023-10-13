/* eslint-disable react/prop-types */

const ViewDetails = ({ user }) => {
    return (
      <div className="bg-gray-100 p-4 rounded-lg mt-4">
        <h2 className="text-lg font-semibold">Details:</h2>
        <div className="mt-2">
          <p className="text-gray-700">
            <strong>Address:</strong> {user.address?.street}, {user.address?.suite}, {user.address?.city}, {user.address?.zipcode}
          </p>
          <p className="text-gray-700">
            <strong>Website:</strong> {user.website}
          </p>
          <p className="text-gray-700">
            <strong>Company:</strong> {user.company.name}
          </p>
          <p className="text-gray-700">
            <strong>Catch Phrase:</strong> {user.company.catchPhrase}
          </p>
        </div>
      </div>
    );
  };
  
  export default ViewDetails;
  