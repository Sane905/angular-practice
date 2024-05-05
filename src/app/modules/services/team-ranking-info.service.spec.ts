import { TestBed } from "@angular/core/testing";

import { TeamRankingInfoService } from "./team-ranking-info.service";

describe("TeamRankingInfoService", () => {
  let service: TeamRankingInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamRankingInfoService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
