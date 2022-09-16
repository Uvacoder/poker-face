export const HowTo = () => {
  return (
    <div className="border-2 border-violet-500 rounded-xl p-4 mt-4">
      <p>
        Each line of the input file will contain 5 valid card descriptions.{" "}
      </p>
      <p>Each description is in the form CS</p>
      <p>C is the name of the card (2, 3, 4, 5, 6, 7, 8, 9, T, J, Q, K, A)</p>
      <p>
        {" "}
        S is the suit (H, D, S, C for Hearts, Diamonds, Spades and Clubs
        respectively).
      </p>
      <br />
      <p>
        Example input:
        <br />
        3H JS 3C 7C 5D
        <br />
        JH 2C JD 2H 4C
        <br />
        9H 9D 3S 9S 9C
        <br />
        9C 3H 9S 9H 3S
      </p>
    </div>
  );
};
