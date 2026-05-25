const AnimatedWave = ({ flip = false }) => (
  <div className={`wave-divider ${flip ? "is-flipped" : ""}`} aria-hidden="true">
    <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
      <path d="M0,86 C180,34 320,32 500,76 C720,132 870,120 1060,66 C1230,18 1340,40 1440,78 L1440,140 L0,140 Z" />
    </svg>
  </div>
);

export default AnimatedWave;
