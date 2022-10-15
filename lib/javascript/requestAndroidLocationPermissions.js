var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PermissionsAndroid } from 'react-native';
import { isAndroid } from './utils';
export function requestAndroidLocationPermissions() {
    return __awaiter(this, void 0, void 0, function* () {
        if (isAndroid()) {
            const res = yield PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
            ]);
            if (!res) {
                return false;
            }
            const permissions = Object.keys(res);
            for (const permission of permissions) {
                if (res[permission] === PermissionsAndroid.RESULTS.GRANTED) {
                    return true;
                }
            }
            return false;
        }
        throw new Error('You should only call this method on Android!');
    });
}
