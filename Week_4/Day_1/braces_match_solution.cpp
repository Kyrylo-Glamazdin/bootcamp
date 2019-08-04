#include <stack>
// Complete the braces function below.
vector<string> braces(vector<string> values) {
    vector<string> result;
    for (int i = 0; i < values.size(); i++){
        stack<char> charStack;
        bool rejected = false;
        for (int j = 0; j < values[i].size(); j++){
            if (values[i][j] == '{' || values[i][j] == '[' || values[i][j] == '('){
                charStack.push(values[i][j]);
            }
            else if (values[i][j] == '}'){
                if (!charStack.empty() && charStack.top() == '{'){
                    charStack.pop();
                }
                else{
                    result.push_back("NO");
                    rejected = true;
                    break;
                }
            }
            else if (values[i][j] == ']'){
                if (!charStack.empty() && charStack.top() == '['){
                    charStack.pop();
                }
                else{
                    result.push_back("NO");
                    rejected = true;
                    break;
                }
            }
            else if (values[i][j] == ')'){
                if (!charStack.empty() && charStack.top() == '('){
                    charStack.pop();
                }
                else{
                    result.push_back("NO");
                    rejected = true;
                    break;
                }
            }
        }
        if (rejected){
            continue;
        }
        else{
            if (charStack.empty()){
                result.push_back("YES");
            }
            else{
                result.push_back("NO");
            }
        }
    }
    return result;

}