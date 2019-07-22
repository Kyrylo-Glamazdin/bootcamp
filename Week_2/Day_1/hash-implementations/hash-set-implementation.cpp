class MyHashSet {
public:
    /** Initialize your data structure here. */
    int myHash [1000000];
    int size;
    
    int getHashIndex(int key1){
        return key1 % 1000000;
    }
    
    MyHashSet() {
        size = 1000000;
        for (int i = 0; i < size; i++){
            myHash[i] = 0;
        }
    }
    
    void add(int key) {
        myHash[getHashIndex(key)] = 1;
    }
    
    void remove(int key) {
        myHash[getHashIndex(key)] = 0;
    }
    
    /** Returns true if this set contains the specified element */
    bool contains(int key) {
        return myHash[getHashIndex(key)] == 1;
    }
};
