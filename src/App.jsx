import "./App.css";

function App() {
  return (
    <>
      <div className="mockup-window border bg-base-300">
        <div className="flex justify-center px-4 py-16 bg-base-200">
          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Google"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              Google search
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="API"
              checked
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              All apies
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Vite + React"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              Web page
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
