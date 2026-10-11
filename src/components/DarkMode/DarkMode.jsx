import { useEffect, useState } from "react";
import "../../CSS/DarkMode.css";
import Sun from "../../assets/Sun.svg?react";
import Moon from "../../assets/Moon.svg?react";

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem("theme");
        if (saved) return saved === "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun className="sun" />
                <Moon className="moon" />
            </label>
        </div>
    );
};

export default DarkMode;
