import {Component} from 'react'


class A {
    constructor(){

    }
}
class B extends A {

}

function C(xx) {
    this.a = xx
}



class F extends C{
    constructor(xx){
        super(xx)
        console.log(this.a)
    }
}

new F('22')
