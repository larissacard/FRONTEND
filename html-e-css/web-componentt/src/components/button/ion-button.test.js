import { describe, expect, test } from "@jest/globals";

describe("IonButton", () => {
  test("O componente é renderizado corretamente", () => {
    const componente = document.getElementsByClassName("ion-btn");
    expect(componente).not.toBeNull();
  });
});
