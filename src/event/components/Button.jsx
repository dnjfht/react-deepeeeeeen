export default function Button({ onClickCapture, onClick, children }) {
  return (
    <button
      onClick={(e) => {
        // e.stopPropagation();
        onClick();
      }}
      onClickCapture={onClickCapture}
    >
      {children}
    </button>
  );
}
