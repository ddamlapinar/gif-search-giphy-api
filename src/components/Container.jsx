import Header from "./Header";
import Giphy from "./Giphy";
import { useTheme } from "../context/ThemeContext";
function Container (){
    const { theme } = useTheme();
    return(
        <div className={`${theme} container--gifs`}>
              <Header/>
           
            <Giphy />
        </div>
    );
}
export default Container;