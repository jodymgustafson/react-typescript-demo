import { BeerService, LocalBeerService } from "@local/service-clients/build/beer-service";
import { useState } from "react";

export function useBeerService(): BeerService {
    const [beerSvc, setBeerSvc] = useState<BeerService>();
    if (!beerSvc) {
      setBeerSvc(new LocalBeerService("localhost:2001"));
    }
  
    return beerSvc!;
}