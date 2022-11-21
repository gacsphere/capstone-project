import EditCardForm from "./EditCardForm";
import { screen, render } from "@testing-library/react";

const initialNestingBoxes = [
  {
    id: "a",
    date: "2021-08-31",
    time: "15:56",
    latitude: 49.10266,
    longitude: 8.2704,
    boxnumber: 246,
    count: 4,
  },
  {
    id: "b",
    date: "2021-08-31",
    time: "16:00",
    latitude: 49.104272,
    longitude: 8.271784,
    boxnumber: 247,
    count: 25,
  },
  {
    id: "c",
    date: "2021-08-31",
    time: "16:07",
    latitude: 49.103339,
    longitude: 8.27099,
    boxnumber: 248,
    count: 17,
  },
  {
    id: "d",
    date: "2021-08-31",
    time: "16:17",
    latitude: 49.101676,
    longitude: 8.272304,
    boxnumber: 250,
    count: 8,
  },
  {
    id: "e",
    date: "2021-08-31",
    time: "16:34",
    latitude: 49.100838,
    longitude: 8.271718,
    boxnumber: 251,
    count: 12,
  },
];

describe("EditCardForm", () => {
  it("renders six input fields and two buttons", () => {
    render(<EditCardForm nestingbox={initialNestingBoxes.nestingbox} />);

    const countInput = screen.getAllByRole("count");
    const boxnumberInput = screen.getAllByRole("boxnumber");
    const dateInput = screen.getAllByRole("date");
    const timeInput = screen.getAllByRole("time");
    const latitudeInput = screen.getAllByRole("latitude");
    const longitudeInput = screen.getAllByRole("longitude");

    expect(countInput).toBeVisible();
    expect(boxnumberInput).toBeVisible();
    expect(dateInput).toBeVisible();
    expect(timeInput).toBeVisible();
    expect(latitudeInput).toBeVisible();
    expect(longitudeInput).toBeVisible();
  });
});
