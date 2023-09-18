import './App.css';
import Header from './Header';
import ConditionalForm from './ConditionalForm';

const appStyle = {
  marginLeft: "auto", // Center the content horizontally
  marginRight: "auto", // Center the content horizontally
  width: "80%", // Set a fixed width for the content area
};

// Style for the grey banner
const bannerStyle = {
  backgroundColor: "lightgrey", // You can adjust the background color as needed
  padding: "1px", // Reduce the padding to make the banner shorter
  width: "70%", // Set a fixed width for the banner (adjust as needed)
  marginBottom: "20px", // Add some space below the banner
  border: "1px solid #333", // Add a border with custom width and color
  display: "flex",
  alignItems: "center", // Center vertically
  marginLeft: "15%", // Center the content horizontally
  marginRight: "auto", // Center the content horizontally
};


function App() {
  return (
    <div className="App" style={appStyle}>
      {/* Add the grey banner */}
      <div style={bannerStyle}>
        <Header title="New Post" />
      </div>
      <ConditionalForm />
    </div>
  );
}

export default App;
