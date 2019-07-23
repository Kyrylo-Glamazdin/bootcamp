//Kyrylo Glamazdin

class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> intersectionNums;
        unordered_set<int> duplicates;
        for (int i = 0; i < nums1.size(); i++){
            intersectionNums.insert(nums1[i]);
        }
        for (int j = 0; j < nums2.size(); j++){
            if (intersectionNums.find(nums2[j]) != intersectionNums.end()){
                duplicates.insert(nums2[j]);
            }
        }
        vector<int> intersectedNumsVector(duplicates.begin(), duplicates.end());
        return intersectedNumsVector;
    }
};
