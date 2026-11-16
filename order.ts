class Customer {
    private name: string
    private phone: string
    

    constructor(name: string, phone: string) {
        this.name = name
        this.phone = phone
    }

    getName(): string {
        return this.name
    }
}


abstract class MenuItem {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getPrice(): number {
        return this.price;
    }

    describe(): string {
        return `${this.name} costs ${this.price}`;
    }

    category(): string {
        return "Menu Item";
    }
}

class Dish extends MenuItem {
    private spicy: boolean;

    constructor(name: string, price: number, spicy: boolean) {
        super(name, price);
        this.spicy = spicy;
    }

    category(): string {
        return "Food";
    }

    describe(): string {
        const spicyText = this.spicy ? "spicy" : "not spicy";
        return `${super.describe()} and is ${spicyText}`;
    }

}

class Drink extends MenuItem {
    private volumeCl: number;

    constructor(name: string, price: number, volumeCl: number) {
        super(name, price);
        this.volumeCl = volumeCl;
    }

    category(): string {
        return "Drink";
    }
    
    describe(): string {
        return `${super.describe()} and has a volume of ${this.volumeCl} cl`;
    }

}

class Order {
    private customer: Customer;
    private lines: OrderLine[] = [];
    private OrderLines: OrderLine[] = [];

    constructor(customer: Customer) {
        this.customer = customer;
    }

    addLine(item: MenuItem, quantity: number): boolean {
        if (quantity <= 0) {
            return false;
        }
        this.OrderLines.push(new OrderLine(item, quantity));
        return true;
    }

    lineCount(): number {
        return this.OrderLines.length;
    }

    total(): number {
        return this.OrderLines.reduce((sum, line) => sum + line.subtotal(), 0);
    }

    summary(): string {
        return `Order Summary:\n${this.OrderLines.map(line => `- ${line.subtotal()}`).join('\n')}`;
    }

}

class OrderLine {
    private item: MenuItem;
    private quantity: number;

    constructor(item: MenuItem, quantity: number) {
        this.item = item;
        this.quantity = quantity;
    }

    subtotal(): number {
        return this.item.getPrice() * this.quantity;
    }

}


const awa = new Customer("Awa", "77 000 00 01");
console.log(awa.getName());

const thieb = new Dish("Thieboudienne", 2500, false);
const yassa = new Dish("Yassa poulet", 2000, true);
const bissap = new Drink("Bissap", 500, 33);

console.log(thieb.describe());
console.log(yassa.describe());
console.log(bissap.describe());

