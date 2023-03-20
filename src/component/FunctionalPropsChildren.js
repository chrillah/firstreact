import { Fragment } from "react";

function FunctionalPropsChildren(props) {
    return (
        <>
        <h2>Detta kommer från 2 stycken:
            {props.first}{props.last}
        </h2>
        <p>{props.children}</p>
        </>
     );
}

export default FunctionalPropsChildren;
