// https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/OBJLoader.js

import { Material } from "../../../node_modules/@types/three/three-core";
import {LoadingManager} from "../../../node_modules/@types/three/three-core";
import {Group} from "../../../node_modules/@types/three/three-core";
import {MaterialCreator} from "../../../node_modules/@types/three/three-mtlloader";

export class OBJLoader {

    constructor(manager?: LoadingManager);
    manager: LoadingManager;
    regexp: any;
    materials: Material[];
    path: string;

    load(url: string, onLoad: (group: Group) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
    parse(data: string) : Group;
    setPath(value: string) : void;
    setMaterials(materials: MaterialCreator) : void;
    _createParserState() : any;

}

export as namespace OBJLoaderr;