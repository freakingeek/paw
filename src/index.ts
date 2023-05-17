class PawStorage {
  [property: string]: any;
  private isOnServer = typeof window === "undefined";

  /**
   * Parses the value from a string to the specified type.
   * @template T
   * @param {string | null} value - The value to parse.
   * @returns {T | null} The parsed value or null if the input value is null.
   * @private
   */

  private _parse<T>(value: string | null): T | null {
    return value ? JSON.parse(value) : null;
  }

  /**
   * Retrieves the value associated with the specified key from sessionStorage or the dynamic properties.
   * @template T
   * @param {string} key - The key to retrieve the value for.
   * @returns {T | null} The value associated with the key, or null if not found.
   */

  get<T>(key: string): T | null {
    if (!this.isOnServer) {
      return this._parse(sessionStorage.getItem(key));
    }

    // Simulate real sessionStorage API behavior
    return this[key] !== undefined ? this[key] : null;
  }

  /**
   * Stores the value associated with the specified key in sessionStorage and updates the dynamic properties.
   * @template T
   * @param {string} key - The key to store the value under.
   * @param {T} value - The value to store.
   */

  set<T>(key: string, value: T) {
    if (!this.isOnServer) {
      sessionStorage.setItem(key, JSON.stringify(value));
    }

    this[key] = value;
  }
}

export default PawStorage;
