function findTwoSum(nums, target) {
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap[complement] !== undefined && numMap[complement] !== i) {
            return [nums[i], complement];
        }
        numMap[nums[i]] = i;
    }
    return null;
}

const nums = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const target = 9;
console.log(findTwoSum(nums, target));