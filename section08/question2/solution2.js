const deleteDuplicates = (head) => {
  if (!head) return head;

  let current = head;
  let next = head.next;

  const seen = new Set();
  seen.add(current.val);

  while (next) {
    if (seen.has(next.val)) {
      current.next = next.next;
    } else {
      seen.add(next.val);
      current = next;
    }
    next = next.next;
  }

  return head;
};

// Time complexity: O()
// Space complexity: O()
