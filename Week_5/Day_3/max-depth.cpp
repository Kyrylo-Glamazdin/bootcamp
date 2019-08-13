//Kyrylo Glamazdin

class Solution {
public:
//helper function that takes an additional parameter, len, which is the current length of the path.
    int maxDepth(TreeNode* root, int len){
        if (root == nullptr){
            return len - 1;
        }
        //returns the maximum depth based on the current len and on the recursive calls to child nodes with len + 1
        return max(max(len, maxDepth(root->left, len + 1)), maxDepth(root->right, len + 1));
    }
    
    int maxDepth(TreeNode* root) {
        //calls helper function to do the job
        return maxDepth(root, 1);
    }
};