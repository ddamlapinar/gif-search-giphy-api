import { useTheme } from "../context/ThemeContext";
function Header(){
    
    const {theme,setTheme} = useTheme()
    return(
        <div>
            
            <button  onClick={() => setTheme(theme === "light" ? "dark" : "light")} > Change Theme</button>
            <h1 className ="text-center mt-5"> GIPHY</h1>
        </div>
    );
}
export default Header;