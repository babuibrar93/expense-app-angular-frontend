export function CapitalizeObjectKeys(object: any): any {
  if (!object || typeof object !== 'object') return null;

  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [
      key.charAt(0).toUpperCase() + key.slice(1),
      value,
    ])
  );
}
