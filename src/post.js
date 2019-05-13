// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function Post(Props) {
  var post = Props.post;
  var dispatch = Props.dispatch;
  var navigate = Props.navigate;
  var user_has_liked = post[/* user_has_liked */5];
  var id = post[/* id */0];
  var likes = String(post[/* likes */3][/* count */0]);
  return React.createElement("figure", {
              className: "grid-figure"
            }, React.createElement("div", {
                  className: "grid-photo-wrap"
                }, React.createElement("a", {
                      href: "/view/" + (String(id) + ""),
                      onClick: Curry._1(navigate, /* Detail */[id])
                    }, React.createElement("img", {
                          className: "grid-photo",
                          alt: id,
                          src: post[/* images */2][/* standard_resolution */0][/* url */0]
                        }))), React.createElement("figcaption", undefined, React.createElement("p", undefined, post[/* caption */1][/* text */0]), React.createElement("div", {
                      className: "control-buttons"
                    }, React.createElement("button", {
                          className: user_has_liked ? "liked" : "",
                          onClick: (function (_e) {
                              return Curry._1(dispatch, /* Like */Block.__(5, [
                                            post,
                                            !user_has_liked
                                          ]));
                            })
                        }, "♥ " + (String(likes) + "")), React.createElement("a", {
                          className: "button",
                          href: "/view/" + (String(id) + ""),
                          onClick: Curry._1(navigate, /* Detail */[id])
                        }, React.createElement("span", {
                              className: "comment-count"
                            }, React.createElement("span", {
                                  className: "speech-bubble"
                                }), String(post[/* num_comments */4][/* count */0]))))));
}

var make = Post;

exports.make = make;
/* react Not a pure module */
