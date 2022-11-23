export function isValid(value: undefined) {
  if (typeof value === "string") {
    if (value && value !== "") {
      return false;
    }
  }
  return true;
}
