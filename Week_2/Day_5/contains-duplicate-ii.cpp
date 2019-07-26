//Kyrylo Glamazdin

class Solution {
    public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        if (k == 0){
            return false;
        }
        vector<int> emptyVec;
        unordered_map<int, vector<int>> copySet;
        for (int i = 0; i < nums.size(); i++){
            copySet[nums[i]] = emptyVec;
        }
        for (int i = 0; i < nums.size(); i++){
            copySet[nums[i]].push_back(i);
        }
        for(int i = 0; i < nums.size(); i++){
            if (copySet[nums[i]].size() >= 1){
                for (int j = 0; j < copySet[nums[i]].size() - 1; j++){
                    for (int q = j + 1; q < copySet[nums[i]].size(); q++){
                        if (abs(copySet[nums[i]][j] - copySet[nums[i]][q]) <= k){
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }
};
