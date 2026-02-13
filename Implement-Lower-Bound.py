class Solution:
    def lowerBound(self, nums, target):
        # code here
        n=len(nums)
        L=0
        H=n-1
        ans=n
        while (H >=L):
            mid=((H+L)//2)
            if (nums[mid]>=target):
                ans=mid
                H=mid-1
            else:
                L=mid+1
        return ans
