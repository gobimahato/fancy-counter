import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function ButtonContainer({ setCount }) {
  return (
    <div className="button-container">
      <CountButton type="minus" setCount={setCount} />
      <CountButton type="plus" setCount={setCount} />
    </div>
  );
}

function CountButton({ type, setCount }) {
  const handleClick = () => {
    setCount((prev) => {
      if (type === "minus") {
        const newCount = prev - 1;
        if (newCount < 0) return 0;
        return newCount;
      }

      if (type === "plus") return prev + 1;
    });
  };

  return (
    <button onClick={handleClick} className="count-btn">
      {type === "minus" && <MinusIcon className="count-btn-icon" />}
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
    </button>
  );
}
