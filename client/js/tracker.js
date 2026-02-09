function logAction(action) {
  let actions = JSON.parse(sessionStorage.getItem("actions")) || [];
  if (!actions.includes(action)) {
    actions.push(action);
  }
  sessionStorage.setItem("actions", JSON.stringify(actions));
}
