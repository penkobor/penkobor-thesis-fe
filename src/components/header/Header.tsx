import * as React from 'react'
import { Toph } from './Toph';
import { Bottom } from './Bottom';
import { observer, inject } from 'mobx-react';
import { RoutingStore } from '../RoutingStore';

@inject("store")
@observer
export class Header extends React.Component<{store?:RoutingStore},{}> {
    render() {
        return(
            <div>
                <Toph />
                <Bottom />
            </div>
        );
    }
}