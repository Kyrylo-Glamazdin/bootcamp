//Kyrylo Glamazdin

void insert_into_array(vector<int>& destination, vector<int>& source, int start) {
    int prev_destination_size = destination.size();
    int prev_destination_index = destination.size() - 1;
    destination.resize(destination.size() + source.size());
    int new_destination_index = destination.size() - 1;
    for (int i = 0; i < prev_destination_size - start; i++){
        destination[new_destination_index] = destination[prev_destination_index];
        prev_destination_index--;
        new_destination_index--;
    }
    
    for (int i = 0; i < source.size(); i++){
        destination[start + i] = source[i];
    }
}
