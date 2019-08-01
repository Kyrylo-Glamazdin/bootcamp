int findName(vector<vector<string>> vec, string word){
    for (int i = 0; i < vec.size(); i++){
        for (int j = 0; j < vec[i].size(); j++){
            if (vec[i][j] == word){
                return i;
            } 
        }
    }
    return -1;
}

vector<string> removeDuplicates(vector<string> vec){
    unordered_set<string> mySet;
    for (int i = 0; i < vec.size(); i++){
        mySet.insert(vec[i]);
    }
    vector<string> result(mySet.begin(), mySet.end());
    return result;
}

string smallestWord(vector<string> vec){
    string result = vec[0];
    for (int i = 0; i < vec.size(); i++){
        if (vec[i] < result){
            result = vec[i];
        }
    }
    return result;
}

unordered_map<string, int> baby_names(unordered_map<string, int> frequencies, vector<vector<string>> synonyms) {
    vector<vector<string>> fullListSynonyms;
    for (int i = 0; i < synonyms.size(); i++){
        int foundIndex1 = findName(fullListSynonyms, synonyms[i][0]);
        int foundIndex2 = findName(fullListSynonyms, synonyms[i][1]);
        if (foundIndex1 != -1){
            fullListSynonyms[foundIndex1].push_back(synonyms[i][0]);
            fullListSynonyms[foundIndex1].push_back(synonyms[i][1]);
        }
        else if (foundIndex2 != -1){
            fullListSynonyms[foundIndex1].push_back(synonyms[i][0]);
            fullListSynonyms[foundIndex1].push_back(synonyms[i][1]);
        }
        else{
            vector<string> newVec;
            newVec.push_back(synonyms[i][0]);
            newVec.push_back(synonyms[i][1]);
            fullListSynonyms.push_back(newVec);
        }
    }
    for (int i = 0; i < fullListSynonyms.size(); i++){
        fullListSynonyms[i] = removeDuplicates(fullListSynonyms[i]);
    }
    unordered_map<string, int> resultMap;
    for (int i = 0; i < fullListSynonyms.size(); i++){
        string keyString = smallestWord(fullListSynonyms[i]);
        int counter = 0;
        for (int j = 0; j < fullListSynonyms[i].size(); j++){
            counter+= frequencies[fullListSynonyms[i][j]];
            resultMap[keyString] = counter;
        }
    }
    return resultMap;
}