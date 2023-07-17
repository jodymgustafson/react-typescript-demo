import { BeerService, LocalBeerService } from "@local/service-clients/build/beer-service";
import { useRef } from "react";

export function useBeerService(): BeerService {
    const beerSvc = useRef<BeerService>();
    if (!beerSvc.current) {
      beerSvc.current = new LocalBeerService(window.location.hostname + ":2001");
    }

    return beerSvc.current;
}