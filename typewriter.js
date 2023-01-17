const sentence = "hello from lighthouse labs\n";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 50);
}

