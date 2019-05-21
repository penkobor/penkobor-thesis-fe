import React from "react";
import { BelateralExchange } from "./belateria/BelateralExchange";
import { ErasmusExchange } from "./erasmus/ErasmusExchange";
import { KoreanExchange } from "./korea/KoreanExchange";

export class ExchangePage extends React.Component<{},{}> {

  //TODO:
  // must contain:
  //     Erasmus for all  <- separate component obviosly
  //     Belateria for all  <- separate component obviously
  //     Korean exchange programs for master  <- separate component obviously


  render() {
    return (
      <div>
        <BelateralExchange />
        <ErasmusExchange />
        <KoreanExchange />
      </div>
    )
  }
}