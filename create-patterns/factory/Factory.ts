export interface IProductCar {
    run(): void;
}

export class BaoMaCar implements IProductCar {

    public run() {

        console.log("Bao Ma running, it is good");
    }
}

export class BenChiCar implements IProductCar {

    public run() {

        console.log("Ben Chi running, it is good");
    }
}

export interface IFactory {
    
    createCar(): IProductCar;
}

export class BaoMaFactory {

    public createCar(): IProductCar {

        return new BaoMaCar();
    }
}

export class BenChiFactory {

    public createCar(): IProductCar {

        return new BenChiCar();
    }
}

class Boot {

    public static main() {

       let factory = new BaoMaFactory()

       console.log(factory.createCar().run());
    }
}

Boot.main()