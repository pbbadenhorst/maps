import React from 'react';
class AbstractSource extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.setNativeRef = (instance) => {
            this._nativeRef = instance;
        };
    }
    setNativeProps(props) {
        if (this._nativeRef) {
            this._nativeRef.setNativeProps(props);
        }
    }
}
export default AbstractSource;
