import { Button } from "@nextui-org/button";
import debitCard from "../assets/debit-card.svg";

const DebitCard = () => {
  return (
    <section className="flex flex-col-reverse sm:flex-row gap-10 lg:gap-2.5 xl:gap-8 justify-between items-center">
      <div className="space-y-3 sm:space-y-6 sm:w-1/2">
        <h2 className="font-bold leading-tight text-2xl lg:text-3xl">
          Wern Debit Card
        </h2>

        <p className="text-secondary text-sm lg:text-base w-full max-w-[424px]">
          More than just a card, it&apos;s a bridge to a new financial
          experience. Embrace the simplicity and security of spending your
          Cardano with the Wern Card.
        </p>

        <div className="space-y-2">
          <Button
            variant="solid"
            radius="full"
            size="lg"
            color="primary"
            className="font-bold text-sm"
          >
            Create New Card
          </Button>

          <p className="text-primary">Will be available soon</p>
        </div>
      </div>

      <img className="sm:w-1/2" src={debitCard} alt="" />
    </section>
  );
};

export default DebitCard;