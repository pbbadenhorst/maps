var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { runNativeCommand, isAndroid } from '../utils';
let callbackIncrement = 0;
const NativeBridgeComponent = (Base, nativeModuleName) => class extends Base {
    constructor(...args) {
        super(...args);
        this._nativeModuleName = nativeModuleName;
        this._onAndroidCallback = this._onAndroidCallbackO.bind(this);
        this._callbackMap = new Map();
        this._preRefMapMethodQueue = [];
    }
    _addAddAndroidCallback(id, resolve, reject) {
        this._callbackMap.set(id, { resolve, reject });
    }
    _removeAndroidCallback(id) {
        this._callbackMap.delete(id);
    }
    _onAndroidCallbackO(e) {
        const callbackID = e.nativeEvent.type;
        const callback = this._callbackMap.get(callbackID);
        if (!callback) {
            return;
        }
        this._callbackMap.delete(callbackID);
        const { payload } = e.nativeEvent;
        if (payload.error) {
            callback.reject.call(null, new Error(payload.error));
        }
        else {
            callback.resolve.call(null, payload);
        }
    }
    _runPendingNativeCommands(nativeRef) {
        return __awaiter(this, void 0, void 0, function* () {
            if (nativeRef) {
                while (this._preRefMapMethodQueue.length > 0) {
                    const item = this._preRefMapMethodQueue.pop();
                    if (item && item.method && item.resolver) {
                        const res = yield this._runNativeCommand(item.method.name, nativeRef, item.method.args);
                        item.resolver(res);
                    }
                }
            }
        });
    }
    _runNativeCommand(methodName, nativeRef, args = []) {
        if (!nativeRef) {
            return new Promise((resolve) => {
                this._preRefMapMethodQueue.push({
                    method: { name: methodName, args },
                    resolver: resolve,
                });
            });
        }
        if (isAndroid()) {
            return new Promise((resolve, reject) => {
                callbackIncrement += 1;
                const callbackID = `${methodName}_${callbackIncrement}`;
                this._addAddAndroidCallback(callbackID, resolve, reject);
                args.unshift(callbackID);
                runNativeCommand(this._nativeModuleName, methodName, nativeRef, args);
            });
        }
        return runNativeCommand(this._nativeModuleName, methodName, nativeRef, args);
    }
};
export default NativeBridgeComponent;
