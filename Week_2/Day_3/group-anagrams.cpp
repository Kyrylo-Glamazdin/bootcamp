/*
 This solution uses a double for loop to find anagrams and add them to the result vector. After each iteration of the outer loop, the program checks whether these anagrams already appear in the unordered set, and if they do, the program ignores them. This soltion also handles cases with duplicates by finding all duplicates in the strs vector and appending them to the corresponding inner vector in the resultVector.
 
 This solution passes 100/101 cases and does not succeed when called on a large input.
 */



class Solution {
public:
    
    bool vectorFilledWithZeros(vector<int> vecToCheck){
        for (int i = 0; i < vecToCheck.size(); i++){
            if (vecToCheck[i] != 0){
                return false;
            }
        }
        return true;
    }
    
    
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        vector<vector<string>> resultVector;
        unordered_set<string> addedStrs;
        unordered_set<string> allAddedStrs;
        for (int i = 0; i < strs.size(); i++){
            vector<int> sameCharacters;
            sameCharacters.resize(26);
            for (int k = 0; k < strs[i].size(); k++){
                sameCharacters[(int)strs[i][k] - 97]++;
            }
            for (int j = i+1; j < strs.size(); j++){
                vector<int> sameCharacters2 = sameCharacters;
                for (int k = 0; k < strs[j].size(); k++){
                    sameCharacters2[(int)strs[j][k] - 97]--;
                }
                if (vectorFilledWithZeros(sameCharacters2)){
                    addedStrs.insert(strs[i]);
                    addedStrs.insert(strs[j]);
                }
            }
            if(addedStrs.empty()){
                addedStrs.insert(strs[i]);
            }
            vector<string> anagramsVector(addedStrs.begin(), addedStrs.end());
            if (allAddedStrs.find(anagramsVector[0]) == allAddedStrs.end()){
                resultVector.push_back(anagramsVector);
            }
            allAddedStrs.insert(addedStrs.begin(), addedStrs.end());
            addedStrs.clear();
        }
        
        
        vector<string> duplicates;
        unordered_set<string> copySet;
        for (int i = 0; i < strs.size(); i++){
            if (copySet.find(strs[i]) == copySet.end()){
                copySet.insert(strs[i]);
            }
            else{
                duplicates.push_back(strs[i]);
            }
        }
        
        for (string dup: duplicates){
            for (int i = 0; i < resultVector.size(); i++){
                for (int j = 0; j < resultVector[i].size(); j++){
                    if (resultVector[i][j] == dup){
                        resultVector[i].push_back(dup);
                        break;
                    }
                }
            }
        }
        
        return resultVector;
    }
};
