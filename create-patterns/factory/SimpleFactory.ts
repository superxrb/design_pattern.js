

export interface IProduct {

    name: string;
    
    getName(): string;
    
}

class ConcretProductA implements IProduct {

    public name: string;
    
    public getName() {
       
        return this.name;
    }
}

class ConcretProductB implements IProduct {

    public name: string;
    
    public getName() {
       
        return this.name;
    }
}

class Factory {

    public createProduct(name: string) {
        
        switch(name) {

            case "A": 
                return new ConcretProductA();

            case "B":
                return new ConcretProductB();

        }
    }
}

class Boot {

    public static main() {

       let factory = new Factory()

       console.log(factory.createProduct("a").getName());
    }
}

Boot.main()