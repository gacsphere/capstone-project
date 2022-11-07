import { PrimaryInfo, SecondaryInfo, Separator1 } from "./ReusedStyles";

export default function CardContent({
  id,
  date,
  time,
  latitude,
  longitude,
  boxnumber,
  count,
  setToEditCardID,
}) {
  return (
    <>
      <PrimaryInfo>{count} bats</PrimaryInfo>
      <Separator1 />
      <SecondaryInfo>
        {date}, {time}
      </SecondaryInfo>
      <SecondaryInfo>
        {latitude}, {longitude}
      </SecondaryInfo>
      <Separator1 />
      <PrimaryInfo>Nestingbox no. {boxnumber}</PrimaryInfo>
    </>
  );
}
