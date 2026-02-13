/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

class Solution {
    lowerBound(nums, target) {
        // code here
        let n=nums.length
        let L=0
        let H=n-1
        let ans=n
        while (H >=L){
            let mid=Math.floor((H+L)/2)
            if (nums[mid]>=target){
                ans=mid
                H=mid-1
            }
            else{
                L=mid+1
            }
        }
        return ans
    }
}
