import useIsMounted from "@/hooks/useIsMounted";
import { useRouter } from "next/router";

const ChanchitoDinamico = () => {
  const router = useRouter();
  const isMounted = useIsMounted();

  if(!isMounted) {
    return null
  }
  console.log({router}, router.query.id);
  
  return(
    <div>
      <p>Chanchito dinamico</p>
    </div>
  )
}
export default ChanchitoDinamico;