import { useContext } from "react";
import { EdgeSnackContext } from "../EdgeSnackContext";

export const useEdgeSnack = () => useContext(EdgeSnackContext);