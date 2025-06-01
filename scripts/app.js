let template = React.createElement(
"h1", null,
"Car Rendering"
);

function renderCars() {
  const models = ["BMW", "Mersedec", "WV"];

  return (
    <div>
      <h1>Car List:</h1>
      <ul>
        {models.map((cars, index) => (
          <li key={index}>{cars}</li>
        ))}
      </ul>
    </div>
  );
}

const container = document.getElementById("app");

const root = ReactDOM.createRoot(container);
root.render(template);