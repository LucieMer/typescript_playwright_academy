import { EntryHall } from "./entry_hall.ts";

new EntryHall("Jan Novák")
  .enterBathroom()
  .returnToEntryHall()
  .askReceptionistQuestion("Ahoj, jak je?");

async function main() {
  const marie = new EntryHall("Marie Dlouhá");
  await marie
    .takeElevatorToSecondFloor()
    .then((secondFloor) => secondFloor.lookAround(3))
    .then((secondFloor) => secondFloor.returnToEntryHallByElevator())
    .then((entryHall) => entryHall.takeElevatorToSecondFloor());
}

main();
