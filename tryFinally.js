/**
 * Created by jane on 10/04/2018.
 */
function a() {

    try {
        return 1
    } catch (e) {
        console.log(2)
    } finally {
        console.log(3)
    }
}

a()