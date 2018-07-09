import * as React from "react";
import * as PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router";

import { AsyncComponent, ChildrenInterface } from "../AsyncComponent";
import { AsyncRoutesControllerPropTypes, AsyncRoutesControllerProps } from "./AsyncRoutesControllerProps";

export class AsyncRoutesController extends React.Component<AsyncRoutesControllerProps> {
    public static readonly propTypes = AsyncRoutesControllerPropTypes;

    public render(): React.ReactNode {
        return (
            <Switch>
                {this.AvaliableRoutesList}
                {this.props.redirectPath && <Redirect to={this.props.redirectPath} />}
            </Switch>
        );
    }

    protected get AvaliableRoutesList(): Array<JSX.Element> {
        return Object.keys(this.props.availableRoutes).map((key) => {
            const { resolveComponent, ...routeProps } = this.props.availableRoutes[key];

            return (
                <Route {...routeProps} render={this.renderAsyncRoute(key)} key={key}/>
            )
        });
    }

    protected renderAsyncRoute = (key: string) => (props): JSX.Element => (
        <AsyncComponent
            childProps={props}
            resolveComponent={this.props.availableRoutes[key].resolveComponent}
        />
    )
}
