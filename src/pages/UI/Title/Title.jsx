import classes from './Title.module.css';

const Title = (props) => (
    <h3 className={classes.Title}>{props.children}</h3>
);

export default Title;