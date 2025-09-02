import { Input } from "./Input";
import { Button2 } from "./Button2";

export default function TicketForm() {
  return (
    <form>
      <Input placeholder="Enter ticket title" />
      <Input placeholder="Enter ticket description" />
      <Button2 label="Submit" type="submit" />
    </form>
  );
}
