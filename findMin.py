class Solution:
  def findMin(self,nums):
    n = len(nums)
    while nums[n-1] < nums[0]:
      nums.insert(0,nums[n-1])
      nums.pop()
    return nums[0]

s = Solution()
print(s.findMin([11,13,15,17]))