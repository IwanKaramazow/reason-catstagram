// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Grid = require("./grid.bs.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Decode = require("./Decode.bs.js");
var Single = require("./single.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.reducerComponent("App");

var token = (process.env.API_TOKEN);

function urlToRoute(url) {
  var match = url[/* path */0];
  if (match && match[0] === "view") {
    var match$1 = match[1];
    if (match$1 && !match$1[1]) {
      return /* Detail */[match$1[0]];
    } else {
      return /* Default */0;
    }
  } else {
    return /* Default */0;
  }
}

function make() {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */(function (self) {
              var watcher = ReasonReact.Router[/* watchUrl */1]((function (url) {
                      return Curry._1(self[/* send */3], /* ChangeRoute */Block.__(1, [urlToRoute(url)]));
                    }));
              Curry._1(self[/* send */3], /* CatsFetch */0);
              return Curry._1(self[/* onUnmount */4], (function () {
                            return ReasonReact.Router[/* unwatchUrl */2](watcher);
                          }));
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var match = param[/* state */1];
              var activeRoute = match[/* activeRoute */1];
              var load = match[/* load */0];
              var tmp;
              if (typeof load === "number") {
                tmp = load !== 0 ? React.createElement("div", undefined, "An error occurred! :(") : React.createElement("div", undefined, "Loading...");
              } else {
                var posts = load[0];
                tmp = activeRoute ? ReasonReact.element(undefined, undefined, Single.make(posts, activeRoute[0], /* array */[])) : ReasonReact.element(undefined, undefined, Grid.make(posts, /* array */[]));
              }
              return React.createElement("div", undefined, React.createElement("h1", undefined, React.createElement("a", {
                                  href: "/"
                                }, "Catstagram")), tmp);
            }),
          /* initialState */(function () {
              return /* record */[
                      /* load : Loading */0,
                      /* activeRoute */urlToRoute(ReasonReact.Router[/* dangerouslyGetInitialUrl */3](/* () */0))
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              if (typeof action === "number") {
                if (action === 0) {
                  return /* UpdateWithSideEffects */Block.__(2, [
                            /* record */[
                              /* load : Loading */0,
                              /* activeRoute */state[/* activeRoute */1]
                            ],
                            (function (self) {
                                fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token=" + token).then((function (prim) {
                                            return prim.json();
                                          })).then((function (json) {
                                          var cats = Decode.Decode[/* posts */5](json);
                                          return Promise.resolve(Curry._1(self[/* send */3], /* CatsFetched */Block.__(0, [cats])));
                                        })).catch((function () {
                                        return Promise.resolve(Curry._1(self[/* send */3], /* CatsFailedToFetch */1));
                                      }));
                                return /* () */0;
                              })
                          ]);
                } else {
                  return /* Update */Block.__(0, [/* record */[
                              /* load : Error */1,
                              /* activeRoute */state[/* activeRoute */1]
                            ]]);
                }
              } else if (action.tag) {
                return /* Update */Block.__(0, [/* record */[
                            /* load */state[/* load */0],
                            /* activeRoute */action[0]
                          ]]);
              } else {
                return /* Update */Block.__(0, [/* record */[
                            /* load : Loaded */[action[0]],
                            /* activeRoute */state[/* activeRoute */1]
                          ]]);
              }
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.token = token;
exports.urlToRoute = urlToRoute;
exports.make = make;
/* component Not a pure module */
