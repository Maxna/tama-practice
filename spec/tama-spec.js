import { Tamagotchi } from "./../src/tamagotchi.js";

describe("Tamagotchi", function(){
  let tama = new Tamagotchi('name');
  beforeEach(function() {
    jasmine.clock().install();
    tama.setReset();
    tama.getHunger();
    tama.expire();
  });
  afterEach(function(){
    jasmine.clock().uninstall();
  });
  it("should have a name", function(){
    expect(tama.name).not.toEqual('');
  });
  it("should have a hunger value", function(){
    expect(tama.hunger).not.toEqual(NaN);
    expect(tama.hunger).toEqual(100);
  });
  it("should reduce pets hunger decrementally over time", function(){
    jasmine.clock().tick(30001);
    expect(tama.hunger).toEqual(70);
  });
  it("should restore an amount of hunger back to the pet", function(){
    jasmine.clock().tick(30001);
    tama.feed();
    expect(tama.hunger).toEqual(80);
    expect(tama.expired).toEqual(false);
  });
  it("should cause pet to expire", function(){
    jasmine.clock().tick(100001);
    expect(tama.expired).toEqual(true);
  });
});
