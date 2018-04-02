import * as React from "react";

import { AsyncComponentProps, AsyncComponentState, AsyncComponentPropTypes } from "./AsyncComponentProps";

export class AsyncComponent extends React.Component<AsyncComponentProps, AsyncComponentState> {
    public static readonly propTypes = AsyncComponentPropTypes;

    public readonly state: AsyncComponentState = {
        children: null
    };

    public async componentDidMount() {
        this.setState({
            children: await this.props.resolveComponent()
        });
    }

    public render(): React.ReactNode {
        return this.state.children
            ? React.createElement(this.state.children.default, this.props.childProps)
            : null;
    }
}
