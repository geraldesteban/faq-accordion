import { Accordion } from "./questionAndAnswers";
import { Title } from "./Title";

export function FAQCard() {
  return (
    <div className="card">
      <Title />
      <Accordion />
    </div>
  );
}
