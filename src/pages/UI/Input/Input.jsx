import classes from './Input.module.css';
import PasswordInput from "../PasswordInput/PasswordInput.jsx";

const input = (props) => {
    let inputElement;
    const inputClasses = [];

    if (props.invalid && props.touched) {
        inputClasses.push(classes.Invalid)
    }

    switch (props.elementType) {
        case ('input'):
            if (props.label && !props.errorMessage) {
                inputElement = <div className={classes.LabeledInput}>
                    <label>
                        {props.label}
                        <div className={classes.IconInput}>
                            {props.icon}
                            <input value={props.value}
                                   onChange={props.changed}
                                   placeholder={props.placeholder}/>
                        </div>
                    </label>
                </div>
            } else if (props.label && props.errorMessage) {
                inputElement = <div className={classes.LabeledInput}>
                    <label>
                        {props.label}
                        <div className={classes.IconInput}>
                            {props.icon}
                            <input value={props.value}
                                   onChange={props.changed}
                                   placeholder={props.placeholder}/>
                        </div>
                    </label>
                    <div className={classes.Error}>
                        <p>{props.errorMessage}</p>
                    </div>
                </div>
            } else {
                inputElement = <div className={classes.LabeledInput}>
                    {props.icon}
                    <input value={props.value}
                           onChange={props.changed}/>
                </div>
            }
            break;
        case ('password'):
            inputElement = <PasswordInput {...props}/>
            break;
        case ('textarea'):
            inputElement = <textarea value={props.value}
                                     onChange={props.changed}
                                     {...props.elementConfig} />;
            break;
        case ('select'):
            inputElement = <div className={classes.LabeledInput}>
                <label>
                    {props.label}
                    <div className={classes.IconInput}>
                        {props.icon}
                        <select className={classes.Select}
                                value={props.value}
                                onChange={props.changed}>
                            {props.options}
                        </select>
                    </div>
                </label>
            </div>
            break;
        case ('checkbox'):
            if (props.errorMessage) {
                inputElement =
                    <div>
                            <input id={props.elementName}
                                   name={props.elementName}
                                   type={props.elementType}
                                   checked={props.value}
                                   onChange={props.changed}/>
                            <label htmlFor={props.elementName}>{props.label}</label>
                        <div className={classes.Error}>
                            <p>{props.errorMessage}</p>
                        </div>
                    </div>
            } else {
                inputElement =
                    <div>
                        <input id={props.elementName}
                               name={props.elementName}
                               type={props.elementType}
                               checked={props.value}
                               onChange={props.changed}/>
                        <label htmlFor={props.elementName}>{props.label}</label>
                    </div>
            }
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')}
                                  value={props.value}
                                  onChange={props.changed}
                                  {...props.elementConfig} />;
    }

    return inputElement;
}

export default input;