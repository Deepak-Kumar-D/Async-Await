let msg = (n) => {
    return new Promise((resolve, reject) => {
      if (n) {
        setTimeout(() => {
          console.log(n);
          resolve(n);
        }, 400);
      } else {
        reject(n);
      }
    });
};
  
  const check = msg(5)
    .then((x) => msg(--x)) // 10  --10 -> 9 // fullfilled -  resolve, error - reject  | pending
    .then((y) => msg(--y)) // 9  --9 -> 8
    .then((n) => msg(--n)) // 8  --8 -> 7
    .then((n) => msg(--n)) // 7  --7 -> 6
    .then((n) => msg(--n)) // 6  --6 -> 5
    .then((n) => msg(--n)) // 5  --5 -> 4
    .then((n) => msg(--n)) // 4  --4 -> 3
    .then((n) => msg(--n)) // 3  --3 -> 2
    .then((n) => msg(--n)) // 2  --2 -> 1
    .then((n) => msg(--n)) // 1 --1 -> 0
    .then((n) => msg("Oops!"), () => msg("Happy Ramzaan!!!"))
    .catch((err) => msg("No festival!!"));
  
  const fest = async() => {
    const result = await check;
    console.log("RESULT: " + result);
}
  
fest();
