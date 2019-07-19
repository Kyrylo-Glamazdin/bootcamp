void dutch_flag(vector<int> arr, int pivot){
	vector<int> new_arr;
	new_arr.resize(arr.size());
	int s_ind = 0;
	int e_ind = nums.size() - 1;
	for (int i = 0; i < arr.size(); i++){
		if (arr[i] < pivot){
			new_arr[s_ind] = arr[i];
			s_ind++;
		}
		else if (arr[i] > pivot){
			new_arr[e_ind] = arr[i];
			e_ind--;
		}
	}
	
	int p_ind = s_ind + 1;
	for (int i = 0; i < arr.size(); i++){
		if (arr[i] == pivot){
			new_arr[p_ind] = arr[i];
			p_ind++;
		}
	}
	arr = new_arr;
}
