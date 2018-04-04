import {Component} from 'react'
import * as babylon from 'babylon'

class A {
    constructor(){

    }
}
class B extends A {

}

function C(xx, cc) {
    this.a = xx
    this.b = cc
}

class E {
    constructor(a, b, c){
        this.a = a
        this.b = b
        this.c = c
        console.log('E constructor')
    }
}

class F extends Component{
    constructor(){
        super()

    }
    render(){
     return <div>FFF</div>
    }
}


new F()

const code = `function square(n){
    return n * n
}`
console.log(babylon.parse(code))
