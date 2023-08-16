"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVectisForCosmos = exports.VectisCosmosProvider = void 0;
const cosmos_provider_1 = require("./providers/cosmos.provider");
Object.defineProperty(exports, "VectisCosmosProvider", { enumerable: true, get: function () { return cosmos_provider_1.VectisCosmosProvider; } });
__exportStar(require("./types"), exports);
function getVectisForCosmos() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            const URL = `https://ipfs.io/ipfs/QmeAsJWwGkmiDbSPkodHMTGYnGvWZ3ENi1XCpwsZVTvyq1`;
            if (!document.querySelector(`script[src="${URL}"]`)) {
                const script = document.createElement('script');
                script.src = URL;
                document.head.appendChild(script);
            }
            const listener = (e) => {
                if (e.data.type === 'vectis-ready') {
                    removeEventListener('message', listener);
                    resolve(new cosmos_provider_1.VectisCosmosProvider());
                }
            };
            addEventListener('message', listener);
        });
    });
}
exports.getVectisForCosmos = getVectisForCosmos;