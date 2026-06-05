import {
  GRID_COLUMNS,
  GRID_ROWS,
  STEP_THREE_GRID_SHELL_CLASS,
} from "../../constants/step-three-panel.constants";

/** true = teal (active), false = grey — 12 columns × 5 rows */
const STEP_THREE_GRID: boolean[][] = [
  [true, true, true, true, false, true, true, true, false, false, true, true],
  [true, true, true, true, true, true, false, true, true, true, true, true],
  [true, true, true, true, true, true, true, true, false, false, true, true],
  [true, true, true, true, true, false, true, true, true, true, false, false],
  [true, true, false, true, true, true, true, false, true, true, true, false],
];

const StepThreePanel = () => {
  const nodes = STEP_THREE_GRID.flat();

  return (
    <div
      className={`w-fit max-w-full bg-black rounded-lg p-2 md:p-5 ${STEP_THREE_GRID_SHELL_CLASS}`}
    >
      <div
        className="grid"
        style={{
          gap: "var(--step-three-gap)",
          gridTemplateColumns: `repeat(${GRID_COLUMNS}, var(--step-three-cell))`,
          gridTemplateRows: `repeat(${GRID_ROWS}, var(--step-three-cell))`,
        }}
      >
        {nodes.map((active, i) => (
          <div
            key={i}
            className={`size-full rounded-sm ${
              active ? "bg-primary" : "bg-[#384245]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default StepThreePanel;
