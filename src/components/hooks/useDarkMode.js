import { useLocalStorage } from './useLocalStorage';
import { useEffect } from "react";

export const useDarkMode = initialValue => {

    const [darkMode , setDarkMode] = useLocalStorage("theme", initialValue)

    useEffect(() => {
        let body = document.getElementsByTagName("body");
        console.log(document.getElementsByTagName("body"));
        if (darkMode) {
          body[0].classList.add("dark-mode");
        } else {
          body[0].classList.remove("dark-mode");
        }
      }, [darkMode]);
    
      return [darkMode, setDarkMode];
}