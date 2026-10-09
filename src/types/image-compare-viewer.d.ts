declare module "image-compare-viewer" {
  type ImageCompareOptions = {
    controlColor?: string;
    controlShadow?: boolean;
    addCircle?: boolean;
    addCircleBlur?: boolean;
    smoothing?: boolean;
    smoothingAmount?: number;
    showLabels?: boolean;
    labelOptions?: { before?: string; after?: string; onHover?: boolean };
    hoverStart?: boolean;
    verticalMode?: boolean;
    startingPoint?: number;
    fluidMode?: boolean;
  };

  export default class ImageCompare {
    constructor(element: HTMLElement, options?: ImageCompareOptions);
    mount(): void;
  }
}
