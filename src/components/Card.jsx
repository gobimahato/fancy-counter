import Count from "./Count";
import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
  return (
    <div className="card">
      <Title />
      <Count number={10} size="lg" />
      <ResetButton />
      <CountButtons />
    </div>
  );
}
