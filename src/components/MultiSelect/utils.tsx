export function CreateAbleObject(text: string) {
  return {
    id: Date.now(),
    value: text,
    isCustom: true,
  };
}
