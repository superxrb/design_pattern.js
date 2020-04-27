
export interface IFrigProduct {
    
    run(): void;
}

export interface ITVProduct {

    show(): void;
}

export class HaierFrig implements IFrigProduct {

    public run() {
        console.log("haier frig is running");
    }
}

export class GeliFrig implements IFrigProduct {
    
    public run() {
        console.log("geli frig is running");
    }
}

export class HaierTV implements ITVProduct {

    public show() {
        console.log("haier tv showing");
    }
}

export class GeliTV implements ITVProduct {

    public show() {
        console.log("geli tv showing");
    }
}

export interface IAbstractFactory {
    createTV(): ITVProduct;
    createFrig(): IFrigProduct;
}

export class HaierFactory implements IAbstractFactory {

    public createTV() {
        return new HaierTV();
    }
    public createFrig() {
        return new HaierFrig();
    }
}

export class GeliFactory implements IAbstractFactory {

    public createTV() {
        return new GeliTV();
    }
    public createFrig() {
        return new GeliFrig();
    }
}

class Boot {

    public static main() {

       let factory = new HaierFactory();

       console.log(factory.createFrig().run());

       factory = new GeliFactory();

       console.log(factory.createTV().show());
    }
}

Boot.main()