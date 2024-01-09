import useDarkMode from '../../hooks/useDarkMode'
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
    {darkTheme ? (
      <FaSun size='24' className='top-navigation-icon' />
    ) : (
      <FaMoon size='24' className='top-navigation-icon' />
    )}
  </span>
  )
}

export default ThemeIcon