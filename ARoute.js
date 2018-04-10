/**
 * Created by jane on 04/04/2018.
 */
function A(prop) {
    const {
        name = false,
        age
    } = prop

    console.log(name)
}

A({name: 'jane'})
A({age: 23})