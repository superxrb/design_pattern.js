import { BaoMaCar } from "../factory/Factory";

export interface ICarBuilder {

    buildPartMotor(): void;

    buildPartBody(): void;

    buildPartWheel(): void;
}

export class ConcretBaoMaBuilder {

    public buildPartMotor() {

        console.log("build BaoMa motor ok!");
    }

    public buildPartBody() {

        console.log("build BaoMa body ok!");
    }

    public buildPartWheel() {

        console.log("build BaoMa wheel ok!");
    }
}

export class ConcretBenChiBuilder {

    public buildPartMotor() {

        console.log("build BenChi motor ok!");
    }

    public buildPartBody() {

        console.log("build BenChi body ok!");
    }

    public buildPartWheel() {

        console.log("build BenChi wheel ok!");
    }

}

export class Director {

    private _builder !: ICarBuilder;

    public setBuilder(builder: ICarBuilder) {

        this._builder = builder;
    }

    public construct() {

        this._builder.buildPartMotor();
        this._builder.buildPartBody();
        this._builder.buildPartWheel();
    }
}

class Boot {

    public static main() {

       let director = new Director();
       let builder = new ConcretBenChiBuilder();
       
       
       director.setBuilder(builder);
       director.construct();
    }
}

Boot.main()