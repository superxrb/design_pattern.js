

class Singleton {
    
    public static _dist: Singleton;

    public _name: string;
    
    private constructor(name: string) {
        this._name = name;
    }

    public static intialize(name: string) {
      
        if(!this._dist) {

            this._dist = new Singleton(name);
        }

        return this._dist;
    }

    public static get instance() {

        return this._dist;
    }
}

export default Singleton;

class Boot {

    public static main() {

        Singleton.intialize("kitty");

        console.log(Singleton.instance._name);
    }
}

Boot.main()