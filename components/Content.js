import {
  PrimaryInfoMap,
  SecondaryInfoMap,
  SeparatorMap,
} from "./StyledComponents";

export default function CardContent({
  date,
  time,
  latitude,
  longitude,
  boxnumber,
  count,
}) {
  return (
    <>
      <PrimaryInfoMap>{count} bats</PrimaryInfoMap>
      <SeparatorMap isPrimary />
      <SecondaryInfoMap>
        {date}, {time}
      </SecondaryInfoMap>
      <SecondaryInfoMap>
        {latitude}, {longitude}
      </SecondaryInfoMap>
      <SeparatorMap />
      <PrimaryInfoMap>Nesting box no. {boxnumber}</PrimaryInfoMap>
    </>
  );
}
