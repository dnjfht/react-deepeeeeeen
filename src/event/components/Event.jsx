import Button from "./Button";

export default function Event() {
  return (
    <div
      className="Toolbar"
      onClickCapture={() => console.log("1. div 캡처!")}
      onClick={() => console.log("6. div 버블!")}
    >
      <Button
        onClickCapture={() => console.log("2. button 캡처!")}
        onClick={() => console.log("5. button 버블!")}
      >
        Play Movie
      </Button>
      <Button
        onClickCapture={() => console.log("3. button 캡처!")}
        onClick={() => console.log("4. button 버블!")}
      >
        Upload Image
      </Button>
    </div>
  );
}
