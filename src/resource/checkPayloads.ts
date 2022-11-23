import { isValid } from "./isEmpty";

type payloadFields = {
  [key: string]: any;
};

export function checkPayloadFields(
  payload: payloadFields | undefined,
  fields: string[]
) {
  const error: string[] = [];

  fields.forEach((field) => {
    if (
      isValid(payload![field]) ||
      payload![field].replace(/\s/g, "").length <= 0
    ) {
      error.push(`The ${field} cannot be empty`);
    }
  });

  if (error.length > 0) {
    throw new Error(error.toString());
  }

  return;
}
