import { Audio } from "react-loader-spinner";

//just to demonstrate the loading state;
export const Loading = () => (
  <Audio
    height="180"
    width="180"
    color="black"
    ariaLabel="loading"
    wrapperStyle={{ marginLeft: "300px", marginTop: "100px" }}
  />
);
