import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [AlertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {AlertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}> Hallo !</Alert>
      )}
      <Button
        onClick={() => {
          setAlertVisibility(true);
        }}
        color="secondary"
      >
        Great Success!
      </Button>
    </div>
  );
}

export default App;
