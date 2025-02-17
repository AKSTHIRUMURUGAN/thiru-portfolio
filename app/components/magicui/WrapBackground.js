import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
  } from "../../components/ui/card";
  import { WarpBackground } from "./ui/warp-background";
  
  export default function WarpBg({children}) {
    return (
      <WarpBackground >
       {children}
      </WarpBackground>
    );
  }
  