module.exports = function check(str, bracketsConfig) {
    const strArr = str.split('');
    if (strArr.length % 2 !== 0) {
        return false
    }

    const openBrackets = bracketsConfig.map(config => config[0]);
    const closeBrackets = bracketsConfig.map(config => config[1]);
    const openStack = [];

    for (let i=0; i < strArr.length; i++) {
        const item = strArr[i];

        if (closeBrackets.includes(item) && openStack[openStack.length - 1] === item) {
            openStack.pop();
            continue;
        }

        if (openBrackets.includes(item)) {
            openStack.push(item)
        } else {
            if (!openStack.length) {
                return false;
            }
            const config = bracketsConfig.find(config => config[1] === item);
            const lastOpenBracket = openStack.pop();
            if (lastOpenBracket !== config[0]) {
                return false
            }
        }
    }
    return !openStack.length;
}
