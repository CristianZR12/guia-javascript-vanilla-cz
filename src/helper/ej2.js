let valores = [true, false, "hola", "adios", 2];

var max = 0;
var maxString;

function getMaxValueString() {

    if (valores.length > 0) {
        valores.forEach((val) => {
            if ((typeof(val) == 'string') && (val.length > max)) {
                max = val.length;
                maxString = val;
            }
        });
    } else {
        maxString = '';
    }

    return maxString;
}
export { getMaxValueString };