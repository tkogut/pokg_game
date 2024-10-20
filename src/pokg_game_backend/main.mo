import Random "mo:base/Random";
import Nat "mo:base/Nat";
import Nat8 "mo:base/Nat8";

actor PokgGame {
  public func getRandomPosition() : async (Nat, Nat) {
    let width : Nat = 800; // Define width as Nat
    let height : Nat = 600; // Define height as Nat
    let randomBlob = await Random.blob();
    let x = Random.rangeFrom(Nat8.fromNat(255), randomBlob); // Use 255 for Nat8 conversion
    let y = Random.rangeFrom(Nat8.fromNat(255), randomBlob);
    return (x % width, y % height); // Modulo operation to fit within window size
  }
}
