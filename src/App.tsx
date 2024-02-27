import Resume from "./components/Resume";
import PrintContainer from "./components/layouts/PrintContainer";

function App() {
  return (
    <div className="grid place-items-center min-h-screen bg-slate-300">
      <PrintContainer>
        <Resume />
      </PrintContainer>
    </div>
  );
}

export default App;
