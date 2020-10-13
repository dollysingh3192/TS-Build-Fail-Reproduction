import LayerManager from './layer-manager';

export class Assembler {
    layer;

    constructor() {
        //Add Map Default Layer's
        this.layer = new LayerManager("dolly");
    }
}
