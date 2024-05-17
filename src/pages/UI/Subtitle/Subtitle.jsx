import classes from './Subtitle.module.css';

const subTitle = (props) => (
    <h6 className={classes.Subtitle}>{props.children}</h6>
);

export default subTitle;