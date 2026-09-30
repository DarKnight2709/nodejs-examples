// Dynamic Object Creation:
const actionType = "POST_UPDATED";
const resourceId = 42;

const eventPayload = {
  timestamp: Date.now(),
  // Evaluated dynamically:
  [`event_${actionType}`]: true,
  [`entity_${resourceId}`]: { status: "synced" },
};

console.log(eventPayload);

// Dynamic Update in Immutability / Handlers:
function handleInputChange(state, fieldName, value) {
  return {
    ...state,
    [fieldName]: value, // Computed key based on input argument
  };
}

const formState = { email: "", password: "" };
const updated = handleInputChange(formState, "email", "test@example.com");
console.log(updated); // { email: 'test@example.com', password: '' }
