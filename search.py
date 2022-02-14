class Solution:
  def search(self,nums,target):
    dict = {}
    for i in range(0,len(nums)):
      dict[nums[i]] = i
    if target not in nums:
      return -1
    for i in dict:
      if i == target:
        return dict[i]



s = Solution()
nums = [4,5,6,7,0,1,2]
target = 0
print(s.search(nums,target))