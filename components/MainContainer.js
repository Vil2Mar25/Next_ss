import Navbar from "./Navbar";
import Rodape from "./Rodape";

export default function MainContainer({children}){
    return(
        <>
            <Navbar />
            <div>{children}</div>
            <Rodape />
        </>
    )
}