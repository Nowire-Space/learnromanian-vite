import PropagateLoader from '../PropagateLoader/PropagateLoader.jsx';
import classes from './Button.module.css';
import {useEffect, useState} from "react";

const button = (props) => {
    const [showLoader, setShowLoader] = useState(false);

    useEffect( () => {
        if ( props.loading ) {
            setShowLoader( true );
        }
        if ( !props.loading && showLoader ) {
            const timeout = setTimeout( () => {
                setShowLoader(false);
            }, 500 );

            return () => {
                clearTimeout( timeout );
            };
        }
    }, [ props.loading, showLoader ]);

    const classesArray = [ classes.Button, classes[ props.buttonType ] ];
    props.halfSize && classesArray.push( classes.Half );

    return (
        <button
            disabled={ props.disabled }
            className={ classesArray.join(' ') }
            onClick={ props.clicked }>
            { showLoader ? <PropagateLoader/> : props.children }
        </button>
    );
}

export default button;