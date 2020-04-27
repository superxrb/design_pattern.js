class SystemA {
    public operationA() {
        console.log("call systemA interface.")
    }
}

class SystemB {
    public operationB() {
        console.log("call systemB interface.")
    }
}

class SystemC {
    public operationC() {
        console.log("call systemC interface.")
    }
}

class Facade {

    private _systemA: SystemA;
    private _systemB: SystemB;
    private _systemC: SystemC;
    
    public constructor(
       
    ) {
        this._systemA = new SystemA();
        this._systemB = new SystemB();
        this._systemC = new SystemC();
    }
    
    public wrapOpration() {

        this._systemA.operationA();

        this._systemB.operationB();

        this._systemC.operationC();
    }
}


class Boot {

    public static main() {

       let facade = new Facade();

       facade.wrapOpration();
    }
}

Boot.main()