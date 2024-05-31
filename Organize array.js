function organizeArray(arr) {
    const groupElements = (sortedArr) => {
        return sortedArr.reduce((acc, val) => {
            const last = acc[acc.length - 1];
            if (Array.isArray(last) && last[0] === val) {
                last.push(val);
            } else if (last === val) {
                acc[acc.length - 1] = [val, val];
            } else {
                acc.push(val);
            }
            return acc;
        }, []);
    };

    const numArr = groupElements(arr.filter(item => typeof item === 'number').sort((a, b) => a - b));
    const strArr = groupElements(arr.filter(item => typeof item === 'string').sort());

    return { numbers: numArr, strings: strArr };


    const arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
    function toSubArrays(arr) {
        return arr.sort((a, b) => a - b).reduce((result, num, index, array) => {
            if (index === 0 || num !== array[index - 1]) {
                result.push([num]);
            } else {
                result[result.length - 1].push(num);
            }
            return result;
        }, []);
    }
    console.log(toSubArrays(arr));