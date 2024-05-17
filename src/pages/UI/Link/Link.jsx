import classes from './Link.module.css';

const link = (props) => (
    <a className={classes.Link}
       href={props.href}>{props.children}</a>
);

export default link;