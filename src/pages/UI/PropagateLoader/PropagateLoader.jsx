import {PropagateLoader} from "react-spinners";
import classes from './PropagateLoader.module.css';

const propagateLoader = (props) => (
    <div className={classes.PropagateLoader}>
        <PropagateLoader
            loading={true}
            speedMultiplier={1.5}
            color={"#ffffff"}/>
    </div>
);

export default propagateLoader;