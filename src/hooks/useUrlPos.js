import { useSearchParams } from "react-router-dom";

export default function useUrlPos() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [lat, lng];
}
