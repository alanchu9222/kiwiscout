import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import expect from "expect";
import * as actions from "../actions";
import * as actionType from "../actions/types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockResponse = [
  {
    place_id: "223096476",
    licence: "https://locationiq.com/attribution",
    osm_type: "relation",
    osm_id: "1674849",
    boundingbox: ["33.9118643", "35.4809692", "66.2769486", "68.2663784"],
    lat: "34.75",
    lon: "67.25",
    display_name: "Bamyan, Afghanistan",
    class: "boundary",
    type: "administrative",
    importance: 0.67750134527724,
    icon:
      "https://locationiq.org/static/images/mapicons/poi_boundary_administrative.p.20.png"
  },
  {
    place_id: "223715324",
    licence: "https://locationiq.com/attribution",
    osm_type: "relation",
    osm_id: "6615182",
    boundingbox: ["34.6009477", "35.0034808", "67.3362545", "68.0415034"],
    lat: "34.794631",
    lon: "67.684334",
    display_name: "Bamyan, Afghanistan",
    class: "boundary",
    type: "administrative",
    importance: 0.62703292639971,
    icon:
      "https://locationiq.org/static/images/mapicons/poi_boundary_administrative.p.20.png"
  }
];
describe("Add coordinates actions", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("adds coordinates before loading external data", done => {
    const expectedActions = [
      {
        type: actionType.ADD_COORDINATES,
        payload: {
          coordinates: { latitude: "34.75", longitude: "67.25" },
          key: "Bamyan-Afghanistan"
        }
      },
      { type: actionType.RESET_PLACE_DATA }
    ];

    const store = mockStore({
      placesInLocalStore: [],
      updateLocalStorage: undefined,
      coordinates: {}
    });

    // moxios.wait(() => {
    moxios.stubRequest(/https:\/\/us1.locationiq.com.*/, {
      status: 200,
      response: mockResponse
    });
    //    return store
    moxios.wait(() => {
      store
        .dispatch(actions.loadDataExternal("Bamyan", "Afghanistan"))
        .then(() => {
          // return of async actions
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });
  });
});
