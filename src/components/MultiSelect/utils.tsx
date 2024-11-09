export function CreateAbleObject(text: string) {
  return {
    id: crypto.randomUUID(),
    value: text,
    isCustom: true,
  };
}
