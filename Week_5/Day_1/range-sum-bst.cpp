//Kyrylo Glamazdin

class Solution {
public:
    int rangeSumBST(TreeNode* root, int L, int R) {
        //base case
        if (root == NULL){
            return 0;
        }
        //if value of the root is within both limits, call this function on both child nodes
        if (root->val > L && root-> val < R){
            return root->val + rangeSumBST(root->left, L, R) + rangeSumBST(root->right, L, R);
        }
        //the following if-statements utilize the BST property of the tree, and pass this recursive function down only to correct child nodes
        else if (root->val == L){
            return root->val + rangeSumBST(root->right, L, R);
        }
        else if (root->val == R){
            return root->val + rangeSumBST(root->left, L, R);
        }
        else if (root->val < L){
            return rangeSumBST(root->right, L, R);
        }
        else if (root->val > R){
            return rangeSumBST(root->left, L, R);
        }
        else{
            return 0;
        }
    }
};
