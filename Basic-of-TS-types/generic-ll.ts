class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class node<T> {
    data: T;
    next: node<T> | null;
    constructor(data: T) {
        this.data = data;
        this.next = this.next;
    }
}

class LinkedList<T> {
    head: node<T> | null;
    constructor() {
        this.head = null;
    }

    addAtHead(x: T): void {
        if(this.head == null) {
            this.head = new node(x);
            return;
        }
        let newNode: node<T> = new node(x);
        newNode.next = this.head;
        this.head = newNode;
    }

    display(): void {
        let temp: node<T> | null = this.head;
        while(temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

let ll = new LinkedList<Person>();

ll.addAtHead(new Person("Santosh"));
ll.addAtHead(new Person("Satvinder"));
ll.addAtHead(new Person("Suman"));
ll.addAtHead(new Person("tanmay"));
ll.display();