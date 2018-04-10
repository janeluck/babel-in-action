/**
 * Created by jane on 10/04/2018.
 */
function a() {

    try {
        return 1
    } finally {
        console.log(11)
    }
}

a()