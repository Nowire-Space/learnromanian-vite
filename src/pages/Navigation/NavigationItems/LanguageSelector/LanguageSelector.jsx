import classes from './LanguageSelector.module.css';

const LanguageSelector = () => {
    return(
        <select className={classes.LanguageSelector}>
          <option value="en">EN</option>
          <option value="ro">RO</option>
          <option value="ru">RU</option>
        </select>
    );
};

export default LanguageSelector;