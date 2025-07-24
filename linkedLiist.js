

class Node{
	constructor(value){
		this.value = value 
		this.next = null
	}
}

class linkedList
{
	constructor(value){
		this.newNode = new Node(vlue)
		this.head = this.newNode
		this.tail = this.newNode
		this.length = 0
	}

    printList(){
    	let temp = this.head
    	while(temp !== null){
    		concole.log(tmep.value)
    		temp = temp.next;
    	}
    }

    getHead(){
    	if (this.head !==null){
    		console.log(this.head)
    	}
    }

    getTail(){
    	if (this.tail !==null){
    		console.log(this.tail)
    	}
    }

    getLength(){
    	console.log("Thie lenght of the linkedlist is" + this.length)

    }
    makeEmpty(){
    	this.head = null 
    	this.tail = null 
    	this.lenght = 0
    }

	push(value)
	{   let newNode  = new Node(value)
		if (!this.head){
			this.head = newNode 
            this.tail = newNode 
		}

		else 
		{ 
			this.tail.next = newNode 
			this.tail = newNode 
		}
	pop(){
		if(!this.head) {return undefined}

		let temp = this.head 
		let prev = this.head 

		while(temp.next == null){
			temp = this.head.next
			prev =temp
		}

		this.tail = prev 
		this.tail.next = null 
		this.length-- 
		return temp 

	}
	if (this.length ==0){
		this.head = null
		this.tail = null
	}

	unshift(value){
		let newNode = new Node(value) 
		if (!this.head){
			this.head = newNOde
			this.tail = newNOde

		}
		else{
		newNode.next = this.head 
		this.head = newNode
		this.length++
		return this
		}
	}

	shift(){
		if (!this.head == null){
			return  undefined}
		let temp = this.head 
		this.head = this.head.next 
		temp.next = null 
		this.length--
		if (this.length ==0){
			this.head = null
			this.tail = this.head
		}
		return temp 
} 
	
     
}



function test(){
	let list = new linkedList(4)

	list.getLength()
	list.getHead()
	list.getTail()
	list.push(3)
	list.getHead()
	list.getTail()
	list.unshift(6)
	console.log(list.pop())


test()
}