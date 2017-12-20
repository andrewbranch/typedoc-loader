/**
 * Neither a vegetable nor a mineral
 */
export abstract class Animal {
  /**
   * Ambulates one way or another at some speed
   * @param speed - The speed at which to walk in meters per second
   * @param direction - Which direction in which to walk
   */
  public walk(speed: number, direction: 'this way' | 'that way') {
    return;
  }

  /**
   * The date the animal was born
   */
  public abstract birthday: Date;
}