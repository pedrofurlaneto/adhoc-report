import { useContext } from "react"
import { ConfigureContext } from "../contexts/configure-context";

export function useConfigure() {
    return useContext(ConfigureContext);
}