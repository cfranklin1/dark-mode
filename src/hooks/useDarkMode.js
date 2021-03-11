import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [ someValue, setSomeValue ] = useLocalStorage('drk');

    return [someValue, setSomeValue];
}

export default useDarkMode;