//Kyrylo Glamazdin

class Solution {
public:
    bool find132pattern(vector<int>& nums) {
        if (nums.size() < 3){
            return false;
        }
        int i = INT_MAX;
        for (int j = 0; j < nums.size() - 1; j++){
            i = min(i, nums[j]);
            for (int k = j + 1; k < nums.size(); k++){
                if (i < nums[k] && nums[k] < nums[j]){
                    return true;
                }
            }
        }
        return false;
    }
};
