export class ApplicationInformationResponseDTO {
  public name: string;
  public description: string;

  public constructor(init?: Partial<ApplicationInformationResponseDTO>) {
    if (init !== null && init !== undefined) {
      Object.assign(this, init);
    }
  }
}
