class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // hash function
  hashFunction(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this.hashFunction(key);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push([key, value]);
    return;
  }

  get(key) {
    const index = this.hashFunction(key);
    const currentBucket = this.data[index];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          console.log(currentBucket[i][1]);
          return currentBucket[i][1];
        }
      }
    }
  }

  keys() {
    let keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] && this.data[i].length) {
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            if (this.data[i][j]) {
              keysArray.push(this.data[i][j][0]);
            }
          }
        } else {
          keysArray.push(this.data[i][0][0]);
        }
      }
    }
    return keysArray;
  }
}

const obj = new HashTable(10);
obj.set("name", "safeer");
obj.set("anme", "safeer");
obj.set("age", 21);
obj.set("place", "masterpadi");

obj.get("name");
