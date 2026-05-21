const original = {
    name : "sai",
    age : 26
}

const update = {
    ...original,
    age : 27
}

console.log(update)


const original1 = {
  name: "Alice",
  skills: ["JS", "React"]
};

const updated1 = {
  ...original,
  skills: [...original1.skills, "Node"]
};


const original2 = {
  name: "Alice",
  address: {
    city: "Delhi"
  }
};

const updated2 = {
  ...original2,
  address: {
    ...original2.address,
    city: "Mumbai"
  }
};

console.log(original2.address.city); // "Delhi"