import React from 'react';
import { type NativeArg } from '../utils';
export declare type RNMBEvent<PayloadType = {
    [key: string]: string;
}> = {
    payload: PayloadType;
    type: string;
};
declare const NativeBridgeComponent: <Props extends object, BaseComponent extends new (...ags: any[]) => React.Component<Props, {}, any>>(Base: BaseComponent, nativeModuleName: string) => {
    new (...args: any[]): {
        _nativeModuleName: string;
        _onAndroidCallback: (e: any) => void;
        _callbackMap: Map<string, any>;
        _preRefMapMethodQueue: {
            method: {
                name: string;
                args: NativeArg[];
            };
            resolver: (value: NativeArg) => void;
        }[];
        _addAddAndroidCallback<ReturnType_1>(id: string, resolve: (value: ReturnType_1) => void, reject: (error: Error) => void): void;
        _removeAndroidCallback(id: string): void;
        _onAndroidCallbackO(e: React.SyntheticEvent<Element, RNMBEvent>): void;
        _runPendingNativeCommands<RefType>(nativeRef: RefType): Promise<void>;
        _runNativeCommand<RefType_1, ReturnType_2 = NativeArg>(methodName: string, nativeRef: RefType_1, args?: NativeArg[]): Promise<ReturnType_2>;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Props>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        render(): React.ReactNode;
        readonly props: Readonly<Props>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Props>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Props>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Props>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Props>, nextState: Readonly<{}>, nextContext: any): void;
    };
} & BaseComponent;
export default NativeBridgeComponent;
