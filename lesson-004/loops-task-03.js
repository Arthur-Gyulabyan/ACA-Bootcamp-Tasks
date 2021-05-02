// Which values get shown by the "for" loop?

// The postfix
for (let i = 0; i < 5; i++) alert(i); // 0 -> 1 -> 2 -> 3 -> 4

// The prefix
for (let i = 0; i < 5; ++i) alert(i); // 0 -> 1 -> 2 -> 3 -> 4
// Both will show the same result, 'cause unlike the previous task, the counter is incremented after checking the condition.
