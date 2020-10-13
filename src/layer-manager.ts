declare class LayerManager {
    //code
    firstName: string;
    constructor(name: string);
    //code
}

let self: LayerManager;

function LayerManager(this: LayerManager, name: string) {
    //code
    self = this;
    //code
    self.firstName = name;
}



export default LayerManager;
