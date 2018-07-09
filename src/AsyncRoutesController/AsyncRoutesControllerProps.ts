import * as PropTypes from "prop-types";
import { RouteProps } from "react-router";

import { ChildrenInterface } from "../AsyncComponent";

export interface AsyncRoutesControllerProps {
    availableRoutes: {
        [key: string]: RouteProps & { resolveComponent: () => Promise<ChildrenInterface>; };
    };
    redirectPath?: string;
}

export const AsyncRoutesControllerPropTypes: {[P in keyof AsyncRoutesControllerProps]: PropTypes.Validator<any> } = {
    availableRoutes: PropTypes.object.isRequired,
    redirectPath: PropTypes.string
};
