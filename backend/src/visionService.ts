export interface LabelResult {
  label: string;
  confidence: number;
}

export async function analyzeImage(image: Buffer): Promise<LabelResult[]> {
  // vision API
  return [
    {
      label: 'example',
      confidence: 0.99,
    },
  ];
}