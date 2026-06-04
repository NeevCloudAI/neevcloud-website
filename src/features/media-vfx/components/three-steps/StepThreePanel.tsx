const StepThreePanel = () => {
  const darkIndices = new Set([4, 8, 10, 16, 21, 30, 35, 38, 45, 50, 52, 54]);
  const nodes = Array.from({ length: 55 }, (_, i) => !darkIndices.has(i));

  return (
    <div className="bg-black overflow-hidden flex items-center justify-center w-148.5 h-68 rounded-lg">
      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: "repeat(11, 42px)",
          gridTemplateRows: "repeat(5, 42px)",
        }}
      >
        {nodes.map((active, i) => (
          <div
            key={i}
            className={`w-10.5 h-10.5 rounded-sm ${
              active ? "bg-primary" : "bg-[#384245]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default StepThreePanel;
