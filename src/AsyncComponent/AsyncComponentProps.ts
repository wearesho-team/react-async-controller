import * as React from "react";
import * as PropTypes from "prop-types";

export interface ChildrenInterface {
    default: typeof React.Component;
}

export interface AsyncComponentProps {
    resolveComponent: () => Promise<ChildrenInterface>;
    childProps?: object;
}

export const AsyncComponentPropTypes: {[P in keyof AsyncComponentProps]: PropTypes.Validator<any>} = {
    resolveComponent: PropTypes.func.isRequired,
    childProps: PropTypes.object
};

export interface AsyncComponentState {
    children: ChildrenInterface | null;
}
