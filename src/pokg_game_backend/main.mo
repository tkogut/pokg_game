import Random "mo:base/Random";
import Nat "mo:base/Nat";
import Nat8 "mo:base/Nat8";
import Int "mo:base/Int"; // Dodajemy import dla Int

actor {
  public func getRandomPosition() : async (Int.Int, Int.Int) { // Poprawnie używamy Int.Int
    let width : Nat = 800; // szerokość okna
    let height : Nat = 600; // wysokość okna
    let randomBlob = await Random.blob();
    let x = Random.rangeFrom(Nat8.fromNat(width), randomBlob);
    let y = Random.rangeFrom(Nat8.fromNat(height), randomBlob);
    return (Int.abs(x), Int.abs(y)); // Poprawnie używamy Int.abs
  };
}
