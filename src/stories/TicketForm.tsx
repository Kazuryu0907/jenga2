import { Input } from "./Input";
import { Button2 } from "./Button2";
import { TextArea } from "./TextArea";
import { Selector } from "./Selector";

export function TicketForm() {
  return (
    <form>
      <Selector
        label="時間"
        valueToLabel={
          new Map([
            ["morning", "Morning"],
            ["afternoon", "Afternoon"],
            ["evening", "Evening"],
          ])
        }
        placeholder="時間帯を選択"
      />
      <Input label="名前" placeholder="みけ" />
      <div className="flex justify-center">
        <Input label="大人" placeholder="1" type="number" />
        <Input label="子供" placeholder="0" type="number" />
      </div>
      <TextArea label="備考欄" placeholder="車いすあり" />

      <Button2 label="Submit" type="submit" />
    </form>
  );
}
