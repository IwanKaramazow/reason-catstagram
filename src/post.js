// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("Post");

function make(post, onLike, onLink, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              var user_has_liked = post[/* user_has_liked */5];
              var id = post[/* id */0];
              var likes = String(post[/* likes */3][/* count */0]);
              var onClick = function (e) {
                e.preventDefault();
                return Curry._1(onLink, /* Detail */[id]);
              };
              return React.createElement("figure", {
                          className: "grid-figure"
                        }, React.createElement("div", {
                              className: "grid-photo-wrap"
                            }, React.createElement("a", {
                                  href: "/view/" + (String(id) + ""),
                                  onClick: onClick
                                }, React.createElement("img", {
                                      className: "grid-photo",
                                      alt: id,
                                      src: post[/* images */2][/* standard_resolution */0][/* url */0]
                                    }))), React.createElement("figcaption", undefined, React.createElement("p", undefined, post[/* caption */1][/* text */0]), React.createElement("div", {
                                  className: "control-buttons"
                                }, React.createElement("button", {
                                      className: user_has_liked ? "liked" : "",
                                      onClick: (function () {
                                          return Curry._2(onLike, post, !user_has_liked);
                                        })
                                    }, "♥ " + (String(likes) + "")), React.createElement("a", {
                                      className: "button",
                                      href: "/view/" + (String(id) + ""),
                                      onClick: onClick
                                    }, React.createElement("span", {
                                          className: "comment-count"
                                        }, React.createElement("span", {
                                              className: "speech-bubble"
                                            }), String(post[/* num_comments */4][/* count */0]))))));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
